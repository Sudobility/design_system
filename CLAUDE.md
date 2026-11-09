# design_system — AI Development Guide

> **Git policy — never auto-commit or auto-push.** Leave work in the working tree.
> Run `git commit`, `git push`, or `gh pr create` **only when the user explicitly asks in that
> turn**. Approval for an earlier change does not carry forward; finishing a task is not
> permission to commit it. Stay on the current branch — do not create feature branches.

## What it is

`@sudobility/design` is a standalone, framework-agnostic design system library: design tokens,
colors, typography, component variants, a 48-theme engine, and utility helpers. It is the styling
foundation for the 0xmail ecosystem. Targets both **web** (Tailwind CSS + `tailwind-merge`) and
**React Native** (NativeWind). All tokens use `as const`; exports are named and tree-shakeable.

- Package: `@sudobility/design` · License: **BUSL-1.1** · Author: John Q Huang
- **ES Module only** (`"type": "module"`) — no CJS build is produced.
- Package manager: **Bun**. Published to **GitHub Packages** (`npm.pkg.github.com`), public access.
- `.npmrc` scopes `@sudobility` to GitHub Packages; consumers need a `read:packages` token.

## Commands (verified)

```bash
bun install
bun run build          # tsc (type-check + emit) → vite (ES bundle) → scripts/fix-esm-imports.mjs
bun run dev            # vite build --watch
bun run type-check     # tsc --noEmit
bun run test:unit      # vitest run (one-shot; 28 files / ~6200 tests). NOTE: there is no `test` script
bun run test:ui        # vitest --ui
bun run test:coverage  # v8 coverage; thresholds 95% stmt/fn/line, 90% branch
bun run lint           # eslint src --fix && tsc --noEmit
bun run format         # prettier --write
bunx vitest run src/__tests__/<file>.test.ts   # run a single test file
```

## Layout

```
src/
├── index.ts              # Web entry: all exports + inline `ui` object + SEO/structured-data
├── index.native.ts       # RN entry: cn() = clsx only; omits `ui`, SEO/structured-data
├── core/                 # simple-variants.ts, variants.ts, typography.ts, themed-classes.ts
├── tokens/               # colors.ts, tokens.ts, gradients.ts, touch-targets.ts
├── themes/               # theme engine (see below) + presets/ (48 ThemeDefinition files)
├── utilities/            # ai-helpers, component-helpers, status-colors, theme-utils,
│                         #   ui-constants, utils.ts (web cn), utils.native.ts (RN cn)
├── types/variant-types.ts
├── content/              # seo-keywords.ts, structured-data.ts (web only)
└── __tests__/            # 28 vitest specs
```

Path alias `@/*` → `./src/*` (set in both `tsconfig.json` and `vite.config.ts`).

## Architecture

### Build pipeline
`tsc` emits types + JS, then `vite build` produces **ES-only** bundles, then
`scripts/fix-esm-imports.mjs` runs. Entry outputs: `dist/index.js`, `dist/index.native.js`,
`dist/themes/index.js`, plus shared chunks and `.d.ts` files. `clsx` and `tailwind-merge` are
externalized as peer deps.
- **Gotcha:** `tsc` uses `moduleResolution: "bundler"` and emits extensionless relative imports
  (`from './core'`) that Node's native ESM loader rejects. `fix-esm-imports.mjs` rewrites them to
  explicit `./core/index.js` etc. It must run after every build; `bun run build` already chains it.

### Dual entry points
`index.ts` (web) vs `index.native.ts` (RN). On web `cn()` = `clsx` + `tailwind-merge`; on RN
`cn()` = `clsx` only (NativeWind handles merge). The RN entry omits the `ui` object and
SEO/structured-data exports. Keep platform-agnostic additions exported from **both**.

### Three-tier colors (`src/tokens/colors.ts`)
1. `colors.raw` — hex palette; do not use directly in components.
2. `colors.semantic` — purpose-based tokens with `light`/`dark` values.
3. `colors.component` — ready-to-use Tailwind class strings (`base`/`dark`/`focus`/`hover`/`disabled`).

### Variants
- `variants` — nested object of functions, e.g. `variants.button.primary.default()`.
- `SimpleVariants` class (`createVariants` / `createQuickVariants`) — `.get()`, `.sized()`,
  `.nested()`, `.when()`, `.combine()` with built-in fallbacks and config validation.

### Theme system (`src/themes/`)
A theme is **pure data** (`ThemeDefinition`, no React) projected onto web or RN. 48 presets grouped
in `registry.ts`: aesthetic/brand, real-world design systems (material, fluent, carbon, polaris,
primer, …), retro computers, game consoles, and color-scheme systems (nord, dracula, …).
- Colors are **HSL channels without the `hsl()` wrapper** (`primary: '221.2 83.2% 53.3%'`) so
  Tailwind `<alpha-value>` works (`bg-primary/10`). Separate `light`/`dark` token sets. Roles follow
  shadcn/Radix convention plus one addition: **`well`/`wellForeground`** (the plane below
  `background`). It is named `well` not `inset` because a Tailwind color named `inset` would shadow
  the built-in `ring-inset` utility. `well` is optional on the type but every preset defines it and
  `themes.test.ts` enforces that.
- **Web:** `generateThemeCSS(theme)` → `:root` + `.dark` CSS vars; `createTailwindPreset()` maps
  tokens via `hsl(var(--token) / <alpha-value>)`. **RN:** `createNativeWindPreset(theme)` resolves
  tokens to concrete HSL at build time (dark is baked per build, not a runtime cascade).
- **Activation:** `configureTheme(theme, { native? })` sets a module-level singleton once at app
  startup. The token/variant/typography layers use a `tc(semantic, legacy)` / `themed()` helper:
  with a theme active they emit **semantic** classes (`bg-primary`); with no theme they emit the
  **legacy** hardcoded classes (`bg-blue-600`) for backward compatibility. **No theme configured =
  no behavior change** — theming is fully opt-in. Structural themes append `classOverrides.<comp>.base`.
- No CSS files are committed; CSS is generated on demand. Themes are exposed via the
  `@sudobility/design/themes` subpath export.

## Common tasks

- **New color:** add to `rawColors` → `semanticColors` (light/dark) → `componentColors` → test in
  `__tests__/colors.test.ts` → `bun run build && bun run test:unit`.
- **New variant:** add to `src/core/variants.ts` (and its type interface) → `__tests__/variants.test.ts`.
- **New token:** add to the right object in `src/tokens/tokens.ts`.
- **New theme:** copy `presets/default.ts`, fill `light`/`dark` HSL-channel tokens + structural
  tokens + optional `classOverrides`/`nativeClassOverrides` (include `well`/`wellForeground`); add the
  slug to the `ThemeName` union in `types.ts`; register in `registry.ts` and re-export from
  `themes/index.ts`. When matching an existing rendered color, read it from a screenshot rather than
  computing it — browser alpha compositing rounds a step below the naive product.
- **New utility:** add to `src/utilities/`, export from `index.ts` (and `index.native.ts` if
  platform-agnostic), add tests.
- **`ui` object:** defined inline in `src/index.ts`; edit there. Not in the RN entry.

## Key conventions

- 4px spacing grid; semantic (purpose-based) naming; dark-mode-first (explicit `dark:` variants).
- Typography and component variants are **functions returning class strings** (lazy, composable).
- Publishing: `prepublishOnly` runs `bun run build`. `publishConfig.access` is `public`; CI
  (`.github/workflows/ci-cd.yml`) publishes to GitHub Packages via a shared reusable workflow.
