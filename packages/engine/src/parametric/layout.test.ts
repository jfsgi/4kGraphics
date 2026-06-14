import { describe, expect, it } from 'vitest';
import { buildLayout } from './layout.js';
import { pinsBoardGeometry, slopedDrawerSideGeometry, tailsBoardGeometry } from './joinery.js';
import {
  defaultBookshelfSpec,
  defaultCabinetDoorSpec,
  defaultCabinetSpec,
  defaultDrawerBoxSpec,
  defaultDrawerFrontSpec,
  defaultDrawerUnitSpec,
  defaultEndTableSpec,
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
    // Through joinery here — the default half-blind shortens sides by the lap.
    const spec = { ...defaultDrawerBoxSpec(), joinery: 'dovetail' as const };
    const layout = buildLayout(spec);
    const side = layout.parts.find((p) => p.name === 'Drawer side')!;
    expect(side.grainAxis).toBe('z');
    expect(side.sizeMm[2]).toBe(spec.depthMm);
  });

  it('laps the half-blind box: tails on the sides, pins on the front and back', () => {
    const spec = { ...defaultDrawerBoxSpec(), joinery: 'halfblind' as const };
    const layout = buildLayout(spec);
    const lip = 1.5875;
    // Standard drawer convention: sides carry the tails; front/back the (blind) pins.
    const side = layout.parts.find((p) => p.name === 'Drawer side')!;
    expect(side.sizeMm[2]).toBeCloseTo(spec.depthMm - 2 * lip);
    expect(side.joinery?.role).toBe('tails');
    expect(side.joinery?.frontLipMm).toBeCloseTo(lip);
    expect(side.joinery?.backLipMm).toBeCloseTo(lip);
    const front = layout.parts.find((p) => p.name === 'Drawer front (box)')!;
    expect(front.joinery?.role).toBe('pins');
    expect(front.joinery?.lipMm).toBeCloseTo(lip);
    expect(front.sizeMm[0]).toBe(spec.widthMm);
    const back = layout.parts.find((p) => p.name === 'Drawer back (box)')!;
    expect(back.joinery?.role).toBe('pins');
  });

  it('marks the front with a scoop when requested', () => {
    const layout = buildLayout({ ...defaultDrawerBoxSpec(), scoop: true });
    const front = layout.parts.find((p) => p.name === 'Drawer front (box)')!;
    expect(front.scoop).toBeDefined();
    const back = layout.parts.find((p) => p.name === 'Drawer back (box)')!;
    expect(back.scoop).toBeUndefined();
  });

  it('builds a scooped tray: low front, sides sloping up to a full back', () => {
    const spec = {
      ...defaultDrawerBoxSpec(),
      joinery: 'halfblind' as const,
      heightMm: 150,
      scoopedSides: true,
      scoopFrontHeightMm: 60,
    };
    const layout = buildLayout(spec);
    const front = layout.parts.find((p) => p.name === 'Drawer front (box)')!;
    const back = layout.parts.find((p) => p.name === 'Drawer back (box)')!;
    const side = layout.parts.find((p) => p.name === 'Drawer side')!;
    // The front is lowered and bottom-aligned; the back stays full height.
    expect(front.sizeMm[1]).toBe(60);
    expect(front.positionMm[1]).toBe(30);
    expect(back.sizeMm[1]).toBe(150);
    // Sides keep full height but carry the slope from the low front to the back.
    expect(side.sizeMm[1]).toBe(150);
    expect(side.slopedTop?.frontHeightMm).toBe(60);
    expect(side.slopedTop?.backHeightMm).toBe(150);
    // The ogee sweep defaults to the full inner depth (depth − 2 × stock).
    expect(side.slopedTop?.scoopLengthMm).toBe(spec.depthMm - 2 * spec.stockThicknessMm);
    // Scooped trays are through-dovetailed (no half-blind lap); sides tails.
    expect(side.joinery?.role).toBe('tails');
    expect(side.joinery?.frontLipMm).toBeUndefined();
    expect(side.sizeMm[2]).toBe(spec.depthMm);
    expect(front.joinery?.role).toBe('pins');
    expect(front.joinery?.lipMm).toBeUndefined();
  });

  it('renders a sloped drawer side (tails) with teeth at both ends', () => {
    const joint = { type: 'dovetail' as const, depth: 0.013, edgePins: true };
    const sloped = slopedDrawerSideGeometry(0.42, 0.06, 0.15, 0.013, joint);
    expect(sloped).not.toBeNull();
    expect(sloped!.attributes.position.count).toBeGreaterThan(100);
    sloped!.computeBoundingBox();
    // Centered on the full height; the back end reaches the full half-height.
    expect(sloped!.boundingBox!.max.y).toBeCloseTo(0.075, 5);
  });

  it('puts a 3/8" half-pin at the top and bottom edges (edgePins)', () => {
    const layout = buildLayout({ ...defaultDrawerBoxSpec(), joinery: 'dovetail' as const });
    const side = layout.parts.find((p) => p.name === 'Drawer side')!;
    expect(side.joinery?.edgePins).toBe(true);
    expect(side.joinery?.edgeTails).toBeUndefined();
  });

  it('generates real dovetail geometry for both joint boards', () => {
    // Regression: a failed merge inside these builders returns null and the
    // renderer silently degrades the joint to a plain 24-vertex box.
    const joint = { type: 'dovetail' as const, depth: 0.013 };
    const tails = tailsBoardGeometry(0.013, 0.15, 0.45, joint);
    const pins = pinsBoardGeometry(0.5, 0.15, 0.013, joint, 1);
    expect(tails).not.toBeNull();
    expect(pins).not.toBeNull();
    expect(tails!.attributes.position.count).toBeGreaterThan(100);
    expect(pins!.attributes.position.count).toBeGreaterThan(100);
  });

  it('keeps half-blind sockets behind the lap', () => {
    const joint = { type: 'dovetail' as const, depth: 0.013 };
    const lip = 0.0015875;
    const pins = pinsBoardGeometry(0.5, 0.15, 0.013, joint, 1, undefined, lip)!;
    pins.computeBoundingBox();
    // The lap plate must carry the show face to the full +z half-thickness.
    expect(pins.boundingBox!.max.z).toBeCloseTo(0.0065, 5);
    const tails = tailsBoardGeometry(0.013, 0.15, 0.45, joint, joint.depth - lip)!;
    tails.computeBoundingBox();
    expect(tails.attributes.position.count).toBeGreaterThan(100);
  });

  it('dovetails the drawer unit carcass — tails on the sides, pins on top and bottom', () => {
    const spec = defaultDrawerUnitSpec();
    const layout = buildLayout(spec);
    const top = layout.parts.find((p) => p.name === 'Top panel')!;
    expect(top.sizeMm[0]).toBe(spec.widthMm);
    expect(top.joinery?.role).toBe('pins');
    expect(top.joinery?.orient).toBe('case');
    const side = layout.parts.find((p) => p.name === 'Side panel')!;
    expect(side.joinery?.role).toBe('tails');
    expect(side.joinery?.orient).toBe('case');
    expect(side.joinery?.matingThicknessMm).toBe(spec.stockThicknessMm);
  });

  it('recesses column dividers and extends inset fronts across them', () => {
    const spec = {
      ...defaultDrawerUnitSpec(),
      widthMm: 1200,
      columnCount: 2,
      frontMount: 'inset' as const,
      frontStyle: 'slab' as const,
    };
    const layout = buildLayout(spec);
    const divider = layout.parts.find((p) => p.name === 'Column divider')!;
    const frontT = 19;
    // Set back from the front edge by the front thickness.
    const dividerFrontZ = divider.positionMm[2] + divider.sizeMm[2] / 2;
    expect(dividerFrontZ).toBeCloseTo(spec.depthMm / 2 - frontT);
    // Adjacent fronts meet over the divider centerline, one reveal apart.
    const fronts = layout.parts.filter((p) => p.name === 'Drawer front');
    const left = fronts.find((p) => p.positionMm[0] < 0)!;
    const right = fronts.find((p) => p.positionMm[0] > 0)!;
    const gap =
      right.positionMm[0] - right.sizeMm[0] / 2 - (left.positionMm[0] + left.sizeMm[0] / 2);
    expect(gap).toBeCloseTo(2);
  });

  it('keeps flush column dividers at the front edge with full reveals', () => {
    const spec = {
      ...defaultDrawerUnitSpec(),
      widthMm: 1200,
      columnCount: 2,
      columnDivider: 'flush' as const,
      frontMount: 'inset' as const,
      frontStyle: 'slab' as const,
    };
    const layout = buildLayout(spec);
    const divider = layout.parts.find((p) => p.name === 'Column divider')!;
    expect(divider.positionMm[2] + divider.sizeMm[2] / 2).toBeCloseTo(spec.depthMm / 2);
    const fronts = layout.parts.filter((p) => p.name === 'Drawer front');
    const left = fronts.find((p) => p.positionMm[0] < 0)!;
    const right = fronts.find((p) => p.positionMm[0] > 0)!;
    const gap =
      right.positionMm[0] - right.sizeMm[0] / 2 - (left.positionMm[0] + left.sizeMm[0] / 2);
    // Divider face shows between the fronts: stock plus a reveal each side.
    expect(gap).toBeCloseTo(spec.stockThicknessMm + 4);
  });

  it('bevels the opening and sets fronts back by the bevel', () => {
    const spec = {
      ...defaultDrawerUnitSpec(),
      frontMount: 'inset' as const,
      frontStyle: 'slab' as const,
      insideBevelMm: 5,
      dividerRails: true,
    };
    const layout = buildLayout(spec);
    const front = layout.parts.find((p) => p.name === 'Drawer front')!;
    expect(front.positionMm[2] + front.sizeMm[2] / 2).toBeCloseTo(spec.depthMm / 2 - 5);
    // The bevel stays on the case opening — the front face keeps its own edges.
    expect(front.edgeProfile?.bevelMm).toBeUndefined();
    const rail = layout.parts.find((p) => p.name === 'Divider rail')!;
    expect(rail.frontBevel?.bevelMm).toBe(5);
    const side = layout.parts.find((p) => p.name === 'Side panel')!;
    expect(side.joinery?.frontBevelMm).toBe(5);
  });

  it('omits divider rails unless the option is on', () => {
    const spec = {
      ...defaultDrawerUnitSpec(),
      frontMount: 'inset' as const,
      frontStyle: 'slab' as const,
    };
    const without = buildLayout(spec);
    expect(without.parts.some((p) => p.name === 'Divider rail')).toBe(false);
    const withRails = buildLayout({ ...spec, dividerRails: true });
    expect(withRails.parts.filter((p) => p.name === 'Divider rail')).toHaveLength(
      spec.drawerCount - 1,
    );
  });

  it('pulls the requested drawer open with its box', () => {
    const spec = {
      ...defaultDrawerUnitSpec(),
      frontMount: 'inset' as const,
      frontStyle: 'slab' as const,
      openDrawer: 2,
      openAmountMm: 200,
    };
    const closed = buildLayout({ ...spec, openDrawer: 0 });
    const open = buildLayout(spec);
    const frontsClosed = closed.parts.filter((p) => p.name === 'Drawer front');
    const frontsOpen = open.parts.filter((p) => p.name === 'Drawer front');
    expect(frontsOpen[1].positionMm[2] - frontsClosed[1].positionMm[2]).toBeCloseTo(200);
    expect(frontsOpen[0].positionMm[2]).toBeCloseTo(frontsClosed[0].positionMm[2]);
  });

  it('builds the coastal end table: dovetailed top, shelves, inset drawer', () => {
    const spec = defaultEndTableSpec();
    const layout = buildLayout(spec);
    const sides = layout.parts.filter((p) => p.name === 'Side panel');
    expect(sides).toHaveLength(2);
    expect(sides[0].joinery?.role).toBe('tails');
    expect(sides[0].joinery?.singleEnd).toBe(true);
    const top = layout.parts.find((p) => p.name === 'Top')!;
    expect(top.joinery?.role).toBe('pins');
    expect(top.sizeMm[0]).toBe(spec.widthMm);
    expect(layout.parts.some((p) => p.name === 'Middle shelf')).toBe(true);
    expect(layout.parts.some((p) => p.name === 'Bottom shelf')).toBe(true);
    const front = layout.parts.find((p) => p.name === 'Drawer front')!;
    expect(front.positionMm[2] + front.sizeMm[2] / 2).toBeCloseTo(spec.depthMm / 2);
    const boxSide = layout.parts.find((p) => p.name === 'Drawer side')!;
    expect(boxSide.joinery?.type).toBe('dovetail');
  });

  it('laps the half-blind case at top and bottom', () => {
    const spec = { ...defaultDrawerUnitSpec(), caseJoinery: 'halfblind' as const };
    const layout = buildLayout(spec);
    const lip = 1.5875;
    const side = layout.parts.find((p) => p.name === 'Side panel')!;
    expect(side.sizeMm[1]).toBeCloseTo(spec.heightMm - 2 * lip);
    expect(side.joinery?.frontLipMm).toBeCloseTo(lip);
    const top = layout.parts.find((p) => p.name === 'Top panel')!;
    expect(top.joinery?.lipMm).toBeCloseTo(lip);
    expect(top.joinery?.pinsOuterSign).toBe(1);
    const bottom = layout.parts.find((p) => p.name === 'Bottom panel')!;
    expect(bottom.joinery?.pinsOuterSign).toBe(-1);
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
    const spec = {
      ...defaultDrawerUnitSpec(),
      frontMount: 'inset' as const,
      drawerCount: 3,
      dividerRails: true,
    };
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
