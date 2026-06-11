import { describe, expect, it } from 'vitest';
import { buildLayout } from './layout.js';
import { defaultBookshelfSpec, defaultCabinetSpec, defaultTableSpec, validateSpec } from './spec.js';

describe('table layout', () => {
  it('produces a top, four legs, and four apron rails', () => {
    const layout = buildLayout(defaultTableSpec());
    const names = layout.parts.map((p) => p.name);
    expect(names.filter((n) => n === 'Tabletop')).toHaveLength(1);
    expect(names.filter((n) => n === 'Leg')).toHaveLength(4);
    expect(names.filter((n) => n.startsWith('Apron'))).toHaveLength(4);
  });

  it('puts the tabletop surface exactly at the spec height', () => {
    const spec = defaultTableSpec();
    const layout = buildLayout(spec);
    const top = layout.parts.find((p) => p.name === 'Tabletop')!;
    expect(top.positionMm[1] + top.sizeMm[1] / 2).toBeCloseTo(spec.heightMm);
  });

  it('keeps legs inside the tabletop footprint', () => {
    const spec = defaultTableSpec();
    const layout = buildLayout(spec);
    for (const leg of layout.parts.filter((p) => p.name === 'Leg')) {
      expect(Math.abs(leg.positionMm[0]) + leg.sizeMm[0] / 2).toBeLessThanOrEqual(spec.widthMm / 2);
      expect(Math.abs(leg.positionMm[2]) + leg.sizeMm[2] / 2).toBeLessThanOrEqual(spec.depthMm / 2);
    }
  });

  it('omits apron rails when apron is disabled', () => {
    const layout = buildLayout({ ...defaultTableSpec(), apron: false });
    expect(layout.parts.some((p) => p.name.startsWith('Apron'))).toBe(false);
  });
});

describe('bookshelf layout', () => {
  it('creates the requested number of shelves', () => {
    const spec = { ...defaultBookshelfSpec(), shelfCount: 3 };
    const layout = buildLayout(spec);
    expect(layout.parts.filter((p) => p.name === 'Shelf')).toHaveLength(3);
  });

  it('spaces shelves evenly within the interior', () => {
    const spec = { ...defaultBookshelfSpec(), shelfCount: 2 };
    const layout = buildLayout(spec);
    const shelves = layout.parts.filter((p) => p.name === 'Shelf');
    const gap1 = shelves[1].positionMm[1] - shelves[0].positionMm[1];
    const bottomTop = spec.stockThicknessMm;
    const gap0 = shelves[0].positionMm[1] - spec.stockThicknessMm / 2 - bottomTop / 2;
    expect(gap1).toBeGreaterThan(0);
    expect(Math.abs(gap1 - (gap0 + spec.stockThicknessMm / 2))).toBeLessThan(spec.stockThicknessMm + 1);
  });

  it('omits the back panel when disabled', () => {
    const layout = buildLayout({ ...defaultBookshelfSpec(), backPanel: false });
    expect(layout.parts.some((p) => p.name === 'Back panel')).toBe(false);
  });
});

describe('cabinet layout', () => {
  it('creates doors with handles and four legs', () => {
    const spec = defaultCabinetSpec();
    const layout = buildLayout(spec);
    expect(layout.parts.filter((p) => p.name === 'Door')).toHaveLength(spec.doorCount);
    expect(layout.parts.filter((p) => p.name === 'Handle')).toHaveLength(spec.doorCount);
    expect(layout.parts.filter((p) => p.name === 'Leg')).toHaveLength(4);
  });

  it('keeps doors within the cabinet width', () => {
    const spec = { ...defaultCabinetSpec(), doorCount: 3 };
    const layout = buildLayout(spec);
    for (const door of layout.parts.filter((p) => p.name === 'Door')) {
      expect(Math.abs(door.positionMm[0]) + door.sizeMm[0] / 2).toBeLessThanOrEqual(spec.widthMm / 2);
    }
  });
});

describe('spec validation', () => {
  it('rejects impossible leg insets', () => {
    const spec = { ...defaultTableSpec(), widthMm: 200, legInsetMm: 80, legThicknessMm: 70 };
    expect(() => validateSpec(spec)).toThrow(/legs do not fit/);
  });

  it('rejects too many shelves', () => {
    const spec = { ...defaultBookshelfSpec(), heightMm: 400, shelfCount: 6 };
    expect(() => validateSpec(spec)).toThrow(/too many shelves/);
  });

  it('rejects non-positive dimensions', () => {
    const spec = { ...defaultTableSpec(), widthMm: -100 };
    expect(() => validateSpec(spec)).toThrow(/positive/);
  });
});
