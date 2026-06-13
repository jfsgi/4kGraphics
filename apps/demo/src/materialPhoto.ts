/**
 * Turns a dropped photo into material maps, entirely in the browser. This is a
 * lightweight cousin of scripts/process-texture.py: it resizes, samples a
 * swatch colour, and derives a normal map for surface relief. Tiling seams are
 * hidden at render time with mirrored wrapping (see the engine's scanned
 * material `tiling: 'mirror'`), so we don't attempt full seamless synthesis
 * here.
 */
export interface ProcessedPhoto {
  mapUrl: string;
  normalMapUrl: string;
  swatch: string;
  /** width / height of the processed image. */
  aspect: number;
}

const MAX_DIM = 1024;

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
  const to = (v: number) => Math.round(v / n).toString(16).padStart(2, '0');
  return `#${to(r)}${to(g)}${to(b)}`;
}

/** Sobel height-from-luminance into a tangent-space normal map. */
function deriveNormalMap(data: ImageData, w: number, h: number, strength = 2.2): string {
  const d = data.data;
  const lum = new Float32Array(w * h);
  for (let i = 0; i < w * h; i++) {
    lum[i] = (0.299 * d[i * 4] + 0.587 * d[i * 4 + 1] + 0.114 * d[i * 4 + 2]) / 255;
  }
  const at = (x: number, y: number) => lum[Math.min(h - 1, Math.max(0, y)) * w + Math.min(w - 1, Math.max(0, x))];
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
      const nz = 1;
      const len = Math.hypot(nx, ny, nz) || 1;
      const idx = (y * w + x) * 4;
      o[idx] = (nx / len * 0.5 + 0.5) * 255;
      o[idx + 1] = (ny / len * 0.5 + 0.5) * 255;
      o[idx + 2] = (nz / len * 0.5 + 0.5) * 255;
      o[idx + 3] = 255;
    }
  }
  const canvas = document.createElement('canvas');
  canvas.width = w;
  canvas.height = h;
  canvas.getContext('2d')!.putImageData(out, 0, 0);
  return canvas.toDataURL('image/png');
}

export async function processMaterialPhoto(file: File): Promise<ProcessedPhoto> {
  const img = await loadImage(file);
  const scale = Math.min(1, MAX_DIM / Math.max(img.width, img.height));
  const w = Math.max(1, Math.round(img.width * scale));
  const h = Math.max(1, Math.round(img.height * scale));
  const canvas = document.createElement('canvas');
  canvas.width = w;
  canvas.height = h;
  const ctx = canvas.getContext('2d')!;
  ctx.drawImage(img, 0, 0, w, h);
  const data = ctx.getImageData(0, 0, w, h);
  return {
    mapUrl: canvas.toDataURL('image/jpeg', 0.9),
    normalMapUrl: deriveNormalMap(data, w, h),
    swatch: averageHex(data),
    aspect: w / h,
  };
}
