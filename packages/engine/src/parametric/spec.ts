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

export type FrontStyle = 'slab' | 'shaker';
export type DrawerJoinery = 'dovetail' | 'boxjoint' | 'dado';

/** A drawer box (the box itself, no front). Outer dimensions. */
export interface DrawerBoxSpec {
  kind: 'drawerbox';
  name?: string;
  widthMm: number;
  /** Front-to-back. */
  depthMm: number;
  heightMm: number;
  /** Side/front/back stock, typically 12–16. */
  stockThicknessMm: number;
  bottomThicknessMm: number;
  joinery: DrawerJoinery;
}

/** A cabinet door: slab, or five-piece shaker with a floating panel. */
export interface CabinetDoorSpec {
  kind: 'door';
  name?: string;
  widthMm: number;
  heightMm: number;
  thicknessMm: number;
  style: FrontStyle;
  /** Rail/stile width for shaker style. */
  railStileWidthMm: number;
  /** Floating panel stock for shaker style. */
  panelThicknessMm: number;
  /** Include 35mm hinge-cup boring in the plan. */
  hingeBoring: boolean;
}

/** A drawer front: same construction as a door, horizontal proportions. */
export interface DrawerFrontSpec {
  kind: 'drawerfront';
  name?: string;
  widthMm: number;
  heightMm: number;
  thicknessMm: number;
  style: FrontStyle;
  railStileWidthMm: number;
  panelThicknessMm: number;
}

/** A bank of drawers: carcass, drawer boxes on slides, overlay fronts. */
export interface DrawerUnitSpec {
  kind: 'drawerunit';
  name?: string;
  widthMm: number;
  heightMm: number;
  depthMm: number;
  drawerCount: number;
  /** Carcass stock. */
  stockThicknessMm: number;
  /** Drawer box stock. */
  boxStockThicknessMm: number;
  frontStyle: FrontStyle;
}

export type FurnitureSpec =
  | TableSpec
  | BookshelfSpec
  | CabinetSpec
  | DrawerBoxSpec
  | CabinetDoorSpec
  | DrawerFrontSpec
  | DrawerUnitSpec;
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

export function defaultDrawerBoxSpec(): DrawerBoxSpec {
  return {
    kind: 'drawerbox',
    name: 'Drawer Box',
    widthMm: 500,
    depthMm: 450,
    heightMm: 150,
    stockThicknessMm: 13,
    bottomThicknessMm: 6,
    joinery: 'dovetail',
  };
}

export function defaultCabinetDoorSpec(): CabinetDoorSpec {
  return {
    kind: 'door',
    name: 'Cabinet Door',
    widthMm: 400,
    heightMm: 720,
    thicknessMm: 19,
    style: 'shaker',
    railStileWidthMm: 64,
    panelThicknessMm: 6,
    hingeBoring: true,
  };
}

export function defaultDrawerFrontSpec(): DrawerFrontSpec {
  return {
    kind: 'drawerfront',
    name: 'Drawer Front',
    widthMm: 600,
    heightMm: 200,
    thicknessMm: 19,
    style: 'shaker',
    railStileWidthMm: 50,
    panelThicknessMm: 6,
  };
}

export function defaultDrawerUnitSpec(): DrawerUnitSpec {
  return {
    kind: 'drawerunit',
    name: 'Drawer Unit',
    widthMm: 600,
    heightMm: 750,
    depthMm: 500,
    drawerCount: 3,
    stockThicknessMm: 18,
    boxStockThicknessMm: 13,
    frontStyle: 'shaker',
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
    case 'drawerbox':
      return defaultDrawerBoxSpec();
    case 'door':
      return defaultCabinetDoorSpec();
    case 'drawerfront':
      return defaultDrawerFrontSpec();
    case 'drawerunit':
      return defaultDrawerUnitSpec();
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
    case 'drawerbox': {
      positive(spec.widthMm, 'widthMm');
      positive(spec.depthMm, 'depthMm');
      positive(spec.heightMm, 'heightMm');
      positive(spec.stockThicknessMm, 'stockThicknessMm');
      positive(spec.bottomThicknessMm, 'bottomThicknessMm');
      if (spec.widthMm <= 2 * spec.stockThicknessMm + 20) {
        throw new Error('drawerbox: widthMm too small for the stock thickness');
      }
      if (spec.heightMm < 40) {
        throw new Error('drawerbox: heightMm must be at least 40mm');
      }
      break;
    }
    case 'door':
    case 'drawerfront': {
      positive(spec.widthMm, 'widthMm');
      positive(spec.heightMm, 'heightMm');
      positive(spec.thicknessMm, 'thicknessMm');
      if (spec.style === 'shaker') {
        positive(spec.railStileWidthMm, 'railStileWidthMm');
        positive(spec.panelThicknessMm, 'panelThicknessMm');
        if (spec.panelThicknessMm >= spec.thicknessMm) {
          throw new Error(`${spec.kind}: panelThicknessMm must be less than thicknessMm`);
        }
        if (2 * spec.railStileWidthMm + 50 > spec.widthMm || 2 * spec.railStileWidthMm + 50 > spec.heightMm) {
          throw new Error(`${spec.kind}: railStileWidthMm too wide — no room for the center panel`);
        }
      }
      break;
    }
    case 'drawerunit': {
      positive(spec.widthMm, 'widthMm');
      positive(spec.heightMm, 'heightMm');
      positive(spec.depthMm, 'depthMm');
      positive(spec.stockThicknessMm, 'stockThicknessMm');
      positive(spec.boxStockThicknessMm, 'boxStockThicknessMm');
      if (!Number.isInteger(spec.drawerCount) || spec.drawerCount < 1 || spec.drawerCount > 8) {
        throw new Error('drawerunit: drawerCount must be an integer between 1 and 8');
      }
      const interior = spec.heightMm - 2 * spec.stockThicknessMm;
      if (interior / spec.drawerCount < 80) {
        throw new Error('drawerunit: too many drawers for the height (need ≥80mm per drawer)');
      }
      if (spec.widthMm <= 2 * spec.stockThicknessMm + 2 * 13 + 50) {
        throw new Error('drawerunit: widthMm too small for slides and drawer boxes');
      }
      break;
    }
  }
}
