// Grain tiling constants shared by the vendored Atelier3D geometry builders.
// These set how many real-world millimeters one grain texture tile spans, so a
// board's streak density is independent of its size. Kept in the engine's
// `scene/` module so the frozen primitive builders stay byte-identical to
// Atelier3D's (see VENDORED note in SceneBuilder.ts).

export const GRAIN_MM_U = 1200; // along the grain
export const GRAIN_MM_V = 300; // across the grain
