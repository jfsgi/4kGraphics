/**
 * Turns a dropped photo into material maps, entirely in the browser. This is a
 * lightweight cousin of scripts/process-texture.py: it isolates the board from
 * its background and straightens it (grain horizontal), keeps the photo's own
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
  /** The board, cropped from the background and straightened (grain across X). */
  source: HTMLCanvasElement;
  /** Pixel dimensions of the cropped board. */
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

/** True for near-white / pale-grey background pixels (board photos on white). */
function isBackground(r: number, g: number, b: number): boolean {
  const mx = Math.max(r, g, b);
  const mn = Math.min(r, g, b);
  // Bright and nearly colourless — white sweep or its soft shadow.
  return mx > 205 && mx - mn < 22;
}

/**
 * Isolates the board from a plain background and straightens it so the grain
 * (the board's long axis) runs horizontally. Uses image moments on a
 * background mask to find the board's tilt, rotates it level, then crops to the
 * board with a small inset past the eased edge. Falls back to the whole image
 * when it can't find a clear board (e.g. a full-frame texture).
 */
function extractBoard(img: HTMLImageElement): HTMLCanvasElement {
  const draw = (w: number, h: number, paint: (ctx: CanvasRenderingContext2D) => void) => {
    const canvas = document.createElement('canvas');
    canvas.width = w;
    canvas.height = h;
    paint(canvas.getContext('2d')!);
    return canvas;
  };
  const whole = () => draw(img.naturalWidth, img.naturalHeight, (c) => c.drawImage(img, 0, 0));

  // 1) Analyse a small copy: board mask + orientation via second moments.
  const aMax = 360;
  const as = Math.min(1, aMax / Math.max(img.naturalWidth, img.naturalHeight));
  const aw = Math.max(2, Math.round(img.naturalWidth * as));
  const ah = Math.max(2, Math.round(img.naturalHeight * as));
  const adata = draw(aw, ah, (c) => c.drawImage(img, 0, 0, aw, ah)).getContext('2d')!
    .getImageData(0, 0, aw, ah).data;

  let m00 = 0;
  let m10 = 0;
  let m01 = 0;
  const board = new Uint8Array(aw * ah);
  for (let y = 0; y < ah; y++) {
    for (let x = 0; x < aw; x++) {
      const i = (y * aw + x) * 4;
      if (!isBackground(adata[i], adata[i + 1], adata[i + 2])) {
        board[y * aw + x] = 1;
        m00++;
        m10 += x;
        m01 += y;
      }
    }
  }
  // No clear board (too little, or essentially the whole frame) → use as-is.
  if (m00 < aw * ah * 0.06 || m00 > aw * ah * 0.97) return whole();

  const cx = m10 / m00;
  const cy = m01 / m00;
  let u20 = 0;
  let u02 = 0;
  let u11 = 0;
  for (let y = 0; y < ah; y++) {
    for (let x = 0; x < aw; x++) {
      if (!board[y * aw + x]) continue;
      const dx = x - cx;
      const dy = y - cy;
      u20 += dx * dx;
      u02 += dy * dy;
      u11 += dx * dy;
    }
  }
  // Major-axis angle (the board length / grain). Rotate by its negative so the
  // grain ends up horizontal.
  const theta = 0.5 * Math.atan2((2 * u11) / m00, (u20 - u02) / m00);

  // 2) Rotate the full-res image (capped) level.
  const ws = Math.min(1, MAX_DIM / Math.max(img.naturalWidth, img.naturalHeight));
  const sw = Math.round(img.naturalWidth * ws);
  const sh = Math.round(img.naturalHeight * ws);
  const diag = Math.ceil(Math.hypot(sw, sh));
  const rot = draw(diag, diag, (ctx) => {
    ctx.translate(diag / 2, diag / 2);
    ctx.rotate(-theta);
    ctx.drawImage(img, -sw / 2, -sh / 2, sw, sh);
  });

  // 3) Crop to the board in the level image, inset past the eased edge.
  const rdata = rot.getContext('2d')!.getImageData(0, 0, diag, diag).data;
  let minX = diag;
  let minY = diag;
  let maxX = 0;
  let maxY = 0;
  for (let y = 0; y < diag; y++) {
    for (let x = 0; x < diag; x++) {
      const i = (y * diag + x) * 4;
      if (rdata[i + 3] < 8) continue; // outside the rotated image
      if (isBackground(rdata[i], rdata[i + 1], rdata[i + 2])) continue;
      if (x < minX) minX = x;
      if (x > maxX) maxX = x;
      if (y < minY) minY = y;
      if (y > maxY) maxY = y;
    }
  }
  if (maxX <= minX || maxY <= minY) return whole();
  const bw = maxX - minX;
  const bh = maxY - minY;
  const inset = Math.round(Math.min(bw, bh) * 0.06);
  const x0 = minX + inset;
  const y0 = minY + inset;
  const cw = Math.max(1, bw - 2 * inset);
  const ch = Math.max(1, bh - 2 * inset);
  return draw(cw, ch, (ctx) => ctx.drawImage(rot, x0, y0, cw, ch, 0, 0, cw, ch));
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
function detectGrainHorizontal(source: HTMLCanvasElement): boolean {
  const n = 160;
  const w = Math.max(2, Math.min(n, source.width));
  const h = Math.max(2, Math.round((w * source.height) / source.width));
  const canvas = document.createElement('canvas');
  canvas.width = w;
  canvas.height = h;
  const ctx = canvas.getContext('2d')!;
  ctx.drawImage(source, 0, 0, w, h);
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

/** Loads a photo, isolates+straightens the board, and reports its DPI/grain. */
export async function readPhotoMeta(file: File): Promise<PhotoMeta> {
  const buffer = await file.arrayBuffer();
  const dpi = readDpi(buffer);
  const image = await loadImage(file);
  const source = extractBoard(image);
  return {
    source,
    width: source.width,
    height: source.height,
    dpi: dpi && dpi > 1 ? Math.round(dpi) : null,
    grainHorizontal: detectGrainHorizontal(source),
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
    ctx.drawImage(meta.source, 0, 0, w, h);
  } else {
    canvas.width = w;
    canvas.height = h;
    ctx.drawImage(meta.source, 0, 0, w, h);
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
