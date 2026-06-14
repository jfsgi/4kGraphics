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

> Storage is **in-memory per process** in this first cut: a pushed model lives
> until the service restarts. Durable storage is a straightforward follow-up.
