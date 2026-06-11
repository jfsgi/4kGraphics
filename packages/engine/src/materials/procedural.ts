/**
 * Procedural PBR texture generation. Each generator produces a tileable
 * color map plus matching roughness and normal maps at the requested
 * resolution (4096 for full 4K texture quality).
 *
 * Strategy: compute a single height/pattern field per material, then derive
 * color (ramp), roughness (inverse ramp), and normals (height gradient) from
 * it — one expensive noise pass instead of three.
 */

import * as THREE from 'three';
import { fbm2D, valueNoise2D } from './noise.js';

export interface PbrMaps {
  map: THREE.Texture;
  roughnessMap: THREE.Texture;
  normalMap: THREE.Texture;
}

export type RGB = [number, number, number];

function makeCanvas(size: number): HTMLCanvasElement {
  const canvas = document.createElement('canvas');
  canvas.width = size;
  canvas.height = size;
  return canvas;
}

function toTexture(canvas: HTMLCanvasElement, srgb: boolean): THREE.CanvasTexture {
  const texture = new THREE.CanvasTexture(canvas);
  texture.wrapS = THREE.RepeatWrapping;
  texture.wrapT = THREE.RepeatWrapping;
  texture.colorSpace = srgb ? THREE.SRGBColorSpace : THREE.NoColorSpace;
  texture.anisotropy = 8;
  return texture;
}

function lerp(a: number, b: number, t: number): number {
  return a + (b - a) * t;
}

function clamp01(v: number): number {
  return v < 0 ? 0 : v > 1 ? 1 : v;
}

interface FieldResult {
  /** Height-like field in [0, 1], drives normals. */
  height: Float32Array;
  /** Color ramp parameter in [0, 1]. */
  tone: Float32Array;
  /** Roughness in [0, 1]. */
  rough: Float32Array;
}

/**
 * Assembles the three PBR maps from per-pixel field data.
 */
function fieldsToMaps(
  size: number,
  fields: FieldResult,
  colorA: RGB,
  colorB: RGB,
  normalStrength: number,
): PbrMaps {
  const colorCanvas = makeCanvas(size);
  const roughCanvas = makeCanvas(size);
  const normalCanvas = makeCanvas(size);
  const colorCtx = colorCanvas.getContext('2d')!;
  const roughCtx = roughCanvas.getContext('2d')!;
  const normalCtx = normalCanvas.getContext('2d')!;
  const colorImg = colorCtx.createImageData(size, size);
  const roughImg = roughCtx.createImageData(size, size);
  const normalImg = normalCtx.createImageData(size, size);
  const { height, tone, rough } = fields;

  for (let y = 0; y < size; y++) {
    const yPrev = ((y - 1 + size) % size) * size;
    const yNext = ((y + 1) % size) * size;
    const row = y * size;
    for (let x = 0; x < size; x++) {
      const i = row + x;
      const o = i * 4;
      const t = tone[i];
      colorImg.data[o] = Math.round(lerp(colorA[0], colorB[0], t));
      colorImg.data[o + 1] = Math.round(lerp(colorA[1], colorB[1], t));
      colorImg.data[o + 2] = Math.round(lerp(colorA[2], colorB[2], t));
      colorImg.data[o + 3] = 255;

      const r = Math.round(clamp01(rough[i]) * 255);
      roughImg.data[o] = r;
      roughImg.data[o + 1] = r;
      roughImg.data[o + 2] = r;
      roughImg.data[o + 3] = 255;

      const xPrev = (x - 1 + size) % size;
      const xNext = (x + 1) % size;
      const dx = (height[row + xNext] - height[row + xPrev]) * normalStrength;
      const dy = (height[yNext + x] - height[yPrev + x]) * normalStrength;
      const invLen = 1 / Math.sqrt(dx * dx + dy * dy + 1);
      normalImg.data[o] = Math.round(((-dx * invLen) * 0.5 + 0.5) * 255);
      normalImg.data[o + 1] = Math.round(((dy * invLen) * 0.5 + 0.5) * 255);
      normalImg.data[o + 2] = Math.round((invLen * 0.5 + 0.5) * 255);
      normalImg.data[o + 3] = 255;
    }
  }

  colorCtx.putImageData(colorImg, 0, 0);
  roughCtx.putImageData(roughImg, 0, 0);
  normalCtx.putImageData(normalImg, 0, 0);
  return {
    map: toTexture(colorCanvas, true),
    roughnessMap: toTexture(roughCanvas, false),
    normalMap: toTexture(normalCanvas, false),
  };
}

export interface WoodParams {
  seed: number;
  /** Light (earlywood) color. */
  lightColor: RGB;
  /** Dark (latewood) color. */
  darkColor: RGB;
  /** Growth rings across one texture tile. */
  ringCount: number;
  /** How wavy the rings are. */
  turbulence: number;
  baseRoughness: number;
}

function plankHash(plank: number, seed: number): number {
  let h = (plank * 668265263 + seed * 374761393) | 0;
  h = (h ^ (h >>> 13)) | 0;
  h = Math.imul(h, 1274126177);
  return ((h ^ (h >>> 16)) >>> 0) / 4294967295;
}

/**
 * Wood with grain running along the V axis of the texture, built up from
 * edge-glued "planks": each plank gets its own ring phase, ring density,
 * grain seed, and tone shift, the way a real glued-up panel looks.
 */
export function generateWoodMaps(size: number, params: WoodParams): PbrMaps {
  const { seed, ringCount, turbulence } = params;
  const height = new Float32Array(size * size);
  const tone = new Float32Array(size * size);
  const rough = new Float32Array(size * size);
  const period = 8;
  const inv = period / size;
  // Integer plank count so plank boundaries wrap with the texture.
  const plankCount = 6;
  const plankW = period / plankCount;

  for (let y = 0; y < size; y++) {
    const v = y * inv;
    for (let x = 0; x < size; x++) {
      const u = x * inv;
      const i = y * size + x;

      const plank = Math.floor(u / plankW) % plankCount;
      const h1 = plankHash(plank, seed);
      const h2 = plankHash(plank, seed + 77);
      const uIn = u - plank * plankW; // position within the plank

      // Growth rings: gentle wander, per-plank phase and density.
      const wander = fbm2D(u * 0.8, v * 0.2, period, seed + plank * 17, 3) * turbulence;
      const ringsPerPlank = (ringCount / plankCount) * (0.75 + h2 * 0.5);
      const phase = (uIn / plankW) * ringsPerPlank + h1 * 13 + wander;
      const ring = 0.5 + 0.5 * Math.sin(phase * Math.PI * 2);
      // Asymmetric rings: slow earlywood, sharp latewood edge.
      const late = Math.pow(ring, 4);

      // Fine cathedral streaks stretched along the grain.
      const streak = fbm2D(u * 7, v * 0.5, period, seed + 7 + plank * 31, 4) * 0.5 + 0.5;
      // Pores: subtle high-frequency speckle.
      const pore = valueNoise2D(u * 24, v * 3, period * 24, seed + 13) * 0.5 + 0.5;

      // Glue-line: a faint dark seam at each plank boundary.
      const edge = Math.min(uIn, plankW - uIn);
      const seam = edge < 0.015 ? 0.18 : 0;

      const t = clamp01(
        0.22 + late * 0.34 + (streak - 0.5) * 0.3 + (pore - 0.5) * 0.1 + (h1 - 0.5) * 0.16 + seam,
      );
      tone[i] = t;
      height[i] = clamp01(0.6 - late * 0.25 - (pore - 0.5) * 0.2 - seam * 0.6);
      rough[i] = clamp01(params.baseRoughness + t * 0.14 + (streak - 0.5) * 0.06);
    }
  }

  return fieldsToMaps(size, { height, tone, rough }, params.lightColor, params.darkColor, 1.3);
}

export interface FabricParams {
  seed: number;
  color: RGB;
  shadowColor: RGB;
  /** Thread pairs across one tile. */
  threadCount: number;
}

/** Plain-weave fabric (linen/wool style). */
export function generateFabricMaps(size: number, params: FabricParams): PbrMaps {
  const { seed, threadCount } = params;
  const height = new Float32Array(size * size);
  const tone = new Float32Array(size * size);
  const rough = new Float32Array(size * size);
  const period = 8;
  const inv = period / size;

  for (let y = 0; y < size; y++) {
    const v = y * inv;
    for (let x = 0; x < size; x++) {
      const u = x * inv;
      const i = y * size + x;
      const warpPhase = (u / period) * threadCount * Math.PI * 2;
      const weftPhase = (v / period) * threadCount * Math.PI * 2;
      const warp = Math.abs(Math.sin(warpPhase));
      const weft = Math.abs(Math.sin(weftPhase));
      // Checkerboard over/under interleaving.
      const over =
        (Math.floor((u / period) * threadCount) + Math.floor((v / period) * threadCount)) % 2 === 0;
      const weave = over ? warp * 0.75 + weft * 0.25 : weft * 0.75 + warp * 0.25;
      const fiber = fbm2D(u * 5, v * 5, period, seed, 3) * 0.5 + 0.5;
      const h = clamp01(weave * 0.8 + fiber * 0.2);
      height[i] = h;
      tone[i] = clamp01(1 - h * 0.65 - fiber * 0.15);
      rough[i] = clamp01(0.85 + (fiber - 0.5) * 0.1);
    }
  }

  return fieldsToMaps(size, { height, tone, rough }, params.color, params.shadowColor, 3.2);
}

export interface BrushedMetalParams {
  seed: number;
  color: RGB;
  baseRoughness: number;
}

/** Brushed metal: long horizontal grinding streaks. */
export function generateBrushedMetalMaps(size: number, params: BrushedMetalParams): PbrMaps {
  const { seed } = params;
  const height = new Float32Array(size * size);
  const tone = new Float32Array(size * size);
  const rough = new Float32Array(size * size);
  const period = 8;
  const inv = period / size;

  for (let y = 0; y < size; y++) {
    const v = y * inv;
    for (let x = 0; x < size; x++) {
      const u = x * inv;
      const i = y * size + x;
      // Streaks: very high frequency across V, very low along U.
      const streak = fbm2D(u * 0.8, v * 90, period, seed, 3) * 0.5 + 0.5;
      const blotch = fbm2D(u * 2, v * 2, period, seed + 31, 3) * 0.5 + 0.5;
      height[i] = streak;
      tone[i] = clamp01(streak * 0.25 + blotch * 0.1);
      rough[i] = clamp01(params.baseRoughness + (streak - 0.5) * 0.18 + (blotch - 0.5) * 0.08);
    }
  }

  const dark: RGB = [
    Math.round(params.color[0] * 0.82),
    Math.round(params.color[1] * 0.82),
    Math.round(params.color[2] * 0.82),
  ];
  return fieldsToMaps(size, { height, tone, rough }, params.color, dark, 0.6);
}

export interface PaintParams {
  seed: number;
  color: RGB;
  roughness: number;
}

/** Painted finish with a subtle orange-peel texture. */
export function generatePaintMaps(size: number, params: PaintParams): PbrMaps {
  const { seed } = params;
  const height = new Float32Array(size * size);
  const tone = new Float32Array(size * size);
  const rough = new Float32Array(size * size);
  const period = 8;
  const inv = period / size;

  for (let y = 0; y < size; y++) {
    const v = y * inv;
    for (let x = 0; x < size; x++) {
      const u = x * inv;
      const i = y * size + x;
      const peel = fbm2D(u * 14, v * 14, period, seed, 3) * 0.5 + 0.5;
      height[i] = peel;
      tone[i] = peel * 0.06;
      rough[i] = clamp01(params.roughness + (peel - 0.5) * 0.08);
    }
  }

  const shaded: RGB = [
    Math.round(params.color[0] * 0.94),
    Math.round(params.color[1] * 0.94),
    Math.round(params.color[2] * 0.94),
  ];
  return fieldsToMaps(size, { height, tone, rough }, params.color, shaded, 0.5);
}
