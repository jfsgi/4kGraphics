/**
 * Browser-side harness loaded by the headless Chromium that backs the render
 * API. The server calls `window.__render(config)` via CDP and receives the
 * finished image as a data URL.
 */

import {
  FurnitureEngine,
  defaultSpec,
  type FurnitureSpec,
  type LightingPresetId,
  type Scene,
} from '@4kgraphics/engine';

export interface HarnessRenderConfig {
  spec?: FurnitureSpec;
  scene?: Scene;
  modelUrl?: string;
  material?: string;
  materials?: Record<string, string>;
  panelMaterial?: string;
  stain?: string;
  lighting?: LightingPresetId;
  background?: string;
  camera?: { azimuthDeg?: number; elevationDeg?: number; distanceFactor?: number };
  width?: number;
  height?: number;
  supersample?: number;
  textureSize?: number;
  transparent?: boolean;
  ssao?: boolean;
  photoFinish?: boolean;
}

const engine = new FurnitureEngine({ container: document.getElementById('stage')! });

/** Builds the piece (spec / scene / model) and applies materials. Shared by
 * render and AR export so both produce the exact same configured object. */
async function buildPiece(config: HarnessRenderConfig): Promise<void> {
  if (config.scene) {
    engine.loadScene(config.scene);
  } else if (config.modelUrl) {
    await engine.loadModel(config.modelUrl);
  } else {
    engine.showFurniture(config.spec ?? defaultSpec('table'));
  }

  if (config.material) engine.setMaterial(config.material);
  if (config.panelMaterial) engine.setPanelMaterial(config.panelMaterial);
  if (config.materials) {
    for (const [part, materialId] of Object.entries(config.materials)) {
      engine.setMaterial(materialId, part);
    }
  }
  if (config.stain) engine.setStain(config.stain);
  // Scanned-material textures stream in asynchronously — wait for them.
  await engine.materials.texturesReady();
}

/** Encodes bytes to base64 for transport back to the server over CDP. */
function bytesToBase64(bytes: Uint8Array): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(String(reader.result).split(',')[1] ?? '');
    reader.onerror = () => reject(reader.error ?? new Error('Failed to encode bytes'));
    reader.readAsDataURL(new Blob([bytes]));
  });
}

async function exportAR(config: HarnessRenderConfig): Promise<{ glb: string; usdz: string }> {
  const textureSize = config.textureSize ?? 2048;
  engine.setTextureResolution(textureSize);
  await buildPiece(config);
  const glb = await engine.exportGLB({ textureSize });
  const usdz = await engine.exportUSDZ({ textureSize });
  return { glb: await bytesToBase64(glb), usdz: await bytesToBase64(usdz) };
}

async function render(config: HarnessRenderConfig): Promise<string> {
  if (config.textureSize) engine.setTextureResolution(config.textureSize);
  if (config.lighting) engine.setLighting(config.lighting);
  if (config.background) engine.setBackground(config.background);

  await buildPiece(config);

  if (config.camera) {
    engine.setCameraOrbit(
      config.camera.azimuthDeg ?? 35,
      config.camera.elevationDeg ?? 18,
      config.camera.distanceFactor ?? 1,
    );
  }

  const blob = await engine.renderSnapshot({
    width: config.width ?? 3840,
    height: config.height ?? 2160,
    supersample: config.supersample ?? 2,
    transparent: config.transparent ?? false,
    ssao: config.ssao,
    photoFinish: config.photoFinish,
  });

  return await new Promise<string>((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(String(reader.result));
    reader.onerror = () => reject(reader.error ?? new Error('Failed to encode image'));
    reader.readAsDataURL(blob);
  });
}

declare global {
  interface Window {
    __render: (config: HarnessRenderConfig) => Promise<string>;
    __exportAR: (config: HarnessRenderConfig) => Promise<{ glb: string; usdz: string }>;
    __ready: boolean;
  }
}

async function registerScannedMaterials() {
  try {
    const response = await fetch('textures/scanned/manifest.json');
    if (!response.ok) return;
    for (const def of await response.json()) engine.registerScannedMaterial(def);
  } catch {
    // No scanned set shipped — procedural materials only.
  }
}

window.__render = render;
window.__exportAR = exportAR;
void registerScannedMaterials().then(() => {
  window.__ready = true;
});
