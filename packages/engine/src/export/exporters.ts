// 3D file exporters for AR. The engine works in metres (Y-up), so exports are
// already real-world scale — `<model-viewer ar-scale="fixed">` and iOS Quick
// Look place the piece at its true size. GLB feeds WebXR / Scene Viewer; USDZ
// feeds iOS Quick Look (which can't take a GLB).
//
// Texture embedding (procedural wood, etc.) needs a canvas, so these run in a
// browser/WebGL context — in production, the server's headless-Chromium render
// harness. `maxTextureSize` keeps AR files to a few MB; 4K maps are far too big.

import type * as THREE from 'three';
import { GLTFExporter } from 'three/examples/jsm/exporters/GLTFExporter.js';
import { USDZExporter } from 'three/examples/jsm/exporters/USDZExporter.js';

export interface ExportOptions {
  /** Max embedded texture size in px (default 2048). AR files must stay small. */
  textureSize?: number;
}

/** Exports an object to a binary glTF (.glb) as bytes. */
export async function exportGLB(object: THREE.Object3D, opts: ExportOptions = {}): Promise<Uint8Array> {
  const exporter = new GLTFExporter();
  const result = await exporter.parseAsync(object, {
    binary: true,
    onlyVisible: true,
    maxTextureSize: opts.textureSize ?? 2048,
  });
  return new Uint8Array(result as ArrayBuffer);
}

/** Exports an object to a USDZ (.usdz) as bytes, for iOS Quick Look. */
export async function exportUSDZ(object: THREE.Object3D, opts: ExportOptions = {}): Promise<Uint8Array> {
  const exporter = new USDZExporter();
  // quickLookCompatible trims the USD to what Quick Look reliably renders.
  return await exporter.parseAsync(object, {
    maxTextureSize: opts.textureSize ?? 2048,
    quickLookCompatible: true,
  });
}
