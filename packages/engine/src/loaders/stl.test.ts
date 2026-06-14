import { describe, expect, it } from 'vitest';
import * as THREE from 'three';
import {
  dropOutlierTriangles,
  guessUpAxis,
  isBinaryStl,
  orientToYUp,
  parseStlGeometry,
} from './ModelLoader.js';

/** A recognizable furniture mesh: a 400×10×400mm top on four 600mm legs. */
function tableFaces(): number[][][] {
  const faces: number[][][] = [];
  const box = (x0: number, y0: number, z0: number, x1: number, y1: number, z1: number) => {
    const v = [
      [x0, y0, z0], [x1, y0, z0], [x1, y1, z0], [x0, y1, z0],
      [x0, y0, z1], [x1, y0, z1], [x1, y1, z1], [x0, y1, z1],
    ];
    const quads = [[0, 1, 2, 3], [5, 4, 7, 6], [4, 0, 3, 7], [1, 5, 6, 2], [3, 2, 6, 7], [4, 5, 1, 0]];
    for (const [a, b, c, d] of quads) {
      faces.push([v[a], v[b], v[c]]);
      faces.push([v[a], v[c], v[d]]);
    }
  };
  box(0, 590, 0, 400, 600, 400); // top
  box(0, 0, 0, 40, 590, 40);
  box(360, 0, 0, 400, 590, 40);
  box(0, 0, 360, 40, 590, 400);
  box(360, 0, 360, 400, 590, 400);
  return faces;
}

function asciiStl(faces: number[][][]): ArrayBuffer {
  let s = 'solid SketchUp\n';
  for (const [a, b, c] of faces) {
    s += ' facet normal 0 0 0\n  outer loop\n';
    for (const p of [a, b, c]) s += `   vertex ${p[0]} ${p[1]} ${p[2]}\n`;
    s += '  endloop\n endfacet\n';
  }
  s += 'endsolid SketchUp\n';
  return new TextEncoder().encode(s).buffer;
}

function binaryStl(faces: number[][][], header: string, padBytes = 0): ArrayBuffer {
  const buf = new ArrayBuffer(84 + faces.length * 50 + padBytes);
  const dv = new DataView(buf);
  const h = new TextEncoder().encode(header);
  for (let i = 0; i < Math.min(80, h.length); i++) dv.setUint8(i, h[i]);
  dv.setUint32(80, faces.length, true);
  let o = 84;
  for (const [a, b, c] of faces) {
    o += 12; // zeroed normal
    for (const p of [a, b, c]) {
      dv.setFloat32(o, p[0], true);
      dv.setFloat32(o + 4, p[1], true);
      dv.setFloat32(o + 8, p[2], true);
      o += 12;
    }
    o += 2; // attribute byte count
  }
  return buf;
}

function bbox(geometry: THREE.BufferGeometry): THREE.Vector3 {
  geometry.computeBoundingBox();
  return geometry.boundingBox!.getSize(new THREE.Vector3());
}

describe('STL parsing', () => {
  const faces = tableFaces();
  const expectedTris = faces.length; // 60

  it('detects encodings correctly, including the binary-with-"solid"-header trap', () => {
    expect(isBinaryStl(asciiStl(faces))).toBe(false);
    expect(isBinaryStl(binaryStl(faces, 'MEJA export'))).toBe(true);
    expect(isBinaryStl(binaryStl(faces, 'solid SketchUp Pro'))).toBe(true);
    // Padded binary whose header begins with "solid" — the case three.js misreads.
    expect(isBinaryStl(binaryStl(faces, 'solid SketchUp', 1))).toBe(true);
  });

  it('parses clean ASCII and binary identically', () => {
    for (const buf of [asciiStl(faces), binaryStl(faces, 'MEJA export')]) {
      const g = parseStlGeometry(buf);
      expect(g.getAttribute('position').count / 3).toBe(expectedTris);
      const s = bbox(g);
      expect([s.x, s.y, s.z]).toEqual([400, 600, 400]);
    }
  });

  it('recovers a binary STL with a "solid"-prefixed header and size mismatch', () => {
    // three.js's loader collapses this to 0 triangles; our path must not.
    const g = parseStlGeometry(binaryStl(faces, 'solid SketchUp', 1));
    expect(g.getAttribute('position').count / 3).toBe(expectedTris);
    const s = bbox(g);
    expect([s.x, s.y, s.z]).toEqual([400, 600, 400]);
  });

  it('keeps parsing a binary STL whose header begins with "solid" and size is exact', () => {
    const g = parseStlGeometry(binaryStl(faces, 'solid SketchUp Pro export'));
    expect(g.getAttribute('position').count / 3).toBe(expectedTris);
  });

  it('drops a stray triangle far from the model so the unit-guess stays sane', () => {
    // A construction artifact 100 m from the part — wrecks bbox-based scaling.
    const stray = [[0, 0, 0], [100000, 0, 0], [0, 100000, 0]];
    const g = parseStlGeometry(binaryStl([...faces, stray], 'CAD export'));
    expect(g.getAttribute('position').count / 3).toBe(expectedTris + 1); // present before cleanup
    const cleaned = dropOutlierTriangles(g);
    expect(cleaned.getAttribute('position').count / 3).toBe(expectedTris); // stray removed
    const s = bbox(cleaned);
    expect([s.x, s.y, s.z]).toEqual([400, 600, 400]); // back to the real model size
  });

  it('leaves a clean model untouched', () => {
    const g = parseStlGeometry(binaryStl(faces, 'CAD export'));
    const cleaned = dropOutlierTriangles(g);
    expect(cleaned.getAttribute('position').count / 3).toBe(expectedTris);
  });

  it('detects a Z-up model and stands it upright', () => {
    // A wide flat slab (a tabletop) thin in Z — its big faces point ±Z, so up = Z.
    const slab = (() => {
      const f: number[][][] = [];
      const box = (x0: number, y0: number, z0: number, x1: number, y1: number, z1: number) => {
        const v = [
          [x0, y0, z0], [x1, y0, z0], [x1, y1, z0], [x0, y1, z0],
          [x0, y0, z1], [x1, y0, z1], [x1, y1, z1], [x0, y1, z1],
        ];
        const q = [[0, 1, 2, 3], [5, 4, 7, 6], [4, 0, 3, 7], [1, 5, 6, 2], [3, 2, 6, 7], [4, 5, 1, 0]];
        for (const [a, b, c, d] of q) { f.push([v[a], v[b], v[c]]); f.push([v[a], v[c], v[d]]); }
      };
      box(-600, -300, 380, 600, 300, 400); // wide top slab near the high end of Z
      box(-20, -20, 0, 20, 20, 380); // a center post down to the floor
      return f;
    })();
    const g = parseStlGeometry(binaryStl(slab, 'CAD export'));
    const group = new THREE.Group();
    group.add(new THREE.Mesh(g));
    expect(guessUpAxis(group).axis).toBe(2); // up = Z
    orientToYUp(group, 'auto');
    const box3 = new THREE.Box3().setFromObject(group).getSize(new THREE.Vector3());
    // After standing it up, the original Z (height/post) is now vertical (Y).
    expect(box3.x).toBeCloseTo(1200, 0); // width preserved
    expect(box3.y).toBeCloseTo(400, 0); // height now along Y
    expect(box3.z).toBeCloseTo(600, 0); // depth preserved
  });

  it('leaves a Y-up flat-top model alone', () => {
    const g = parseStlGeometry(binaryStl(faces, 'CAD export')); // table: top faces ±Y
    const group = new THREE.Group();
    group.add(new THREE.Mesh(g));
    expect(guessUpAxis(group).axis).toBe(1); // Y
  });
});
