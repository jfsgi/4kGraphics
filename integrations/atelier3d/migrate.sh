#!/usr/bin/env bash
# Migrate Atelier3D (jfsgi/MEJAFurnitureDesign-) off its vendored engine onto the
# published @4kgraphics/engine. Run from the Atelier3D repo root AFTER the engine
# is published to GitHub Packages (see docs/PUBLISHING.md in the 4kGraphics repo).
#
#   bash migrate.sh
#
# It repoints the six imports, adds the dependency + .npmrc, and deletes the
# vendored copy. Review the diff and run `npm install` (with NODE_AUTH_TOKEN set)
# then `npm run build`.

set -euo pipefail

ENGINE_VERSION="^0.13.38"

if [[ ! -d src/studio/engine ]]; then
  echo "✗ src/studio/engine not found — run this from the Atelier3D repo root." >&2
  exit 1
fi

echo "→ Repointing imports at @4kgraphics/engine…"
# Exact quoted paths → the package. Trailing quotes keep './engine' from matching
# the longer './engine/...' paths.
find src -type f \( -name '*.ts' -o -name '*.tsx' \) -print0 | xargs -0 sed -i \
  -e "s#'../studio/engine/materials/uv'#'@4kgraphics/engine'#g" \
  -e "s#'../studio/engine/parametric/joinery'#'@4kgraphics/engine'#g" \
  -e "s#'./engine/materials/uv'#'@4kgraphics/engine'#g" \
  -e "s#'./engine/materials/MaterialLibrary'#'@4kgraphics/engine'#g" \
  -e "s#'./engine'#'@4kgraphics/engine'#g"

echo "→ Adding @4kgraphics/engine@${ENGINE_VERSION} to package.json…"
node -e "
  const fs = require('fs');
  const p = JSON.parse(fs.readFileSync('package.json', 'utf8'));
  p.dependencies = p.dependencies || {};
  p.dependencies['@4kgraphics/engine'] = '${ENGINE_VERSION}';
  fs.writeFileSync('package.json', JSON.stringify(p, null, 2) + '\n');
"

if [[ ! -f .npmrc ]]; then
  echo "→ Writing .npmrc (GitHub Packages registry for @4kgraphics)…"
  cat > .npmrc <<'NPMRC'
@4kgraphics:registry=https://npm.pkg.github.com
//npm.pkg.github.com/:_authToken=${NODE_AUTH_TOKEN}
NPMRC
else
  echo "→ .npmrc already present — leaving it (ensure it maps @4kgraphics to GitHub Packages)."
fi

echo "→ Removing the vendored engine (src/studio/engine)…"
rm -rf src/studio/engine

cat <<'NEXT'

✓ Migration applied. Next:
  1. Set a GitHub PAT with the read:packages scope:  export NODE_AUTH_TOKEN=ghp_…
  2. npm install
  3. npm run build   (and: npm test)

Notes:
  • bridge.ts now has two import lines from '@4kgraphics/engine' — fine, merge if you like.
  • scripts/sync-4k-materials.mjs (if present) is now obsolete — delete when convenient.
  • Drawer pins now render at the engine's 3/8" edge-pin convention (the newer
    MEJA standard), not the vendored 1/16".
NEXT
