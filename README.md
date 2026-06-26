# Personal Portfolio — Mateo

A single-page portfolio site built with **Astro 7** and **Tailwind CSS v4**, supporting English and Spanish via Astro's built-in i18n routing.

## Stack

| Layer | Tech |
| :---- | :--- |
| Framework | Astro 7 |
| Styling | Tailwind CSS v4 (Vite plugin, not PostCSS) |
| Language | TypeScript |
| Package manager | pnpm 11.9.0 |
| Node requirement | ≥ 22.12.0 |
| Linter | oxlint |
| Formatter | oxfmt |

## Commands

Run from the project root:

| Command | Action |
| :------ | :----- |
| `pnpm dev` | Start dev server at `localhost:4321` |
| `pnpm build` | Build production site to `./dist/` |
| `pnpm preview` | Preview the production build locally |
| `pnpm astro check` | Type-check the project |
| `oxlint .` | Run the linter |
| `oxfmt .` | Format source files |

> Neither `oxlint` nor `oxfmt` is wired to an npm script yet — run them directly.

## Project Structure

```
/
├── public/                    # Static assets served as-is
├── src/
│   ├── components/            # Section components (one per page section)
│   │   ├── Header.astro
│   │   ├── Hero.astro
│   │   ├── About.astro
│   │   ├── Skills.astro
│   │   ├── Services.astro
│   │   ├── Projects.astro
│   │   ├── Experience.astro
│   │   ├── Process.astro
│   │   ├── Contact.astro
│   │   └── Footer.astro
│   ├── i18n/
│   │   ├── ui.ts              # All copy in one place (en + es)
│   │   └── utils.ts           # useTranslations(lang) helper + Lang type
│   ├── layouts/
│   │   └── Layout.astro       # HTML shell, fonts, global script
│   ├── pages/
│   │   ├── index.astro        # Root redirect (reads localStorage / navigator.language)
│   │   ├── en/index.astro     # English page
│   │   └── es/index.astro     # Spanish page
│   ├── scripts/
│   │   └── interactions.ts    # Scroll animations, mobile nav (no framework)
│   └── styles/
│       └── global.css         # Base styles imported by Layout
├── astro.config.mjs
├── CLAUDE.md                  # Instructions for Claude Code
├── DESIGN.md                  # Design system tokens and style guide
└── tsconfig.json
```

## Architecture

### Routing & i18n

- `/` — vanilla JS redirect: checks `localStorage('lang')`, then `navigator.language`, falls back to `en`.
- `/en/` and `/es/` — the actual rendered pages.
- Astro config: `defaultLocale: 'en'`, `prefixDefaultLocale: true`, `redirectToDefaultLocale: false`. The root `/` is handled manually so the redirect script can honour the saved preference.

### Translations

`src/i18n/ui.ts` is the single source of truth for all copy. Both `en` and `es` keys live there. Adding new text means adding it to both locales in that file.

`useTranslations(lang)` (from `utils.ts`) returns `ui[lang]` — a typed object. The `Lang` type is derived from `typeof ui`, so TypeScript catches missing keys at build time.

### Component pattern

Each section component receives a `t` prop typed to the relevant slice of `ui[lang]`. Components never import from `i18n/` directly — the page resolves translations and passes them down as props. The `lang` string is passed separately when a component needs it to build locale-aware hrefs or `lang` attributes (e.g., `Header`, `Hero`).

### Styling

Tailwind v4 runs as a Vite plugin. Global CSS is in `src/styles/global.css`. Design tokens — warm-neutral palette (`primary: #6f4315`, `surface: #fff8f5`), Manrope type scale, spacing scale — are documented in `DESIGN.md`.

### Interactivity

All client-side behaviour (scroll animations, mobile nav toggle, lazy background images) lives in `src/scripts/interactions.ts`, injected as a plain `<script>` tag in `Layout.astro`. No UI framework components are used.

## Design System

See `DESIGN.md` for the full spec. Key decisions:

- **Typeface:** Manrope (Google Fonts), loaded in `Layout.astro`.
- **Icons:** Material Symbols icon font.
- **Palette:** Warm earth tones — coffee browns and soft beige, not cold grays.
- **Depth:** Tonal layering over heavy shadows; cards use a 1px border with an extremely soft diffused shadow.
- **Radius:** 8 px buttons, 12 px cards, pill-shaped chips.

## Development

Start the dev server in background mode (per `CLAUDE.md`):

```sh
astro dev --background
astro dev status
astro dev logs
astro dev stop
```
