/**
 * Raised-panel geometry: a panel whose front face steps from a thin edge
 * tongue (hidden in the frame grooves), up a profiled raise, to a proud
 * flat field — the shape a shaper panel-raising cutter leaves.
 *
 * The front face is a displaced grid; the profile is a function of the
 * distance to the nearest panel edge. All inputs in meters.
 */

import * as THREE from 'three';
import { mergeGeometries } from 'three/examples/jsm/utils/BufferGeometryUtils.js';
import { displacedFrontFace, nonuniformSamples } from './displacedGrid.js';

export type RaiseProfileId =
  | 'cove'
  | 'ogee'
  | 'bevel'
  | 'roundover'
  | 'stepcove'
  | 'bevelstep'
  | 'covebead'
  | 'ogeebead';

const smooth = (s: number) => s * s * (3 - 2 * s);

/** Normalized raise curves: s ∈ [0,1] across the raise width → height 0..1. */
const PROFILES: Record<RaiseProfileId, (s: number) => number> = {
  bevel: (s) => s,
  cove: (s) => 1 - Math.cos((s * Math.PI) / 2),
  ogee: smooth,
  roundover: (s) => Math.sin((s * Math.PI) / 2),
  stepcove: (s) =>
    s < 0.12 ? (s / 0.12) * 0.35 : 0.35 + 0.65 * (1 - Math.cos((((s - 0.12) / 0.88) * Math.PI) / 2)),
  // Straight bevel with a small shoulder fillet at the field.
  bevelstep: (s) => (s < 0.88 ? s * 0.86 : 0.757 + smooth((s - 0.88) / 0.12) * 0.243),
  // Cove body with a bead rolling over at the field.
  covebead: (s) =>
    s < 0.78 ? (1 - Math.cos(((s / 0.78) * Math.PI) / 2)) * 0.82 : 0.82 + smooth((s - 0.78) / 0.22) * 0.18,
  // Ogee body with a bead at the field.
  ogeebead: (s) => (s < 0.8 ? smooth(s / 0.8) * 0.84 : 0.84 + smooth((s - 0.8) / 0.2) * 0.16),
};

const TONGUE_LENGTH = 0.012; // flat tongue at the panel edge (in the groove)

export function raisedPanelGeometry(
  width: number,
  height: number,
  thickness: number,
  raiseWidth: number,
  tongueThickness: number,
  profileId: RaiseProfileId,
): THREE.BufferGeometry {
  const profile = PROFILES[profileId];
  const back = -thickness / 2;
  const tongueZ = back + tongueThickness;
  const fieldZ = thickness / 2;

  const frontZ = (x: number, y: number): number => {
    const edge = Math.min(width / 2 - Math.abs(x), height / 2 - Math.abs(y));
    if (edge <= TONGUE_LENGTH) return tongueZ;
    const s = (edge - TONGUE_LENGTH) / raiseWidth;
    if (s >= 1) return fieldZ;
    return tongueZ + (fieldZ - tongueZ) * profile(s);
  };

  // Front face: dense sampling across the raise ring, coarse on the field,
  // with crease-preserving analytic normals (sharp arris at the field).
  const ring = TONGUE_LENGTH + raiseWidth + 0.002;
  const xs = nonuniformSamples(
    width,
    [
      [-width / 2, -width / 2 + ring],
      [width / 2 - ring, width / 2],
    ],
    0.0015,
    0.01,
  );
  const ys = nonuniformSamples(
    height,
    [
      [-height / 2, -height / 2 + ring],
      [height / 2 - ring, height / 2],
    ],
    0.0015,
    0.01,
  );
  const front = displacedFrontFace(xs, ys, frontZ);

  // Back face.
  const backFace = new THREE.PlaneGeometry(width, height);
  backFace.rotateY(Math.PI);
  backFace.translate(0, 0, back);

  // Edge band: the four thin outer faces from the back up to the tongue,
  // taken from a box shell with its front/back faces dropped.
  const edgeH = tongueThickness;
  const edgeZ = back + edgeH / 2;
  const band = new THREE.BoxGeometry(width, height, edgeH);
  band.translate(0, 0, edgeZ);
  // BoxGeometry groups: px, nx, py, ny, pz, nz — keep only the 4 sides.
  const sides = band.toNonIndexed();
  const position = sides.attributes.position;
  const normal = sides.attributes.normal;
  const uv = sides.attributes.uv;
  const keep: number[] = [];
  for (let i = 0; i < position.count; i += 3) {
    const nz = Math.abs(normal.getZ(i));
    if (nz < 0.5) keep.push(i, i + 1, i + 2);
  }
  const filtered = new THREE.BufferGeometry();
  const fp = new Float32Array(keep.length * 3);
  const fn = new Float32Array(keep.length * 3);
  const fu = new Float32Array(keep.length * 2);
  keep.forEach((src, dst) => {
    fp.set([position.getX(src), position.getY(src), position.getZ(src)], dst * 3);
    fn.set([normal.getX(src), normal.getY(src), normal.getZ(src)], dst * 3);
    fu.set([uv.getX(src), uv.getY(src)], dst * 2);
  });
  filtered.setAttribute('position', new THREE.BufferAttribute(fp, 3));
  filtered.setAttribute('normal', new THREE.BufferAttribute(fn, 3));
  filtered.setAttribute('uv', new THREE.BufferAttribute(fu, 2));
  band.dispose();
  sides.dispose();

  const merged = mergeGeometries(
    [front, backFace.toNonIndexed(), filtered],
    false,
  );
  front.dispose();
  backFace.dispose();
  filtered.dispose();
  return merged!;
}
