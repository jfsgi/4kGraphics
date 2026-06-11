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

export type RaiseProfileId = 'cove' | 'ogee' | 'bevel' | 'roundover' | 'stepcove';

/** Normalized raise curves: s ∈ [0,1] across the raise width → height 0..1. */
const PROFILES: Record<RaiseProfileId, (s: number) => number> = {
  bevel: (s) => s,
  cove: (s) => 1 - Math.cos((s * Math.PI) / 2),
  ogee: (s) => s * s * (3 - 2 * s),
  roundover: (s) => Math.sin((s * Math.PI) / 2),
  stepcove: (s) =>
    s < 0.12 ? (s / 0.12) * 0.35 : 0.35 + 0.65 * (1 - Math.cos((((s - 0.12) / 0.88) * Math.PI) / 2)),
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

  // Front face: displaced grid, dense enough for a smooth raise curve.
  const step = 0.002;
  const segX = Math.min(220, Math.max(24, Math.round(width / step)));
  const segY = Math.min(220, Math.max(24, Math.round(height / step)));
  const front = new THREE.PlaneGeometry(width, height, segX, segY);
  const pos = front.attributes.position;
  for (let i = 0; i < pos.count; i++) {
    pos.setZ(i, frontZ(pos.getX(i), pos.getY(i)));
  }
  front.computeVertexNormals();

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
    [front.toNonIndexed(), backFace.toNonIndexed(), filtered],
    false,
  );
  front.dispose();
  backFace.dispose();
  filtered.dispose();
  return merged!;
}
