import * as THREE from 'three';
import type { PbrMaps, RGB } from './procedural.js';
import {
  generateBrushedMetalMaps,
  generateFabricMaps,
  generatePaintMaps,
  generateWoodMaps,
} from './procedural.js';

export interface MaterialInfo {
  id: string;
  label: string;
  category: 'wood' | 'paint' | 'metal' | 'fabric';
  /** Representative color for UI swatches, as CSS hex. */
  swatch: string;
}

type Generator = (size: number) => PbrMaps;

interface Preset {
  info: MaterialInfo;
  metalness: number;
  clearcoat: number;
  generate: Generator;
}

function hex(rgb: RGB): string {
  return '#' + rgb.map((c) => c.toString(16).padStart(2, '0')).join('');
}

function woodPreset(
  id: string,
  label: string,
  light: RGB,
  dark: RGB,
  seed: number,
  ringCount: number,
): Preset {
  return {
    info: { id, label, category: 'wood', swatch: hex(light) },
    metalness: 0,
    clearcoat: 0.25,
    generate: (size) =>
      generateWoodMaps(size, {
        seed,
        lightColor: light,
        darkColor: dark,
        ringCount,
        turbulence: 1.6,
        baseRoughness: 0.45,
      }),
  };
}

const PRESETS: Preset[] = [
  woodPreset('oak', 'White Oak', [206, 178, 138], [138, 106, 66], 11, 28),
  woodPreset('walnut', 'Black Walnut', [112, 78, 55], [56, 36, 24], 23, 34),
  woodPreset('cherry', 'Cherry', [178, 113, 78], [116, 62, 38], 37, 30),
  {
    info: { id: 'paint-white', label: 'Matte White Paint', category: 'paint', swatch: '#f2f0ea' },
    metalness: 0,
    clearcoat: 0,
    generate: (size) =>
      generatePaintMaps(size, { seed: 41, color: [242, 240, 234], roughness: 0.55 }),
  },
  {
    info: { id: 'paint-forest', label: 'Forest Green Paint', category: 'paint', swatch: '#3d5240' },
    metalness: 0,
    clearcoat: 0.15,
    generate: (size) =>
      generatePaintMaps(size, { seed: 43, color: [61, 82, 64], roughness: 0.42 }),
  },
  {
    info: { id: 'steel', label: 'Brushed Steel', category: 'metal', swatch: '#c8cacd' },
    metalness: 1,
    clearcoat: 0,
    generate: (size) =>
      generateBrushedMetalMaps(size, { seed: 53, color: [200, 202, 205], baseRoughness: 0.32 }),
  },
  {
    info: { id: 'brass', label: 'Brushed Brass', category: 'metal', swatch: '#cda955' },
    metalness: 1,
    clearcoat: 0,
    generate: (size) =>
      generateBrushedMetalMaps(size, { seed: 59, color: [205, 169, 85], baseRoughness: 0.36 }),
  },
  {
    info: { id: 'linen', label: 'Natural Linen', category: 'fabric', swatch: '#d8cdb8' },
    metalness: 0,
    clearcoat: 0,
    generate: (size) =>
      generateFabricMaps(size, {
        seed: 61,
        color: [216, 205, 184],
        shadowColor: [150, 138, 116],
        threadCount: 160,
      }),
  },
];

/**
 * Lazily generates and caches PBR materials backed by procedural textures.
 * Texture generation is the expensive step (a full noise pass per material),
 * so materials are built on first use and reused after that.
 */
export class MaterialLibrary {
  private cache = new Map<string, THREE.MeshPhysicalMaterial>();

  constructor(private textureSize = 2048) {}

  list(): MaterialInfo[] {
    return PRESETS.map((p) => p.info);
  }

  has(id: string): boolean {
    return PRESETS.some((p) => p.info.id === id);
  }

  get(id: string): THREE.MeshPhysicalMaterial {
    const cached = this.cache.get(id);
    if (cached) return cached;
    const preset = PRESETS.find((p) => p.info.id === id);
    if (!preset) {
      throw new Error(`Unknown material "${id}". Available: ${PRESETS.map((p) => p.info.id).join(', ')}`);
    }
    const maps = preset.generate(this.textureSize);
    const material = new THREE.MeshPhysicalMaterial({
      map: maps.map,
      roughnessMap: maps.roughnessMap,
      normalMap: maps.normalMap,
      roughness: 1,
      metalness: preset.metalness,
      clearcoat: preset.clearcoat,
      clearcoatRoughness: 0.35,
      normalScale: new THREE.Vector2(0.6, 0.6),
    });
    material.name = id;
    this.cache.set(id, material);
    return material;
  }

  /** Current texture resolution (per side, in pixels). */
  get resolution(): number {
    return this.textureSize;
  }

  /**
   * Switches texture resolution (e.g. 2048 → 4096 for full 4K textures) and
   * clears the cache so materials regenerate at the new size.
   */
  setResolution(size: number): void {
    if (size === this.textureSize) return;
    this.textureSize = size;
    this.dispose();
  }

  dispose(): void {
    for (const material of this.cache.values()) {
      material.map?.dispose();
      material.roughnessMap?.dispose();
      material.normalMap?.dispose();
      material.dispose();
    }
    this.cache.clear();
  }
}
