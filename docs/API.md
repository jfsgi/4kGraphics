# API Reference

## `@4kgraphics/engine`

### `new FurnitureEngine(options)`

| Option | Type | Default | |
| --- | --- | --- | --- |
| `container` | `HTMLElement` | required | Element the canvas is appended to and sized against |
| `textureSize` | `number` | `2048` | Procedural texture resolution per side (4096 = full 4K textures) |
| `lighting` | `'studio' \| 'showroom' \| 'daylight'` | `'studio'` | Initial light rig |
| `background` | `string \| 'transparent'` | `'#22252a'` | Initial background |

The engine starts its own render loop with orbit controls (drag to rotate,
wheel to zoom) and follows container resizes automatically.

### Methods

| Method | Returns | |
| --- | --- | --- |
| `showFurniture(spec, { frame? })` | `FurnitureLayout` | Display a parametric piece; `frame: false` keeps the camera |
| `loadModel(urlOrFile, { format?, normalize? })` | `Promise<void>` | Import glTF/GLB/OBJ/FBX/STL |
| `setMaterial(materialId, partName?)` | `void` | Apply to whole piece, or to all parts named e.g. `'Leg'` |
| `setLighting(presetId)` | `void` | Swap light rig |
| `setBackground(color \| 'transparent')` | `void` | |
| `setTextureResolution(size)` | `void` | Regenerate textures (e.g. `4096`) and reapply |
| `setCameraOrbit(azimuthDeg, elevationDeg, distanceFactor?)` | `void` | Programmatic camera placement |
| `frameObject()` | `void` | Auto-frame the current object |
| `renderSnapshot(options?)` | `Promise<Blob>` | High-quality still — see below |
| `getBuildPlan()` | `BuildPlan \| null` | Plan for the current parametric piece (null for imports) |
| `getLayout()` | `FurnitureLayout \| null` | Current part layout |
| `listMaterials()` / `listParts()` / `listLightingPresets()` | arrays | For building UIs |
| `dispose()` | `void` | Release GL resources and detach |

### `renderSnapshot(options)`

| Option | Default | |
| --- | --- | --- |
| `width` / `height` | `3840` / `2160` | Output pixels |
| `supersample` | `2` | Internal render scale (2 → 7680×4320, downsampled; clamped to GPU limits) |
| `transparent` | `false` | PNG alpha background (floor shadow is preserved) |
| `mimeType` / `quality` | `'image/png'` | Use `'image/jpeg'` + quality for smaller files |

Snapshots render in a dedicated offscreen WebGL context at full resolution —
the visible viewport size is irrelevant.

### Furniture specs (all dimensions in **millimeters**)

```ts
// kind: 'table'
{ kind, widthMm, depthMm, heightMm, topThicknessMm,
  legStyle: 'square' | 'round' | 'tapered', legThicknessMm, legInsetMm,
  apron: boolean, apronHeightMm }

// kind: 'bookshelf'
{ kind, widthMm, heightMm, depthMm, shelfCount, stockThicknessMm, backPanel: boolean }

// kind: 'cabinet'
{ kind, widthMm, heightMm, depthMm, doorCount, stockThicknessMm, legHeightMm }

// kind: 'drawerbox' — the box itself, outer dimensions
{ kind, widthMm, depthMm, heightMm, stockThicknessMm, bottomThicknessMm,
  joinery: 'dovetail' | 'halfblind' | 'boxjoint' | 'dado',
  scoop?: boolean }                              // finger-scoop front

// kind: 'door' — slab, five-piece shaker, raised panel, or glass panel
{ kind, widthMm, heightMm, thicknessMm,
  style: 'slab' | 'shaker' | 'raised',
  railStileWidthMm, panelThicknessMm,           // ~6 shaker, 16–19 raised
  raiseProfile?: 'cove' | 'ogee' | 'bevel' | 'roundover' | 'stepcove',
  raiseWidthMm?: number,                        // raised style, default 38
  edgeProfile?:      EdgeProfile, // inner pattern: square|chamfer|roundover|ogee|bead|cove|ovolo|step|thumbnail
  outerEdgeProfile?: EdgeProfile, // outer door-edge detail (same options)
  glassPanel?: boolean,                         // glass pane + retainer hardware
  frameJoint?: 'cope' | 'miter',                // pattern joints or 45° mitered frame
  hingeBoring: boolean }

// kind: 'drawerfront' — same construction as a door, drawer proportions
{ kind, widthMm, heightMm, thicknessMm, style, railStileWidthMm,
  panelThicknessMm, raiseProfile?, raiseWidthMm?, edgeProfile?, outerEdgeProfile?, frameJoint?,
  fingerPull?: boolean }                        // routed top-edge pull channel (slab style)

// kind: 'drawerunit' — carcass + N drawer boxes on slides + overlay fronts
{ kind, widthMm, heightMm, depthMm, drawerCount,  // drawers per column
  columnCount?: number,                         // side-by-side banks
  columnDivider?: 'setback' | 'flush',          // setback (default): divider drops back a front
                                                // thickness, inset fronts gap one reveal over it;
                                                // flush: divider face shows, full reveals
  stockThicknessMm,
  boxStockThicknessMm, frontStyle: 'slab' | 'shaker' | 'raised',
  raiseProfile?, edgeProfile?, outerEdgeProfile?,
  slideType?: 'sidemount' | 'undermount', frameJoint?,
  frontMount?: 'overlay' | 'inset',             // inset adds divider rails + 2mm reveals
  fingerPull?: boolean,                         // pull channel on each front's top edge (slab)
  caseJoinery?: 'dovetail' | 'halfblind',       // carcass corners: through (default) or lapped
  insideBevelMm?: number,                       // 45° bevel on opening edges + front faces;
                                                // inset fronts set back by the bevel (slab, inset)
  dividerRails?: boolean,                       // horizontal rails between rows (inset; default off)
  openDrawer?: number,                          // pull a drawer open: row from bottom, 0 = closed
  openColumn?: number,                          // column of the open drawer (default 1)
  openAmountMm?: number }                       // pull-out distance (default 60% of box depth)
```

Cut-list items and overall dimensions also carry fractional-inch strings
(`lengthIn`, `widthIn`, `thicknessIn`, `overallDimensionsIn`) rounded to 1/16";
`inchesToMm` / `mmToInches` / `formatInches` are exported for converting at
your app's boundaries.

`defaultTableSpec()` / `defaultBookshelfSpec()` / `defaultCabinetSpec()` /
`defaultSpec(kind)` give sensible starting points; `validateSpec(spec)` throws a
descriptive error for impossible geometry (it runs automatically in `showFurniture`).

### Material ids

`oak`, `redoak`, `walnut`, `cherry`, `maple`, `mahogany`, `cedar`, `paint-white`, `paint-forest`, `steel`, `brass`, `linen`
— or call `listMaterials()` for ids, labels, categories, and swatch colors.

### `BuildPlan` shape

```ts
{
  title, overview,
  overallDimensionsMm: { width, height, depth },
  cutList:  [{ part, quantity, lengthMm, widthMm, thicknessMm, notes? }],  // length runs with the grain
  hardware: [{ item, quantity }],
  tools:    string[],
  steps:    [{ title, detail }],
  boardFeet: number,                  // rough lumber, +20% waste
  estimatedHours: { min, max }
}
```

---

## Render service (`@4kgraphics/server`)

```bash
npm run serve     # listens on PORT (default 8787)
```

### `GET /healthz`

`{ "ok": true, "service": "4kgraphics-render", "version": "0.1.0" }`

### `POST /v1/render` → `image/png`

Body (JSON) — everything optional except one of `spec` / `modelUrl`:

| Field | | |
| --- | --- | --- |
| `spec` | object | Parametric furniture spec (see above) |
| `modelUrl` | string | URL of a glTF/GLB/OBJ/FBX/STL file the service can reach |
| `material` | string | Material id for the whole piece |
| `materials` | object | Per-part overrides, e.g. `{ "Leg": "steel" }` |
| `lighting` | string | `studio` / `showroom` / `daylight` |
| `background` | string | CSS color |
| `camera` | object | `{ azimuthDeg, elevationDeg, distanceFactor }` |
| `width`, `height` | number | Default 3840×2160 |
| `supersample` | number | Default 2 |
| `textureSize` | number | 2048 (default) or 4096 |
| `transparent` | boolean | Alpha background |

The response carries an `X-Render-Ms` header. Errors come back as
`400 { "error": "..." }`.

### `POST /v1/buildplan` → `application/json`

Body: `{ "spec": { ...furniture spec... } }`. Returns the `BuildPlan` JSON.
No browser is involved — this endpoint is fast and side-effect free.

### How rendering works

The service serves a small browser harness (`/harness`) built from the same
engine library, drives it in headless Chromium (launched once, page per
request), and streams back the PNG. `--enable-unsafe-swiftshader` makes WebGL
work on machines with no GPU; with a GPU available, renders drop from ~30 s to
seconds.
