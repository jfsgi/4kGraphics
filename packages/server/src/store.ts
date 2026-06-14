import { createHash, randomUUID } from 'node:crypto';
import type { FurnitureSpec, Scene } from '@4kgraphics/engine';

/** A model created by a push — either a pushed scene or a parametric spec, plus
 * any default render settings to apply when it's rendered. Held in memory only
 * (per process); a pushed model lives until the service restarts. */
export interface StoredModel {
  id: string;
  name: string;
  kind: 'scene' | 'spec';
  createdAt: string;
  scene?: Scene;
  spec?: FurnitureSpec;
  /** Default render settings merged under a /v1/render request's own fields. */
  defaults?: Record<string, unknown>;
}

export interface CreateModelInput {
  name?: string;
  scene?: unknown;
  spec?: unknown;
  defaults?: Record<string, unknown>;
}

/** Minimal shape check for a pushed scene: a non-empty parts or instances list,
 * each part carrying a primitives array. Throws on a malformed payload. */
export function validateScene(value: unknown): Scene {
  if (!value || typeof value !== 'object') throw new Error('scene must be an object');
  const scene = value as Scene;
  const parts = scene.parts ?? scene.instances?.flatMap((i) => i.parts ?? []);
  if (!Array.isArray(parts) || parts.length === 0) {
    throw new Error('scene must have a non-empty "parts" or "instances" list');
  }
  for (const part of parts) {
    if (!part || !Array.isArray(part.primitives)) {
      throw new Error(`scene part "${part?.name ?? '?'}" is missing a primitives array`);
    }
  }
  return scene;
}

const PUBLIC_KEYS = ['id', 'name', 'kind', 'createdAt'] as const;

export class ModelStore {
  private models = new Map<string, StoredModel>();

  create(input: CreateModelInput): StoredModel {
    const id = randomUUID();
    const createdAt = new Date().toISOString();
    let model: StoredModel;
    if (input.scene !== undefined) {
      model = { id, name: input.name ?? 'Untitled', kind: 'scene', createdAt, scene: validateScene(input.scene), defaults: input.defaults };
    } else if (input.spec !== undefined) {
      model = { id, name: input.name ?? 'Untitled', kind: 'spec', createdAt, spec: input.spec as FurnitureSpec, defaults: input.defaults };
    } else {
      throw new Error('Body must include a "scene" or a "spec"');
    }
    this.models.set(id, model);
    return model;
  }

  get(id: string): StoredModel | undefined {
    return this.models.get(id);
  }

  /** Public metadata for a model (no geometry payload). */
  summary(model: StoredModel): Record<string, unknown> {
    return Object.fromEntries(PUBLIC_KEYS.map((k) => [k, model[k]]));
  }
}

/** AR files for one configuration: GLB + USDZ, and a lazily-rendered poster. */
export interface ArArtifacts {
  hash: string;
  spec: FurnitureSpec;
  textureSize: number;
  glb: Buffer;
  usdz: Buffer;
  poster?: Buffer;
  createdAt: string;
}

/**
 * Per-configuration AR file cache, keyed on a hash of the spec (+ texture size)
 * so repeat requests are cheap hits and the file URLs are stable. In-memory
 * (per process), like the model store.
 */
export class ArStore {
  private items = new Map<string, ArArtifacts>();

  /** Stable id for a configuration — the URL `<hash>` segment. */
  hash(spec: unknown, textureSize: number): string {
    return createHash('sha256').update(JSON.stringify({ spec, textureSize })).digest('hex').slice(0, 24);
  }

  get(hash: string): ArArtifacts | undefined {
    return this.items.get(hash);
  }

  set(artifacts: ArArtifacts): void {
    this.items.set(artifacts.hash, artifacts);
  }
}
