/**
 * Converts a furniture spec into a neutral list of parts (name, shape, size,
 * position). The same layout feeds both the 3D geometry builder and the
 * build-plan generator, so the render and the cut list can never disagree.
 *
 * Coordinate system: y-up, origin at the center of the footprint on the floor.
 * All values in millimeters.
 */

import type { BookshelfSpec, CabinetSpec, FurnitureSpec, TableSpec } from './spec.js';
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
