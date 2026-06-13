import * as THREE from 'three';
import type { RGB } from './procedural.js';

/**
 * Turns a physical material into "plywood": its end-grain edges render the
 * stacked-veneer laminations you see on a sheet-goods edge, while the broad
 * faces keep the face-veneer look. Edge faces are identified by a baked `ply`
 * vertex attribute (see bakePlyEdges in geometry.ts): `ply.x` is the position
 * along the panel thickness in meters, `ply.y` is 1 on edge faces.
 */
export interface PlywoodOptions {
  /** Veneer (face-ply) colour, sRGB 0–255 — usually the wood's light tone. */
  veneer: RGB;
  /** Layer-to-layer spacing in meters (a birch ply runs ~1.4–2 mm). */
  spacingM: number;
}

function linear(rgb: RGB, scale = 1): THREE.Color {
  return new THREE.Color().setRGB(
    Math.min(1, (rgb[0] / 255) * scale),
    Math.min(1, (rgb[1] / 255) * scale),
    Math.min(1, (rgb[2] / 255) * scale),
    THREE.SRGBColorSpace,
  );
}

export function makePlywood(material: THREE.MeshPhysicalMaterial, options: PlywoodOptions): void {
  const veneer = linear(options.veneer);
  // Cross-grain plies read a touch darker; glue lines are thin and amber.
  const core = linear(options.veneer, 0.82);
  const glue = linear([options.veneer[0] * 0.5, options.veneer[1] * 0.4, options.veneer[2] * 0.3]);

  material.onBeforeCompile = (shader) => {
    shader.uniforms.plySpacing = { value: options.spacingM };
    shader.uniforms.plyVeneer = { value: veneer };
    shader.uniforms.plyCore = { value: core };
    shader.uniforms.plyGlue = { value: glue };

    shader.vertexShader =
      'attribute vec2 ply;\nvarying vec2 vPly;\n' +
      shader.vertexShader.replace(
        '#include <begin_vertex>',
        '#include <begin_vertex>\n  vPly = ply;',
      );

    shader.fragmentShader =
      'uniform float plySpacing;\nuniform vec3 plyVeneer;\nuniform vec3 plyCore;\nuniform vec3 plyGlue;\nvarying vec2 vPly;\n' +
      shader.fragmentShader.replace(
        '#include <color_fragment>',
        `#include <color_fragment>
        if ( vPly.y > 0.5 ) {
          float plies = vPly.x / plySpacing;
          float fpos = fract( plies );
          // Thin darker glue line at each lamination boundary.
          float glueLine = 1.0 - smoothstep( 0.0, 0.14, min( fpos, 1.0 - fpos ) );
          // Alternate plies (cross-grain layers) sit slightly darker.
          float alt = mod( floor( plies ), 2.0 );
          vec3 layer = mix( plyVeneer, plyCore, alt * 0.6 );
          layer = mix( layer, plyGlue, glueLine * 0.8 );
          // Keep a little of the sampled grain so the edge isn't flat.
          float grain = 0.85 + 0.3 * ( diffuseColor.r - 0.5 );
          diffuseColor.rgb = layer * grain;
        }`,
      );
  };
  // Same program for every plywood material instance.
  material.customProgramCacheKey = () => 'plywood';
}
