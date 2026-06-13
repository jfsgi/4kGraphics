import * as THREE from 'three';
import type { PbrMaps, RGB } from './procedural.js';
import {
  generateBrushedMetalMaps,
  generateFabricMaps,
  generatePaintMaps,
  generateWoodMaps,
} from './procedural.js';
import { makePlywood } from './plywood.js';

export interface MaterialInfo {
  id: string;
  label: string;
  category: 'wood' | 'paint' | 'metal' | 'fabric' | 'scanned';
  /** Representative color for UI swatches, as CSS hex. */
  swatch: string;
}

type Generator = (size: number) => PbrMaps;
type WoodParams = Parameters<typeof generateWoodMaps>[1];

interface Preset {
  info: MaterialInfo;
  metalness: number;
  clearcoat: number;
  /** Extra texture repeat for small-scale patterns (weave) so they stay crisp. */
  uvRepeat?: number;
  generate: Generator;
  /** Present on woods so stains can recolor the species and regenerate. */
  woodParams?: WoodParams;
  /** Renders stacked-veneer laminations on end-grain edges (sheet goods). */
  plywood?: boolean;
  /** Lamination spacing in mm (plywood only; default 2). */
  plySpacingMm?: number;
}

function hex(rgb: RGB): string {
  return '#' + rgb.map((c) => c.toString(16).padStart(2, '0')).join('');
}

function woodPreset(
  id: string,
  label: string,
  params: Omit<WoodParams, 'plankCount'> & {
    plankCount?: number;
    plywood?: boolean;
    plySpacingMm?: number;
  },
): Preset {
  const { plywood, plySpacingMm, ...wood } = params;
  const woodParams: WoodParams = { plankCount: 12, ...wood };
  return {
    info: { id, label, category: 'wood', swatch: hex(params.lightColor) },
    metalness: 0,
    clearcoat: 0.22,
    generate: (size) => generateWoodMaps(size, woodParams),
    woodParams,
    plywood,
    plySpacingMm,
  };
}

export interface StainInfo {
  id: string;
  label: string;
  /** Approximate finished color for UI swatches, as CSS hex. */
  swatch: string;
}

export interface StainDef {
  id: string;
  label: string;
  /** Pigment color. */
  color: RGB;
  /** Pigment load — how far the wood color moves toward the stain. */
  strength: number;
  /** Penetrating stain keeps the wood's light/dark grain; a wash sits on top. */
  mode: 'stain' | 'wash';
}

/**
 * Hand-applied finish palette. Stains recolor any procedural wood species
 * while preserving its grain figure (swatches reference: cherry base).
 */
export const STAINS: StainDef[] = [
  { id: 'marine-blue', label: 'Marine Blue', color: [110, 106, 122], strength: 0.85, mode: 'stain' },
  { id: 'southern-pecan', label: 'Southern Pecan', color: [167, 128, 88], strength: 0.8, mode: 'stain' },
  { id: 'walnut', label: 'Walnut', color: [228, 148, 58], strength: 0.8, mode: 'stain' },
  { id: 'rojo', label: 'Rojo', color: [204, 82, 52], strength: 0.85, mode: 'stain' },
  { id: 'espresso', label: 'Espresso', color: [72, 60, 48], strength: 0.88, mode: 'stain' },
  { id: 'golden', label: 'Golden', color: [224, 162, 52], strength: 0.8, mode: 'stain' },
  { id: 'stone-gray-wash', label: 'Stone Gray Wash', color: [200, 180, 150], strength: 0.6, mode: 'wash' },
  { id: 'white-wash', label: 'White Wash', color: [228, 206, 184], strength: 0.58, mode: 'wash' },
  { id: 'green', label: 'Green', color: [112, 118, 64], strength: 0.85, mode: 'stain' },
  { id: 'aged-bronze', label: 'Aged Bronze', color: [98, 84, 54], strength: 0.85, mode: 'stain' },
  { id: 'black', label: 'Black', color: [40, 36, 32], strength: 0.92, mode: 'stain' },
  { id: 'brick', label: 'Brick', color: [180, 90, 62], strength: 0.85, mode: 'stain' },
  { id: 'peach', label: 'Peach', color: [245, 166, 74], strength: 0.8, mode: 'stain' },
  { id: 'coffee', label: 'Coffee', color: [112, 84, 56], strength: 0.85, mode: 'stain' },
  { id: 'chestnut', label: 'Chestnut', color: [142, 86, 60], strength: 0.85, mode: 'stain' },
  { id: 'terracotta', label: 'Terracotta', color: [208, 122, 62], strength: 0.85, mode: 'stain' },
  { id: 'smoke', label: 'Smoke', color: [130, 128, 126], strength: 0.85, mode: 'stain' },
];

function luminance(c: RGB): number {
  return (0.2126 * c[0] + 0.7152 * c[1] + 0.0722 * c[2]) / 255;
}

/**
 * Recolors a wood tone with a finish. Penetrating stains shift the hue to the
 * pigment while keeping the wood's own light/dark variation (so earlywood
 * stays lighter than latewood under the color); washes blend toward the
 * pigment directly, lightening like a pickling coat.
 */
export function applyStain(base: RGB, stain: StainDef): RGB {
  if (stain.mode === 'wash') {
    return base.map((c, i) => Math.round(c + (stain.color[i] - c) * stain.strength)) as RGB;
  }
  // Anchor the pigment to the base tone's luminance: lighter wood lifts the
  // stain color, darker wood deepens it — grain contrast survives the color.
  const lift = 0.45 + 1.1 * luminance(base);
  return base.map((c, i) => {
    const tinted = Math.min(255, stain.color[i] * lift);
    return Math.round(c + (tinted - c) * stain.strength);
  }) as RGB;
}

const PRESETS: Preset[] = [
  woodPreset('birchply', 'Birch Ply', {
    seed: 67,
    lightColor: [242, 228, 206],
    darkColor: [216, 196, 168],
    ringsPerPlank: 36,
    turbulence: 0.55,
    baseRoughness: 0.55,
    contrast: 0.13,
    figure: 'cathedral',
    ringSharpness: 2,
    plankCount: 1,
    plywood: true,
    plySpacingMm: 1.5,
  }),
  woodPreset('oak', 'White Oak', {
    seed: 11,
    lightColor: [214, 196, 168],
    darkColor: [128, 100, 72],
    ringsPerPlank: 30,
    turbulence: 0.35,
    baseRoughness: 0.5,
    contrast: 0.65,
  }),
  woodPreset('walnut', 'Black Walnut', {
    seed: 23,
    lightColor: [158, 112, 74],
    darkColor: [62, 42, 30],
    ringsPerPlank: 42,
    turbulence: 0.9,
    baseRoughness: 0.42,
    contrast: 0.9,
    figure: 'cathedral',
    ringSharpness: 2.5,
    maxKnots: 2,
    plankCount: 8,
  }),
  woodPreset('cherry', 'Cherry', {
    seed: 37,
    lightColor: [202, 130, 82],
    darkColor: [138, 74, 44],
    ringsPerPlank: 34,
    turbulence: 1.0,
    baseRoughness: 0.45,
    contrast: 0.72,
    figure: 'cathedral',
    ringSharpness: 6,
    maxKnots: 2,
    plankCount: 8,
  }),
  woodPreset('maple', 'Hard Maple', {
    seed: 83,
    lightColor: [240, 223, 201],
    darkColor: [196, 164, 132],
    ringsPerPlank: 28,
    turbulence: 0.9,
    baseRoughness: 0.45,
    contrast: 0.34,
    figure: 'cathedral',
    ringSharpness: 6,
    maxKnots: 2,
    plankCount: 8,
  }),
  woodPreset('redoak', 'Red Oak', {
    seed: 89,
    lightColor: [233, 196, 158],
    darkColor: [178, 112, 78],
    ringsPerPlank: 46,
    turbulence: 0.9,
    baseRoughness: 0.55,
    contrast: 0.8,
    figure: 'cathedral',
    ringSharpness: 2.6,
    maxKnots: 1,
    plankCount: 10,
  }),
  woodPreset('mahogany', 'Ribbon Mahogany', {
    seed: 97,
    lightColor: [196, 110, 62],
    darkColor: [122, 56, 30],
    ringsPerPlank: 24,
    turbulence: 0.4,
    baseRoughness: 0.4,
    contrast: 0.6,
    ribbon: 0.85,
    plankCount: 6,
  }),
  woodPreset('cedar', 'Aromatic Cedar', {
    seed: 71,
    lightColor: [196, 96, 62],
    darkColor: [126, 46, 30],
    ringsPerPlank: 48,
    turbulence: 1.0,
    baseRoughness: 0.5,
    contrast: 0.85,
    figure: 'cathedral',
    ringSharpness: 3.5,
    maxKnots: 1,
    plankCount: 6,
  }),
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
    uvRepeat: 3,
    generate: (size) =>
      generateFabricMaps(size, {
        seed: 61,
        color: [216, 205, 184],
        shadowColor: [150, 138, 116],
        threadCount: 280,
      }),
  },
];

/**
 * Lazily generates and caches PBR materials backed by procedural textures.
 * Texture generation is the expensive step (a full noise pass per material),
 * so materials are built on first use and reused after that.
 */
/**
 * A photo-scanned material: real board photos processed into tileable PBR
 * maps (see scripts/process-texture.py). Textures load from URLs; the
 * physical scan size sets the repeat so grain renders at true scale.
 */
export interface ScannedMaterialDef {
  id: string;
  label: string;
  swatch: string;
  mapUrl: string;
  normalMapUrl?: string;
  roughnessMapUrl?: string;
  /** Physical size of the scanned area in meters. */
  widthM: number;
  heightM: number;
  clearcoat?: number;
  /**
   * Wrap mode across tile boundaries. `repeat` (default) suits images already
   * made seamless (see process-texture.py); `mirror` flips at each boundary so
   * raw, un-tiled photos don't show a hard seam.
   */
  tiling?: 'repeat' | 'mirror';
  /** Renders stacked-veneer laminations on end-grain edges (sheet goods). */
  plywood?: boolean;
  /** Lamination spacing in mm (plywood only; default 2). */
  plySpacingMm?: number;
}

/** Geometry box-UVs put one tile across this many meters (see geometry.ts). */
const TEXTURE_TILE_M = 2.4;

/** Parses a CSS hex color (#rrggbb) to an RGB triple. */
function hexToRgb(hex: string): RGB {
  const m = /^#?([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})$/i.exec(hex);
  return m ? [parseInt(m[1], 16), parseInt(m[2], 16), parseInt(m[3], 16)] : [220, 200, 165];
}

export class MaterialLibrary {
  private cache = new Map<string, THREE.MeshPhysicalMaterial>();
  private scanned = new Map<string, ScannedMaterialDef>();
  private pendingLoads: Promise<unknown>[] = [];
  /** Display-label overrides (any material id → custom label). */
  private labels = new Map<string, string>();
  /** Plywood on/off overrides (any material id → boolean). */
  private plywoodOverride = new Map<string, boolean>();

  constructor(private textureSize = 2048) {}

  list(): MaterialInfo[] {
    const label = (id: string, base: string) => this.labels.get(id) ?? base;
    return [
      ...PRESETS.map((p) => ({ ...p.info, label: label(p.info.id, p.info.label) })),
      ...[...this.scanned.values()].map((s) => ({
        id: s.id,
        label: label(s.id, s.label),
        category: 'scanned' as const,
        swatch: s.swatch,
      })),
    ];
  }

  /** Overrides any material's display label (presets and scanned alike). */
  setLabel(id: string, label: string): void {
    this.labels.set(id, label);
  }

  has(id: string): boolean {
    return PRESETS.some((p) => p.info.id === id) || this.scanned.has(id);
  }

  /** Finish palette for UI pickers; the swatch approximates the cured color. */
  listStains(): StainInfo[] {
    return STAINS.map((s) => ({ id: s.id, label: s.label, swatch: hex(s.color) }));
  }

  /** Registers a photo-scanned material; it appears in list() immediately. */
  addScanned(def: ScannedMaterialDef): void {
    this.scanned.set(def.id, def);
    this.cache.get(def.id)?.dispose();
    this.cache.delete(def.id);
  }

  /** Removes a previously registered scanned material. */
  removeScanned(id: string): void {
    this.scanned.delete(id);
    this.cache.get(id)?.dispose();
    this.cache.delete(id);
  }

  /** Updates a scanned material's display label without rebuilding textures. */
  renameScanned(id: string, label: string): void {
    const def = this.scanned.get(id);
    if (def) def.label = label;
  }

  /** Whether a material currently renders plywood (laminated) edges. */
  isPlywood(id: string): boolean {
    const override = this.plywoodOverride.get(id);
    if (override !== undefined) return override;
    const preset = PRESETS.find((p) => p.info.id === id);
    if (preset) return !!preset.plywood;
    return !!this.scanned.get(id)?.plywood;
  }

  private veneerFor(id: string): RGB {
    const preset = PRESETS.find((p) => p.info.id === id);
    if (preset?.woodParams) return preset.woodParams.lightColor;
    const def = this.scanned.get(id);
    return def ? hexToRgb(def.swatch) : [220, 200, 165];
  }

  private plySpacingMmFor(id: string): number {
    const preset = PRESETS.find((p) => p.info.id === id);
    if (preset) return preset.plySpacingMm ?? 2;
    return this.scanned.get(id)?.plySpacingMm ?? 2;
  }

  /**
   * Toggles plywood (laminated-edge) rendering for a material. The change is
   * applied to any already-built material instance in place — meshes using it
   * update on the next frame without regenerating textures.
   */
  setPlywood(id: string, value: boolean): void {
    this.plywoodOverride.set(id, value);
    for (const [key, material] of this.cache) {
      if (key !== id && !key.startsWith(`${id}@`)) continue;
      if (value) {
        makePlywood(material, {
          veneer: this.veneerFor(id),
          spacingM: this.plySpacingMmFor(id) / 1000,
        });
      } else {
        material.onBeforeCompile = () => undefined;
        material.customProgramCacheKey = () => `${id}:flat`;
      }
      material.needsUpdate = true;
    }
  }

  private buildScanned(def: ScannedMaterialDef): THREE.MeshPhysicalMaterial {
    const loader = new THREE.TextureLoader();
    const wrap = def.tiling === 'mirror' ? THREE.MirroredRepeatWrapping : THREE.RepeatWrapping;
    const load = (url: string, srgb: boolean) => {
      let done: () => void = () => undefined;
      this.pendingLoads.push(new Promise<void>((resolve) => (done = resolve)));
      const texture = loader.load(url, done, undefined, () => done());
      texture.wrapS = wrap;
      texture.wrapT = wrap;
      texture.anisotropy = 16;
      if (srgb) texture.colorSpace = THREE.SRGBColorSpace;
      // Repeat so the scan covers its true physical size within the tile.
      texture.repeat.set(TEXTURE_TILE_M / def.widthM, TEXTURE_TILE_M / def.heightM);
      return texture;
    };
    const material = new THREE.MeshPhysicalMaterial({
      map: load(def.mapUrl, true),
      normalMap: def.normalMapUrl ? load(def.normalMapUrl, false) : null,
      roughnessMap: def.roughnessMapUrl ? load(def.roughnessMapUrl, false) : null,
      roughness: 1,
      metalness: 0,
      clearcoat: def.clearcoat ?? 0.22,
      clearcoatRoughness: 0.28,
      normalScale: new THREE.Vector2(0.6, 0.6),
      vertexColors: true,
    });
    material.name = def.id;
    if (this.plywoodOverride.get(def.id) ?? def.plywood) {
      makePlywood(material, {
        veneer: hexToRgb(def.swatch),
        spacingM: (def.plySpacingMm ?? 2) / 1000,
      });
    }
    return material;
  }

  get(id: string, stainId?: string | null): THREE.MeshPhysicalMaterial {
    const stain = stainId ? STAINS.find((s) => s.id === stainId) : undefined;
    if (stainId && !stain) {
      throw new Error(`Unknown stain "${stainId}". Available: ${STAINS.map((s) => s.id).join(', ')}`);
    }
    const preset = PRESETS.find((p) => p.info.id === id);
    // Stains recolor procedural woods; other categories render natural.
    const applied = stain && preset?.woodParams ? stain : undefined;
    const key = applied ? `${id}@${applied.id}` : id;
    const cached = this.cache.get(key);
    if (cached) return cached;
    const scanned = this.scanned.get(id);
    if (scanned) {
      const material = this.buildScanned(scanned);
      this.cache.set(id, material);
      return material;
    }
    if (!preset) {
      throw new Error(`Unknown material "${id}". Available: ${this.list().map((m) => m.id).join(', ')}`);
    }
    const maps =
      applied && preset.woodParams
        ? generateWoodMaps(this.textureSize, {
            ...preset.woodParams,
            lightColor: applyStain(preset.woodParams.lightColor, applied),
            darkColor: applyStain(preset.woodParams.darkColor, applied),
          })
        : preset.generate(this.textureSize);
    if (preset.uvRepeat) {
      for (const texture of [maps.map, maps.roughnessMap, maps.normalMap]) {
        texture.repeat.set(preset.uvRepeat, preset.uvRepeat);
      }
    }
    const material = new THREE.MeshPhysicalMaterial({
      map: maps.map,
      roughnessMap: maps.roughnessMap,
      normalMap: maps.normalMap,
      roughness: 1,
      metalness: preset.metalness,
      clearcoat: preset.clearcoat,
      clearcoatRoughness: 0.28,
      normalScale: new THREE.Vector2(0.6, 0.6),
      // End-grain darkening rides in vertex colors (see applyBoxUVs).
      vertexColors: true,
    });
    material.name = key;
    if ((this.plywoodOverride.get(id) ?? preset.plywood) && preset.woodParams) {
      const veneer = applied ? applyStain(preset.woodParams.lightColor, applied) : preset.woodParams.lightColor;
      makePlywood(material, { veneer, spacingM: (preset.plySpacingMm ?? 2) / 1000 });
    }
    this.cache.set(key, material);
    return material;
  }

  /** Resolves when every scanned texture requested so far has loaded. */
  async texturesReady(): Promise<void> {
    await Promise.allSettled(this.pendingLoads);
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
