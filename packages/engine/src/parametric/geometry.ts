import * as THREE from 'three';
import { applyBoxUVs } from '../materials/uv.js';
import type { FurnitureLayout, Part } from './layout.js';

const MM_TO_M = 0.001;

/**
 * One texture tile covers this many meters of surface — larger than most
 * furniture parts, so the pattern never visibly repeats on a tabletop.
 */
const TEXTURE_TILE_M = 2.4;

/**
 * Builds renderable geometry from a furniture layout. Each part becomes a
 * mesh named after the part (so materials can target part names), grouped
 * under a single THREE.Group sitting on the floor at the origin.
 */
export function buildGroup(layout: FurnitureLayout, material: THREE.Material): THREE.Group {
  const group = new THREE.Group();
  group.name = layout.spec.name ?? layout.spec.kind;
  let partIndex = 0;
  for (const part of layout.parts) {
    const geometry = partGeometry(part);
    // Unique per-part UV offset (golden-ratio sequence) so identical parts —
    // four legs, two doors — don't sample the same patch of grain.
    const offsetU = (partIndex * 0.618033988749) % 1;
    const offsetV = (partIndex * 0.754877666247) % 1;
    applyBoxUVs(geometry, TEXTURE_TILE_M, part.grainAxis, offsetU, offsetV);
    partIndex += 1;
    const mesh = new THREE.Mesh(geometry, material);
    mesh.name = part.name;
    mesh.position.set(
      part.positionMm[0] * MM_TO_M,
      part.positionMm[1] * MM_TO_M,
      part.positionMm[2] * MM_TO_M,
    );
    if (part.rotationRad) {
      mesh.rotation.set(...part.rotationRad);
    }
    mesh.castShadow = true;
    mesh.receiveShadow = true;
    group.add(mesh);
  }
  return group;
}

function partGeometry(part: Part): THREE.BufferGeometry {
  const [w, h, d] = part.sizeMm.map((v) => v * MM_TO_M) as [number, number, number];
  switch (part.shape) {
    case 'box':
      return new THREE.BoxGeometry(w, h, d);
    case 'cylinder':
      return new THREE.CylinderGeometry(w / 2, w / 2, h, 32);
    case 'taperedLeg': {
      // Square leg tapering to ~60% at the foot: a 4-sided cylinder rotated 45°.
      const geometry = new THREE.CylinderGeometry(w / 2, w * 0.3, h, 4, 1);
      geometry.rotateY(Math.PI / 4);
      // A 4-sided cylinder inscribes the radius, so scale up to match the
      // requested face-to-face thickness.
      geometry.scale(Math.SQRT2, 1, Math.SQRT2);
      return geometry;
    }
  }
}
