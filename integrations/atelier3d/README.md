# Atelier3D → 4K render bridge

Push a design straight from **Atelier3D** (`jfsgi/MEJAFurnitureDesign-`) to the
4K render service — no STL export, no mesh round-trip. The service stores the
pushed design as a **model** and rebuilds its geometry from Atelier3D's own
Part/Primitive IR, draped in the engine's 4K materials and lighting.

## Why this beats exporting STL

STL is naked triangles: no units, no up-axis, no part names, no materials — which
is why imports needed orientation/flip/rotate guesswork. The scene contract is
Atelier3D's *evaluated* representation instead: each placed component → its parts
(name, material, primitives) in Z-up millimeters. The render service's frozen
`scene/` module mirrors Atelier3D's geometry builders (vendored verbatim), so a
board renders identically to the design view.

## The contract

`POST /v1/models` and the `scene` field of `POST /v1/render` accept:

```jsonc
{
  "schema": 1,
  "name": "Hall console",
  "units": "imperial",            // display only; geometry is always mm
  "instances": [                  // or a flat "parts" list for a single piece
    {
      "id": "i1",
      "name": "Drawer",
      "position": [0, 0],         // floor-plane [x, depth] in mm
      "rotationZ": 0,             // radians about vertical
      "parts": [
        { "id": "p1", "name": "Drawer side", "material": "white-oak",
          "primitives": [ /* box | jointedBoard | frenchDovetail | ... */ ] }
      ]
    }
  ]
}
```

`primitives` are exactly Atelier3D's `Primitive` union (`box`, `taperedBox`,
`cylinder`, `roundedSlab`, `roundedNotchedSlab`, `mortisedPost`, `frenchDovetail`,
`jointedBoard`, `archedBoard`). Material ids map automatically
(`white-oak → oak`, `baltic-birch → birchply`, `painted-black → paint-black`, …)
with an oak fallback.

## Wiring it into Atelier3D

1. Copy `pushToRenderService.ts` into Atelier3D (e.g. `src/studio/`).
2. Fix the two import paths at the top to point at `core/evaluate` and
   `core/types` (they assume `./core/...`).
3. Set `VITE_RENDER_ENDPOINT` (defaults to `http://localhost:8787`).
4. Call it from a "Render in 4K" button:

```ts
import { pushToRenderService } from './pushToRenderService';

async function onRender(doc: ProjectDoc) {
  const { model, png } = await pushToRenderService(doc, {
    render: true,
    renderOptions: { width: 3840, height: 2160, lighting: 'studio', background: 'studio' },
  });
  console.log('stored model', model.id);
  if (png) window.open(URL.createObjectURL(png)); // or download / preview
}
```

`pushToRenderService` returns `{ model }` (the stored id) and, when `render` is
set, the 4K PNG `Blob`. The stored model can be re-rendered any time with
`POST /v1/render { "modelId": "…", … }` — change material/camera/size without
re-pushing geometry.

For local dev, a Vite proxy keeps the call same-origin (no CORS). For a
**deployed** Atelier3D calling a deployed service, start the service with
`CORS_ORIGINS=https://your-atelier3d-origin` (comma-separated, or `*`) so the
browser request is allowed.

> Storage is **in-memory per process** in this first cut: a pushed model lives
> until the service restarts. Durable storage is a straightforward follow-up.

## Migrating Atelier3D off the vendored engine

Once `@4kgraphics/engine` is published (see `docs/PUBLISHING.md`), Atelier3D can
drop its vendored copy (`src/studio/engine/`) and share one engine — including
one joinery. `migrate.sh` (in this folder) does it; run it from the Atelier3D
repo root:

```bash
bash migrate.sh          # repoints imports, adds the dep + .npmrc, deletes the vendored copy
export NODE_AUTH_TOKEN=ghp_…   # a GitHub PAT with read:packages
npm install && npm run build
```

It repoints the six imports onto `@4kgraphics/engine`, which exports everything
Atelier3D used from the vendored copy:

| Atelier3D import | now from |
| --- | --- |
| `applyBoxUVs` (Viewport, bridge) | `@4kgraphics/engine` |
| `pinsBoardGeometry` / `tailsBoardGeometry` (jointBoards) | `@4kgraphics/engine` |
| `MaterialLibrary` (bridge) | `@4kgraphics/engine` |
| `FurnitureEngine`, `LIGHTING_PRESETS`, `LightingPresetId`, `MaterialInfo` (StudioView) | `@4kgraphics/engine` |

The engine now also carries the pieces Atelier3D added on top of its vendored
copy — `FurnitureEngine.showObject()` / `clearMaterialOverrides()`, the
`paint-black` material, and the **groove/sockets** joinery — so the Studio's
`showObject(buildStudioGroup(...))` bridge and the `jointedBoard` groove/socket
calls keep working unchanged.

> Heads-up: the engine's edge-pin proportion is **3/8"** (the newer MEJA
> convention), not the vendored 1/16" — drawer pins will render at 3/8".
> Optionally, swap the local `showObject` preview for a `pushToRenderService`
> call (above) to get 4K output from the render service.

## Pushing a catalog item back into Atelier3D (4K → Atelier3D)

The 4K tool has a **"Push to Atelier3D"** button on an open catalog product. It
opens Atelier3D with a deep link and lets Atelier3D pull the full item:

```
https://<atelier3d>/?from4k=<modelId>&svc=<render-service-url>
```

(The 4K tool needs `VITE_ATELIER3D_ENDPOINT` set to your Atelier3D URL for the
button to appear.)

**Atelier3D side — two small additions:**

1. **Send `source` on import.** In `pushToRenderService`/"Send to 4K", include the
   project's editable design in the POST body so it round-trips:
   ```ts
   body: JSON.stringify({ name: doc.name, scene, source: doc })  // doc = the ProjectDoc
   ```
   The render service stores `source` opaquely and never interprets it; upsert
   keeps it across re-imports.

2. **Handle the deep link on load.** If `from4k` is present, fetch the full
   record and reopen it:
   ```ts
   const p = new URLSearchParams(location.search);
   const id = p.get('from4k');
   const svc = p.get('svc');
   if (id && svc) {
     const m = await fetch(`${svc}/v1/models/${id}`).then((r) => r.json());
     // m = { id, name, kind, scene?, spec?, source?, defaults? }
     if (m.source) openProject(m.source as ProjectDoc);   // editable design
     else importSceneAsReference(m.scene);                // baked geometry fallback
     applyRefinedMaterials(m.defaults);                   // 4K-chosen finish:
     //   defaults.material (whole piece), defaults.materials (per-part: { partName: id }),
     //   defaults.stain / lighting / background
   }
   ```

So the round-trip is: Atelier3D design → 4K catalog (refine finish/per-part
materials) → **Push to Atelier3D** → reopens the editable design carrying the
4K-refined look. The render service must allow the Atelier3D origin via
`CORS_ORIGINS` so that fetch succeeds.

## Starting a *new* Atelier3D design from a 4K piece (4K → new design)

The 4K tool's header **"Send to Atelier3D"** button pushes whatever's on screen:

- A **built-in parametric piece** (Cabinet Door, Drawer Box, …) hands over its
  `spec` in `new4k`, plus the engine's evaluated part breakdown in `new4kparts`:
  ```
  https://<atelier3d>/?new4k=<encodeURIComponent(JSON.stringify(spec))>&new4kparts=<encodeURIComponent(JSON.stringify(parts))>
  ```
  (`new4k` is a *bare spec*, so older handlers keep working; `new4kparts` is optional.)
- An **open catalog product** uses the `?from4k=<id>&svc=…` link above.

**Atelier3D side — add a `new4k` branch on load:**
```ts
const p = new URLSearchParams(location.search);
const new4k = p.get('new4k');
if (new4k) {
  const spec = JSON.parse(new4k);                                   // a bare FurnitureSpec
  const partsParam = p.get('new4kparts');
  const parts = partsParam ? JSON.parse(partsParam) : null;
  // spec  = { kind, widthMm, heightMm, depthMm/thicknessMm, ... }
  //         kind ∈ table|bookshelf|cabinet|drawerbox|drawerunit|door|drawerfront|endtable
  // parts = the engine's exact pieces — e.g. a door's 2 stiles + 2 rails + panel:
  //         [{ name, sizeMm:[w,d,h], positionMm:[x,y,z] }]  — mm, Z-up
  //         (x=width, y=depth, z=height), the SAME frame as your scene contract.
  if (parts) createDesignFromParts(spec, parts);   // build one board per part → 5-piece door
  else       createDesignFromSpec(spec);           // fallback: map kind → a component
}
```

`createDesignFromParts` is Atelier3D's to define. **Build one component/board per
entry in `parts`** at its `sizeMm`/`positionMm` — that gives you the real 5-piece
door (stiles, rails, panel), not a single panel. Keep `spec` for the kind/style
metadata. (For a *fully parametric* door that resizes natively, map `spec.kind`
onto a proper Atelier3D component — `parts` is the exact reference geometry.)

So both directions of "new design" now work:
- **4K built-in piece → new Atelier3D design** (`?new4k={ spec, parts }`).
- **4K catalog item → reopen/seed in Atelier3D** (`?from4k=<id>`).
