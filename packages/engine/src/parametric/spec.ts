/**
 * Parametric furniture specifications.
 *
 * All dimensions are in millimeters (woodworking convention). The geometry
 * builder converts to meters (scene units) when constructing meshes.
 */

export type LegStyle = 'square' | 'round' | 'tapered';

export interface TableSpec {
  kind: 'table';
  name?: string;
  widthMm: number;
  depthMm: number;
  heightMm: number;
  topThicknessMm: number;
  legStyle: LegStyle;
  legThicknessMm: number;
  /** Distance from the table edge to the outer face of each leg. */
  legInsetMm: number;
  apron: boolean;
  apronHeightMm: number;
}

export interface BookshelfSpec {
  kind: 'bookshelf';
  name?: string;
  widthMm: number;
  heightMm: number;
  depthMm: number;
  /** Number of adjustable shelves between the fixed top and bottom. */
  shelfCount: number;
  stockThicknessMm: number;
  backPanel: boolean;
}

export interface CabinetSpec {
  kind: 'cabinet';
  name?: string;
  widthMm: number;
  heightMm: number;
  depthMm: number;
  doorCount: number;
  stockThicknessMm: number;
  legHeightMm: number;
}

export type FurnitureSpec = TableSpec | BookshelfSpec | CabinetSpec;
export type FurnitureKind = FurnitureSpec['kind'];

export function defaultTableSpec(): TableSpec {
  return {
    kind: 'table',
    name: 'Dining Table',
    widthMm: 1800,
    depthMm: 900,
    heightMm: 750,
    topThicknessMm: 32,
    legStyle: 'tapered',
    legThicknessMm: 70,
    legInsetMm: 40,
    apron: true,
    apronHeightMm: 90,
  };
}

export function defaultBookshelfSpec(): BookshelfSpec {
  return {
    kind: 'bookshelf',
    name: 'Bookshelf',
    widthMm: 900,
    heightMm: 1800,
    depthMm: 300,
    shelfCount: 4,
    stockThicknessMm: 18,
    backPanel: true,
  };
}

export function defaultCabinetSpec(): CabinetSpec {
  return {
    kind: 'cabinet',
    name: 'Sideboard Cabinet',
    widthMm: 1400,
    heightMm: 800,
    depthMm: 450,
    doorCount: 2,
    stockThicknessMm: 18,
    legHeightMm: 150,
  };
}

export function defaultSpec(kind: FurnitureKind): FurnitureSpec {
  switch (kind) {
    case 'table':
      return defaultTableSpec();
    case 'bookshelf':
      return defaultBookshelfSpec();
    case 'cabinet':
      return defaultCabinetSpec();
  }
}

/** Throws with a descriptive message if the spec is geometrically impossible. */
export function validateSpec(spec: FurnitureSpec): void {
  const positive = (value: number, label: string) => {
    if (!Number.isFinite(value) || value <= 0) {
      throw new Error(`${spec.kind}: ${label} must be a positive number, got ${value}`);
    }
  };
  switch (spec.kind) {
    case 'table': {
      positive(spec.widthMm, 'widthMm');
      positive(spec.depthMm, 'depthMm');
      positive(spec.heightMm, 'heightMm');
      positive(spec.topThicknessMm, 'topThicknessMm');
      positive(spec.legThicknessMm, 'legThicknessMm');
      if (spec.topThicknessMm >= spec.heightMm) {
        throw new Error('table: topThicknessMm must be less than heightMm');
      }
      const minSpan = 2 * (spec.legInsetMm + spec.legThicknessMm);
      if (spec.widthMm <= minSpan || spec.depthMm <= minSpan) {
        throw new Error('table: legs do not fit — reduce legInsetMm or legThicknessMm');
      }
      break;
    }
    case 'bookshelf': {
      positive(spec.widthMm, 'widthMm');
      positive(spec.heightMm, 'heightMm');
      positive(spec.depthMm, 'depthMm');
      positive(spec.stockThicknessMm, 'stockThicknessMm');
      if (!Number.isInteger(spec.shelfCount) || spec.shelfCount < 0) {
        throw new Error('bookshelf: shelfCount must be a non-negative integer');
      }
      const interior = spec.heightMm - 2 * spec.stockThicknessMm;
      const needed = (spec.shelfCount + 1) * 100 + spec.shelfCount * spec.stockThicknessMm;
      if (interior < needed) {
        throw new Error('bookshelf: too many shelves for the given height (need ≥100mm per opening)');
      }
      break;
    }
    case 'cabinet': {
      positive(spec.widthMm, 'widthMm');
      positive(spec.heightMm, 'heightMm');
      positive(spec.depthMm, 'depthMm');
      positive(spec.stockThicknessMm, 'stockThicknessMm');
      if (!Number.isInteger(spec.doorCount) || spec.doorCount < 1 || spec.doorCount > 4) {
        throw new Error('cabinet: doorCount must be an integer between 1 and 4');
      }
      if (spec.legHeightMm < 0 || spec.legHeightMm >= spec.heightMm) {
        throw new Error('cabinet: legHeightMm must be ≥ 0 and less than heightMm');
      }
      break;
    }
  }
}
