import { beforeAll, describe, expect, it } from 'vitest';
import { MeshStandardMaterial } from 'three';
import { buildGroup } from '../parametric/geometry.js';
import { buildLayout } from '../parametric/layout.js';
import { defaultDrawerUnitSpec } from '../parametric/spec.js';
import { exportGLB, exportUSDZ } from './exporters.js';

// GLTFExporter's binary path reads a Blob through FileReader (a browser API);
// the production exporter runs in the headless-Chromium harness where it exists.
// For this Node test, polyfill the minimal slice it uses. (Node 18+ has Blob.)
beforeAll(() => {
  if (typeof (globalThis as { FileReader?: unknown }).FileReader === 'undefined') {
    class FileReaderPolyfill {
      result: ArrayBuffer | string | null = null;
      onload: (() => void) | null = null;
      onloadend: (() => void) | null = null;
      onerror: (() => void) | null = null;
      private done() {
        this.onload?.();
        this.onloadend?.(); // GLTFExporter waits on onloadend
      }
      readAsArrayBuffer(blob: Blob) {
        blob.arrayBuffer().then((buf) => {
          this.result = buf;
          this.done();
        }, () => this.onerror?.());
      }
      readAsDataURL(blob: Blob) {
        blob.arrayBuffer().then((buf) => {
          this.result = `data:application/octet-stream;base64,${Buffer.from(buf).toString('base64')}`;
          this.done();
        }, () => this.onerror?.());
      }
    }
    (globalThis as { FileReader?: unknown }).FileReader = FileReaderPolyfill;
  }
});

// Procedural materials need a canvas to embed; in Node we export a textureless
// piece (a plain material) — texture embedding is covered by the harness path.
function drawerUnitGroup() {
  const layout = buildLayout(defaultDrawerUnitSpec());
  return buildGroup(layout, new MeshStandardMaterial({ color: 0x8a6a44 }));
}

describe('AR exporters', () => {
  it('exports a drawerunit to a non-empty, valid GLB', async () => {
    const glb = await exportGLB(drawerUnitGroup());
    expect(glb.byteLength).toBeGreaterThan(1000);
    // GLB magic 'glTF' (0x46546C67, little-endian) in the 12-byte header.
    const magic = new DataView(glb.buffer, glb.byteOffset, 4).getUint32(0, true);
    expect(magic).toBe(0x46546c67);
  });

  it('exports a drawerunit to a non-empty USDZ (zip)', async () => {
    const usdz = await exportUSDZ(drawerUnitGroup());
    expect(usdz.byteLength).toBeGreaterThan(1000);
    // USDZ is an (uncompressed) zip: local file header signature 'PK\x03\x04'.
    expect(usdz[0]).toBe(0x50);
    expect(usdz[1]).toBe(0x4b);
  });
});
