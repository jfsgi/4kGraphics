import { describe, expect, it } from 'vitest';
import * as THREE from 'three';
import type { MaterialLibrary } from '../materials/MaterialLibrary.js';
import { buildSceneGroup } from './SceneBuilder.js';
import type { Scene } from './types.js';

// Stub the material library: real texture generation needs a DOM canvas, and
// these tests are about geometry/assembly, not materials. `has` mirrors the
// engine's preset ids so the unknown-material fallback can be exercised.
const KNOWN = new Set(['oak', 'walnut', 'cherry', 'maple', 'mahogany', 'cedar', 'birchply', 'paint-white', 'paint-black', 'steel', 'brass']);
const lib = {
  has: (id: string) => KNOWN.has(id),
  get: () => new THREE.MeshStandardMaterial(),
} as unknown as MaterialLibrary;

function countMeshes(obj: THREE.Object3D): number {
  let n = 0;
  obj.traverse((o) => {
    if ((o as THREE.Mesh).isMesh) n += 1;
  });
  return n;
}

describe('scene builder', () => {
  it('builds a single box part on the floor, scaled to meters', () => {
    const scene: Scene = {
      parts: [
        {
          id: 'p1',
          name: 'Top',
          material: 'white-oak',
          primitives: [{ shape: 'box', size: [600, 400, 18], at: [0, 0, 0], grain: 'x' }],
        },
      ],
    };
    const group = buildSceneGroup(scene, lib);
    expect(countMeshes(group)).toBe(1);

    const box = new THREE.Box3().setFromObject(group);
    const size = box.getSize(new THREE.Vector3());
    // Model X (width, 600 mm) stays X; model Z (height, 18 mm) becomes world Y.
    expect(size.x).toBeCloseTo(0.6, 2);
    expect(size.y).toBeCloseTo(0.018, 3);
    expect(size.z).toBeCloseTo(0.4, 2);
    expect(box.min.y).toBeCloseTo(0, 4); // sits on the floor
  });

  it('names meshes by part so per-part materials can target them', () => {
    const scene: Scene = {
      parts: [{ id: 's', name: 'Side', material: 'walnut', primitives: [{ shape: 'box', size: [500, 120, 12], at: [0, 0, 0] }] }],
    };
    const group = buildSceneGroup(scene, lib);
    const names = new Set<string>();
    group.traverse((o) => {
      if ((o as THREE.Mesh).isMesh) names.add(o.name);
    });
    expect(names.has('Side')).toBe(true);
  });

  it('builds a through-dovetail jointed board via the frozen joinery', () => {
    const scene: Scene = {
      parts: [
        {
          id: 'side',
          name: 'Drawer side',
          material: 'maple',
          primitives: [
            {
              shape: 'jointedBoard',
              role: 'tails',
              length: 500,
              height: 120,
              thickness: 12,
              at: [0, 0, 0],
              lengthAxis: 'z',
              thicknessAxis: 'x',
              joint: 'dovetail',
              jointDepth: 12,
            },
          ],
        },
      ],
    };
    const group = buildSceneGroup(scene, lib);
    expect(countMeshes(group)).toBe(1);
    const size = new THREE.Box3().setFromObject(group).getSize(new THREE.Vector3());
    // The 500 mm board length is its longest dimension → ~0.5 m.
    expect(Math.max(size.x, size.y, size.z)).toBeCloseTo(0.5, 1);
  });

  it('places multiple instances by their floor position', () => {
    const part: Scene['parts'] = [{ id: 'leg', name: 'Leg', material: 'cherry', primitives: [{ shape: 'box', size: [40, 40, 700], at: [0, 0, 0] }] }];
    const scene: Scene = {
      instances: [
        { id: 'a', position: [-300, 0], rotationZ: 0, parts: part! },
        { id: 'b', position: [300, 0], rotationZ: 0, parts: part! },
      ],
    };
    const group = buildSceneGroup(scene, lib);
    expect(countMeshes(group)).toBe(2);
    const size = new THREE.Box3().setFromObject(group).getSize(new THREE.Vector3());
    // Two legs 600 mm apart plus their 40 mm width → ~0.64 m across.
    expect(size.x).toBeCloseTo(0.64, 2);
  });

  it('falls back to oak for an unknown material without throwing', () => {
    const scene: Scene = {
      parts: [{ id: 'x', name: 'Mystery', material: 'unobtanium', primitives: [{ shape: 'box', size: [100, 100, 100], at: [0, 0, 0] }] }],
    };
    expect(() => buildSceneGroup(scene, lib)).not.toThrow();
  });
});
