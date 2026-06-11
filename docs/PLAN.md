# Project Plan & Workflow

The roadmap for taking 4kGraphics from this v0.1 foundation to a production furniture
rendering platform. Phases 0–3 are implemented in this repository today; 4–6 are the
path forward, in priority order.

## Phase 0 — Foundation ✅ (done)

- [x] npm-workspaces monorepo (`packages/engine`, `packages/server`, `apps/demo`)
- [x] Strict TypeScript across all packages, shared base tsconfig
- [x] Vitest unit tests for all pure logic (parametric layouts, build plans)

## Phase 1 — Core engine ✅ (done)

- [x] Scene management: PBR pipeline (ACES tone mapping, sRGB output, soft shadows,
      image-based environment lighting)
- [x] Parametric furniture system: table / bookshelf / cabinet specs in millimeters
      → neutral part layout → geometry + UVs + build plan from one source of truth
- [x] Procedural material library: 3 woods (plank-simulated), 2 paints, 2 brushed
      metals, linen — color/roughness/normal maps at 2048² or 4096²
- [x] Grain-aware box UV mapping (texture V axis follows each part's grain axis)
- [x] Model import: glTF/GLB/OBJ/FBX/STL with unit guessing and floor placement
- [x] Lighting presets: studio, showroom, daylight
- [x] 4K snapshot renderer: 3840×2160 default, 2× supersampling, transparent
      background option, independent offscreen GL context
- [x] Build-plan generator: cut list (grain-oriented), hardware, tools, steps,
      board feet, time estimate

## Phase 2 — Demo UI ✅ (done)

- [x] Catalog with live dimension sliders (debounced rebuild, camera preserved)
- [x] Material swatches with whole-piece or per-part targeting
- [x] Lighting/background controls, 2K↔4K texture quality toggle
- [x] Drag-and-drop model import
- [x] One-click 4K PNG download
- [x] Build-plan modal with print stylesheet and JSON export

## Phase 3 — Headless render service ✅ (done)

- [x] Express API: `POST /v1/render` → PNG, `POST /v1/buildplan` → JSON, `GET /healthz`
- [x] Headless Chromium harness (software WebGL via SwiftShader — runs on GPU-less
      servers), browser reused across requests, fresh page per render
- [x] Camera orbit, material, lighting, resolution, and texture-size parameters
- [x] Verified end-to-end: 3840×2160 render in ~27 s on software GL (seconds on a GPU)

## Phase 4 — Rendering quality (next)

- [ ] HDRI environment support (load .hdr studio environments, not just the procedural room)
- [ ] Path-traced snapshot mode via `three-gpu-pathtracer` for catalog-grade stills
      (keep the rasterized path as the fast preview)
- [ ] Move procedural texture generation into a Web Worker with `OffscreenCanvas`
      so 4096² generation never blocks the UI
- [ ] Anisotropic highlights for brushed metals; sheen for fabrics
- [ ] Ambient-occlusion baking for parametric pieces (contact darkening in joints)
- [ ] Floor material options (wood floor, concrete, infinite white cyclorama)

## Phase 5 — Furniture workflow depth

- [ ] More parametric types: chairs, beds, desks, drawers (drawer boxes + slides in
      the build plan)
- [ ] Joinery options per part (mortise & tenon, dominoes, pocket screws) reflected
      in both geometry detail and the build plan
- [ ] Exploded-view assembly animation driven by the build-plan steps
- [ ] Cut-diagram generation: nest the cut list onto standard sheet/board sizes
      and export DXF/SVG shop drawings
- [ ] Material assignment persistence: save/load design + materials as a JSON project file

## Phase 6 — Productization

- [ ] Publish `@4kgraphics/engine` to npm with semantic versioning and typedoc API docs
- [ ] Dockerfile for the render service; render queue with concurrency limits and
      per-request timeouts; API keys
- [ ] WebGPU renderer backend once Three.js WebGPU is stable enough (drop-in swap)
- [ ] CI: typecheck + tests + a golden-image render comparison on every PR

## Working agreements

- Specs are millimeters; scene units are meters; the conversion lives in one place
  (`parametric/geometry.ts`).
- The part layout is the single source of truth: geometry, UV grain direction, and
  the build plan must all derive from it. Never special-case one of them.
- Anything that can run without a browser (layouts, build plans, validation) stays
  DOM-free so the server can import it directly.
