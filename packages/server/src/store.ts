import { createHash, randomUUID } from 'node:crypto';
import fs from 'node:fs';
import path from 'node:path';
import type { FurnitureSpec, Scene } from '@4kgraphics/engine';

/** A model created by a pull/push — a pushed scene or a parametric spec, plus
 * any default render settings. Persisted to disk so it survives restarts. */
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

function loadJsonDir<T>(dir: string): T[] {
  fs.mkdirSync(dir, { recursive: true });
  const out: T[] = [];
  for (const f of fs.readdirSync(dir)) {
    if (!f.endsWith('.json')) continue;
    try {
      out.push(JSON.parse(fs.readFileSync(path.join(dir, f), 'utf8')) as T);
    } catch {
      // Skip a corrupt/partial file rather than crash on startup.
    }
  }
  return out;
}

const PUBLIC_KEYS = ['id', 'name', 'kind', 'createdAt'] as const;

/**
 * Disk-backed model store: each model is a JSON file in `dir`, loaded into
 * memory on startup, so pulled designs persist across restarts and are
 * listable.
 */
export class ModelStore {
  private models = new Map<string, StoredModel>();

  constructor(private dir: string) {
    for (const m of loadJsonDir<StoredModel>(dir)) this.models.set(m.id, m);
  }

  create(input: CreateModelInput): StoredModel {
    const id = randomUUID();
    const createdAt = new Date().toISOString();
    const name = input.name ?? 'Untitled';
    let model: StoredModel;
    if (input.scene !== undefined) {
      model = { id, name, kind: 'scene', createdAt, scene: validateScene(input.scene), defaults: input.defaults };
    } else if (input.spec !== undefined) {
      model = { id, name, kind: 'spec', createdAt, spec: input.spec as FurnitureSpec, defaults: input.defaults };
    } else {
      throw new Error('Body must include a "scene" or a "spec"');
    }
    this.models.set(id, model);
    fs.writeFileSync(path.join(this.dir, `${id}.json`), JSON.stringify(model));
    return model;
  }

  get(id: string): StoredModel | undefined {
    return this.models.get(id);
  }

  /** Newest-first list of all stored models. */
  list(): StoredModel[] {
    return [...this.models.values()].sort((a, b) => (a.createdAt < b.createdAt ? 1 : -1));
  }

  /** Public metadata for a model (no geometry payload). */
  summary(model: StoredModel): Record<string, unknown> {
    return Object.fromEntries(PUBLIC_KEYS.map((k) => [k, model[k]]));
  }
}

/** Metadata for one configuration's AR files (the binaries live next to it). */
export interface ArMeta {
  hash: string;
  kind: 'scene' | 'spec';
  scene?: Scene;
  spec?: FurnitureSpec;
  textureSize: number;
  createdAt: string;
}

/**
 * Disk-backed AR artifact store: a `<hash>.json` meta plus `<hash>.glb` /
 * `<hash>.usdz` (and a lazily-rendered `<hash>.png` poster) per configuration,
 * keyed on a hash of the resolved scene/spec + texture size. The file URLs are
 * stable and survive restarts.
 */
export class ArStore {
  private index = new Map<string, ArMeta>();

  constructor(private dir: string) {
    for (const m of loadJsonDir<ArMeta>(dir)) this.index.set(m.hash, m);
  }

  /** Stable id for a configuration — the URL `<hash>` segment. */
  hash(payload: unknown, textureSize: number): string {
    return createHash('sha256').update(JSON.stringify({ payload, textureSize })).digest('hex').slice(0, 24);
  }

  has(hash: string): boolean {
    return this.index.has(hash);
  }

  meta(hash: string): ArMeta | undefined {
    return this.index.get(hash);
  }

  private file(hash: string, ext: string): string {
    return path.join(this.dir, `${hash}.${ext}`);
  }

  save(meta: ArMeta, glb: Buffer, usdz: Buffer): void {
    fs.writeFileSync(this.file(meta.hash, 'glb'), glb);
    fs.writeFileSync(this.file(meta.hash, 'usdz'), usdz);
    fs.writeFileSync(this.file(meta.hash, 'json'), JSON.stringify(meta));
    this.index.set(meta.hash, meta);
  }

  savePoster(hash: string, png: Buffer): void {
    fs.writeFileSync(this.file(hash, 'png'), png);
  }

  read(hash: string, ext: 'glb' | 'usdz' | 'png'): Buffer | null {
    const p = this.file(hash, ext);
    return fs.existsSync(p) ? fs.readFileSync(p) : null;
  }
}
