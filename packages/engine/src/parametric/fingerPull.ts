/**
 * Finger-pull slab front: a handle-less drawer front whose top edge carries
 * a routed pull channel (Freeborn 57-024). Matching the cutter drawing laid
 * onto a top edge: the BACK side of the edge stays at full height with an
 * eased crest, a deep cove sweeps down and forward, and a rounded hook lobe
 * rises near the front — the grab — before the cut breaks out of the front
 * face below it. Fingers curl over the hook into the cove; no hardware.
 *
 * The cross-section is swept exactly along the full width with analytic
 * normals (creased at the cut's arrises), and the profile shows as a
 * witness on both end-grain faces. The board below the channel band keeps
 * the door-edge detail on its sides and bottom. All meters.
 */

import * as THREE from 'three';
import { mergeGeometries } from 'three/examples/jsm/utils/BufferGeometryUtils.js';
import { profiledBoardGeometry, type EdgeProfileId } from './profiledBoard.js';

/** Height of the top band that carries the pull channel. */
export const FINGER_PULL_BAND = 0.022;

interface Row {
  z: number; // across the thickness, front (+) to back (−)
  y: number; // top surface height within the band
  slope: number; // dy/dz
}

type SegShape = 'line' | 'concave' | 'convex' | 'sigmoid';

/** Height ease and derivative per segment shape over t ∈ [0,1]. */
const EASE: Record<SegShape, [(t: number) => number, (t: number) => number]> = {
  line: [(t) => t, () => 1],
  concave: [
    (t) => 1 - Math.cos((t * Math.PI) / 2),
    (t) => (Math.PI / 2) * Math.sin((t * Math.PI) / 2),
  ],
  convex: [
    (t) => Math.sin((t * Math.PI) / 2),
    (t) => (Math.PI / 2) * Math.cos((t * Math.PI) / 2),
  ],
  sigmoid: [
    (t) => (1 - Math.cos(t * Math.PI)) / 2,
    (t) => (Math.PI / 2) * Math.sin(t * Math.PI),
  ],
};

/**
 * Channel cross-section rows from the front face to the back face, per the
 * 57-024 drawing: front breakout below the hook, the hook lobe, the deep
 * cove, and the full-height back crest. Arrises are duplicated rows with
 * one-sided slopes so they shade sharp.
 */
function channelRows(bh: number, T: number): Row[] {
  const top = bh / 2;
  const k = Math.min(1, T / 0.019); // compress the cut for thinner stock
  const front = T / 2;
  const back = -T / 2;
  const coveD = Math.min(0.011, bh * 0.5); // full channel depth
  const hookD = Math.min(0.0018, bh * 0.08); // hook crest below the back top
  const frontD = Math.min(0.0082, bh * 0.37); // front-face breakout
  const valleyD = Math.min(0.0076, bh * 0.35); // dip behind the front lip

  // Segments front → back: target z, target drop, shape. The hook lobe is
  // a fat rounded bead (slope-0 junctions at its crest) and the cove is a
  // round bowl wider than it is deep — proportions per the cutter drawing.
  const segs: Array<{ z: number; d: number; shape: SegShape }> = [
    { z: front - 0.0005 * k, d: valleyD, shape: 'convex' }, // roll off the face
    { z: front - 0.0014 * k, d: valleyD * 0.82, shape: 'concave' }, // into the hook base
    { z: front - 0.0032 * k, d: hookD * 1.33, shape: 'convex' }, // hook front rise
    { z: front - 0.0049 * k, d: hookD, shape: 'sigmoid' }, // rounded crest
    { z: front - 0.0108 * k, d: coveD, shape: 'sigmoid' }, // sweep into the bowl
    { z: back + 0.0029 * k, d: 0, shape: 'sigmoid' }, // bowl rising to the back
    { z: back + 0.0018 * k, d: 0, shape: 'line' }, // back crest
    { z: back, d: Math.min(0.0017, T * 0.09), shape: 'concave' }, // back arris ease
  ];

  const rows: Row[] = [];
  let z0 = front;
  let d0 = frontD;
  for (const seg of segs) {
    const span = z0 - seg.z;
    if (span <= 1e-7) {
      z0 = seg.z;
      d0 = seg.d;
      continue;
    }
    const [ease, dEase] = EASE[seg.shape];
    const dd = seg.d - d0;
    // y = top − drop; slope = dy/dz with z decreasing across the segment.
    const slopeAt = (t: number) => (dd * dEase(t)) / span;
    const n = seg.shape === 'line' ? 1 : seg.shape === 'sigmoid' ? 16 : 8;
    rows.push({ z: z0, y: top - d0, slope: slopeAt(0) });
    for (let i = 1; i <= n; i++) {
      const t = i / n;
      rows.push({ z: z0 - span * t, y: top - (d0 + dd * ease(t)), slope: slopeAt(t) });
    }
    z0 = seg.z;
    d0 = seg.d;
  }
  return rows;
}

/**
 * The top band: channel surface swept along the length, front/back/bottom
 * walls, and end caps showing the channel witness on the end grain.
 */
function bandGeometry(L: number, bh: number, T: number): THREE.BufferGeometry {
  const rows = channelRows(bh, T);
  const positions: number[] = [];
  const normals: number[] = [];
  const yBottom = -bh / 2;

  const quad = (
    a: [number, number, number],
    b: [number, number, number],
    c: [number, number, number],
    d: [number, number, number],
    na: [number, number, number],
    nb: [number, number, number],
    nc: [number, number, number],
    nd: [number, number, number],
  ) => {
    positions.push(...a, ...b, ...c, ...a, ...c, ...d);
    normals.push(...na, ...nb, ...nc, ...na, ...nc, ...nd);
  };

  // Channel surface: sweep row pairs along x, analytic creased normals.
  for (let i = 0; i < rows.length - 1; i++) {
    const r0 = rows[i];
    const r1 = rows[i + 1];
    if (r0.z - r1.z < 1e-7) continue;
    // Surface y = f(z) has outward normal (0, 1, −f′).
    const n = (slope: number): [number, number, number] => {
      const len = Math.hypot(slope, 1);
      return [0, 1 / len, -slope / len];
    };
    const n0 = n(r0.slope);
    const n1 = n(r1.slope);
    quad(
      [-L / 2, r0.y, r0.z],
      [L / 2, r0.y, r0.z],
      [L / 2, r1.y, r1.z],
      [-L / 2, r1.y, r1.z],
      n0,
      n0,
      n1,
      n1,
    );
  }

  const first = rows[0];
  const last = rows[rows.length - 1];
  // Front wall (full height up to where the arris ease begins).
  quad(
    [-L / 2, yBottom, T / 2],
    [L / 2, yBottom, T / 2],
    [L / 2, first.y, T / 2],
    [-L / 2, first.y, T / 2],
    [0, 0, 1], [0, 0, 1], [0, 0, 1], [0, 0, 1],
  );
  // Back wall.
  quad(
    [L / 2, yBottom, -T / 2],
    [-L / 2, yBottom, -T / 2],
    [-L / 2, last.y, -T / 2],
    [L / 2, last.y, -T / 2],
    [0, 0, -1], [0, 0, -1], [0, 0, -1], [0, 0, -1],
  );
  // Bottom (seam face against the board below).
  quad(
    [-L / 2, yBottom, -T / 2],
    [L / 2, yBottom, -T / 2],
    [L / 2, yBottom, T / 2],
    [-L / 2, yBottom, T / 2],
    [0, -1, 0], [0, -1, 0], [0, -1, 0], [0, -1, 0],
  );
  // End caps: column strips from each channel row down to the band bottom —
  // the channel cross-section witness on the end grain.
  for (const sign of [1, -1] as const) {
    const x = (sign * L) / 2;
    const nx: [number, number, number] = [sign, 0, 0];
    for (let i = 0; i < rows.length - 1; i++) {
      const r0 = rows[i];
      const r1 = rows[i + 1];
      if (r0.z - r1.z < 1e-7) continue;
      // Wind so the face points out of the end (+x or −x).
      const p0: [number, number, number] = [x, r0.y, r0.z];
      const p1: [number, number, number] = [x, r1.y, r1.z];
      const b0: [number, number, number] = [x, yBottom, r0.z];
      const b1: [number, number, number] = [x, yBottom, r1.z];
      if (sign > 0) quad(b0, b1, p1, p0, nx, nx, nx, nx);
      else quad(b1, b0, p0, p1, nx, nx, nx, nx);
    }
  }

  const geometry = new THREE.BufferGeometry();
  geometry.setAttribute('position', new THREE.BufferAttribute(new Float32Array(positions), 3));
  geometry.setAttribute('normal', new THREE.BufferAttribute(new Float32Array(normals), 3));
  geometry.setAttribute('uv', new THREE.BufferAttribute(new Float32Array((positions.length / 3) * 2), 2));
  return geometry;
}

/**
 * Complete slab front with the pull channel: door-edge detail (if any) on
 * the sides and bottom, channel band across the top. One board, one part.
 */
export function fingerPullFrontGeometry(
  width: number,
  height: number,
  thickness: number,
  outer?: EdgeProfileId,
): THREE.BufferGeometry {
  const bh = Math.min(FINGER_PULL_BAND, height * 0.35);
  const lowerH = height - bh;
  const lower = outer
    ? profiledBoardGeometry(width, lowerH, thickness, {
        depth: Math.min(0.005, thickness * 0.35),
        outer: { profile: outer, width: 0.011, uMin: true, uMax: true, vMin: true, vMax: false },
      })
    : new THREE.BoxGeometry(width, lowerH, thickness);
  lower.translate(0, -bh / 2, 0);
  const band = bandGeometry(width, bh, thickness);
  band.translate(0, lowerH / 2, 0);
  const merged = mergeGeometries(
    [lower.index ? lower.toNonIndexed() : lower, band],
    false,
  );
  lower.dispose();
  band.dispose();
  return merged!;
}
