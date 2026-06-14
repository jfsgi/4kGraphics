# Vendored: Atelier3D geometry builders

`primitives.ts`, `jointBoards.ts`, and `joinery.ts` are copied **verbatim** from
`jfsgi/MEJAFurnitureDesign-` (Atelier3D) so a pushed scene renders byte-identical
to the design view. Sources:

- `primitives.ts` ← `src/viewport/geometry.ts`
- `jointBoards.ts` ← `src/viewport/jointBoards.ts`
- `joinery.ts` ← `src/studio/engine/parametric/joinery.ts`
  (Atelier3D's vendored copy of this engine at v0.12.5 **plus** its
  un-upstreamed extensions: bottom-panel groove/sockets, the MEJA finger scoop,
  and the 1/16" edge-pin proportions.)

Only import paths were repointed (`./woodTexture` → `./grain.js`, core/types →
`./types.js`, the joinery import → `./joinery.js`). **Do not refactor** these to
share `parametric/joinery.ts`: that file has diverged (it now uses 3/8" edge
pins and adds sloped sides), so unifying would change how pushed boards look.

`SceneBuilder.ts` and `types.ts` are engine-native — they wire these builders to
the engine's materials/frame and define the wire contract.

## Re-vendoring

If Atelier3D's geometry changes, re-copy the three files above and re-apply the
import repoints. The long-term fix (per Atelier3D's own `VENDORED.md`) is to
publish `@4kgraphics/engine` so both sides share one joinery implementation.
