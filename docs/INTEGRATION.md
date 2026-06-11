# Using the engine from another app (MEJA production)

The engine ships as a standard npm package: `@4kgraphics/engine`. Until it's
published to a registry, consume it as a tarball — `releases/4kgraphics-engine-<version>.tgz`
in this repository (39 KB; Three.js is a peer dependency, not bundled).

## Installing in the MEJA app

1. Copy `releases/4kgraphics-engine-0.1.0.tgz` into the MEJA repo (e.g. `vendor/`).
2. In the MEJA repo:

```bash
npm install ./vendor/4kgraphics-engine-0.1.0.tgz
```

That adds `"@4kgraphics/engine": "file:vendor/4kgraphics-engine-0.1.0.tgz"` to
`package.json`. It installs identically on Vercel — no registry, no tokens.
The engine requires `three >= 0.170 < 0.190` as a peer; MEJA's `three@^0.182`
satisfies it (the engine is built and tested against 0.182).

To upgrade later: drop in the new tarball and `npm install` again.

## Mounting the viewer (React)

The engine is framework-agnostic — it owns a canvas inside any container
element. In React, mount it in an effect:

```tsx
import { useEffect, useRef } from 'react';
import { FurnitureEngine, type FurnitureSpec } from '@4kgraphics/engine';

export function FurnitureViewer({ spec, material }: { spec: FurnitureSpec; material: string }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const engineRef = useRef<FurnitureEngine | null>(null);

  useEffect(() => {
    const engine = new FurnitureEngine({ container: containerRef.current! });
    engineRef.current = engine;
    return () => engine.dispose();
  }, []);

  useEffect(() => {
    engineRef.current?.showFurniture(spec, { frame: false });
    engineRef.current?.setMaterial(material);
  }, [spec, material]);

  return <div ref={containerRef} style={{ width: '100%', height: '100%' }} />;
}
```

Important: do **not** mount the engine inside a react-three-fiber `<Canvas>` —
it creates and manages its own WebGL canvas. Give it a plain `<div>`.

## Passing specs

A spec is plain JSON (millimeters). Build it from MEJA's own data model and
hand it over — `validateSpec` throws a descriptive error for impossible geometry:

```ts
import { validateSpec, defaultTableSpec } from '@4kgraphics/engine';

const spec = { ...defaultTableSpec(), widthMm: order.widthMm, depthMm: order.depthMm };
validateSpec(spec); // optional; showFurniture validates too
```

Spec schemas for `table` / `bookshelf` / `cabinet`: see [API.md](API.md).

## Getting outputs back

```ts
const png  = await engine.renderSnapshot();              // 3840×2160 PNG Blob
const png2 = await engine.renderSnapshot({ transparent: true, supersample: 2 });
const plan = engine.getBuildPlan();                      // cut list / hardware / steps JSON
engine.setMaterial('walnut');                            // or 'oak' | 'cherry' | 'cedar' | ...
engine.setMaterial('steel', 'Leg');                      // per-part
engine.setCameraOrbit(35, 18);                           // programmatic camera
```

## Alternative: no code integration at all

If a MEJA backend (or any non-JS tool) just needs images or build plans,
skip the library and call the render service over HTTP — `POST /v1/render`
and `POST /v1/buildplan` with the same spec JSON. See [API.md](API.md).
The service needs a persistent host (Railway/Fly/VPS), not Vercel.

## Later: a real registry

When tarball-passing gets old, the engine can be published to GitHub Packages
(stays private, needs a read token in consuming builds) or public npm
(`npm install @4kgraphics/engine` anywhere, code public). Either is a small
setup step on top of the existing package.
