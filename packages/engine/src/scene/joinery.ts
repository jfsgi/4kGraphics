/**
 * Interlocking corner joinery geometry: through dovetails and box joints.
 *
 * Both boards of a corner share the joint volume; the profile that
 * partitions it is constant through the tails-board thickness, so every
 * piece is an extrusion of a 2D outline:
 *
 * - tails board (drawer sides): one outline — the full board silhouette in
 *   its length/height plane with toothed ends — extruded through its
 *   thickness.
 * - pins board (fronts/backs): a plain central body plus the complementary
 *   pin prisms at each end.
 *
 * All inputs in meters (scene units). Tails flare ~1:6 for dovetails and
 * not at all for box joints.
 */

import * as THREE from 'three';
import { mergeGeometries } from 'three/examples/jsm/utils/BufferGeometryUtils.js';

export interface JointSpec {
  type: 'dovetail' | 'boxjoint';
  /** Joint depth = mating board thickness (m). */
  depth: number;
}

export interface ScoopSpec {
  /** Full width of the finger scoop (m). */
  width: number;
  /** Depth of the scoop below the top edge (m). */
  depth: number;
}

/**
 * Bottom-panel groove (dado) plowed along the board's length on one face.
 * `center` is the slot's mid-height in board-local height (m); `width` is its
 * size along the height; `depth` is how far it cuts into the thickness.
 */
export interface GrooveSpec {
  center: number;
  width: number;
  depth: number;
}

/**
 * Three stacked boxes forming a length of board with a groove cut along one
 * face: a full-thickness band below the slot, a reduced-thickness band across
 * the slot (set back from the inner face), and a full-thickness band above.
 * Built in the native board frame (length → X, height → Y, thickness → Z),
 * non-indexed so it merges with the extruded joint pieces. Returns null pieces
 * filtered out; an empty result means the groove doesn't fit the height.
 */
function grooveBoxes(
  lenX: number,
  centerX: number,
  height: number,
  thickness: number,
  groove: GrooveSpec,
  /** Native-Z sign of the inner face the slot opens on. */
  innerSign: 1 | -1,
  /** Skip the band above the slot (the caller supplies a scooped top). */
  skipAbove = false,
): THREE.BufferGeometry[] {
  const yBottom = -height / 2;
  const yTop = height / 2;
  const half = groove.width / 2;
  const gY0 = groove.center - half;
  const gY1 = groove.center + half;
  const depth = Math.min(groove.depth, thickness * 0.6);
  const boxes: THREE.BufferGeometry[] = [];
  const band = (h: number, cy: number, t: number, cz: number) => {
    const b = new THREE.BoxGeometry(lenX, h, t).toNonIndexed();
    b.translate(centerX, cy, cz);
    boxes.push(b);
  };
  const belowH = gY0 - yBottom;
  if (belowH > 1e-6) band(belowH, (yBottom + gY0) / 2, thickness, 0);
  const slotH = gY1 - gY0;
  if (slotH > 1e-6) band(slotH, (gY0 + gY1) / 2, thickness - depth, -innerSign * (depth / 2));
  if (!skipAbove) {
    const aboveH = yTop - gY1;
    if (aboveH > 1e-6) band(aboveH, (gY1 + yTop) / 2, thickness, 0);
  }
  return boxes;
}

/** Whether a groove sits clear of both board edges (so it has wood above and
 *  below the slot). */
function grooveFits(height: number, groove: GrooveSpec): boolean {
  return (
    groove.center - groove.width / 2 > -height / 2 + 1e-6 &&
    groove.center + groove.width / 2 < height / 2 - 1e-6
  );
}

interface Pocket {
  x0: number;
  x1: number;
  y0: number;
  y1: number;
  depth: number;
}

/**
 * Middle slab carved with arbitrary rectangular inner-face pockets — a
 * lengthwise groove and/or transverse sockets, which may touch the slab edges
 * (open grooves/sliding-dovetail mouths) where a Shape hole couldn't. Built as
 * a full outer (floor) layer plus a grid of solid inner-layer cells, skipping
 * any cell that falls inside a pocket. All pockets cut to the deepest one.
 * Native frame: length → X, height → Y, thickness → Z.
 */
function pocketedSlab(
  x0: number,
  x1: number,
  height: number,
  thickness: number,
  pockets: Pocket[],
  innerSign: 1 | -1,
): THREE.BufferGeometry[] {
  const yB = -height / 2;
  const yT = height / 2;
  const maxDepth = Math.min(Math.max(...pockets.map((p) => p.depth)), thickness * 0.8);
  const pieces: THREE.BufferGeometry[] = [];
  const box = (w: number, h: number, t: number, cx: number, cy: number, cz: number) => {
    if (w <= 1e-6 || h <= 1e-6 || t <= 1e-6) return;
    const b = new THREE.BoxGeometry(w, h, t).toNonIndexed();
    b.translate(cx, cy, cz);
    pieces.push(b);
  };
  // Outer solid layer (the floor / back wall behind every pocket).
  box(x1 - x0, height, thickness - maxDepth, (x0 + x1) / 2, 0, -innerSign * (maxDepth / 2));
  // Inner layer: a grid of solid cells, dropping cells inside any pocket.
  const cl = (v: number, lo: number, hi: number) => Math.max(lo, Math.min(hi, v));
  const xs = [...new Set([x0, x1, ...pockets.flatMap((p) => [cl(p.x0, x0, x1), cl(p.x1, x0, x1)])])].sort(
    (a, b) => a - b,
  );
  const ys = [...new Set([yB, yT, ...pockets.flatMap((p) => [cl(p.y0, yB, yT), cl(p.y1, yB, yT)])])].sort(
    (a, b) => a - b,
  );
  const innerCz = innerSign * (thickness / 2 - maxDepth / 2);
  for (let i = 0; i < xs.length - 1; i++) {
    for (let j = 0; j < ys.length - 1; j++) {
      const cx = (xs[i] + xs[i + 1]) / 2;
      const cy = (ys[j] + ys[j + 1]) / 2;
      if (pockets.some((p) => cx > p.x0 && cx < p.x1 && cy > p.y0 && cy < p.y1)) continue;
      box(xs[i + 1] - xs[i], ys[j + 1] - ys[j], maxDepth, cx, cy, innerCz);
    }
  }
  return pieces;
}

/**
 * Board outline in the (x, y) plane with an optional finger scoop in the
 * top edge, as a centered extrusion along z. Atelier3D extension: the
 * scoop follows MEJA's to-scale pull drawing (15_3PULL) — a flat bottom
 * with S-shoulders built from two 60° arcs of radius 5/6 × depth joined
 * by a 60° straight, the top arc tangent to the edge and the bottom arc
 * tangent to the flat. Scales uniformly with depth.
 */
export function scoopedBoardGeometry(
  length: number,
  height: number,
  thickness: number,
  scoop: ScoopSpec,
  /** Lower edge of the silhouette (m); raise it above the board bottom to
   *  build only the upper portion, leaving room for a groove slab below. */
  yLow: number = -height / 2,
): THREE.BufferGeometry {
  const a = Math.min(scoop.width / 2, length * 0.45);
  const b = Math.min(scoop.depth, height * 0.6);
  const top = height / 2;
  const R = (5 / 6) * b;
  const arcDx = R * (Math.sqrt(3) / 2);
  const lineDx = (b - R) / Math.sqrt(3);
  const run = 2 * arcDx + lineDx;
  const k = Math.min(1, a / run);
  const drop = (t: number) => {
    if (t <= 0) return 0;
    if (t <= arcDx) return R - Math.sqrt(Math.max(R * R - t * t, 0));
    if (t <= arcDx + lineDx) return R / 2 + (t - arcDx) * Math.sqrt(3);
    if (t < run) {
      const tb = run - t;
      return b - (R - Math.sqrt(Math.max(R * R - tb * tb, 0)));
    }
    return b;
  };
  const pts: THREE.Vector2[] = [
    new THREE.Vector2(-length / 2, yLow),
    new THREE.Vector2(length / 2, yLow),
    new THREE.Vector2(length / 2, height / 2),
  ];
  const segments = 48;
  for (let i = 0; i <= segments; i++) {
    const x = a - (2 * a * i) / segments; // +a → −a across the opening
    pts.push(new THREE.Vector2(x, top - drop((a - Math.abs(x)) / k)));
  }
  pts.push(new THREE.Vector2(-length / 2, height / 2));
  const shape = new THREE.Shape(pts);
  const geometry = new THREE.ExtrudeGeometry(shape, { depth: thickness, bevelEnabled: false });
  geometry.translate(0, 0, -thickness / 2);
  return geometry;
}

interface JointLayout {
  /** Pin width at the outer face (m). */
  pinTip: number;
  /** Tail width at the outer face (m). */
  tailWide: number;
  /** Flare per side over the joint depth (m). 0 for box joints. */
  flare: number;
  /** Tail center heights, measured from board bottom (m). */
  tailCenters: number[];
}

function layoutJoint(height: number, spec: JointSpec): JointLayout | null {
  const flare = spec.type === 'dovetail' ? spec.depth * 0.17 : 0;
  // Atelier3D extension: shop dovetail proportions — slim 1/16" half-pins at
  // the board edges with pins about a stock-thickness wide between the tails.
  // Box joints keep even fingers running from the edges.
  const pinTip =
    spec.type === 'dovetail'
      ? Math.min(Math.max(spec.depth, 0.0095), 0.019)
      : Math.min(Math.max(spec.depth * 0.6, 0.006), 0.014);
  const edgePin = spec.type === 'dovetail' ? 0.0015875 : pinTip;
  let tailCount = Math.max(1, Math.floor(height / 0.045));
  let tailWide = 0;
  while (tailCount >= 1) {
    tailWide = (height - 2 * edgePin - (tailCount - 1) * pinTip) / tailCount;
    if (tailWide >= Math.max(pinTip * 1.2, 2 * flare + 0.004)) break;
    tailCount -= 1;
  }
  if (tailCount < 1) return null; // board too small — caller falls back to a plain box
  const tailCenters: number[] = [];
  for (let k = 0; k < tailCount; k++) {
    tailCenters.push(edgePin + tailWide / 2 + k * (pinTip + tailWide));
  }
  return { pinTip, tailWide, flare, tailCenters };
}

/**
 * Tails board: length along local X of the returned outline, height along Y,
 * extruded along Z by `thickness`, then rotated so length runs along the
 * requested world axis by the caller. Returns a centered geometry with
 * length × height × thickness mapped to (z, y, x) — the drawer-side
 * orientation — or null when the board is too small for the joint.
 * `frontDepth` shortens the +z end's engagement (half-blind: the tails
 * stop at the lap, depth = mating stock − lip); `backDepth` does the same
 * for the −z end (half-blind case corners at both ends).
 */
export function tailsBoardGeometry(
  thickness: number,
  height: number,
  length: number,
  spec: JointSpec,
  frontDepth?: number,
  backDepth?: number,
  /** Bottom-panel groove cut along the inner face between the joint
   *  baselines. `innerSign` is the native-Z sign of the inner face. */
  groove?: GrooveSpec & { innerSign: 1 | -1 },
  /** Transverse sockets cut into the inner face (shelf sliding-dovetail mates).
   *  `at` is along the length, `runCenter`/`runLen` along the height. */
  sockets?: Array<{ at: number; width: number; runCenter: number; runLen: number; depth: number; innerSign: 1 | -1 }>,
): THREE.BufferGeometry | null {
  const joint = layoutJoint(height, spec);
  if (!joint) return null;
  const { flare, tailWide, tailCenters } = joint;
  const zo = length / 2;
  const ziFront = zo - (frontDepth ?? spec.depth);
  const ziBack = zo - (backDepth ?? spec.depth);
  const yBottom = -height / 2;

  // Grooved board: a toothed end block at each JOINTED end (a plain/square end
  // gets none, and the grooved middle simply runs out to that end) plus a
  // grooved middle slab. Covers drawer sides (both ends toothed) and case sides
  // that run to the floor (one plain end) carrying a back-panel groove.
  const frontToothed = zo - ziFront > 1e-9;
  const backToothed = zo - ziBack > 1e-9;
  const haveGroove = !!groove && grooveFits(height, groove);
  const haveSockets = !!sockets && sockets.length > 0;
  if (haveGroove || haveSockets) {
    const pieces: THREE.BufferGeometry[] = [];
    for (const sign of [1, -1] as const) {
      const zi = sign > 0 ? ziFront : ziBack;
      if (zo - zi <= 1e-9) continue; // plain end — no teeth here
      const pts: Array<[number, number]> = [[sign * zi, yBottom]];
      for (const c of tailCenters) {
        const cy = yBottom + c;
        pts.push(
          [sign * zi, cy - tailWide / 2 + flare],
          [sign * zo, cy - tailWide / 2],
          [sign * zo, cy + tailWide / 2],
          [sign * zi, cy + tailWide / 2 - flare],
        );
      }
      pts.push([sign * zi, height / 2]);
      const endShape = new THREE.Shape(pts.map(([x, y]) => new THREE.Vector2(x, y)));
      const block = new THREE.ExtrudeGeometry(endShape, { depth: thickness, bevelEnabled: false });
      block.translate(0, 0, -thickness / 2);
      pieces.push(block);
    }
    // Grooved middle: runs to each joint baseline, or out to the board end at a
    // plain end.
    const midX1 = frontToothed ? ziFront : zo; // +length extent
    const midX0 = -(backToothed ? ziBack : zo); // −length extent
    if (haveSockets) {
      // Carve the lengthwise groove and every transverse socket together.
      const innerSign = groove?.innerSign ?? sockets![0].innerSign;
      const pockets: Pocket[] = [];
      if (haveGroove) {
        pockets.push({ x0: midX0, x1: midX1, y0: groove!.center - groove!.width / 2, y1: groove!.center + groove!.width / 2, depth: groove!.depth });
      }
      for (const s of sockets!) {
        pockets.push({ x0: s.at - s.width / 2, x1: s.at + s.width / 2, y0: s.runCenter - s.runLen / 2, y1: s.runCenter + s.runLen / 2, depth: s.depth });
      }
      pieces.push(...pocketedSlab(midX0, midX1, height, thickness, pockets, innerSign));
    } else {
      pieces.push(...grooveBoxes(midX1 - midX0, (midX0 + midX1) / 2, height, thickness, groove!, groove!.innerSign));
    }
    const merged = mergeGeometries(pieces, false);
    for (const piece of pieces) piece.dispose();
    if (!merged) return null;
    merged.rotateY(-Math.PI / 2);
    return merged;
  }

  const points: Array<[number, number]> = [];
  // Bottom edge between the two baselines.
  points.push([-ziBack, yBottom], [ziFront, yBottom]);
  // Front (+z) toothed end, bottom to top.
  for (const c of tailCenters) {
    const cy = yBottom + c;
    points.push(
      [ziFront, cy - tailWide / 2 + flare],
      [zo, cy - tailWide / 2],
      [zo, cy + tailWide / 2],
      [ziFront, cy + tailWide / 2 - flare],
    );
  }
  points.push([ziFront, height / 2]);
  // Top edge.
  points.push([-ziBack, height / 2]);
  // Back toothed end, top to bottom (mirror of the front end). A zero
  // backDepth leaves that end square (a case side that only joins at one
  // end, like an end table's floor-running sides).
  if (zo - ziBack > 1e-9) {
    for (const c of [...tailCenters].reverse()) {
      const cy = yBottom + c;
      points.push(
        [-ziBack, cy + tailWide / 2 - flare],
        [-zo, cy + tailWide / 2],
        [-zo, cy - tailWide / 2],
        [-ziBack, cy - tailWide / 2 + flare],
      );
    }
  }

  const shape = new THREE.Shape(points.map(([x, y]) => new THREE.Vector2(x, y)));
  const geometry = new THREE.ExtrudeGeometry(shape, { depth: thickness, bevelEnabled: false });
  geometry.translate(0, 0, -thickness / 2);
  // Shape X was board length: map (shapeX, shapeY, extrude) → (−z, y, x).
  geometry.rotateY(-Math.PI / 2);
  return geometry;
}

/**
 * Case side panel with a stopped opening bevel: the toothed joint sections
 * at each end stay square; between them, the board's cross-section loses
 * its inner-front corner to a 45° chamfer (the routed opening edge, stopped
 * at the joints). Built in the tails-board frame — same orientation as
 * tailsBoardGeometry — so callers rotate it identically.
 * `innerEzSign` is the extrusion-axis sign of the board's inner face.
 */
export function caseSideTailsGeometry(
  thickness: number,
  height: number,
  length: number,
  spec: JointSpec,
  frontBevel: number,
  innerEzSign: 1 | -1,
): THREE.BufferGeometry | null {
  const joint = layoutJoint(height, spec);
  if (!joint) return null;
  const { flare, tailWide, tailCenters } = joint;
  const zo = length / 2;
  const zi = zo - spec.depth;
  const yBottom = -height / 2;

  const pieces: THREE.BufferGeometry[] = [];
  // Toothed end blocks (square, full cross-section).
  for (const sign of [1, -1] as const) {
    // Bottom baseline corner, tails ascending, top baseline corner; the
    // shape closes back down the baseline edge.
    const points: Array<[number, number]> = [[sign * zi, yBottom]];
    for (const c of tailCenters) {
      const cy = yBottom + c;
      points.push(
        [sign * zi, cy - tailWide / 2 + flare],
        [sign * zo, cy - tailWide / 2],
        [sign * zo, cy + tailWide / 2],
        [sign * zi, cy + tailWide / 2 - flare],
      );
    }
    points.push([sign * zi, height / 2]);
    const shape = new THREE.Shape(points.map(([x, y]) => new THREE.Vector2(x, y)));
    const block = new THREE.ExtrudeGeometry(shape, { depth: thickness, bevelEnabled: false });
    block.translate(0, 0, -thickness / 2);
    pieces.push(block);
  }
  // Middle prism with the chamfered inner-front corner, spanning between
  // the joint baselines. Shape X carries the extrusion (thickness) axis
  // negated, shape Y the pattern; extruded along the board length.
  const px = -innerEzSign * (thickness / 2);
  const qx = innerEzSign * (thickness / 2);
  const dirX = Math.sign(qx - px);
  const shape = new THREE.Shape([
    new THREE.Vector2(qx, yBottom),
    new THREE.Vector2(qx, height / 2),
    new THREE.Vector2(px, height / 2),
    new THREE.Vector2(px, yBottom + frontBevel),
    new THREE.Vector2(px + dirX * frontBevel, yBottom),
  ]);
  const middle = new THREE.ExtrudeGeometry(shape, { depth: 2 * zi, bevelEnabled: false });
  middle.rotateY(Math.PI / 2);
  middle.translate(-zi, 0, 0);
  // The end blocks live in the silhouette frame (shape X = board length);
  // the middle was built pointing length along world X already — bring the
  // blocks to match: their shape X is the length axis too, so both agree.
  const merged = mergeGeometries(pieces.concat(middle), false);
  for (const piece of pieces) piece.dispose();
  middle.dispose();
  if (!merged) return null;
  // Match tailsBoardGeometry's frame: (shape X, shape Y, extrude) → (z, y, x).
  merged.rotateY(-Math.PI / 2);
  return merged;
}

/**
 * Pins board: body along local X with complementary pin prisms at each end.
 * Returns a centered geometry with length × height × thickness mapped to
 * (x, y, z) — the drawer front/back orientation. With `lip`, the sockets
 * are blind: they stop `lip` short of the outer face, and a solid lap
 * plate carries the show face over the joint (half-blind dovetail front).
 */
export function pinsBoardGeometry(
  length: number,
  height: number,
  thickness: number,
  spec: JointSpec,
  /** +1 when the board's outer face is at +Z (a front), −1 for a back. */
  outerSign: 1 | -1,
  scoop?: ScoopSpec,
  lip = 0,
  /**
   * Stopped 45° chamfer on the body's inner/−y arris (case panels: the
   * opening's inside front edge), ending at the joint baselines.
   */
  frontBevel = 0,
  /** Bottom-panel groove on the inner face, plowed along the body length. */
  groove?: GrooveSpec,
): THREE.BufferGeometry | null {
  const joint = layoutJoint(height, spec);
  if (!joint) return null;
  const { tailWide, flare, tailCenters } = joint;
  const yBottom = -height / 2;
  const zOuter = (thickness / 2) * outerSign;
  const zTip = zOuter - lip * outerSign;
  const zInner = -zOuter;
  const bodyLength = length - 2 * spec.depth;
  // The groove opens on the inner face; its slab is offset toward the outer
  // face so a wall of wood remains behind the slot.
  const innerSign = -outerSign as 1 | -1;
  const grooved = groove && grooveFits(height, groove);

  // Non-indexed to match the extruded prisms — mergeGeometries refuses to
  // mix indexed and non-indexed buffers (and returns null, silently
  // degrading the joint to a plain box).
  let bodyPieces: THREE.BufferGeometry[];
  if (scoop && grooved) {
    // Groove slab below, scooped silhouette above (they meet at the slot top).
    const gTop = groove!.center + groove!.width / 2;
    bodyPieces = grooveBoxes(bodyLength, 0, height, thickness, groove!, innerSign, true);
    bodyPieces.push(scoopedBoardGeometry(bodyLength, height, thickness, scoop, gTop));
  } else if (scoop) {
    bodyPieces = [scoopedBoardGeometry(bodyLength, height, thickness, scoop)];
  } else if (grooved) {
    bodyPieces = grooveBoxes(bodyLength, 0, height, thickness, groove!, innerSign);
  } else if (frontBevel > 0) {
    // Pentagon cross-section: the inner-front corner cut at 45°.
    const px = -zInner;
    const qx = -zOuter;
    const dirX = Math.sign(qx - px);
    const shape = new THREE.Shape([
      new THREE.Vector2(qx, yBottom),
      new THREE.Vector2(qx, height / 2),
      new THREE.Vector2(px, height / 2),
      new THREE.Vector2(px, yBottom + frontBevel),
      new THREE.Vector2(px + dirX * frontBevel, yBottom),
    ]);
    const beveled = new THREE.ExtrudeGeometry(shape, { depth: bodyLength, bevelEnabled: false });
    beveled.rotateY(Math.PI / 2);
    beveled.translate(-bodyLength / 2, 0, 0);
    bodyPieces = [beveled];
  } else {
    bodyPieces = [new THREE.BoxGeometry(bodyLength, height, thickness).toNonIndexed()];
  }
  const pieces: THREE.BufferGeometry[] = [...bodyPieces];

  // Pin regions are the y-gaps between/outside the tails: trapezoids in the
  // (z, y) plane — pin tips at the outer face, flaring at the inner face,
  // except along the board edges (half pins stay flush).
  const gaps: Array<[number, number, boolean, boolean]> = [];
  let cursor = yBottom;
  for (const c of tailCenters) {
    const tailBottom = yBottom + c - tailWide / 2;
    gaps.push([cursor, tailBottom, cursor === yBottom, false]);
    cursor = yBottom + c + tailWide / 2;
  }
  gaps.push([cursor, height / 2, false, true]);

  for (const [g0, g1, atBottom, atTop] of gaps) {
    const f0 = atBottom ? 0 : flare;
    const f1 = atTop ? 0 : flare;
    // The opening bevel is cut before assembly and the side panel's bevel
    // plane continues through the front pin, so the two bevels meet on a
    // 45° miter at the opening corner. The front pin is built as an exact
    // two-segment sweep: its cross-section grows linearly from the miter
    // back to the full chamfered pentagon.
    if (atBottom && frontBevel > 0) {
      const b = Math.min(frontBevel, (g1 - g0) * 0.95);
      const tipX = -zTip;
      const innX = -zInner;
      const dir = Math.sign(tipX - innX);
      // Cross-section at sweep distance e from the opening corner.
      const section = (e: number): Array<[number, number]> => {
        const c = g0 + Math.max(0, b - e);
        return [
          [tipX, c],
          [tipX, g1],
          [innX, g1 + f1],
          [innX, g0 + b],
          [innX + dir * Math.min(e, b), c],
        ];
      };
      for (const endSign of [1, -1] as const) {
        const X = (e: number) => endSign * (length / 2 - spec.depth + e);
        const stations = [0, b, spec.depth];
        const positions: number[] = [];
        const tri = (
          a: [number, number, number],
          bb: [number, number, number],
          cc: [number, number, number],
        ) => positions.push(...a, ...bb, ...cc);
        for (let s = 0; s < stations.length - 1; s++) {
          const p0 = section(stations[s]);
          const p1 = section(stations[s + 1]);
          const x0 = X(stations[s]);
          const x1 = X(stations[s + 1]);
          for (let i = 0; i < 5; i++) {
            const j = (i + 1) % 5;
            const a: [number, number, number] = [x0, p0[i][1], -p0[i][0]];
            const bb: [number, number, number] = [x0, p0[j][1], -p0[j][0]];
            const cc: [number, number, number] = [x1, p1[j][1], -p1[j][0]];
            const dd: [number, number, number] = [x1, p1[i][1], -p1[i][0]];
            tri(a, bb, cc);
            tri(a, cc, dd);
          }
        }
        // End caps (fan).
        for (const [e, flip] of [
          [0, false],
          [spec.depth, true],
        ] as Array<[number, boolean]>) {
          const p = section(e);
          const x = X(e);
          for (let i = 1; i < 4; i++) {
            const a: [number, number, number] = [x, p[0][1], -p[0][0]];
            const bb: [number, number, number] = [x, p[i][1], -p[i][0]];
            const cc: [number, number, number] = [x, p[i + 1][1], -p[i + 1][0]];
            if (flip) tri(a, cc, bb);
            else tri(a, bb, cc);
          }
        }
        // Orient every face outward from the solid's centroid, then flat-shade.
        let cx = 0;
        let cy = 0;
        let cz = 0;
        for (let i = 0; i < positions.length; i += 3) {
          cx += positions[i];
          cy += positions[i + 1];
          cz += positions[i + 2];
        }
        const nVerts = positions.length / 3;
        cx /= nVerts;
        cy /= nVerts;
        cz /= nVerts;
        const va = new THREE.Vector3();
        const vb = new THREE.Vector3();
        const vc = new THREE.Vector3();
        const ab = new THREE.Vector3();
        const ac = new THREE.Vector3();
        const n = new THREE.Vector3();
        const out = new THREE.Vector3();
        for (let i = 0; i < positions.length; i += 9) {
          va.fromArray(positions, i);
          vb.fromArray(positions, i + 3);
          vc.fromArray(positions, i + 6);
          ab.subVectors(vb, va);
          ac.subVectors(vc, va);
          n.crossVectors(ab, ac);
          out.set(
            (va.x + vb.x + vc.x) / 3 - cx,
            (va.y + vb.y + vc.y) / 3 - cy,
            (va.z + vb.z + vc.z) / 3 - cz,
          );
          if (n.dot(out) < 0) {
            for (let k = 0; k < 3; k++) {
              const tmp = positions[i + 3 + k];
              positions[i + 3 + k] = positions[i + 6 + k];
              positions[i + 6 + k] = tmp;
            }
          }
        }
        const pin = new THREE.BufferGeometry();
        pin.setAttribute('position', new THREE.BufferAttribute(new Float32Array(positions), 3));
        pin.computeVertexNormals();
        pin.setAttribute(
          'uv',
          new THREE.BufferAttribute(new Float32Array((positions.length / 3) * 2), 2),
        );
        pieces.push(pin);
      }
      continue;
    }
    // rotateY(π/2) maps shape (sx, sy, extrude) → world (extrude, sy, −sx),
    // so shape X carries the NEGATED z coordinate.
    const shape = new THREE.Shape([
      new THREE.Vector2(-zTip, g0),
      new THREE.Vector2(-zTip, g1),
      new THREE.Vector2(-zInner, g1 + f1),
      new THREE.Vector2(-zInner, g0 - f0),
    ]);
    const prism = new THREE.ExtrudeGeometry(shape, { depth: spec.depth, bevelEnabled: false });
    prism.rotateY(Math.PI / 2);
    // The cross-section is uniform along the board, so both ends use the
    // same prism, just translated into place.
    const right = prism.clone();
    right.translate(length / 2 - spec.depth, 0, 0);
    const left = prism;
    left.translate(-length / 2, 0, 0);
    pieces.push(left, right);
  }

  // Half-blind lap: a solid plate between the socket bottoms and the show
  // face, one per end, so the joint never breaks through the front.
  if (lip > 0) {
    for (const sx of [1, -1]) {
      const plate = new THREE.BoxGeometry(spec.depth, height, lip).toNonIndexed();
      plate.translate(sx * (length / 2 - spec.depth / 2), 0, (zOuter + zTip) / 2);
      pieces.push(plate);
    }
  }

  const merged = mergeGeometries(pieces, false);
  for (const piece of pieces) piece.dispose();
  return merged!;
}
