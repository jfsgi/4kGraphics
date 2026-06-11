# Atelier3D — Parametric Furniture Design Studio (working title)

A web-based 3D parametric design tool for professional furniture makers and small-to-mid
woodworking shops. Users build complex furniture assemblies from a curated library of smart
parametric components, scale designs along X/Y/Z with parts that adapt intelligently, stage
the finished piece in a virtual photo studio, and produce both high-resolution marketing
renders and shop-ready manufacturing documents.

## Confirmed product decisions

| Decision | Choice |
|---|---|
| Target user | Professional furniture makers & small/mid shops (furniture-domain UI, not CAD UI) |
| Parametric engine | Component-parametric (smart parts with parameters and adaptation rules; no sketch/constraint solver) |
| Rendering | Interactive WebGL preview in browser; final 4K–8K renders via server-side path tracing (headless Blender Cycles farm) |
| Outputs | Cut lists & BOM, CNC/DXF/STEP export, assembly drawings, marketing renders & turntables |
| Stack | React + TypeScript + Three.js (react-three-fiber); Node API; OpenCascade for exact geometry/export |
| Library | Curated, versioned core library + private per-user "Workshop" library of saved parts/sub-assemblies |
| Units | Per-project imperial (fractional inches) or metric; internal model always millimeters |
| UI direction | Light, warm-neutral professional workspace; single teal accent; Studio workspace always dark for color accuracy |

## Documentation

| Document | Contents |
|---|---|
| [docs/01-product-vision.md](docs/01-product-vision.md) | Vision, personas, product pillars, scope, phased roadmap |
| [docs/02-user-workflow.md](docs/02-user-workflow.md) | The end-to-end user workflow: Start → Build → Detail → Validate → Stage → Document → Share |
| [docs/03-ui-design-standard.md](docs/03-ui-design-standard.md) | **The UI design standard** all app UI must adhere to: principles, layout, tokens, components, viewport interaction, terminology |
| [docs/04-architecture.md](docs/04-architecture.md) | Technical architecture: frontend, geometry pipeline, render farm, data model |
| [docs/05-component-standard.md](docs/05-component-standard.md) | Authoring standard for parametric components: parameters, anchors, joinery, X/Y/Z scaling behavior |

## The three workspaces

1. **Design** — assemble and parameterize furniture from the component library.
2. **Studio** — stage the piece in lit environments and queue photoreal renders.
3. **Documents** — cut lists, BOM, assembly drawings, DXF/STEP exports.

Everything in the product hangs off this three-workspace model; see the workflow document.
