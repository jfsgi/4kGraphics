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
      normalizeToFurnitureScale(group);
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
 * We project world-scale box UVs with the grain on the vertical (Y) axis, the
 * way stock is normally oriented (uprights grain-up, surfaces grain-along), so
 * library materials read correctly. Meshes that already have UVs (e.g. glTF)
 * keep them.
 */
function applyGrainUVs(group: THREE.Group): void {
  group.updateMatrixWorld(true);
  const scale = new THREE.Vector3();
  group.traverse((child) => {
    if (!(child instanceof THREE.Mesh)) return;
    const geometry = child.geometry as THREE.BufferGeometry;
    if (geometry.getAttribute('uv') || !geometry.getAttribute('position')) return;
    child.matrixWorld.decompose(new THREE.Vector3(), new THREE.Quaternion(), scale);
    const worldScale = (Math.abs(scale.x) + Math.abs(scale.y) + Math.abs(scale.z)) / 3 || 1;
    // UVs come from local coordinates; dividing the tile by the world scale
    // makes one tile span TEXTURE_TILE_M in world meters. No end-grain tint —
    // a single imported mesh mixes face and end grain across its faces.
    applyBoxUVs(geometry, TEXTURE_TILE_M / worldScale, 'y', 0, 0, undefined, false);
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
      const geometry = parseStlGeometry(buffer);
      geometry.computeVertexNormals();
      const mesh = new THREE.Mesh(
        geometry,
        new THREE.MeshPhysicalMaterial({ color: 0xb8b2a8, roughness: 0.6 }),
      );
      const group = new THREE.Group();
      group.add(mesh);
      return group;
    }
  }
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
