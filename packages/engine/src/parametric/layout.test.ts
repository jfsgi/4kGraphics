import { describe, expect, it } from 'vitest';
import { buildLayout } from './layout.js';
import {
  defaultBookshelfSpec,
  defaultCabinetDoorSpec,
  defaultCabinetSpec,
  defaultDrawerBoxSpec,
  defaultDrawerFrontSpec,
  defaultDrawerUnitSpec,
  defaultTableSpec,
  validateSpec,
} from './spec.js';

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

describe('drawer box layout', () => {
  it('builds two sides, front, back, and a floating bottom', () => {
    const layout = buildLayout(defaultDrawerBoxSpec());
    expect(layout.parts.filter((p) => p.name === 'Drawer side')).toHaveLength(2);
    expect(layout.parts.filter((p) => p.name.includes('front'))).toHaveLength(1);
    expect(layout.parts.filter((p) => p.name.includes('back'))).toHaveLength(1);
    const bottom = layout.parts.find((p) => p.name === 'Drawer bottom')!;
    expect(bottom.role).toBe('panel');
  });

  it('runs side grain along the depth', () => {
    const spec = defaultDrawerBoxSpec();
    const layout = buildLayout(spec);
    const side = layout.parts.find((p) => p.name === 'Drawer side')!;
    expect(side.grainAxis).toBe('z');
    expect(side.sizeMm[2]).toBe(spec.depthMm);
  });

  it('shortens sides by the lip for half-blind joinery and keeps the front clean', () => {
    const spec = { ...defaultDrawerBoxSpec(), joinery: 'halfblind' as const };
    const layout = buildLayout(spec);
    const side = layout.parts.find((p) => p.name === 'Drawer side')!;
    expect(side.sizeMm[2]).toBe(spec.depthMm - 6);
    const front = layout.parts.find((p) => p.name === 'Drawer front (box)')!;
    expect(front.joinery).toBeUndefined();
    expect(front.sizeMm[0]).toBe(spec.widthMm);
  });

  it('marks the front with a scoop when requested', () => {
    const layout = buildLayout({ ...defaultDrawerBoxSpec(), scoop: true });
    const front = layout.parts.find((p) => p.name === 'Drawer front (box)')!;
    expect(front.scoop).toBeDefined();
    const back = layout.parts.find((p) => p.name === 'Drawer back (box)')!;
    expect(back.scoop).toBeUndefined();
  });
});

describe('door and drawer front layouts', () => {
  it('builds five pieces for a shaker door', () => {
    const layout = buildLayout(defaultCabinetDoorSpec());
    expect(layout.parts.filter((p) => p.name === 'Door stile')).toHaveLength(2);
    expect(layout.parts.filter((p) => p.name === 'Door rail')).toHaveLength(2);
    expect(layout.parts.filter((p) => p.name === 'Door panel')).toHaveLength(1);
  });

  it('builds a single slab when style is slab', () => {
    const layout = buildLayout({ ...defaultCabinetDoorSpec(), style: 'slab' as const });
    expect(layout.parts).toHaveLength(1);
    expect(layout.parts[0].grainAxis).toBe('y');
  });

  it('runs slab drawer-front grain horizontally', () => {
    const layout = buildLayout({ ...defaultDrawerFrontSpec(), style: 'slab' as const });
    expect(layout.parts[0].grainAxis).toBe('x');
  });

  it('uses long-point rails and flagged members for mitered frames', () => {
    const miter = buildLayout({ ...defaultCabinetDoorSpec(), frameJoint: 'miter' as const });
    const rail = miter.parts.find((p) => p.name === 'Door rail')!;
    expect(rail.sizeMm[0]).toBe(defaultCabinetDoorSpec().widthMm);
    expect(rail.edgeProfile?.miterEnds).toBe(true);
    const cope = buildLayout(defaultCabinetDoorSpec());
    const copeRail = cope.parts.find((p) => p.name === 'Door rail')!;
    // Coped rails are cut long: opening width plus a 10mm stub tenon per end.
    expect(copeRail.sizeMm[0]).toBe(
      defaultCabinetDoorSpec().widthMm - 2 * defaultCabinetDoorSpec().railStileWidthMm + 20,
    );
    expect(copeRail.edgeProfile?.copeTenonMm).toBe(10);
  });

  it('oversizes the floating panel for its grooves', () => {
    const spec = defaultCabinetDoorSpec();
    const layout = buildLayout(spec);
    const panel = layout.parts.find((p) => p.name === 'Door panel')!;
    expect(panel.sizeMm[0]).toBe(spec.widthMm - 2 * spec.railStileWidthMm + 20);
  });

  it('flags the slab for a finger-pull top at nominal dimensions', () => {
    const spec = { ...defaultDrawerFrontSpec(), style: 'slab' as const, fingerPull: true };
    const layout = buildLayout(spec);
    expect(layout.parts).toHaveLength(1);
    expect(layout.parts[0].fingerPullTop).toBe(true);
    expect(layout.parts[0].sizeMm).toEqual([spec.widthMm, spec.heightMm, spec.thicknessMm]);
  });

  it('rejects finger pull on framed fronts', () => {
    expect(() =>
      validateSpec({ ...defaultDrawerFrontSpec(), style: 'shaker', fingerPull: true }),
    ).toThrow(/slab/);
  });
});

describe('drawer unit layout', () => {
  it('builds a carcass plus boxes, fronts, and handles per drawer', () => {
    const spec = { ...defaultDrawerUnitSpec(), drawerCount: 3 };
    const layout = buildLayout(spec);
    expect(layout.parts.filter((p) => p.name === 'Drawer side')).toHaveLength(6);
    expect(layout.parts.filter((p) => p.name === 'Drawer bottom')).toHaveLength(3);
    expect(layout.parts.some((p) => p.name === 'Handle')).toBe(false);
    expect(layout.parts.filter((p) => p.name === 'Drawer front stile')).toHaveLength(6);
  });

  it('keeps drawer boxes inside the carcass with slide clearance', () => {
    const spec = defaultDrawerUnitSpec();
    const layout = buildLayout(spec);
    const innerW = spec.widthMm - 2 * spec.stockThicknessMm;
    for (const side of layout.parts.filter((p) => p.name === 'Drawer side')) {
      expect(Math.abs(side.positionMm[0]) + side.sizeMm[0] / 2).toBeLessThan(innerW / 2);
    }
  });

  it('widens boxes for undermount slides', () => {
    const side = (slideType?: 'sidemount' | 'undermount') => {
      const layout = buildLayout({ ...defaultDrawerUnitSpec(), slideType });
      const sides = layout.parts.filter((p) => p.name === 'Drawer side');
      return Math.max(...sides.map((p) => Math.abs(p.positionMm[0]) + p.sizeMm[0] / 2));
    };
    expect(side('undermount')).toBeGreaterThan(side('sidemount'));
  });

  it('adds divider rails and narrower fronts for inset mounting', () => {
    const spec = { ...defaultDrawerUnitSpec(), frontMount: 'inset' as const, drawerCount: 3 };
    const layout = buildLayout(spec);
    expect(layout.parts.filter((p) => p.name === 'Divider rail')).toHaveLength(2);
    const stiles = layout.parts.filter((p) => p.name === 'Drawer front stile');
    // Inset fronts sit between the carcass sides with reveals.
    const innerW = spec.widthMm - 2 * spec.stockThicknessMm;
    for (const s of stiles) {
      expect(Math.abs(s.positionMm[0]) + s.sizeMm[0] / 2).toBeLessThan(innerW / 2);
    }
  });

  it('uses slab fronts when requested', () => {
    const layout = buildLayout({ ...defaultDrawerUnitSpec(), frontStyle: 'slab' as const, drawerCount: 2 });
    expect(layout.parts.filter((p) => p.name === 'Drawer front')).toHaveLength(2);
    expect(layout.parts.some((p) => p.name === 'Drawer front stile')).toBe(false);
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

  it('rejects rails wider than the door allows', () => {
    const spec = { ...defaultCabinetDoorSpec(), widthMm: 200, railStileWidthMm: 90 };
    expect(() => validateSpec(spec)).toThrow(/railStileWidthMm/);
  });

  it('rejects too many drawers for the height', () => {
    const spec = { ...defaultDrawerUnitSpec(), heightMm: 400, drawerCount: 6 };
    expect(() => validateSpec(spec)).toThrow(/too many drawers/);
  });
});
