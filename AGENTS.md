# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development

When starting the dev server, use background mode:

```
astro dev --background
```

Manage the background server with `astro dev stop`, `astro dev status`, and `astro dev logs`.

Other commands (run from project root with `pnpm`):

| Command            | Action                                   |
| :----------------- | :--------------------------------------- |
| `pnpm build`       | Build production site to `./dist/`       |
| `pnpm preview`     | Preview production build locally         |
| `pnpm astro check` | Type-check the project                   |

Linter: `oxlint`. Formatter: `oxfmt`. Neither is wired into a `lint` script yet — run them directly if needed.

## Architecture

This is a **single-page portfolio site** built with Astro 7 + Tailwind CSS v4, supporting English and Spanish via Astro's built-in i18n.

### Routing & i18n

- `src/pages/index.astro` — root redirect: reads `localStorage('lang')` or `navigator.language`, then navigates to `/en/` or `/es/`.
- `src/pages/en/index.astro` and `src/pages/es/index.astro` — the actual pages; each sets `lang` to a const and calls `useTranslations(lang)` to get a typed `t` object.
- `src/i18n/ui.ts` — single source of truth for all copy. Both `en` and `es` keys are defined here. Adding new text means adding it to both locales in this file.
- `src/i18n/utils.ts` — exports `useTranslations(lang)` which simply returns `ui[lang]`. The `Lang` type is derived from `typeof ui`.
- Astro config (`astro.config.mjs`) sets `defaultLocale: 'en'`, `prefixDefaultLocale: true`, `redirectToDefaultLocale: false` — so `/en/` is the default but the root `/` is handled manually by the redirect script.

### Component pattern

Every section component (`Header`, `Hero`, `About`, etc.) receives a `t` prop typed to the relevant slice of `ui[lang]`. Components do not import from `i18n/` directly — the page passes down the pre-fetched translations. The `lang` prop is passed alongside `t` when a component needs to render language-aware links or attributes (e.g., `Header`, `Hero`).

Layout (`src/layouts/Layout.astro`) accepts `lang` and an optional `title`, sets the `<html lang>` attribute, loads global styles, fonts (Manrope from Google Fonts), Material Symbols icon font, and the interactions script.

### Styling

Tailwind CSS v4 is loaded as a Vite plugin (not PostCSS). Global CSS is in `src/styles/global.css`. Design tokens (colors, typography scale, spacing) are documented in `DESIGN.md` — when adding new UI, follow the warm-neutral palette and Manrope type scale defined there.

### Interactivity

Client-side behavior (scroll animations, mobile nav, etc.) lives in `src/scripts/interactions.ts`, loaded as a plain `<script>` tag in the layout — no framework components.

## Documentation

Full documentation: https://docs.astro.build

Consult these guides before working on related tasks:

- [Adding pages, dynamic routes, or middleware](https://docs.astro.build/en/guides/routing/)
- [Working with Astro components](https://docs.astro.build/en/basics/astro-components/)
- [Adding styles or using Tailwind](https://docs.astro.build/en/guides/styling/)
- [Supporting multiple languages](https://docs.astro.build/en/guides/internationalization/)
