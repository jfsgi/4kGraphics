import type { FurnitureSpec, ModelFormat } from '@4kgraphics/engine';

/** Render/material preferences captured alongside a saved model. */
export interface ModelPrefs {
  material?: string;
  stain?: string | null;
  panelMaterial?: string;
  lighting?: string;
  background?: string;
}

/**
 * A model the user has saved — either an imported mesh (the file bytes travel
 * with it so it survives a refresh) or a configured catalog piece (its spec).
 * Preferences ride along so reloading restores the exact look.
 */
export interface SavedModel {
  id: string;
  name: string;
  kind: 'import' | 'catalog';
  savedAt: number;
  prefs: ModelPrefs;
  /** import */
  fileName?: string;
  format?: ModelFormat;
  bytes?: ArrayBuffer;
  /** catalog */
  spec?: FurnitureSpec;
}

/** A photo the user dropped in to add to the material library. */
export interface StoredMaterial {
  id: string;
  label: string;
  swatch: string;
  /** Tileable PBR maps as data URLs. */
  mapUrl: string;
  normalMapUrl?: string;
  widthM: number;
  heightM: number;
  savedAt: number;
}

const DB_NAME = 'fourk-models';
const MODELS = 'models';
const MATERIALS = 'materials';

function open(): Promise<IDBDatabase> {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open(DB_NAME, 2);
    request.onupgradeneeded = () => {
      const db = request.result;
      if (!db.objectStoreNames.contains(MODELS)) db.createObjectStore(MODELS, { keyPath: 'id' });
      if (!db.objectStoreNames.contains(MATERIALS)) db.createObjectStore(MATERIALS, { keyPath: 'id' });
    };
    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error);
  });
}

function run<T>(
  storeName: string,
  mode: IDBTransactionMode,
  op: (store: IDBObjectStore) => IDBRequest<T>,
): Promise<T> {
  return open().then(
    (db) =>
      new Promise<T>((resolve, reject) => {
        const transaction = db.transaction(storeName, mode);
        const request = op(transaction.objectStore(storeName));
        request.onerror = () => reject(request.error);
        transaction.oncomplete = () => {
          resolve(request.result);
          db.close();
        };
      }),
  );
}

export function putModel(model: SavedModel): Promise<unknown> {
  return run(MODELS, 'readwrite', (store) => store.put(model));
}

export function deleteModel(id: string): Promise<unknown> {
  return run(MODELS, 'readwrite', (store) => store.delete(id));
}

export function getModel(id: string): Promise<SavedModel | undefined> {
  return run<SavedModel | undefined>(MODELS, 'readonly', (store) => store.get(id));
}

/** Saved models, newest first. */
export function listModels(): Promise<SavedModel[]> {
  return run<SavedModel[]>(MODELS, 'readonly', (store) => store.getAll()).then((all) =>
    (all ?? []).sort((a, b) => b.savedAt - a.savedAt),
  );
}

export function newModelId(): string {
  return 'm_' + Date.now().toString(36) + Math.random().toString(36).slice(2, 7);
}

export function putStoredMaterial(material: StoredMaterial): Promise<unknown> {
  return run(MATERIALS, 'readwrite', (store) => store.put(material));
}

export function deleteStoredMaterial(id: string): Promise<unknown> {
  return run(MATERIALS, 'readwrite', (store) => store.delete(id));
}

/** User-added materials, newest first. */
export function listStoredMaterials(): Promise<StoredMaterial[]> {
  return run<StoredMaterial[]>(MATERIALS, 'readonly', (store) => store.getAll()).then((all) =>
    (all ?? []).sort((a, b) => b.savedAt - a.savedAt),
  );
}
