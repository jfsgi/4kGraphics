/**
 * Turns a dropped photo into material maps, entirely in the browser. This is a
 * lightweight cousin of scripts/process-texture.py: it keeps the photo's own
 * resolution (down to a sane cap), reads its pixel size and DPI so the material
 * can render at true physical scale, samples a swatch colour, and derives a
 * normal map for surface relief. Tiling seams are hidden at render time with
 * mirrored wrapping (see the engine's scanned material `tiling: 'mirror'`).
 */
export interface ProcessedPhoto {
  mapUrl: string;
  normalMapUrl: string;
  swatch: string;
  /** True physical extents of the final (possibly rotated) image, in meters. */
  widthM: number;
  heightM: number;
}

export interface PhotoMeta {
  image: HTMLImageElement;
  /** Native pixel dimensions. */
  width: number;
  height: number;
  /** Dots per inch from the file's metadata, or null if it carries none. */
  dpi: number | null;
  /**
   * True when the grain lines run across the image's width (the common case
   * for a board photo). The convention is grain along V, so such photos are
   * rotated 90° on import.
   */
  grainHorizontal: boolean;
}

/** Largest map dimension we keep; photos above this are downsampled. */
const MAX_DIM = 2048;

function loadImage(file: File): Promise<HTMLImageElement> {
  return new Promise((resolve, reject) => {
    const url = URL.createObjectURL(file);
    const img = new Image();
    img.onload = () => {
      URL.revokeObjectURL(url);
      resolve(img);
    };
    img.onerror = () => {
      URL.revokeObjectURL(url);
      reject(new Error('Could not read that image.'));
    };
    img.src = url;
  });
}

/** Reads DPI from PNG (pHYs) or JPEG (JFIF) headers; null if absent. */
function readDpi(buffer: ArrayBuffer): number | null {
  const v = new DataView(buffer);
  if (v.byteLength < 24) return null;
  // PNG: 89 50 4E 47 …
  if (v.getUint32(0) === 0x89504e47) {
    let off = 8;
    while (off + 12 <= v.byteLength) {
      const len = v.getUint32(off);
      const type = String.fromCharCode(v.getUint8(off + 4), v.getUint8(off + 5), v.getUint8(off + 6), v.getUint8(off + 7));
      if (type === 'pHYs') {
        const ppuX = v.getUint32(off + 8);
        const unit = v.getUint8(off + 16); // 1 = metre
        return unit === 1 && ppuX > 0 ? ppuX * 0.0254 : null;
      }
      if (type === 'IDAT' || type === 'IEND') break;
      off += 12 + len;
    }
    return null;
  }
  // JPEG: FF D8 …, look for an APP0 JFIF segment.
  if (v.getUint16(0) === 0xffd8) {
    let off = 2;
    while (off + 4 <= v.byteLength) {
      const marker = v.getUint16(off);
      if ((marker & 0xff00) !== 0xff00) break;
      if (marker === 0xffda) break; // start of scan
      const len = v.getUint16(off + 2);
      if (marker === 0xffe0 && v.getUint8(off + 4) === 0x4a && v.getUint8(off + 5) === 0x46) {
        const units = v.getUint8(off + 11);
        const xd = v.getUint16(off + 12);
        if (units === 1) return xd || null; // dots per inch
        if (units === 2) return xd ? xd * 2.54 : null; // dots per cm → per inch
        return null;
      }
      off += 2 + len;
    }
    return null;
  }
  return null;
}

/**
 * Estimates whether the grain runs horizontally. Grain lines are smooth along
 * the grain and busy across it, so the axis with the larger summed gradient is
 * across-grain: more vertical gradient ⇒ stacked horizontal lines ⇒ horizontal
 * grain.
 */
function detectGrainHorizontal(image: HTMLImageElement): boolean {
  const n = 160;
  const w = Math.max(2, Math.min(n, image.naturalWidth));
  const h = Math.max(2, Math.round((w * image.naturalHeight) / image.naturalWidth));
  const canvas = document.createElement('canvas');
  canvas.width = w;
  canvas.height = h;
  const ctx = canvas.getContext('2d')!;
  ctx.drawImage(image, 0, 0, w, h);
  const d = ctx.getImageData(0, 0, w, h).data;
  const lum = (x: number, y: number) => {
    const i = (y * w + x) * 4;
    return 0.299 * d[i] + 0.587 * d[i + 1] + 0.114 * d[i + 2];
  };
  let gx = 0;
  let gy = 0;
  for (let y = 1; y < h - 1; y++) {
    for (let x = 1; x < w - 1; x++) {
      gx += Math.abs(lum(x + 1, y) - lum(x - 1, y));
      gy += Math.abs(lum(x, y + 1) - lum(x, y - 1));
    }
  }
  // Normalise by the number of samples along each axis so aspect doesn't bias.
  return gy / h > gx / w;
}

/** Loads a photo and reports its native resolution, DPI, and grain direction. */
export async function readPhotoMeta(file: File): Promise<PhotoMeta> {
  const buffer = await file.arrayBuffer();
  const dpi = readDpi(buffer);
  const image = await loadImage(file);
  return {
    image,
    width: image.naturalWidth,
    height: image.naturalHeight,
    dpi: dpi && dpi > 1 ? Math.round(dpi) : null,
    grainHorizontal: detectGrainHorizontal(image),
  };
}

function averageHex(data: ImageData): string {
  const d = data.data;
  let r = 0;
  let g = 0;
  let b = 0;
  const n = d.length / 4;
  for (let i = 0; i < d.length; i += 4) {
    r += d[i];
    g += d[i + 1];
    b += d[i + 2];
  }
  const to = (value: number) => Math.round(value / n).toString(16).padStart(2, '0');
  return `#${to(r)}${to(g)}${to(b)}`;
}

/** Sobel height-from-luminance into a tangent-space normal map. */
function deriveNormalMap(data: ImageData, w: number, h: number, strength = 2.2): string {
  const d = data.data;
  const lum = new Float32Array(w * h);
  for (let i = 0; i < w * h; i++) {
    lum[i] = (0.299 * d[i * 4] + 0.587 * d[i * 4 + 1] + 0.114 * d[i * 4 + 2]) / 255;
  }
  const at = (x: number, y: number) =>
    lum[Math.min(h - 1, Math.max(0, y)) * w + Math.min(w - 1, Math.max(0, x))];
  const out = new ImageData(w, h);
  const o = out.data;
  for (let y = 0; y < h; y++) {
    for (let x = 0; x < w; x++) {
      const gx =
        at(x - 1, y - 1) + 2 * at(x - 1, y) + at(x - 1, y + 1) -
        (at(x + 1, y - 1) + 2 * at(x + 1, y) + at(x + 1, y + 1));
      const gy =
        at(x - 1, y - 1) + 2 * at(x, y - 1) + at(x + 1, y - 1) -
        (at(x - 1, y + 1) + 2 * at(x, y + 1) + at(x + 1, y + 1));
      const nx = gx * strength;
      const ny = gy * strength;
      const len = Math.hypot(nx, ny, 1) || 1;
      const idx = (y * w + x) * 4;
      o[idx] = (nx / len * 0.5 + 0.5) * 255;
      o[idx + 1] = (ny / len * 0.5 + 0.5) * 255;
      o[idx + 2] = (1 / len * 0.5 + 0.5) * 255;
      o[idx + 3] = 255;
    }
  }
  const canvas = document.createElement('canvas');
  canvas.width = w;
  canvas.height = h;
  canvas.getContext('2d')!.putImageData(out, 0, 0);
  return canvas.toDataURL('image/png');
}

/**
 * Builds the PBR maps from an already-loaded image. Keeps the source aspect
 * ratio and resolution, only downsampling when a side exceeds MAX_DIM (never
 * upscales). When `rotate` is set the image is turned 90° so its grain runs
 * along V (the texture convention); the returned physical extents follow the
 * rotation so the material still renders at the photographed scale.
 *
 * `originalWidthM` is the real-world width of the photo as shot (its U extent).
 */
export function buildMaterialMaps(meta: PhotoMeta, originalWidthM: number, rotate: boolean): ProcessedPhoto {
  const scale = Math.min(1, MAX_DIM / Math.max(meta.width, meta.height));
  const w = Math.max(1, Math.round(meta.width * scale));
  const h = Math.max(1, Math.round(meta.height * scale));
  const originalHeightM = (originalWidthM * h) / w;

  const canvas = document.createElement('canvas');
  const ctx = canvas.getContext('2d')!;
  if (rotate) {
    canvas.width = h;
    canvas.height = w;
    ctx.translate(h, 0);
    ctx.rotate(Math.PI / 2);
    ctx.drawImage(meta.image, 0, 0, w, h);
  } else {
    canvas.width = w;
    canvas.height = h;
    ctx.drawImage(meta.image, 0, 0, w, h);
  }
  const data = ctx.getImageData(0, 0, canvas.width, canvas.height);
  return {
    mapUrl: canvas.toDataURL('image/jpeg', 0.92),
    normalMapUrl: deriveNormalMap(data, canvas.width, canvas.height),
    swatch: averageHex(data),
    // After a 90° turn the U/V physical extents swap.
    widthM: rotate ? originalHeightM : originalWidthM,
    heightM: rotate ? originalWidthM : originalHeightM,
  };
}
