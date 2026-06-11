import * as THREE from 'three';
import { mergeGeometries } from 'three/examples/jsm/utils/BufferGeometryUtils.js';
import { applyBoxUVs } from '../materials/uv.js';
import type { FurnitureLayout, Part } from './layout.js';
import { pinsBoardGeometry, tailsBoardGeometry } from './joinery.js';
import { raisedPanelGeometry } from './raisedPanel.js';

const MM_TO_M = 0.001;

/**
 * One texture tile covers this many meters of surface — larger than most
 * furniture parts, so the pattern never visibly repeats on a tabletop.
 */
const TEXTURE_TILE_M = 2.4;

/** Shared glass material for glass-panel parts (never user-overridden). */
const GLASS_MATERIAL = new THREE.MeshPhysicalMaterial({
  color: 0xdfeee8,
  transparent: true,
  opacity: 0.26,
  roughness: 0.05,
  metalness: 0,
  side: THREE.DoubleSide,
});

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
    const mesh = new THREE.Mesh(geometry, part.role === 'glass' ? GLASS_MATERIAL : material);
    if (part.role === 'glass') {
      mesh.castShadow = false;
      mesh.userData.isGlass = true;
    }
    mesh.name = part.name;
    mesh.position.set(
      part.positionMm[0] * MM_TO_M,
      part.positionMm[1] * MM_TO_M,
      part.positionMm[2] * MM_TO_M,
    );
    if (part.rotationRad) {
      mesh.rotation.set(...part.rotationRad);
    }
    mesh.castShadow = part.role !== 'glass';
    mesh.receiveShadow = true;
    group.add(mesh);
  }
  return group;
}

type EdgeProfileId = 'chamfer' | 'roundover' | 'ogee' | 'bead';

/**
 * Points replacing a front corner of a member cross-section, ordered along
 * a counter-clockwise outline. `sign` is the corner's side in shape-u.
 * The curve runs from S (on the front face, pw inboard) to E (pd down the
 * side face); CCW traversal hits E first on the +u corner.
 */
function cornerPoints(
  profile: EdgeProfileId,
  sign: number,
  uEdge: number,
  vFront: number,
  pw: number,
  pd: number,
): Array<[number, number]> {
  const S: [number, number] = [uEdge - sign * pw, vFront];
  const E: [number, number] = [uEdge, vFront - pd];
  const curve: Array<[number, number]> = [S];
  const steps = 6;
  if (profile === 'roundover' || profile === 'bead') {
    const quirk = profile === 'bead' ? 0.0012 : 0;
    const top = vFront - quirk;
    if (quirk > 0) curve.push([S[0], top]);
    const r = top - E[1];
    for (let i = 1; i < steps; i++) {
      const a = (i / steps) * (Math.PI / 2);
      curve.push([S[0] + sign * pw * Math.sin(a), top - r + r * Math.cos(a)]);
    }
  } else if (profile === 'ogee') {
    for (let i = 1; i < steps; i++) {
      const s = i / steps;
      curve.push([S[0] + sign * pw * s, vFront - pd * s * s * (3 - 2 * s)]);
    }
  }
  curve.push(E);
  // CCW outline meets the +u corner from below (E first) and the −u corner
  // from the front face (S first).
  return sign > 0 ? curve.reverse() : curve;
}

/**
 * A frame member (stile or rail) with profiles on its front edges — the
 * cope-&-pattern detail toward the opening and/or the door-edge detail on
 * the outside. Cross-section extruded along the member length.
 */
function profiledMemberGeometry(
  sx: number,
  sy: number,
  sz: number,
  edge: NonNullable<Part['edgeProfile']>,
): THREE.BufferGeometry {
  const alongY = edge.axis === 'y';
  const W = alongY ? sx : sy;
  const T = sz;
  const L = alongY ? sy : sx;
  // Rails map world y to −u in shape space (see transforms below).
  const worldSign = (edge.innerSide ?? 'x+').endsWith('+') ? 1 : -1;
  const innerSign = alongY ? worldSign : -worldSign;
  const vFront = T / 2;
  const pd = Math.min(0.006, T * 0.4);
  const innerPw = Math.min(0.006, W * 0.3);
  const outerPw = Math.min(0.008, W * 0.35);

  const corner = (sign: number): Array<[number, number]> => {
    const profile = sign === innerSign ? edge.inner : edge.outer;
    const pw = sign === innerSign ? innerPw : outerPw;
    if (!profile) return [[sign * (W / 2), vFront]];
    return cornerPoints(profile, sign, sign * (W / 2), vFront, pw, pd);
  };

  const pts: Array<[number, number]> = [
    [-W / 2, -T / 2],
    [W / 2, -T / 2],
    ...corner(1),
    ...corner(-1),
  ];

  const shape = new THREE.Shape(pts.map(([u, v]) => new THREE.Vector2(u, v)));
  const geometry = new THREE.ExtrudeGeometry(shape, { depth: L, bevelEnabled: false });
  geometry.rotateX(Math.PI / 2); // (sx, sy, e) → (sx, −e, sy)
  if (alongY) {
    geometry.translate(0, L / 2, 0);
  } else {
    geometry.rotateZ(-Math.PI / 2); // → (−e, −sx, sy)
    geometry.translate(L / 2, 0, 0);
  }
  return geometry;
}

/**
 * A slab front with the door-edge detail around its whole perimeter:
 * displaced front-face grid like the raised panel, but dropping at the
 * edges instead of rising to a field.
 */
function profiledSlabGeometry(
  width: number,
  height: number,
  thickness: number,
  profile: EdgeProfileId,
): THREE.BufferGeometry {
  const pw = Math.min(0.008, Math.min(width, height) * 0.12);
  const pd = Math.min(0.006, thickness * 0.4);
  const fieldZ = thickness / 2;
  const curve = (s: number): number => {
    // s: 0 at the outer edge → 1 at the field.
    switch (profile) {
      case 'roundover':
        return Math.sin((s * Math.PI) / 2);
      case 'ogee':
        return s * s * (3 - 2 * s);
      case 'bead':
        return s < 0.15 ? 0 : Math.sin(((s - 0.15) / 0.85) * (Math.PI / 2));
      default:
        return s; // chamfer
    }
  };
  const frontZ = (x: number, y: number): number => {
    const edge = Math.min(width / 2 - Math.abs(x), height / 2 - Math.abs(y));
    if (edge >= pw) return fieldZ;
    return fieldZ - pd + pd * curve(edge / pw);
  };

  const step = 0.002;
  const segX = Math.min(240, Math.max(24, Math.round(width / step)));
  const segY = Math.min(240, Math.max(24, Math.round(height / step)));
  const front = new THREE.PlaneGeometry(width, height, segX, segY);
  const pos = front.attributes.position;
  for (let i = 0; i < pos.count; i++) {
    pos.setZ(i, frontZ(pos.getX(i), pos.getY(i)));
  }
  front.computeVertexNormals();

  const body = new THREE.BoxGeometry(width, height, thickness - pd);
  body.translate(0, 0, -pd / 2);
  const merged = mergeGeometries([front.toNonIndexed(), body.toNonIndexed()], false);
  front.dispose();
  body.dispose();
  return merged!;
}

function partGeometry(part: Part): THREE.BufferGeometry {
  const [w, h, d] = part.sizeMm.map((v) => v * MM_TO_M) as [number, number, number];
  if (part.raisedPanel && part.shape === 'box') {
    return raisedPanelGeometry(
      w,
      h,
      d,
      part.raisedPanel.raiseWidthMm * MM_TO_M,
      part.raisedPanel.tongueThicknessMm * MM_TO_M,
      part.raisedPanel.profile,
    );
  }
  if (part.joinery && part.shape === 'box') {
    const joint = { type: part.joinery.type, depth: part.joinery.matingThicknessMm * MM_TO_M };
    const jointed =
      part.joinery.role === 'tails'
        ? tailsBoardGeometry(w, h, d, joint)
        : pinsBoardGeometry(w, h, d, joint, part.joinery.pinsOuterSign ?? 1);
    if (jointed) return jointed;
  }
  if (part.edgeProfile && part.shape === 'box') {
    if (part.edgeProfile.axis === 'slab') {
      if (part.edgeProfile.outer) {
        return profiledSlabGeometry(w, h, d, part.edgeProfile.outer);
      }
    } else {
      return profiledMemberGeometry(w, h, d, part.edgeProfile);
    }
  }
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
