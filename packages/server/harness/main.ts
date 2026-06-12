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
} from '@4kgraphics/engine';

export interface HarnessRenderConfig {
  spec?: FurnitureSpec;
  modelUrl?: string;
  material?: string;
  materials?: Record<string, string>;
  panelMaterial?: string;
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

async function render(config: HarnessRenderConfig): Promise<string> {
  if (config.textureSize) engine.setTextureResolution(config.textureSize);
  if (config.lighting) engine.setLighting(config.lighting);
  if (config.background) engine.setBackground(config.background);

  if (config.modelUrl) {
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
  if (config.camera) {
    engine.setCameraOrbit(
      config.camera.azimuthDeg ?? 35,
      config.camera.elevationDeg ?? 18,
      config.camera.distanceFactor ?? 1,
    );
  }

  // Scanned-material textures stream in asynchronously — wait for them.
  await engine.materials.texturesReady();

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
void registerScannedMaterials().then(() => {
  window.__ready = true;
});
