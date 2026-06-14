// Builds a render-ready THREE.Group from a pushed Atelier3D scene (its
// evaluated Part/Primitive IR — see types.ts). The geometry builders in
// primitives.ts / jointBoards.ts / joinery.ts are vendored verbatim from
// jfsgi/MEJAFurnitureDesign- so a board renders byte-identical to the design
// view; here we only wire them up, drape the engine's 4K materials over them,
// and convert the model frame (Z-up, millimeters) to the engine's (Y-up,
// meters, sitting on the floor).

import * as THREE from 'three';
import type { MaterialLibrary } from '../materials/MaterialLibrary.js';
import { applyBoxUVs } from '../materials/uv.js';
import { jointedBoardGeometry } from './jointBoards.js';
import {
  archedBoardGeometry,
  frenchDovetailGeometry,
  grainBoxGeometry,
  longestAxis,
  mortisedPostGeometry,
  orientFrenchDovetail,
  roundedNotchedSlabGeometry,
  roundedSlabGeometry,
  taperedBoxGeometry,
} from './primitives.js';
import type { Primitive, Scene, SceneInstance, ScenePart } from './types.js';

/** mm per grain tile — matches the engine's TEXTURE_TILE_M (2.4 m) so a pushed
 * piece's streak density lines up with natively built parts. */
const TILE_MM = 2400;
const MM_TO_M = 0.001;

/** Atelier3D material id → engine material id. Falls back to oak. */
const MATERIAL_MAP: Record<string, string> = {
  walnut: 'walnut',
  'white-oak': 'oak',
  maple: 'maple',
  cherry: 'cherry',
  ash: 'maple',
  cedar: 'cedar',
  'baltic-birch': 'birchply',
  'painted-white': 'paint-white',
  'painted-black': 'paint-black',
  'steel-black': 'steel',
  brass: 'brass',
};
const WOODS = new Set(['oak', 'walnut', 'cherry', 'maple', 'mahogany', 'cedar', 'birchply']);

/** Deterministic per-part UV offset so the grain runs solid across a part's
 * boards but de-correlates between parts (no two boards share a streak seam). */
function grainOffset(seed: string): [number, number] {
  let h = 2166136261;
  for (let i = 0; i < seed.length; i++) {
    h ^= seed.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  const a = (h >>> 0) / 0xffffffff;
  const b = (Math.imul(h, 48271) >>> 0) / 0xffffffff;
  return [a * 10, b * 10];
}

/** Which axis the grain runs along for a primitive, mirroring the design view. */
function grainAxis(prim: Primitive): 'x' | 'y' | 'z' {
  const xyz = ['x', 'y', 'z'] as const;
  switch (prim.shape) {
    case 'jointedBoard':
      return prim.lengthAxis;
    case 'mortisedPost':
      return prim.grain ?? 'z';
    case 'roundedNotchedSlab':
      return prim.grain ?? 'x';
    case 'frenchDovetail':
      return prim.grain ?? prim.interfaceAxis;
    case 'roundedSlab':
      return prim.grain ?? (prim.axis === 'y' ? 'z' : 'x');
    case 'taperedBox':
      return prim.axis ?? 'z';
    case 'archedBoard':
      return xyz[longestAxis(prim.size)];
    case 'box':
      return prim.grain ?? xyz[longestAxis(prim.size)];
    default:
      return 'y';
  }
}

/** Builds the (origin-centered, model-mm) geometry for a primitive, or null
 * for shapes placed straight as a THREE primitive (cylinder, plain box). */
function buildGeometry(prim: Primitive, offset: [number, number]): THREE.BufferGeometry | null {
  switch (prim.shape) {
    case 'jointedBoard':
      return jointedBoardGeometry(prim);
    case 'taperedBox':
      return taperedBoxGeometry(
        prim.top,
        prim.bottom,
        prim.height,
        prim.align,
        prim.shift ?? [0, 0],
        offset,
        prim.at,
        prim.axis ?? 'z',
      );
    case 'mortisedPost':
      return mortisedPostGeometry(prim.size[0], prim.size[1], prim.size[2], prim.radius, prim.mortises);
    case 'roundedNotchedSlab':
      return roundedNotchedSlabGeometry(prim.size, prim.notch, prim.radius);
    case 'frenchDovetail': {
      const geo = frenchDovetailGeometry(prim.depth, prim.rootThin, prim.tipThin, prim.runH, prim.dir);
      orientFrenchDovetail(geo, prim.interfaceAxis, prim.runAxis ?? 'z', prim.runSign ?? 1);
      return geo;
    }
    case 'archedBoard':
      return archedBoardGeometry(prim.size, prim.arch, prim.rise, prim.shoulder ?? 0, prim.endSkew ?? 0, offset);
    case 'roundedSlab': {
      const vertical = prim.axis === 'y';
      const planSize: [number, number, number] = vertical
        ? [prim.size[0], prim.size[2], prim.size[1]]
        : prim.size;
      const geo = roundedSlabGeometry(
        planSize,
        prim.radius,
        prim.edge ?? 0,
        prim.corners ?? 'front',
        prim.edgeMode ?? 'both',
        prim.squareBack ?? false,
      );
      if (vertical) geo.rotateX(-Math.PI / 2);
      return geo;
    }
    case 'box':
      return grainBoxGeometry(prim.size, { x: 0, y: 1, z: 2 }[grainAxis(prim)] as 0 | 1 | 2, offset, prim.at);
    default:
      return null;
  }
}

function buildPrimitiveMesh(
  prim: Primitive,
  material: THREE.Material,
  isWood: boolean,
  seed: string,
): THREE.Mesh {
  const offset = grainOffset(seed);

  if (prim.shape === 'cylinder') {
    const geo = new THREE.CylinderGeometry(prim.radiusTop, prim.radiusBottom, prim.height, 32);
    const ax = prim.axis ?? 'z';
    if (ax === 'z') geo.rotateX(Math.PI / 2);
    else if (ax === 'x') geo.rotateZ(Math.PI / 2);
    geo.translate(prim.at[0], prim.at[1], prim.at[2]);
    return new THREE.Mesh(geo, material);
  }

  const geo = buildGeometry(prim, offset) ?? new THREE.BoxGeometry(...(prim as { size: [number, number, number] }).size);
  if (isWood) applyBoxUVs(geo, TILE_MM, grainAxis(prim), offset[0], offset[1]);
  // Bake the primitive's placement (and any small board tilt) into the geometry
  // so the part/instance groups carry only the assembly transforms.
  const tiltX = prim.shape === 'box' ? prim.tiltX ?? 0 : 0;
  const tiltY = prim.shape === 'box' ? prim.tilt ?? 0 : 0;
  if (tiltX || tiltY) geo.applyMatrix4(new THREE.Matrix4().makeRotationFromEuler(new THREE.Euler(tiltX, tiltY, 0)));
  geo.translate(prim.at[0], prim.at[1], prim.at[2]);
  return new THREE.Mesh(geo, material);
}

function resolveMaterial(part: ScenePart, lib: MaterialLibrary, stainId: string | null): {
  material: THREE.Material;
  isWood: boolean;
} {
  let id = MATERIAL_MAP[part.material] ?? part.material;
  if (!lib.has(id)) id = 'oak';
  const isWood = WOODS.has(id);
  return { material: lib.get(id, isWood ? stainId : null), isWood };
}

function buildPart(part: ScenePart, lib: MaterialLibrary, stainId: string | null): THREE.Group {
  const group = new THREE.Group();
  group.name = part.name;
  const { material, isWood } = resolveMaterial(part, lib, stainId);
  for (const prim of part.primitives) {
    const mesh = buildPrimitiveMesh(prim, material, isWood, part.id);
    mesh.name = part.name; // so engine.setMaterial(id, partName) targets it
    mesh.castShadow = true;
    mesh.receiveShadow = true;
    group.add(mesh);
  }
  return group;
}

function buildInstance(inst: SceneInstance, lib: MaterialLibrary, stainId: string | null): THREE.Group {
  const group = new THREE.Group();
  group.name = inst.name ?? inst.id;
  const [x, y] = inst.position ?? [0, 0];
  group.position.set(x, y, 0); // model frame: floor plane is (x, depth)
  group.rotation.z = inst.rotationZ ?? 0;
  for (const part of inst.parts) group.add(buildPart(part, lib, stainId));
  return group;
}

/**
 * Builds a complete furniture group from a pushed scene, in the engine's frame
 * (Y-up, meters, base on the floor and centered). `lib` supplies the engine
 * materials; `stainId` tints every wood, matching showFurniture.
 */
export function buildSceneGroup(scene: Scene, lib: MaterialLibrary, stainId: string | null = null): THREE.Group {
  // Model frame: Z-up millimeters, exactly as Atelier3D evaluates.
  const model = new THREE.Group();
  const instances: SceneInstance[] = scene.instances ?? (scene.parts ? [{ id: 'piece', parts: scene.parts }] : []);
  for (const inst of instances) model.add(buildInstance(inst, lib, stainId));

  // Convert to the engine frame: stand Z-up content upright and scale mm → m.
  model.rotation.x = -Math.PI / 2;
  model.scale.setScalar(MM_TO_M);

  const root = new THREE.Group();
  root.add(model);
  // Sit the piece on the floor (min Y = 0) and center it over the origin.
  root.updateMatrixWorld(true);
  const box = new THREE.Box3().setFromObject(root);
  if (!box.isEmpty()) {
    const center = box.getCenter(new THREE.Vector3());
    model.position.x -= center.x;
    model.position.z -= center.z;
    model.position.y -= box.min.y;
  }
  return root;
}
