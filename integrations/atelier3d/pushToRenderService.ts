// Atelier3D → 4K render service bridge.
//
// Drop this into the Atelier3D repo (jfsgi/MEJAFurnitureDesign-), e.g. as
// `src/studio/pushToRenderService.ts`, and adjust the two import paths below to
// match where its `core` lives. On "push" it serializes the current project to
// the render service's scene contract, creates a stored model, and optionally
// renders a 4K PNG — no STL export, no mesh round-trip. The service rebuilds the
// geometry from the same Part/Primitive IR with its 4K materials and lighting.
//
// The scene contract is exactly Atelier3D's evaluated output: each placed
// Instance → its parts (name, material, primitives in Z-up millimeters). The
// render service's frozen `scene/` module mirrors these builders, so a board
// renders identically to the design view.

import { evaluateInstance } from './core/evaluate';
import type { ProjectDoc } from './core/types';

export interface PushOptions {
  /** Render-service base URL. Default reads VITE_RENDER_ENDPOINT or localhost. */
  endpoint?: string;
  /** Also request a 4K PNG of the stored model. */
  render?: boolean;
  /**
   * Render overrides passed straight to POST /v1/render alongside `modelId`
   * (e.g. { material, materials, stain, lighting, background, camera, width,
   * height, supersample, textureSize }). The pushed scene already carries each
   * part's material; these override on top.
   */
  renderOptions?: Record<string, unknown>;
}

export interface StoredModel {
  id: string;
  name: string;
  kind: 'scene' | 'spec';
  createdAt: string;
}

export interface PushResult {
  model: StoredModel;
  /** Present when `render` was set — the 4K PNG. */
  png?: Blob;
}

function defaultEndpoint(): string {
  const env = (import.meta as unknown as { env?: Record<string, string> }).env;
  return env?.VITE_RENDER_ENDPOINT ?? 'http://localhost:8787';
}

/** Serializes a project to the render service's scene contract. */
export function projectToScene(doc: ProjectDoc) {
  return {
    schema: 1,
    name: doc.name,
    units: doc.units,
    instances: doc.instances.map((inst) => {
      const { parts } = evaluateInstance(inst);
      return {
        id: inst.id,
        name: inst.name,
        position: inst.position,
        rotationZ: inst.rotationZ,
        parts: parts.map((p) => ({
          id: p.id,
          name: p.name,
          material: p.material,
          primitives: p.primitives,
        })),
      };
    }),
  };
}

/**
 * Pushes the current project to the 4K render service. Returns the stored
 * model id (and the PNG when `render` is set). Throws on a non-2xx response.
 */
export async function pushToRenderService(doc: ProjectDoc, options: PushOptions = {}): Promise<PushResult> {
  const base = (options.endpoint ?? defaultEndpoint()).replace(/\/$/, '');
  const scene = projectToScene(doc);

  const created = await fetch(`${base}/v1/models`, {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify({ name: doc.name, scene }),
  });
  if (!created.ok) {
    throw new Error(`Create model failed (${created.status}): ${await created.text()}`);
  }
  const model = (await created.json()) as StoredModel;
  if (!options.render) return { model };

  const rendered = await fetch(`${base}/v1/render`, {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify({ modelId: model.id, ...options.renderOptions }),
  });
  if (!rendered.ok) {
    throw new Error(`Render failed (${rendered.status}): ${await rendered.text()}`);
  }
  return { model, png: await rendered.blob() };
}
