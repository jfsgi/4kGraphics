// The pushed-scene contract — Atelier3D's neutral, evaluated representation.
//
// Mirrors `src/core/types.ts` in jfsgi/MEJAFurnitureDesign- (Atelier3D): a
// project evaluates each placed component into a list of Parts, and each Part
// is a list of Primitives in instance-local model space (Z-up, millimeters:
// X = width, Y = depth, Z = height). The render service rebuilds geometry from
// these primitives with the engine's 4K materials and lighting.
//
// This is the wire format for POST /v1/models and the `scene` field of
// POST /v1/render. Keep the Primitive union in lockstep with the frozen
// builders in primitives.ts / jointBoards.ts.

/** Render/evaluation primitives, instance-local model space (Z-up, mm). */
export type Primitive =
  | {
      shape: 'box';
      size: [number, number, number];
      at: [number, number, number];
      tilt?: number;
      tiltX?: number;
      endGrain?: boolean;
      grain?: 'x' | 'y' | 'z';
    }
  | {
      shape: 'taperedBox';
      top: [number, number];
      bottom: [number, number];
      height: number;
      at: [number, number, number];
      align: [number, number];
      shift?: [number, number];
      axis?: 'x' | 'y' | 'z';
      endGrain?: boolean;
    }
  | {
      shape: 'cylinder';
      radiusTop: number;
      radiusBottom: number;
      height: number;
      at: [number, number, number];
      axis?: 'x' | 'y' | 'z';
    }
  | {
      shape: 'roundedSlab';
      size: [number, number, number];
      at: [number, number, number];
      radius: number;
      edge?: number;
      edgeMode?: 'both' | 'top';
      axis?: 'z' | 'y';
      corners?: 'front' | 'all';
      squareBack?: boolean;
      grain?: 'x' | 'y' | 'z';
    }
  | {
      shape: 'roundedNotchedSlab';
      size: [number, number, number];
      at: [number, number, number];
      notch: [number, number];
      radius: number;
      grain?: 'x' | 'y' | 'z';
    }
  | {
      shape: 'mortisedPost';
      size: [number, number, number];
      at: [number, number, number];
      radius: number;
      grain?: 'x' | 'y' | 'z';
      mortises: {
        face: 'x+' | 'x-' | 'y+' | 'y-';
        z: number;
        width: number;
        height: number;
        depth: number;
        flare?: number;
        openTop?: boolean;
        roundBottom?: boolean;
      }[];
    }
  | {
      shape: 'frenchDovetail';
      at: [number, number, number];
      depth: number;
      rootThin: number;
      tipThin: number;
      runH: number;
      dir: 1 | -1;
      interfaceAxis: 'x' | 'y';
      runAxis?: 'x' | 'y' | 'z';
      runSign?: 1 | -1;
      grain?: 'x' | 'y' | 'z';
    }
  | {
      shape: 'jointedBoard';
      role: 'tails' | 'pins';
      length: number;
      height: number;
      thickness: number;
      at: [number, number, number];
      lengthAxis: 'x' | 'y' | 'z';
      thicknessAxis: 'x' | 'y' | 'z';
      joint: 'dovetail' | 'box-joint';
      jointDepth: number;
      outerSign?: 1 | -1;
      lip?: number;
      lipEnd?: 'positive' | 'negative';
      plainEnd?: 'positive' | 'negative';
      scoop?: { width: number; depth: number };
      groove?: { center: number; width: number; depth: number; side: 1 | -1 };
      sockets?: { at: number; width: number; runCenter: number; runLen: number; depth: number; side: 1 | -1 }[];
    }
  | {
      shape: 'archedBoard';
      size: [number, number, number];
      at: [number, number, number];
      arch: 'bottom-x' | 'bottom-y' | 'front' | 'scoop' | 'waterfall' | 'waterfall-y';
      rise: number;
      shoulder?: number;
      endSkew?: number;
    };

/** One board/part: a name, a material id, and the primitives that form it. */
export interface ScenePart {
  id: string;
  name: string;
  /** Atelier3D material id (e.g. 'white-oak', 'walnut'); mapped to an engine material. */
  material: string;
  primitives: Primitive[];
}

/** A placed component: its evaluated parts plus where it sits on the floor. */
export interface SceneInstance {
  id: string;
  name?: string;
  /** Floor-plane position [x, depth] in millimeters. */
  position?: [number, number];
  /** Rotation about the vertical axis, radians. */
  rotationZ?: number;
  parts: ScenePart[];
}

/**
 * A whole pushed design. Either a flat `parts` list (single piece) or
 * `instances` (a multi-component assembly). Coordinates are always Z-up mm,
 * regardless of the `units` display preference.
 */
export interface Scene {
  schema?: number;
  name?: string;
  units?: 'imperial' | 'metric';
  instances?: SceneInstance[];
  parts?: ScenePart[];
}
