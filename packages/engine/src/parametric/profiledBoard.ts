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

export type EdgeProfileId =
  | 'chamfer'
  | 'roundover'
  | 'ogee'
  | 'bead'
  | 'cove'
  | 'ovolo'
  | 'step'
  | 'thumbnail';

/** Drop curves: s = 0 at the field side of the band → 0; s = 1 at the edge → 1. */
function shape(profile: EdgeProfileId, s: number): number {
  switch (profile) {
    case 'chamfer':
      return s;
    case 'roundover':
      return 1 - Math.sqrt(Math.max(0, 1 - s * s));
    case 'cove':
      return Math.sin((s * Math.PI) / 2);
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
}

export function profiledBoardGeometry(
  L: number,
  W: number,
  T: number,
  opts: ProfiledBoardOptions,
): THREE.BufferGeometry {
  const pd = opts.depth;
  const drop = (u: number, v: number): number => {
    let d = 0;
    const band = (dist: number, profile: EdgeProfileId, pw: number) =>
      dist < pw ? pd * shape(profile, 1 - dist / pw) : 0;
    if (opts.outer) {
      const { profile, width: pw } = opts.outer;
      if (opts.outer.vMax) d = Math.max(d, band(W / 2 - v, profile, pw));
      if (opts.outer.vMin) d = Math.max(d, band(v + W / 2, profile, pw));
      if (opts.outer.uMax) d = Math.max(d, band(L / 2 - u, profile, pw));
      if (opts.outer.uMin) d = Math.max(d, band(u + L / 2, profile, pw));
    }
    if (opts.inner && u >= -L / 2 + opts.inner.endInset && u <= L / 2 - opts.inner.endInset) {
      const dist = opts.inner.side === 'vMax' ? W / 2 - v : v + W / 2;
      d = Math.max(d, band(dist, opts.inner.profile, opts.inner.width));
    }
    return d;
  };
  const frontZ = (u: number, v: number) => T / 2 - drop(u, v);

  const su = Math.min(420, Math.max(16, Math.round(L / 0.002)));
  const sv = Math.min(96, Math.max(12, Math.round(W / 0.0015)));
  const front = new THREE.PlaneGeometry(L, W, su, sv);
  const fpos = front.attributes.position;
  for (let i = 0; i < fpos.count; i++) {
    fpos.setZ(i, frontZ(fpos.getX(i), fpos.getY(i)));
  }
  front.computeVertexNormals();

  const back = new THREE.PlaneGeometry(L, W);
  back.rotateY(Math.PI);
  back.translate(0, 0, -T / 2);

  // Side walls follow the displaced front perimeter so the shell stays
  // watertight where profiles cut the edges down.
  const walls: THREE.BufferGeometry[] = [];
  const wall = (
    samples: number,
    point: (t: number) => [number, number],
    normal: [number, number, number],
  ) => {
    const positions: number[] = [];
    const normals: number[] = [];
    const uvs: number[] = [];
    for (let i = 0; i < samples; i++) {
      const t0 = i / samples;
      const t1 = (i + 1) / samples;
      const [u0, v0] = point(t0);
      const [u1, v1] = point(t1);
      const zt0 = frontZ(u0, v0);
      const zt1 = frontZ(u1, v1);
      // Two triangles: (b0, b1, t1) and (b0, t1, t0).
      positions.push(u0, v0, -T / 2, u1, v1, -T / 2, u1, v1, zt1);
      positions.push(u0, v0, -T / 2, u1, v1, zt1, u0, v0, zt0);
      for (let k = 0; k < 6; k++) {
        normals.push(...normal);
        uvs.push(0, 0);
      }
    }
    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute('position', new THREE.BufferAttribute(new Float32Array(positions), 3));
    geometry.setAttribute('normal', new THREE.BufferAttribute(new Float32Array(normals), 3));
    geometry.setAttribute('uv', new THREE.BufferAttribute(new Float32Array(uvs), 2));
    return geometry;
  };
  // Winding: outward faces, counter-clockwise seen from outside.
  walls.push(wall(su, (t) => [-L / 2 + t * L, -W / 2], [0, -1, 0]));
  walls.push(wall(su, (t) => [L / 2 - t * L, W / 2], [0, 1, 0]));
  walls.push(wall(sv, (t) => [-L / 2, -W / 2 + (1 - t) * W], [-1, 0, 0]));
  walls.push(wall(sv, (t) => [L / 2, -W / 2 + t * W], [1, 0, 0]));

  const merged = mergeGeometries([front.toNonIndexed(), back.toNonIndexed(), ...walls], false);
  front.dispose();
  back.dispose();
  for (const w of walls) w.dispose();
  return merged!;
}
