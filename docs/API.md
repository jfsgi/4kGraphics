# API Reference

## `@4kgraphics/engine`

### `new FurnitureEngine(options)`

| Option | Type | Default | |
| --- | --- | --- | --- |
| `container` | `HTMLElement` | required | Element the canvas is appended to and sized against |
| `textureSize` | `number` | `2048` | Procedural texture resolution per side (4096 = full 4K textures) |
| `lighting` | `'studio' \| 'showroom' \| 'daylight'` | `'studio'` | Initial light rig |
| `background` | `string \| 'studio' \| 'transparent'` | `'studio'` | `'studio'` is a graded photo-backdrop; any CSS color works |

The engine starts its own render loop with orbit controls (drag to rotate,
wheel to zoom) and follows container resizes automatically.

### Methods

| Method | Returns | |
| --- | --- | --- |
| `showFurniture(spec, { frame? })` | `FurnitureLayout` | Display a parametric piece; `frame: false` keeps the camera |
| `loadModel(urlOrFile, { format?, normalize? })` | `Promise<void>` | Import glTF/GLB/OBJ/FBX/STL |
| `setMaterial(materialId, partName?)` | `void` | Apply to whole piece, or to all parts named e.g. `'Leg'` |
| `setPanelMaterial(materialId)` | `void` | Sheet-goods stock (drawer bottoms, back panels) — defaults to `birchply` |
| `setStain(stainId \| null)` | `void` | Stain finish over every wood on the piece (`null` = natural) — see Stain finishes |
| `registerScannedMaterial(def)` | `void` | Adds a photo-scanned material (see Scanned materials below) |
| `unregisterScannedMaterial(id)` | `void` | Removes a scanned material added with `registerScannedMaterial` |
| `setMaterialLabel(id, label)` | `void` | Overrides any material's display label (built-in presets included) |
| `setLighting(presetId)` | `void` | Swap light rig |
| `setBackground(color \| 'studio' \| 'transparent')` | `void` | `'studio'` = graded photo backdrop |
| `setTextureResolution(size)` | `void` | Regenerate textures (e.g. `4096`) and reapply |
| `setCameraOrbit(azimuthDeg, elevationDeg, distanceFactor?)` | `void` | Programmatic camera placement |
| `frameObject()` | `void` | Auto-frame the current object |
| `renderSnapshot(options?)` | `Promise<Blob>` | High-quality still — see below |
| `getBuildPlan()` | `BuildPlan \| null` | Plan for the current parametric piece (null for imports) |
| `getLayout()` | `FurnitureLayout \| null` | Current part layout |
| `listMaterials()` / `listParts()` / `listStains()` / `listLightingPresets()` | arrays | For building UIs |
| `dispose()` | `void` | Release GL resources and detach |

### `renderSnapshot(options)`

| Option | Default | |
| --- | --- | --- |
| `width` / `height` | `3840` / `2160` | Output pixels |
| `supersample` | `2` | Internal render scale (2 → 7680×4320, downsampled; clamped to GPU limits) |
| `transparent` | `false` | PNG alpha background (floor shadow is preserved) |
| `ssao` | `true` | Screen-space ambient occlusion (contact shading); auto-off when transparent |
| `photoFinish` | `true` | Subtle vignette + fine grain; auto-off when transparent |
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
                       // halfblind (default): 1/16" laps at BOTH show faces;
                       // 'dovetail' = through, tails visible front and back
  scoop?: boolean }                              // finger-scoop front

// kind: 'door' — slab, five-piece shaker, raised panel, or glass panel
{ kind, widthMm, heightMm, thicknessMm,
  style: 'slab' | 'shaker' | 'raised',
  railStileWidthMm, panelThicknessMm,           // ~6 shaker, 16–19 raised
  raiseProfile?: 'cove' | 'ogee' | 'bevel' | 'roundover' | 'stepcove'
               | 'bevelstep' | 'covebead' | 'ogeebead',
  raiseWidthMm?: number,                        // raised style, default 38
  edgeProfile?:      EdgeProfile, // stick pattern, inner edge: square | chamfer | bevel30
                                  // | roundover | ogee | bead | cove | ovolo | step
                                  // | thumbnail | fingerpull | classical
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
  frontMount?: 'overlay' | 'inset',             // inset: fronts flush in the openings, 2mm reveals
  fingerPull?: boolean,                         // pull channel on each front's top edge (slab)
  caseJoinery?: 'dovetail' | 'halfblind',       // carcass corners: through (default) or lapped
  insideBevelMm?: number,                       // 45° bevel on the case opening edges, mitered
                                                // at corners; inset fronts set back by the bevel
  dividerRails?: boolean,                       // horizontal rails between rows (inset; default off)
  openDrawer?: number,                          // pull a drawer open: row from bottom, 0 = closed
  openColumn?: number,                          // column of the open drawer (default 1)
  openAmountMm?: number }                       // pull-out distance (default 60% of box depth)

// kind: 'endtable' — coastal end table: dovetailed case (tails on the
// floor-running sides, pins on the top), inset drawer on side-mount
// slides, two open shelves, open back
{ kind, widthMm, depthMm, heightMm, stockThicknessMm,
  drawerHeightMm, boxStockThicknessMm, bottomShelfLiftMm,
  openMm?: number }                             // preview: pull the drawer open (0 = closed)
```

Cut-list items and overall dimensions also carry fractional-inch strings
(`lengthIn`, `widthIn`, `thicknessIn`, `overallDimensionsIn`) rounded to 1/16";
`inchesToMm` / `mmToInches` / `formatInches` are exported for converting at
your app's boundaries.

`defaultSpec(kind)` (or the per-kind helpers, e.g. `defaultDrawerUnitSpec()`,
`defaultEndTableSpec()`) gives sensible starting points; `validateSpec(spec)` throws a
descriptive error for impossible geometry (it runs automatically in `showFurniture`).

### Scanned materials (photo textures)

Real board photos become materials via `scripts/process-texture.py` (evens
lighting, makes the image tile, derives roughness/normal maps, updates
`manifest.json`). Host the output folder at `textures/scanned/` and the demo
and render service register every entry automatically; in your own app call
`engine.registerScannedMaterial(def)` with the manifest entry. Pass
`--width-mm/--height-mm` (the photographed area) so grain renders at true
scale.

`def` fields: `id`, `label`, `swatch`, `mapUrl` (any of these URLs may be a
data URL), `normalMapUrl?`, `roughnessMapUrl?`, `widthM`, `heightM`,
`clearcoat?`, `tiling?: 'repeat' | 'mirror'`, and `plywood?` /
`plySpacingMm?`. Use `mirror` for raw, un-tiled photos so boundaries don't show
a hard seam (`repeat`, the default, suits images already made seamless). The
demo's "Drop a wood photo" zone uses this path: it derives a normal map in the
browser and registers the photo with `tiling: 'mirror'`.

Set `plywood: true` (optionally `plySpacingMm`, default 2 mm) to render the
stacked-veneer laminations of sheet goods on a part's end-grain **edges** while
the broad faces keep the face-veneer look — the built-in `birchply` uses this.
It applies to parametric box parts (which bake the needed edge data); imported
meshes show the face veneer only.

### Material ids

`oak`, `redoak`, `walnut`, `cherry`, `maple`, `mahogany`, `cedar`, `birchply`, `paint-white`, `paint-forest`, `steel`, `brass`, `linen`, plus any registered scanned materials
— or call `listMaterials()` for ids, labels, categories, and swatch colors.

### Stain finishes

Hand-applied finish palette, layered over **any** procedural wood species —
each species keeps its own grain figure under the color (penetrating stains
preserve the wood's light/dark variation; the washes sit on top like a
pickling coat). Applies to the primary wood, per-part materials, and panel
stock together. Paint/metal/fabric/scanned materials render unchanged.

`marine-blue`, `southern-pecan`, `walnut`, `rojo`, `espresso`, `golden`,
`stone-gray-wash`, `white-wash`, `green`, `aged-bronze`, `black`, `brick`,
`peach`, `coffee`, `chestnut`, `terracotta`, `smoke`
— or call `listStains()` for ids, labels, and swatch colors.

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
| `panelMaterial` | string | Sheet-goods stock for bottoms/backs (default `birchply`) |
| `stain` | string | Stain finish id applied over every wood (see Stain finishes) |
| `lighting` | string | `studio` / `showroom` / `daylight` |
| `background` | string | CSS color, or `studio` for the graded backdrop |
| `camera` | object | `{ azimuthDeg, elevationDeg, distanceFactor }` |
| `width`, `height` | number | Default 3840×2160 |
| `supersample` | number | Default 2 |
| `textureSize` | number | 2048 (default) or 4096 |
| `transparent` | boolean | Alpha background |
| `ssao` | boolean | Contact-shading pass (default on; auto-off when transparent) |
| `photoFinish` | boolean | Vignette + grain (default on; auto-off when transparent) |

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
