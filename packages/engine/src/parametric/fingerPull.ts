/**
 * Finger-pull slab front: a handle-less drawer front whose top edge carries
 * a routed pull channel (Freeborn 57-024 style) — a rounded nose lip at the
 * front face, a deep C-cove swept behind it, rising to a lower back lip.
 * Fingers curl over the nose into the channel, so no hardware is needed.
 *
 * The channel cross-section is swept exactly along the full width with
 * analytic normals (creased at the cut's arrises), and the channel profile
 * shows as a witness on both end-grain faces. The board below the channel
 * band keeps the door-edge detail on its sides and bottom. All meters.
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

/**
 * Channel cross-section rows from the front face to the back face.
 * Arrises are duplicated rows with one-sided slopes so they shade sharp.
 */
function channelRows(bh: number, T: number): Row[] {
  const top = bh / 2;
  // Cut features, sized for ¾" stock and clamped for thinner fronts.
  const noseEase = Math.min(0.0015, T * 0.08); // eased front arris
  const noseFlat = Math.min(0.003, T * 0.16); // flat crown of the nose
  const shoulderW = Math.min(0.0028, T * 0.15); // nose rolling into the cove
  const shoulderD = Math.min(0.004, T * 0.21); // drop at the shoulder's end
  const coveD = Math.min(0.013, bh * 0.59); // full channel depth
  const backLipD = Math.min(0.005, bh * 0.23); // back lip below the nose
  const backRise = Math.min(0.0045, T * 0.24); // cove climbing to the back lip
  const front = T / 2;
  const back = -T / 2;

  const rows: Row[] = [];
  const push = (z: number, y: number, slope: number) => rows.push({ z, y, slope });

  // Front arris ease (quarter-round into the nose crown).
  const r0 = noseEase;
  const c0z = front - r0;
  for (let i = 0; i <= 6; i++) {
    const t = (i / 6) * (Math.PI / 2);
    push(c0z + r0 * Math.cos(t), top - r0 + r0 * Math.sin(t), -Math.cos(t) / Math.max(Math.sin(t), 0.2));
  }
  // Nose crown.
  push(front - noseEase - noseFlat, top, 0);
  // Shoulder: convex roll out of the crown into the cove (crease at start).
  const shZ0 = front - noseEase - noseFlat;
  for (let i = 1; i <= 8; i++) {
    const t = i / 8;
    const ease = 1 - Math.cos((t * Math.PI) / 2);
    const dEase = (Math.PI / 2) * Math.sin((t * Math.PI) / 2);
    push(shZ0 - shoulderW * t, top - shoulderD * ease, (shoulderD * dEase) / shoulderW);
  }
  // Cove: concave sweep down to full channel depth.
  const coveZ0 = shZ0 - shoulderW;
  const coveZ1 = back + backRise + 0.001;
  const coveW = coveZ0 - coveZ1;
  for (let i = 1; i <= 14; i++) {
    const t = i / 14;
    const ease = Math.sin((t * Math.PI) / 2);
    const dEase = (Math.PI / 2) * Math.cos((t * Math.PI) / 2);
    push(coveZ0 - coveW * t, top - shoulderD - (coveD - shoulderD) * ease, ((coveD - shoulderD) * dEase) / coveW);
  }
  // Rise to the back lip (concave, steep out of the channel bottom).
  const riseZ0 = coveZ1;
  const riseW = riseZ0 - (back + 0.0008);
  for (let i = 1; i <= 10; i++) {
    const t = i / 10;
    const ease = 1 - Math.cos((t * Math.PI) / 2);
    const dEase = (Math.PI / 2) * Math.sin((t * Math.PI) / 2);
    push(riseZ0 - riseW * t, top - coveD + (coveD - backLipD) * ease, (-(coveD - backLipD) * dEase) / riseW);
  }
  // Back lip flat to the back face.
  push(back, top - backLipD, 0);
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
