# Publishing `@4kgraphics/engine` (private, GitHub Packages)

The engine is published **privately** to GitHub Packages so every MEJA app
(Atelier3D, the storefront build, the render server) can depend on it, while the
source stays private. It's free, and the package keeps the name
`@4kgraphics/engine`.

GitHub Packages ties the npm **scope** to the repo **owner**, so the `@4kgraphics`
scope requires the repo to live under a GitHub org named **`4kgraphics`**.

## One-time setup

1. **Create the org.** GitHub → *Your organizations* → *New organization* →
   Free plan → name it `4kgraphics`.
2. **Move the repo into it.** Repo *Settings → General → Transfer ownership* →
   transfer `4kGraphics` to the `4kgraphics` org (keeps history, issues, PRs).
   Then update your local remote:
   ```bash
   git remote set-url origin https://github.com/4kgraphics/4kGraphics.git
   ```
   (The package's `repository` field already points at the org.)
3. That's it for publishing — the `publish-engine` workflow uses the
   Actions-provided `GITHUB_TOKEN`, so no secret is needed to publish.

## Publishing a version

Publishing is driven by a **version tag**:

```bash
# bump versions first (the repo's release routine), then:
git tag v0.13.38
git push origin v0.13.38
```

The `.github/workflows/publish-engine.yml` workflow builds the engine and runs
`npm publish` to `https://npm.pkg.github.com`. The package inherits the repo's
visibility (private repo → private package). You can also run it manually from
the Actions tab (*Run workflow*).

## Consuming the package from another app

Any app (Atelier3D, the storefront theme build, etc.) needs two things:

1. An **`.npmrc`** next to its `package.json`:
   ```
   @4kgraphics:registry=https://npm.pkg.github.com
   //npm.pkg.github.com/:_authToken=${NODE_AUTH_TOKEN}
   ```
   (See `.npmrc.example` in this repo.) Commit this — it carries no secret, just
   the registry mapping and a token *placeholder*.
2. A **token** in `NODE_AUTH_TOKEN`, a GitHub Personal Access Token (classic)
   with the **`read:packages`** scope:
   - **Local dev:** `export NODE_AUTH_TOKEN=ghp_…` (or put it in your shell
     profile / a local `.env` that's git-ignored).
   - **GitHub Actions:** the built-in `secrets.GITHUB_TOKEN` works for repos in
     the same org; otherwise add the PAT as a repo secret.
   - **Vercel:** Project → *Settings → Environment Variables* → add
     `NODE_AUTH_TOKEN` = the PAT (all environments). Vercel reads the committed
     `.npmrc` during install.

Then just:
```bash
npm install @4kgraphics/engine
```

> The monorepo itself does **not** need any of this: npm workspaces resolve
> `@4kgraphics/engine` to the local `packages/engine`, so local dev, CI, and the
> server/demo builds keep working without a token. The registry only matters for
> **external** apps that aren't in this workspace.
