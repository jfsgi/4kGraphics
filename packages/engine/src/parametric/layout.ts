/**
 * Converts a furniture spec into a neutral list of parts (name, shape, size,
 * position). The same layout feeds both the 3D geometry builder and the
 * build-plan generator, so the render and the cut list can never disagree.
 *
 * Coordinate system: y-up, origin at the center of the footprint on the floor.
 * All values in millimeters.
 */

import type {
  BookshelfSpec,
  CabinetDoorSpec,
  CabinetSpec,
  DrawerBoxSpec,
  DrawerFrontSpec,
  DrawerUnitSpec,
  FrontStyle,
  FurnitureSpec,
  TableSpec,
} from './spec.js';
import { validateSpec } from './spec.js';

export type PartShape = 'box' | 'cylinder' | 'taperedLeg';

export type PartRole = 'structure' | 'surface' | 'panel' | 'hardware';

export interface Part {
  /** Human-readable part name; identical parts share a name (e.g. "Leg"). */
  name: string;
  shape: PartShape;
  /**
   * Bounding size [x, y, z] in mm. For cylinders and tapered legs, x and z are
   * the (largest) diameter and y is the length.
   */
  sizeMm: [number, number, number];
  /** Center of the part in mm. */
  positionMm: [number, number, number];
  /** Euler rotation in radians, applied XYZ. */
  rotationRad?: [number, number, number];
  role: PartRole;
  /** Axis the wood grain runs along, for the cut list. */
  grainAxis: 'x' | 'y' | 'z';
}

export interface FurnitureLayout {
  spec: FurnitureSpec;
  parts: Part[];
  /** Overall bounding size [x, y, z] in mm. */
  overallMm: [number, number, number];
}

export function buildLayout(spec: FurnitureSpec): FurnitureLayout {
  validateSpec(spec);
  switch (spec.kind) {
    case 'table':
      return tableLayout(spec);
    case 'bookshelf':
      return bookshelfLayout(spec);
    case 'cabinet':
      return cabinetLayout(spec);
    case 'drawerbox':
      return drawerBoxLayout(spec);
    case 'door':
    case 'drawerfront':
      return frontPanelLayout(spec);
    case 'drawerunit':
      return drawerUnitLayout(spec);
  }
}

function tableLayout(spec: TableSpec): FurnitureLayout {
  const parts: Part[] = [];
  const { widthMm: w, depthMm: d, heightMm: h } = spec;
  const legH = h - spec.topThicknessMm;
  const legT = spec.legThicknessMm;

  parts.push({
    name: 'Tabletop',
    shape: 'box',
    sizeMm: [w, spec.topThicknessMm, d],
    positionMm: [0, h - spec.topThicknessMm / 2, 0],
    role: 'surface',
    grainAxis: 'x',
  });

  const legShape: PartShape =
    spec.legStyle === 'round' ? 'cylinder' : spec.legStyle === 'tapered' ? 'taperedLeg' : 'box';
  const lx = w / 2 - spec.legInsetMm - legT / 2;
  const lz = d / 2 - spec.legInsetMm - legT / 2;
  for (const [sx, sz] of [
    [1, 1],
    [1, -1],
    [-1, 1],
    [-1, -1],
  ] as const) {
    parts.push({
      name: 'Leg',
      shape: legShape,
      sizeMm: [legT, legH, legT],
      positionMm: [sx * lx, legH / 2, sz * lz],
      role: 'structure',
      grainAxis: 'y',
    });
  }

  if (spec.apron) {
    const railT = 22;
    const railY = h - spec.topThicknessMm - spec.apronHeightMm / 2;
    const longRail = w - 2 * spec.legInsetMm - 2 * legT;
    const shortRail = d - 2 * spec.legInsetMm - 2 * legT;
    for (const sz of [1, -1]) {
      parts.push({
        name: 'Apron rail (long)',
        shape: 'box',
        sizeMm: [longRail, spec.apronHeightMm, railT],
        positionMm: [0, railY, sz * (lz + legT / 2 - railT / 2)],
        role: 'structure',
        grainAxis: 'x',
      });
    }
    for (const sx of [1, -1]) {
      parts.push({
        name: 'Apron rail (short)',
        shape: 'box',
        sizeMm: [railT, spec.apronHeightMm, shortRail],
        positionMm: [sx * (lx + legT / 2 - railT / 2), railY, 0],
        role: 'structure',
        grainAxis: 'z',
      });
    }
  }

  return { spec, parts, overallMm: [w, h, d] };
}

function bookshelfLayout(spec: BookshelfSpec): FurnitureLayout {
  const parts: Part[] = [];
  const { widthMm: w, heightMm: h, depthMm: d, stockThicknessMm: t } = spec;
  const backT = spec.backPanel ? 6 : 0;
  const caseDepth = d - backT;

  for (const sx of [1, -1]) {
    parts.push({
      name: 'Side panel',
      shape: 'box',
      sizeMm: [t, h, caseDepth],
      positionMm: [sx * (w / 2 - t / 2), h / 2, backT / 2],
      role: 'structure',
      grainAxis: 'y',
    });
  }

  const innerW = w - 2 * t;
  parts.push({
    name: 'Top panel',
    shape: 'box',
    sizeMm: [innerW, t, caseDepth],
    positionMm: [0, h - t / 2, backT / 2],
    role: 'structure',
    grainAxis: 'x',
  });
  parts.push({
    name: 'Bottom panel',
    shape: 'box',
    sizeMm: [innerW, t, caseDepth],
    positionMm: [0, t / 2, backT / 2],
    role: 'structure',
    grainAxis: 'x',
  });

  const interiorH = h - 2 * t;
  const openings = spec.shelfCount + 1;
  const pitch = (interiorH - spec.shelfCount * t) / openings;
  for (let i = 1; i <= spec.shelfCount; i++) {
    const y = t + i * pitch + (i - 0.5) * t;
    parts.push({
      name: 'Shelf',
      shape: 'box',
      sizeMm: [innerW, t, caseDepth - 20],
      positionMm: [0, y, backT / 2 + 10],
      role: 'surface',
      grainAxis: 'x',
    });
  }

  if (spec.backPanel) {
    parts.push({
      name: 'Back panel',
      shape: 'box',
      sizeMm: [w, h, backT],
      positionMm: [0, h / 2, -d / 2 + backT / 2],
      role: 'panel',
      grainAxis: 'y',
    });
  }

  return { spec, parts, overallMm: [w, h, d] };
}

function cabinetLayout(spec: CabinetSpec): FurnitureLayout {
  const parts: Part[] = [];
  const { widthMm: w, heightMm: h, depthMm: d, stockThicknessMm: t } = spec;
  const legH = spec.legHeightMm;
  const caseH = h - legH;
  const backT = 6;
  const doorT = 18;
  const caseDepth = d - backT - doorT;
  const caseZ = (backT - doorT) / 2; // case centered between back panel and doors

  for (const sx of [1, -1]) {
    parts.push({
      name: 'Side panel',
      shape: 'box',
      sizeMm: [t, caseH, caseDepth],
      positionMm: [sx * (w / 2 - t / 2), legH + caseH / 2, caseZ],
      role: 'structure',
      grainAxis: 'y',
    });
  }

  const innerW = w - 2 * t;
  const topOverhang = 20;
  parts.push({
    name: 'Top',
    shape: 'box',
    sizeMm: [w + 2 * topOverhang, t, d + topOverhang],
    positionMm: [0, h + t / 2, topOverhang / 2],
    role: 'surface',
    grainAxis: 'x',
  });
  parts.push({
    name: 'Bottom panel',
    shape: 'box',
    sizeMm: [innerW, t, caseDepth],
    positionMm: [0, legH + t / 2, caseZ],
    role: 'structure',
    grainAxis: 'x',
  });
  parts.push({
    name: 'Top stretcher',
    shape: 'box',
    sizeMm: [innerW, t, caseDepth],
    positionMm: [0, legH + caseH - t / 2, caseZ],
    role: 'structure',
    grainAxis: 'x',
  });
  parts.push({
    name: 'Interior shelf',
    shape: 'box',
    sizeMm: [innerW, t, caseDepth - 20],
    positionMm: [0, legH + caseH / 2, caseZ + 10],
    role: 'surface',
    grainAxis: 'x',
  });
  parts.push({
    name: 'Back panel',
    shape: 'box',
    sizeMm: [w, caseH, backT],
    positionMm: [0, legH + caseH / 2, -d / 2 + backT / 2],
    role: 'panel',
    grainAxis: 'x',
  });

  const gap = 3;
  const doorW = (w - gap * (spec.doorCount + 1)) / spec.doorCount;
  const doorH = caseH - 2 * gap;
  const doorZ = d / 2 - doorT / 2;
  for (let i = 0; i < spec.doorCount; i++) {
    const x = -w / 2 + gap + doorW / 2 + i * (doorW + gap);
    parts.push({
      name: 'Door',
      shape: 'box',
      sizeMm: [doorW, doorH, doorT],
      positionMm: [x, legH + gap + doorH / 2, doorZ],
      role: 'panel',
      grainAxis: 'y',
    });
    // Handle near the inner edge of each door, at comfortable height.
    const towardCenter = x <= 0 ? 1 : -1;
    parts.push({
      name: 'Handle',
      shape: 'cylinder',
      sizeMm: [12, 110, 12],
      positionMm: [x + towardCenter * (doorW / 2 - 35), legH + caseH * 0.55, doorZ + doorT / 2 + 18],
      role: 'hardware',
      grainAxis: 'y',
    });
  }

  if (legH > 0) {
    const legT = 35;
    const inset = 25;
    for (const [sx, sz] of [
      [1, 1],
      [1, -1],
      [-1, 1],
      [-1, -1],
    ] as const) {
      parts.push({
        name: 'Leg',
        shape: 'taperedLeg',
        sizeMm: [legT, legH, legT],
        positionMm: [sx * (w / 2 - inset - legT / 2), legH / 2, sz * (d / 2 - inset - legT / 2)],
        role: 'structure',
        grainAxis: 'y',
      });
    }
  }

  return { spec, parts, overallMm: [w + 2 * topOverhang, h + t, d + topOverhang] };
}

function drawerBoxLayout(spec: DrawerBoxSpec): FurnitureLayout {
  const parts: Part[] = [];
  const { widthMm: w, depthMm: d, heightMm: h, stockThicknessMm: t } = spec;

  for (const sx of [1, -1]) {
    parts.push({
      name: 'Drawer side',
      shape: 'box',
      sizeMm: [t, h, d],
      positionMm: [sx * (w / 2 - t / 2), h / 2, 0],
      role: 'structure',
      grainAxis: 'z',
    });
  }
  for (const sz of [1, -1]) {
    parts.push({
      name: sz > 0 ? 'Drawer front (box)' : 'Drawer back (box)',
      shape: 'box',
      sizeMm: [w - 2 * t, h, t],
      positionMm: [0, h / 2, sz * (d / 2 - t / 2)],
      role: 'structure',
      grainAxis: 'x',
    });
  }
  // Bottom rides in a groove ~12mm above the lower edge.
  parts.push({
    name: 'Drawer bottom',
    shape: 'box',
    sizeMm: [w - 2 * t + 12, spec.bottomThicknessMm, d - 2 * t + 12],
    positionMm: [0, 12 + spec.bottomThicknessMm / 2, 0],
    role: 'panel',
    grainAxis: 'x',
  });

  return { spec, parts, overallMm: [w, h, d] };
}

/**
 * Emits the parts of one door/drawer-front face at the given center.
 * Shaker fronts are five pieces: two stiles, two rails, and a floating
 * panel (cut 10mm oversize on each edge to sit in the frame grooves).
 */
function pushFrontParts(
  parts: Part[],
  options: {
    style: FrontStyle;
    widthMm: number;
    heightMm: number;
    thicknessMm: number;
    railStileWidthMm: number;
    panelThicknessMm: number;
    centerXMm: number;
    bottomYMm: number;
    centerZMm: number;
    namePrefix: string;
    slabGrain: 'x' | 'y';
  },
): void {
  const { style, widthMm: w, heightMm: h, thicknessMm: t, railStileWidthMm: rsw } = options;
  const { centerXMm: cx, bottomYMm: y0, centerZMm: cz, namePrefix } = options;
  if (style === 'slab') {
    parts.push({
      name: `${namePrefix}`,
      shape: 'box',
      sizeMm: [w, h, t],
      positionMm: [cx, y0 + h / 2, cz],
      role: 'panel',
      grainAxis: options.slabGrain,
    });
    return;
  }
  for (const sx of [1, -1]) {
    parts.push({
      name: `${namePrefix} stile`,
      shape: 'box',
      sizeMm: [rsw, h, t],
      positionMm: [cx + sx * (w / 2 - rsw / 2), y0 + h / 2, cz],
      role: 'structure',
      grainAxis: 'y',
    });
  }
  for (const top of [0, 1]) {
    parts.push({
      name: `${namePrefix} rail`,
      shape: 'box',
      sizeMm: [w - 2 * rsw, rsw, t],
      positionMm: [cx, y0 + (top ? h - rsw / 2 : rsw / 2), cz],
      role: 'structure',
      grainAxis: 'x',
    });
  }
  // Floating panel, recessed ~6mm from the front face.
  const pt = options.panelThicknessMm;
  parts.push({
    name: `${namePrefix} panel`,
    shape: 'box',
    sizeMm: [w - 2 * rsw + 20, h - 2 * rsw + 20, pt],
    positionMm: [cx, y0 + h / 2, cz + t / 2 - 6 - pt / 2],
    role: 'panel',
    grainAxis: options.slabGrain,
  });
}

function frontPanelLayout(spec: CabinetDoorSpec | DrawerFrontSpec): FurnitureLayout {
  const parts: Part[] = [];
  pushFrontParts(parts, {
    style: spec.style,
    widthMm: spec.widthMm,
    heightMm: spec.heightMm,
    thicknessMm: spec.thicknessMm,
    railStileWidthMm: spec.railStileWidthMm,
    panelThicknessMm: spec.panelThicknessMm,
    centerXMm: 0,
    bottomYMm: 0,
    centerZMm: 0,
    namePrefix: spec.kind === 'door' ? 'Door' : 'Front',
    // Doors run grain vertically; drawer fronts horizontally.
    slabGrain: spec.kind === 'door' ? 'y' : 'x',
  });
  return { spec, parts, overallMm: [spec.widthMm, spec.heightMm, spec.thicknessMm] };
}

function drawerUnitLayout(spec: DrawerUnitSpec): FurnitureLayout {
  const parts: Part[] = [];
  const { widthMm: w, heightMm: h, depthMm: d, stockThicknessMm: t } = spec;
  const backT = 6;
  const frontT = 19;
  const gap = 3;
  const slideClearance = 13; // per side, for standard side-mount slides
  const caseDepth = d - frontT;
  const innerDepth = caseDepth - backT;
  const caseZ = (backT - frontT) / 2;

  for (const sx of [1, -1]) {
    parts.push({
      name: 'Side panel',
      shape: 'box',
      sizeMm: [t, h, caseDepth],
      positionMm: [sx * (w / 2 - t / 2), h / 2, -frontT / 2],
      role: 'structure',
      grainAxis: 'y',
    });
  }
  const innerW = w - 2 * t;
  for (const top of [0, 1]) {
    parts.push({
      name: top ? 'Top panel' : 'Bottom panel',
      shape: 'box',
      sizeMm: [innerW, t, innerDepth],
      positionMm: [0, top ? h - t / 2 : t / 2, caseZ],
      role: 'structure',
      grainAxis: 'x',
    });
  }
  parts.push({
    name: 'Back panel',
    shape: 'box',
    sizeMm: [w, h, backT],
    positionMm: [0, h / 2, -d / 2 + backT / 2],
    role: 'panel',
    grainAxis: 'y',
  });

  const n = spec.drawerCount;
  const frontW = w - 4;
  const frontH = (h - 4 - gap * (n - 1)) / n;
  const boxT = spec.boxStockThicknessMm;
  const boxW = w - 2 * t - 2 * slideClearance;
  const boxH = Math.max(60, frontH - 30);
  const boxD = Math.min(innerDepth - 25, Math.floor((innerDepth - 25) / 50) * 50);
  const frontZ = d / 2 - frontT / 2;

  for (let i = 0; i < n; i++) {
    const y0 = 2 + i * (frontH + gap);
    pushFrontParts(parts, {
      style: spec.frontStyle,
      widthMm: frontW,
      heightMm: frontH,
      thicknessMm: frontT,
      railStileWidthMm: 50,
      panelThicknessMm: 6,
      centerXMm: 0,
      bottomYMm: y0,
      centerZMm: frontZ,
      namePrefix: 'Drawer front',
      slabGrain: 'x',
    });

    const boxY0 = y0 + 10;
    const boxZ = d / 2 - frontT - boxD / 2 - 5;
    for (const sx of [1, -1]) {
      parts.push({
        name: 'Drawer side',
        shape: 'box',
        sizeMm: [boxT, boxH, boxD],
        positionMm: [sx * (boxW / 2 - boxT / 2), boxY0 + boxH / 2, boxZ],
        role: 'structure',
        grainAxis: 'z',
      });
    }
    for (const sz of [1, -1]) {
      parts.push({
        name: sz > 0 ? 'Drawer box front' : 'Drawer box back',
        shape: 'box',
        sizeMm: [boxW - 2 * boxT, boxH, boxT],
        positionMm: [0, boxY0 + boxH / 2, boxZ + sz * (boxD / 2 - boxT / 2)],
        role: 'structure',
        grainAxis: 'x',
      });
    }
    parts.push({
      name: 'Drawer bottom',
      shape: 'box',
      sizeMm: [boxW - 2 * boxT + 12, 6, boxD - 2 * boxT + 12],
      positionMm: [0, boxY0 + 12 + 3, boxZ],
      role: 'panel',
      grainAxis: 'x',
    });

    parts.push({
      name: 'Handle',
      shape: 'cylinder',
      sizeMm: [12, Math.min(160, frontW * 0.4), 12],
      positionMm: [0, y0 + frontH / 2, d / 2 + 18],
      rotationRad: [0, 0, Math.PI / 2],
      role: 'hardware',
      grainAxis: 'y',
    });
  }

  return { spec, parts, overallMm: [w, h, d] };
}
