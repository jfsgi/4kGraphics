import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader.js';
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader.js';
import { STLLoader } from 'three/examples/jsm/loaders/STLLoader.js';
import { applyBoxUVs } from '../materials/uv.js';

/** One texture tile spans this many meters (matches the parametric pipeline). */
const TEXTURE_TILE_M = 2.4;

export type ModelFormat = 'gltf' | 'glb' | 'obj' | 'fbx' | 'stl';

export interface LoadModelOptions {
  /** Override format detection (needed for blob URLs without an extension). */
  format?: ModelFormat;
  /**
   * Guess the source units from the model's size and rescale to meters, then
   * center the model with its base on the floor. Defaults to true.
   */
  normalize?: boolean;
  /**
   * Which model axis points up. CAD STL exports are often Z-up while the
   * scene is Y-up, so the model imports lying on its side. 'auto' (default)
   * guesses from the geometry (the axis its flat surfaces face); 'y' keeps the
   * model as-is. Only applied when normalize is on.
   */
  upAxis?: 'auto' | 'x' | 'y' | 'z';
  /** Turn the model the other way up — for when the orientation lands upside down. */
  flip?: boolean;
}

const EXTENSIONS: Record<string, ModelFormat> = {
  gltf: 'gltf',
  glb: 'glb',
  obj: 'obj',
  fbx: 'fbx',
  stl: 'stl',
};

export function detectFormat(name: string): ModelFormat | null {
  const match = /\.([a-z0-9]+)(?:[?#].*)?$/i.exec(name);
  return match ? (EXTENSIONS[match[1].toLowerCase()] ?? null) : null;
}

/**
 * Loads a furniture model from a URL or a File/Blob in any supported
 * interchange format and returns it as a group ready to add to the scene.
 */
export async function loadModel(
  source: string | File,
  options: LoadModelOptions = {},
): Promise<THREE.Group> {
  let url: string;
  let revoke = false;
  let name: string;
  if (typeof source === 'string') {
    url = source;
    name = source;
  } else {
    url = URL.createObjectURL(source);
    revoke = true;
    name = source.name;
  }

  const format = options.format ?? detectFormat(name);
  if (!format) {
    if (revoke) URL.revokeObjectURL(url);
    throw new Error(
      `Cannot detect model format from "${name}" — pass options.format ('gltf' | 'glb' | 'obj' | 'fbx' | 'stl')`,
    );
  }

  try {
    const group = await loadByFormat(url, format);
    group.traverse((child) => {
      if (child instanceof THREE.Mesh) {
        child.castShadow = true;
        child.receiveShadow = true;
        // Library materials use vertex colors (end-grain tinting); give
        // imported geometry a neutral color attribute so they apply cleanly.
        const geometry = child.geometry as THREE.BufferGeometry;
        if (!geometry.getAttribute('color') && geometry.getAttribute('position')) {
          const count = geometry.getAttribute('position').count;
          geometry.setAttribute(
            'color',
            new THREE.BufferAttribute(new Float32Array(count * 3).fill(1), 3),
          );
        }
      }
    });
    if (options.normalize ?? true) {
      orientToYUp(group, options.upAxis ?? 'auto', options.flip ?? false);
      normalizeToFurnitureScale(group);
      // Name the split STL boards by their (now upright) geometry so the
      // material system can target Top / Shelf / Back / Side, etc.
      if (format === 'stl') classifyImportedParts(group);
    }
    applyGrainUVs(group);
    return group;
  } finally {
    if (revoke) URL.revokeObjectURL(url);
  }
}

/**
 * Imported meshes (STL especially) carry no texture coordinates, so a wood
 * material has nothing to map against — the grain renders flat or arbitrary.
 * We project world-scale box UVs with the grain running along each part's
 * longest dimension — the way a board's grain runs down its length, so a
 * tabletop reads across its width and an upright reads vertically. Meshes that
 * already have UVs (e.g. glTF) keep them.
 */
function applyGrainUVs(group: THREE.Group): void {
  group.updateMatrixWorld(true);
  const scale = new THREE.Vector3();
  const size = new THREE.Vector3();
  group.traverse((child) => {
    if (!(child instanceof THREE.Mesh)) return;
    const geometry = child.geometry as THREE.BufferGeometry;
    if (geometry.getAttribute('uv') || !geometry.getAttribute('position')) return;
    child.matrixWorld.decompose(new THREE.Vector3(), new THREE.Quaternion(), scale);
    const worldScale = (Math.abs(scale.x) + Math.abs(scale.y) + Math.abs(scale.z)) / 3 || 1;
    // Grain runs along the board's longest dimension (its length). The UVs are
    // in local coordinates, so the longest local axis is the grain axis.
    geometry.computeBoundingBox();
    geometry.boundingBox!.getSize(size);
    const grain = size.x >= size.y && size.x >= size.z ? 'x' : size.y >= size.z ? 'y' : 'z';
    applyBoxUVs(geometry, TEXTURE_TILE_M / worldScale, grain, 0, 0, undefined, false);
  });
}

async function loadByFormat(url: string, format: ModelFormat): Promise<THREE.Group> {
  switch (format) {
    case 'gltf':
    case 'glb': {
      const gltf = await new GLTFLoader().loadAsync(url);
      return gltf.scene;
    }
    case 'obj':
      return await new OBJLoader().loadAsync(url);
    case 'fbx':
      return await new FBXLoader().loadAsync(url);
    case 'stl': {
      const buffer = await (await fetch(url)).arrayBuffer();
      const geometry = dropOutlierTriangles(parseStlGeometry(buffer));
      const group = new THREE.Group();
      // Split the single mesh into its separate boards (connected solids) so
      // each becomes its own selectable, material-able part. Falls back to one
      // mesh when the model is a single welded solid or too fragmented.
      const parts = splitConnectedComponents(geometry);
      for (const g of parts) {
        g.computeVertexNormals();
        const m = new THREE.Mesh(g, new THREE.MeshPhysicalMaterial({ color: 0xb8b2a8, roughness: 0.6 }));
        m.name = 'Imported part';
        group.add(m);
      }
      return group;
    }
  }
}

/**
 * Splits a soup-of-triangles geometry into its separate solids — the distinct
 * boards of a furniture assembly — by welding coincident vertices and grouping
 * triangles into connected components. Returns the original single geometry when
 * the model is one welded solid, or when it shatters into too many fragments
 * (a sign the export isn't cleanly partitioned).
 */
export function splitConnectedComponents(geometry: THREE.BufferGeometry): THREE.BufferGeometry[] {
  const src = geometry.index ? geometry.toNonIndexed() : geometry;
  const pos = src.getAttribute('position');
  if (!pos) return [src];
  const triCount = Math.floor(pos.count / 3);
  if (triCount < 2) return [src];
  src.computeBoundingBox();
  const size = src.boundingBox!.getSize(new THREE.Vector3());
  const grid = Math.max(size.x, size.y, size.z) * 1e-4 || 1e-4; // weld tolerance ~0.01% of size
  const key = (i: number) =>
    `${Math.round(pos.getX(i) / grid)},${Math.round(pos.getY(i) / grid)},${Math.round(pos.getZ(i) / grid)}`;

  // Union-find over triangles that share a welded vertex.
  const parent = new Int32Array(triCount);
  for (let i = 0; i < triCount; i++) parent[i] = i;
  const find = (x: number): number => {
    while (parent[x] !== x) {
      parent[x] = parent[parent[x]];
      x = parent[x];
    }
    return x;
  };
  const vertToTri = new Map<string, number>();
  for (let t = 0; t < triCount; t++) {
    for (let k = 0; k < 3; k++) {
      const kk = key(t * 3 + k);
      const prev = vertToTri.get(kk);
      if (prev === undefined) vertToTri.set(kk, t);
      else {
        const a = find(prev);
        const b = find(t);
        if (a !== b) parent[a] = b;
      }
    }
  }
  const groups = new Map<number, number[]>();
  for (let t = 0; t < triCount; t++) {
    const r = find(t);
    let g = groups.get(r);
    if (!g) groups.set(r, (g = []));
    g.push(t);
  }
  if (groups.size < 2 || groups.size > 60) return [src]; // one solid, or too noisy

  const out: THREE.BufferGeometry[] = [];
  for (const tris of groups.values()) {
    const arr = new Float32Array(tris.length * 9);
    let o = 0;
    for (const t of tris) {
      for (let k = 0; k < 3; k++) {
        arr[o++] = pos.getX(t * 3 + k);
        arr[o++] = pos.getY(t * 3 + k);
        arr[o++] = pos.getZ(t * 3 + k);
      }
    }
    const g = new THREE.BufferGeometry();
    g.setAttribute('position', new THREE.BufferAttribute(arr, 3));
    out.push(g);
  }
  // Largest part first — stable, useful ordering for the part list.
  out.sort((a, b) => b.getAttribute('position').count - a.getAttribute('position').count);
  return out;
}

/**
 * Names the meshes of an imported group by their geometry once it's upright and
 * scaled: flat horizontal panels become Top / Shelf / Bottom, vertical panels
 * Side or Back, tall narrow pieces Leg, the rest a numbered Part. Lets the
 * per-part material system target "Back", "Shelf", etc. like a parametric piece.
 */
export function classifyImportedParts(group: THREE.Group): void {
  const meshes: THREE.Mesh[] = [];
  group.traverse((c) => {
    if (c instanceof THREE.Mesh && c.geometry.getAttribute('position')) meshes.push(c);
  });
  if (meshes.length < 2) {
    if (meshes[0]) meshes[0].name = 'Imported model';
    return;
  }
  const modelBox = new THREE.Box3().setFromObject(group);
  const mSize = modelBox.getSize(new THREE.Vector3());
  const used = new Map<string, number>();
  const uniq = (base: string) => {
    const n = (used.get(base) ?? 0) + 1;
    used.set(base, n);
    return n === 1 && base !== 'Part' ? base : `${base} ${n}`;
  };
  const ranked = meshes
    .map((m) => {
      const b = new THREE.Box3().setFromObject(m);
      return { m, box: b, size: b.getSize(new THREE.Vector3()), center: b.getCenter(new THREE.Vector3()) };
    })
    .sort((a, b) => b.size.length() - a.size.length());
  let partN = 0;
  for (const { m, size, center } of ranked) {
    const dims = [size.x, size.y, size.z];
    const minD = Math.min(...dims);
    const maxD = Math.max(...dims) || 1;
    const thin = dims.indexOf(minD);
    let base: string;
    if (minD / maxD < 0.25) {
      if (thin === 1) {
        const yf = (center.y - modelBox.min.y) / (mSize.y || 1);
        base = yf > 0.78 ? 'Top' : yf < 0.18 ? 'Bottom' : 'Shelf';
      } else if (thin === 0) {
        base = 'Side';
      } else {
        const zf = (center.z - modelBox.min.z) / (mSize.z || 1);
        base = zf < 0.3 ? 'Back' : 'Panel';
      }
    } else if (size.y > size.x * 1.4 && size.y > size.z * 1.4) {
      base = 'Leg';
    } else {
      base = 'Part';
    }
    m.name = base === 'Part' ? `Part ${++partN}` : uniq(base);
  }
}

/**
 * CAD STL exports often carry a few stray triangles — a construction point at
 * the world origin, a leftover reference plane, geometry far from the part.
 * They wreck the import: the bounding box stretches to the outlier, so the
 * unit-guess shrinks the real model to a sliver and the stray dominates the
 * view. We drop triangles whose centroid sits well outside the bulk of the
 * mesh (a robust 1–99th-percentile box expanded by half its largest side),
 * leaving clean models untouched.
 */
export function dropOutlierTriangles(geometry: THREE.BufferGeometry): THREE.BufferGeometry {
  const indexed = geometry.index ? geometry.toNonIndexed() : geometry;
  const pos = indexed.getAttribute('position');
  if (!pos || pos.count < 12) return indexed; // too small to bother
  const n = pos.count;

  // Robust per-axis bounds from sampled vertices (1st–99th percentile).
  const axis: number[][] = [[], [], []];
  const step = Math.max(1, Math.floor(n / 60000));
  for (let i = 0; i < n; i += step) {
    axis[0].push(pos.getX(i));
    axis[1].push(pos.getY(i));
    axis[2].push(pos.getZ(i));
  }
  const lo: number[] = [];
  const hi: number[] = [];
  for (let a = 0; a < 3; a++) {
    const s = axis[a].sort((x, y) => x - y);
    lo[a] = s[Math.round(0.01 * (s.length - 1))];
    hi[a] = s[Math.round(0.99 * (s.length - 1))];
  }
  const margin = Math.max(hi[0] - lo[0], hi[1] - lo[1], hi[2] - lo[2]) * 0.5;
  const min = [lo[0] - margin, lo[1] - margin, lo[2] - margin];
  const max = [hi[0] + margin, hi[1] + margin, hi[2] + margin];

  const kept: number[] = [];
  for (let t = 0; t + 2 < n; t += 3) {
    const cx = (pos.getX(t) + pos.getX(t + 1) + pos.getX(t + 2)) / 3;
    const cy = (pos.getY(t) + pos.getY(t + 1) + pos.getY(t + 2)) / 3;
    const cz = (pos.getZ(t) + pos.getZ(t + 1) + pos.getZ(t + 2)) / 3;
    if (cx < min[0] || cx > max[0] || cy < min[1] || cy > max[1] || cz < min[2] || cz > max[2]) {
      continue; // stray triangle — drop it
    }
    for (let k = 0; k < 3; k++) {
      kept.push(pos.getX(t + k), pos.getY(t + k), pos.getZ(t + k));
    }
  }
  if (kept.length === 0 || kept.length === n * 3) return indexed; // nothing dropped
  const cleaned = new THREE.BufferGeometry();
  cleaned.setAttribute('position', new THREE.BufferAttribute(new Float32Array(kept), 3));
  return cleaned;
}

/**
 * Detects whether STL bytes are binary. A binary STL is defined exactly by
 * `84 + 50·faceCount === byteLength`; when that holds it is unambiguous. When
 * it doesn't (padded or slightly-off exports), we sniff the payload: ASCII
 * STLs are printable text end to end, binary STLs are mostly non-text float
 * bytes.
 */
export function isBinaryStl(buffer: ArrayBuffer): boolean {
  if (buffer.byteLength < 84) return false;
  const view = new DataView(buffer);
  const faces = view.getUint32(80, true);
  if (84 + faces * 50 === buffer.byteLength) return true;
  const sample = new Uint8Array(buffer, 0, Math.min(buffer.byteLength, 2048));
  let nonText = 0;
  for (let i = 0; i < sample.length; i++) {
    const b = sample[i];
    if (b === 9 || b === 10 || b === 13) continue; // tab, LF, CR
    if (b < 32 || b > 126) nonText++;
  }
  return nonText > sample.length * 0.05;
}

/**
 * Parses an STL ArrayBuffer into geometry, working around a gap in three.js's
 * binary/ASCII auto-detection: it misreads a binary file as ASCII whenever the
 * 80-byte header text begins with "solid" (which several CAD exporters, the
 * SketchUp family included, write) and the file size isn't an exact face-count
 * match. We decide the encoding ourselves and steer the loader to the right
 * parser — binary buffers get their header's leading bytes neutralized so the
 * loader's own heuristic agrees; ASCII buffers are handed in as decoded text,
 * which forces the ASCII path regardless of byte patterns.
 */
export function parseStlGeometry(buffer: ArrayBuffer): THREE.BufferGeometry {
  const loader = new STLLoader();
  if (isBinaryStl(buffer)) {
    const bytes = new Uint8Array(buffer.slice(0));
    bytes.fill(0, 0, 5); // erase a "solid" header prefix the heuristic trips on
    return loader.parse(bytes.buffer);
  }
  return loader.parse(new TextDecoder().decode(new Uint8Array(buffer)));
}

/**
 * The axis a model's flat surfaces face, area-weighted — for furniture this is
 * the up axis (the seat/top/shelf and the floor contacts are the big flat
 * faces). Returns 0/1/2 (x/y/z), or 1 (y, no change) when no axis clearly
 * dominates. `topSign` is +1 when the larger flat surface (the top) sits at
 * the high end of that axis, −1 when it sits at the low end (model upside down).
 */
export function guessUpAxis(group: THREE.Group): { axis: number; topSign: number } {
  group.updateMatrixWorld(true);
  const align = [0, 0, 0];
  const lowArea = [0, 0, 0];
  const highArea = [0, 0, 0];
  const box = new THREE.Box3().setFromObject(group);
  const mid = box.getCenter(new THREE.Vector3());
  const a = new THREE.Vector3();
  const b = new THREE.Vector3();
  const c = new THREE.Vector3();
  const ab = new THREE.Vector3();
  const ac = new THREE.Vector3();
  const nrm = new THREE.Vector3();
  group.traverse((child) => {
    if (!(child instanceof THREE.Mesh)) return;
    const pos = (child.geometry as THREE.BufferGeometry).getAttribute('position');
    if (!pos) return;
    for (let i = 0; i + 2 < pos.count; i += 3) {
      a.fromBufferAttribute(pos, i).applyMatrix4(child.matrixWorld);
      b.fromBufferAttribute(pos, i + 1).applyMatrix4(child.matrixWorld);
      c.fromBufferAttribute(pos, i + 2).applyMatrix4(child.matrixWorld);
      ab.subVectors(b, a);
      ac.subVectors(c, a);
      nrm.crossVectors(ab, ac);
      const len = nrm.length();
      if (len < 1e-12) continue;
      const area = 0.5 * len;
      const cy = (a.y + b.y + c.y) / 3; // (reused per axis below)
      for (let ax = 0; ax < 3; ax++) {
        const comp = (ax === 0 ? nrm.x : ax === 1 ? nrm.y : nrm.z) / len;
        const w = area * comp * comp;
        align[ax] += w;
        const center = ax === 0 ? (a.x + b.x + c.x) / 3 : ax === 1 ? cy : (a.z + b.z + c.z) / 3;
        if (center > (ax === 0 ? mid.x : ax === 1 ? mid.y : mid.z)) highArea[ax] += w;
        else lowArea[ax] += w;
      }
    }
  });
  const axis = align.indexOf(Math.max(...align));
  const sorted = [...align].sort((x, y) => y - x);
  if (sorted[0] < sorted[1] * 1.3) return { axis: 1, topSign: 1 }; // no clear up axis
  return { axis, topSign: highArea[axis] >= lowArea[axis] ? 1 : -1 };
}

/**
 * Rotates a model so the chosen (or auto-detected) up axis points +Y. The
 * vertical sign is a best guess for symmetric pieces; `flip` turns the model
 * the other way up when the guess (or a manual axis) lands it upside down.
 */
export function orientToYUp(
  group: THREE.Group,
  upAxis: 'auto' | 'x' | 'y' | 'z',
  flip = false,
): void {
  // Pick the up axis from the geometry (or honour the override) but keep the
  // file's own up direction: which end is "up" can't be told reliably from a
  // mesh, and CAD parts are modelled right-side up, so guessing the sign just
  // flips good models. The manual Flip handles the rare inverted export.
  const axis = upAxis === 'auto' ? guessUpAxis(group).axis : upAxis === 'x' ? 0 : upAxis === 'z' ? 2 : 1;
  if (axis === 2) group.rotateX(-Math.PI / 2); // Z-up -> Y-up
  else if (axis === 0) group.rotateZ(Math.PI / 2); // X-up -> Y-up
  if (flip) group.rotateX(Math.PI); // user override: turn it the other way up
}

/**
 * CAD exports disagree wildly on units (m, cm, mm, inches). Guess the unit
 * from the model's bounding size assuming it is a piece of furniture, scale
 * to meters, and sit it on the floor centered at the origin.
 */
export function normalizeToFurnitureScale(group: THREE.Group): void {
  const box = new THREE.Box3().setFromObject(group);
  if (box.isEmpty()) return;
  const size = box.getSize(new THREE.Vector3());
  const maxDim = Math.max(size.x, size.y, size.z);
  if (maxDim === 0) return;

  let scale = 1;
  if (maxDim > 500) scale = 0.001; // millimeters
  else if (maxDim > 20) scale = 0.01; // centimeters
  else if (maxDim > 6) scale = 0.0254; // inches
  else if (maxDim < 0.05) scale = 2 / maxDim; // unknown tiny unit — fit to 2m
  group.scale.multiplyScalar(scale);

  const scaled = new THREE.Box3().setFromObject(group);
  const center = scaled.getCenter(new THREE.Vector3());
  group.position.x -= center.x;
  group.position.z -= center.z;
  group.position.y -= scaled.min.y;
}
