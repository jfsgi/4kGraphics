/**
 * Seeded, tileable value noise used by the procedural texture generators.
 * The lattice wraps at `period`, so any texture sampled over [0, period)
 * tiles seamlessly.
 */

function hash2(ix: number, iy: number, seed: number): number {
  let h = (ix * 374761393 + iy * 668265263 + seed * 982451653) | 0;
  h = (h ^ (h >>> 13)) | 0;
  h = Math.imul(h, 1274126177);
  h = (h ^ (h >>> 16)) >>> 0;
  return h / 4294967295; // [0, 1]
}

function smooth(t: number): number {
  return t * t * (3 - 2 * t);
}

/** Tileable value noise in [-1, 1] with lattice period `period`. */
export function valueNoise2D(x: number, y: number, period: number, seed: number): number {
  const ix = Math.floor(x);
  const iy = Math.floor(y);
  const fx = x - ix;
  const fy = y - iy;
  const x0 = ((ix % period) + period) % period;
  const y0 = ((iy % period) + period) % period;
  const x1 = (x0 + 1) % period;
  const y1 = (y0 + 1) % period;
  const v00 = hash2(x0, y0, seed);
  const v10 = hash2(x1, y0, seed);
  const v01 = hash2(x0, y1, seed);
  const v11 = hash2(x1, y1, seed);
  const sx = smooth(fx);
  const sy = smooth(fy);
  const a = v00 + (v10 - v00) * sx;
  const b = v01 + (v11 - v01) * sx;
  return (a + (b - a) * sy) * 2 - 1;
}

/** Tileable fractal Brownian motion in roughly [-1, 1]. */
export function fbm2D(
  x: number,
  y: number,
  period: number,
  seed: number,
  octaves = 4,
  gain = 0.5,
): number {
  let sum = 0;
  let amp = 1;
  let norm = 0;
  let freq = 1;
  for (let i = 0; i < octaves; i++) {
    sum += valueNoise2D(x * freq, y * freq, period * freq, seed + i * 101) * amp;
    norm += amp;
    amp *= gain;
    freq *= 2;
  }
  return sum / norm;
}
