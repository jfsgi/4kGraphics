import { describe, expect, it } from 'vitest';
import { MaterialLibrary, STAINS, applyStain } from './MaterialLibrary.js';
import type { RGB } from './procedural.js';

const CHERRY_LIGHT: RGB = [202, 130, 82];
const CHERRY_DARK: RGB = [138, 74, 44];

function luminance(c: RGB): number {
  return 0.2126 * c[0] + 0.7152 * c[1] + 0.0722 * c[2];
}

describe('stain finishes', () => {
  it('ships the full reference palette with unique ids', () => {
    const ids = STAINS.map((s) => s.id);
    expect(new Set(ids).size).toBe(ids.length);
    expect(ids).toContain('espresso');
    expect(ids).toContain('white-wash');
    expect(STAINS.length).toBe(17);
  });

  it('keeps grain contrast: light wood stays lighter than dark wood under every stain', () => {
    for (const stain of STAINS) {
      const light = applyStain(CHERRY_LIGHT, stain);
      const dark = applyStain(CHERRY_DARK, stain);
      expect(luminance(light), stain.id).toBeGreaterThan(luminance(dark));
    }
  });

  it('moves the hue toward the pigment', () => {
    const marine = STAINS.find((s) => s.id === 'marine-blue')!;
    const stained = applyStain(CHERRY_LIGHT, marine);
    // Cherry is strongly red-over-blue; marine blue should flatten that gap.
    expect(stained[0] - stained[2]).toBeLessThan((CHERRY_LIGHT[0] - CHERRY_LIGHT[2]) * 0.3);
  });

  it('washes lighten dark wood toward the pigment', () => {
    const wash = STAINS.find((s) => s.id === 'white-wash')!;
    const stained = applyStain(CHERRY_DARK, wash);
    expect(luminance(stained)).toBeGreaterThan(luminance(CHERRY_DARK));
  });

  it('lists stains with swatch colors for UIs', () => {
    const library = new MaterialLibrary();
    const infos = library.listStains();
    expect(infos.map((s) => s.id)).toEqual(STAINS.map((s) => s.id));
    for (const info of infos) expect(info.swatch).toMatch(/^#[0-9a-f]{6}$/);
  });

  it('rejects unknown stain ids', () => {
    const library = new MaterialLibrary();
    expect(() => library.get('cherry', 'driftwood')).toThrow(/Unknown stain/);
  });
});
