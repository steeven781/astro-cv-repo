# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev       # Start dev server at localhost:4321
npm run build     # Build production site to ./dist/
npm run preview   # Preview production build locally
```

No lint or test scripts are configured.

## Architecture

This is a static Astro portfolio/CV site. All CV data lives in `src/content/` as Markdown files with YAML frontmatter — editing content means editing those files, not components.

**Data flow:**
1. Content collections defined and Zod-validated in [src/content/config.ts](src/content/config.ts)
2. [src/components/Container.astro](src/components/Container.astro) fetches all collections via `getCollection()` and orchestrates the page layout
3. Data is passed down to card components for rendering

**Content collections** (each is a directory under `src/content/`):
- `work` — employment history (rendered as timeline)
- `projects` — portfolio projects
- `studies` — education records
- `certificates` — certifications/courses
- `customers` — client logos for carousel
- `contact` — contact method links
- `about` — profile metadata (name, designation, location, etc.)

**Component hierarchy:**
- `BaseLayout.astro` → wraps the page with global styles/fonts
- `Header.astro` → profile intro (avatar, name, location, icon links)
- `Container.astro` → fetches all data; renders each section inside `AccordionLayout`
  - `AccordionLayout.astro` → daisyUI collapsible section wrapper
  - `CardGrid.astro` → maps a collection to cards; supports `"default"` and `"timeline"` layout types
    - `Card.astro` — used for projects, studies, certificates
    - `TimelineCard.astro` — used for work history (vertical timeline visual)
  - `CardCarrousel.astro` — infinite CSS-animated scroll for customer logos
  - `ContactCard.astro` — icon + text button for contact links
- `ScrollObserver.astro` — Intersection Observer wrapper for fade-in entrance animations
- `Footer.astro` — copyright + scroll-to-top

## Tech Stack

- **Astro 4** — static output (`output: "static"`)
- **TailwindCSS 3** + **daisyUI 4** — utility classes and component library
- **astro-icon** — Carbon icons and Material Design icon sets
- **astro-compress** — compresses assets at build time
- **theme-change** — dark/light toggle, persisted in localStorage
- **DM Sans** via `@fontsource-variable/dm-sans`

## Theming

Two daisyUI themes configured in [tailwind.config.mjs](tailwind.config.mjs): `"black"` (dark, default) and `"lofi"` (light). Theme switching is handled client-side by `theme-change`.

## Adding Content

To add a new entry to any section, create a new `.md` file in the corresponding `src/content/<collection>/` directory with the required frontmatter fields. The schemas in [src/content/config.ts](src/content/config.ts) define what fields are required and their types.

To add or remove entire sections, edit `Container.astro` — each section is a `<AccordionLayout>` block that calls `getCollection()` and passes results to `<CardGrid>` or another component.
