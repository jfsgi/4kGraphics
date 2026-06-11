import * as THREE from 'three';

/**
 * Replaces a geometry's UVs with world-scale box-projected UVs so one texture
 * tile covers `tileSizeM` meters on every part regardless of its dimensions.
 * If `grainAxis` lies in a face's plane, the V axis (texture grain direction)
 * is aligned to it, so wood grain runs along legs, rails, and panels the way
 * a woodworker would orient the stock.
 *
 * Also writes a vertex-color attribute that darkens end-grain faces (faces
 * whose normal runs along the grain) — this is what makes dovetail tails
 * and pins read against the surrounding face grain, just like real wood.
 */
export function applyBoxUVs(
  geometry: THREE.BufferGeometry,
  tileSizeM: number,
  grainAxis: 'x' | 'y' | 'z' = 'y',
  offsetU = 0,
  offsetV = 0,
): void {
  const position = geometry.attributes.position;
  const normal = geometry.attributes.normal;
  if (!normal) return;
  const uvs = new Float32Array(position.count * 2);
  const colors = new Float32Array(position.count * 3);
  const axes: Array<'x' | 'y' | 'z'> = ['x', 'y', 'z'];

  for (let i = 0; i < position.count; i++) {
    const nx = Math.abs(normal.getX(i));
    const ny = Math.abs(normal.getY(i));
    const nz = Math.abs(normal.getZ(i));
    const dominant = nx >= ny && nx >= nz ? 'x' : ny >= nz ? 'y' : 'z';
    const inPlane = axes.filter((a) => a !== dominant) as ['x' | 'y' | 'z', 'x' | 'y' | 'z'];
    // V carries the grain axis when it lies in this face's plane.
    let uAxis = inPlane[0];
    let vAxis = inPlane[1];
    if (inPlane[0] === grainAxis) {
      uAxis = inPlane[1];
      vAxis = inPlane[0];
    }
    const coord = { x: position.getX(i), y: position.getY(i), z: position.getZ(i) };
    uvs[i * 2] = coord[uAxis] / tileSizeM + offsetU;
    uvs[i * 2 + 1] = coord[vAxis] / tileSizeM + offsetV;

    // End grain: face normal parallel to the grain — darker and warmer.
    const endGrain = dominant === grainAxis;
    colors[i * 3] = endGrain ? 0.72 : 1;
    colors[i * 3 + 1] = endGrain ? 0.64 : 1;
    colors[i * 3 + 2] = endGrain ? 0.56 : 1;
  }

  geometry.setAttribute('uv', new THREE.BufferAttribute(uvs, 2));
  geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));
}
