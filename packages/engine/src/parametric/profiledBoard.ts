/**
 * Profiled board geometry: a board whose front face carries edge details —
 * the cope-&-pattern profile along the panel opening (confined to the
 * opening span), and/or the door-edge detail along outer edges and across
 * board ends, so the detail runs continuously around an assembled door.
 *
 * Built as a displaced front-face grid (profiles are computed as a depth
 * field from edge distances), four side walls that follow the displaced
 * perimeter, and a flat back. All inputs in meters.
 */

import * as THREE from 'three';
import { mergeGeometries } from 'three/examples/jsm/utils/BufferGeometryUtils.js';
import { displacedFrontFace, nonuniformSamples, perimeterWall } from './displacedGrid.js';

export type EdgeProfileId =
  | 'chamfer'
  | 'bevel30'
  | 'roundover'
  | 'ogee'
  | 'bead'
  | 'cove'
  | 'ovolo'
  | 'step'
  | 'thumbnail'
  | 'fingerpull'
  | 'classical';

/** Cut depth relative to the base profile depth — shallow bevels vs deep pulls. */
const DEPTH_SCALE: Partial<Record<EdgeProfileId, number>> = {
  bevel30: 0.55,
  fingerpull: 1.5,
};

/** Drop curves: s = 0 at the field side of the band → 0; s = 1 at the edge → 1. */
function shape(profile: EdgeProfileId, s: number): number {
  switch (profile) {
    case 'chamfer':
    case 'bevel30':
      return s;
    case 'roundover':
      return 1 - Math.sqrt(Math.max(0, 1 - s * s));
    case 'cove':
      return Math.sin((s * Math.PI) / 2);
    case 'fingerpull':
      // Deep sweeping cove for handle-less fronts.
      return Math.sin((Math.pow(s, 0.8) * Math.PI) / 2);
    case 'ogee':
      return s * s * (3 - 2 * s);
    case 'bead': {
      if (s < 0.18) return (s / 0.18) * 0.25;
      const r = (s - 0.18) / 0.82;
      return 0.25 + 0.75 * (1 - Math.sqrt(Math.max(0, 1 - r * r)));
    }
    case 'ovolo': {
      if (s < 0.12) return (s / 0.12) * 0.15;
      if (s > 0.88) return 0.85 + ((s - 0.88) / 0.12) * 0.15;
      const r = (s - 0.12) / 0.76;
      return 0.15 + 0.7 * (1 - Math.sqrt(Math.max(0, 1 - r * r)));
    }
    case 'step':
      return s < 0.45 ? 0 : s < 0.55 ? (s - 0.45) / 0.1 : 1;
    case 'thumbnail': {
      const t = s * s * (3 - 2 * s);
      return Math.pow(t, 1.4);
    }
    case 'classical': {
      // Quirk-and-bead at the field, sweeping cove to the edge.
      if (s < 0.2) return 0.18 * (s / 0.2) * (s / 0.2) * (3 - 2 * (s / 0.2));
      return 0.18 + 0.82 * Math.sin((((s - 0.2) / 0.8) * Math.PI) / 2);
    }
  }
}

export interface ProfiledBoardOptions {
  /** Profile depth into the thickness (m). */
  depth: number;
  outer?: {
    profile: EdgeProfileId;
    width: number;
    uMin: boolean;
    uMax: boolean;
    vMin: boolean;
    vMax: boolean;
  };
  inner?: {
    profile: EdgeProfileId;
    width: number;
    side: 'vMin' | 'vMax';
    /** Pattern stops this far from each board end (the cope line). */
    endInset: number;
  };
  /**
   * Mitered frame member: both ends cut at 45° (a sheared trapezoid running
   * from full length at the outer edge to length − 2·width at the inner
   * edge). Profiles run through the miter uninterrupted; the mating member
   * carries them on across the seam.
   */
  miterEnds?: { outerSide: 'vMin' | 'vMax' };
}

export function profiledBoardGeometry(
  L: number,
  W: number,
  T: number,
  opts: ProfiledBoardOptions,
): THREE.BufferGeometry {
  const pd = opts.depth;
  const miter = opts.miterEnds;
  const endInset = miter ? 0 : (opts.inner?.endInset ?? 0);
  const drop = (u: number, v: number): number => {
    let d = 0;
    const band = (dist: number, profile: EdgeProfileId, pw: number) =>
      dist < pw
        ? pd * (DEPTH_SCALE[profile] ?? 1) * shape(profile, 1 - dist / pw)
        : 0;
    if (opts.outer) {
      const { profile, width: pw } = opts.outer;
      if (opts.outer.vMax) d = Math.max(d, band(W / 2 - v, profile, pw));
      if (opts.outer.vMin) d = Math.max(d, band(v + W / 2, profile, pw));
      // End bands only on butt-jointed members; mitered profiles continue
      // across the seam instead.
      if (!miter && opts.outer.uMax) d = Math.max(d, band(L / 2 - u, profile, pw));
      if (!miter && opts.outer.uMin) d = Math.max(d, band(u + L / 2, profile, pw));
    }
    if (opts.inner) {
      const dEdge = opts.inner.side === 'vMax' ? W / 2 - v : v + W / 2;
      // Beyond the cope line the profile turns the opening corner as a
      // miter-join offset: contours run straight and meet in a sharp 45°
      // diagonal, the way coped pattern joints read from the front.
      const over = Math.abs(u) - (L / 2 - endInset);
      const dist = over > 0 ? Math.max(over, dEdge) : dEdge;
      d = Math.max(d, band(dist, opts.inner.profile, opts.inner.width));
    }
    return d;
  };
  const frontZ = (u: number, v: number) => T / 2 - drop(u, v);

  // Footprint: rectangle, or 45°-sheared trapezoid for mitered members.
  const lim = (v: number): number => {
    if (!miter) return L / 2;
    const dOut = miter.outerSide === 'vMax' ? W / 2 - v : v + W / 2;
    return Math.max(L / 2 - dOut, 0.001);
  };
  const M = (u: number, v: number): [number, number] => [(u * lim(v)) / (L / 2), v];

  const fine = 0.0012;
  const coarse = 0.008;
  const uZones: Array<[number, number]> = [];
  const vZones: Array<[number, number]> = [];
  if (opts.outer) {
    const pw = opts.outer.width + 0.002;
    if (opts.outer.uMin) uZones.push([-L / 2, -L / 2 + pw]);
    if (opts.outer.uMax) uZones.push([L / 2 - pw, L / 2]);
    if (opts.outer.vMin) vZones.push([-W / 2, -W / 2 + pw]);
    if (opts.outer.vMax) vZones.push([W / 2 - pw, W / 2]);
  }
  if (opts.inner) {
    const pw = opts.inner.width + 0.002;
    vZones.push(
      opts.inner.side === 'vMax' ? [W / 2 - pw, W / 2] : [-W / 2, -W / 2 + pw],
    );
    if (endInset > 0) {
      for (const sign of [-1, 1]) {
        const corner = sign * (L / 2 - endInset);
        uZones.push([corner - pw, corner + pw]);
      }
    }
  }
  if (miter) {
    // Dense sampling near the sheared ends keeps the diagonal seam clean.
    uZones.push([-L / 2, -L / 2 + W + 0.002], [L / 2 - W - 0.002, L / 2]);
  }
  const us = nonuniformSamples(L, uZones, fine, coarse);
  const vs = nonuniformSamples(W, vZones, fine, coarse);
  const front = displacedFrontFace(us, vs, frontZ, M);

  // Back: flat quad over the (possibly trapezoidal) footprint, facing −z.
  const corners = [M(-L / 2, -W / 2), M(L / 2, -W / 2), M(L / 2, W / 2), M(-L / 2, W / 2)];
  const back = new THREE.BufferGeometry();
  const bz = -T / 2;
  const [a, b, c, d2] = corners;
  back.setAttribute(
    'position',
    new THREE.BufferAttribute(
      new Float32Array([
        a[0], a[1], bz, c[0], c[1], bz, b[0], b[1], bz,
        a[0], a[1], bz, d2[0], d2[1], bz, c[0], c[1], bz,
      ]),
      3,
    ),
  );
  back.setAttribute(
    'normal',
    new THREE.BufferAttribute(new Float32Array(Array(6).fill([0, 0, -1]).flat()), 3),
  );
  back.setAttribute('uv', new THREE.BufferAttribute(new Float32Array(12), 2));

  // Side walls follow the displaced front perimeter (sampled on the same
  // grid lines as the front face) so the shell stays watertight where
  // profiles cut the edges down.
  const walls: THREE.BufferGeometry[] = [
    perimeterWall(us.map((u) => M(u, -W / 2)), frontZ, bz),
    perimeterWall([...us].reverse().map((u) => M(u, W / 2)), frontZ, bz),
    perimeterWall([...vs].reverse().map((v) => M(-L / 2, v)), frontZ, bz),
    perimeterWall(vs.map((v) => M(L / 2, v)), frontZ, bz),
  ];

  const merged = mergeGeometries([front, back, ...walls], false);
  front.dispose();
  back.dispose();
  for (const w of walls) w.dispose();
  return merged!;
}
