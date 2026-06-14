import { describe, expect, it } from 'vitest';
import * as THREE from 'three';
import {
  pinsBoardGeometry,
  tailsBoardGeometry,
  type GrooveSpec,
  type JointSpec,
} from './joinery.js';

const spec: JointSpec = { type: 'dovetail', depth: 0.012, edgePins: true };
const carcass: JointSpec = { type: 'dovetail', depth: 0.012 };

function size(geo: THREE.BufferGeometry): THREE.Vector3 {
  geo.computeBoundingBox();
  return geo.boundingBox!.getSize(new THREE.Vector3());
}
const verts = (geo: THREE.BufferGeometry) => geo.attributes.position.count;

// A drawer-bottom groove: ~5 mm up from the bottom edge of a 120 mm board.
const groove: GrooveSpec = { center: -0.045, width: 0.006, depth: 0.006 };

describe('bottom-panel groove (dado)', () => {
  it('grooves a pins board without changing its outer size', () => {
    const plain = pinsBoardGeometry(0.4, 0.12, 0.012, spec, 1)!;
    const grooved = pinsBoardGeometry(0.4, 0.12, 0.012, spec, 1, undefined, 0, 0, undefined, groove)!;
    expect(grooved).not.toBeNull();
    const a = size(plain);
    const b = size(grooved);
    // length × height × thickness extents are unchanged by the slot.
    expect(b.x).toBeCloseTo(a.x, 4);
    expect(b.y).toBeCloseTo(a.y, 4);
    expect(b.z).toBeCloseTo(a.z, 4);
    // The grooved body is built from extra boxes (the slot), so it has more verts.
    expect(verts(grooved)).toBeGreaterThan(verts(plain));
  });

  it('grooves a tails board (edge-pin drawer side)', () => {
    const plain = tailsBoardGeometry(0.012, 0.12, 0.4, spec)!;
    const grooved = tailsBoardGeometry(0.012, 0.12, 0.4, spec, undefined, undefined, undefined, undefined, {
      ...groove,
      innerSign: 1,
    })!;
    expect(grooved).not.toBeNull();
    const b = size(grooved);
    // Tails frame: length → Z, height → Y, thickness → X.
    expect(b.z).toBeCloseTo(0.4, 3);
    expect(b.y).toBeCloseTo(0.12, 3);
    expect(b.x).toBeCloseTo(0.012, 3);
  });

  it('cuts a transverse socket into a tails board (sliding-dovetail mate)', () => {
    const socketed = tailsBoardGeometry(0.012, 0.12, 0.4, carcass, undefined, undefined, undefined, undefined, undefined, [
      { at: 0, width: 0.02, runCenter: 0, runLen: 0.05, depth: 0.006, innerSign: 1 },
    ])!;
    expect(socketed).not.toBeNull();
    expect(verts(socketed)).toBeGreaterThan(0);
  });

  it('ignores a groove that does not fit the board height (falls back cleanly)', () => {
    const tooTall: GrooveSpec = { center: 0, width: 0.2, depth: 0.006 };
    const pins = pinsBoardGeometry(0.4, 0.12, 0.012, spec, 1, undefined, 0, 0, undefined, tooTall)!;
    const tails = tailsBoardGeometry(0.012, 0.12, 0.4, spec, undefined, undefined, undefined, undefined, {
      ...tooTall,
      innerSign: 1,
    })!;
    // Both still build (as a normal board), no crash.
    expect(pins).not.toBeNull();
    expect(tails).not.toBeNull();
    expect(size(pins).y).toBeCloseTo(0.12, 3);
  });
});
