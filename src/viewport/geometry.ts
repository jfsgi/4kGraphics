import * as THREE from 'three';

/**
 * Tapered box (3D nine-patch slice): rectangular top and bottom of different sizes.
 * `align` per axis: 0 = taper centered, ±1 = that face stays flush (e.g. a leg whose
 * outer faces stay straight while the inner faces taper). Model space, Z-up.
 */
export function taperedBoxGeometry(
  top: [number, number],
  bottom: [number, number],
  height: number,
  align: [number, number],
): THREE.BufferGeometry {
  const [tw, td] = top;
  const [bw, bd] = bottom;
  const hz = height / 2;
  const ox = (align[0] * (tw - bw)) / 2;
  const oy = (align[1] * (td - bd)) / 2;

  const t = [
    [-tw / 2, -td / 2, hz],
    [tw / 2, -td / 2, hz],
    [tw / 2, td / 2, hz],
    [-tw / 2, td / 2, hz],
  ];
  const b = [
    [ox - bw / 2, oy - bd / 2, -hz],
    [ox + bw / 2, oy - bd / 2, -hz],
    [ox + bw / 2, oy + bd / 2, -hz],
    [ox - bw / 2, oy + bd / 2, -hz],
  ];

  const verts: number[] = [];
  const quad = (a: number[], q: number[], c: number[], d: number[]) => {
    verts.push(...a, ...q, ...c, ...a, ...c, ...d);
  };
  quad(t[0], t[1], t[2], t[3]); // top (+Z)
  quad(b[0], b[3], b[2], b[1]); // bottom (−Z)
  quad(b[0], b[1], t[1], t[0]); // −Y
  quad(b[1], b[2], t[2], t[1]); // +X
  quad(b[2], b[3], t[3], t[2]); // +Y
  quad(b[3], b[0], t[0], t[3]); // −X

  const geo = new THREE.BufferGeometry();
  geo.setAttribute('position', new THREE.Float32BufferAttribute(verts, 3));
  geo.computeVertexNormals();
  return geo;
}
