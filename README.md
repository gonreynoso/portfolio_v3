# gonreynoso.com

Personal portfolio for Gonzalo Reynoso, built with Astro and deployed as a static site.

## Stack

- Astro 4
- TypeScript
- Tailwind CSS
- JetBrains Mono Variable
- Astro Assets + Sharp for image optimization
- Vercel Analytics and Google Analytics
- Typst sources for the downloadable CV and Open Graph image

## Local development

Requirements:

- Node.js version from `.nvmrc`
- pnpm 10+

Install dependencies and start the development server:

```bash
pnpm install
pnpm dev
```

The local site is available at `http://localhost:4321`.

## Commands

```bash
pnpm dev       # Start Astro in development mode
pnpm build     # Build the static site into dist/
pnpm preview   # Preview the production build
pnpm check     # Run Astro synchronization and type checking
pnpm test      # Run routing and redirect regression tests
```

`pnpm check` uses `@astrojs/check` through the `astro-check` binary because this project currently uses Astro 4. The checker is intentionally kept separate from the production build.

## Project structure

```text
src/
├── assets/       # Profile, project, and admin screenshots
├── components/   # Reusable Astro components
├── data/         # Project and case-study configuration
├── i18n/         # Dictionaries, locale types, and URL routing
├── layouts/      # Shared page shells
├── pages/        # Spanish and English static routes
└── styles/       # Global and V4 design-system styles

cv/               # Typst sources and build scripts for CV/social assets
public/           # Static files and generated downloadable assets
tests/            # Vitest regression tests
```

## Localization

Spanish is the default locale and has no URL prefix:

- `/` — Spanish home
- `/resume` — Spanish CV
- `/casos/<slug>` — Spanish case study

English uses the `/en` prefix:

- `/en/` — English home
- `/en/resume` — English CV
- `/en/cases/<slug>` — English case study

Routing helpers live in `src/i18n/routing.ts`. New links should use `localizePath()` or `alternatePath()` instead of hard-coding a locale-specific path.

Translations are stored in `src/i18n/dictionary.ts`. Project metadata is kept separately in `src/data/projects.ts` and case-study configuration in `src/data/cases.ts`.

## Adding a project or case study

1. Add the project image under `src/assets/projects/`.
2. Add the project metadata to `src/data/projects.ts`.
3. Add the case configuration to `src/data/cases.ts` when the project has a detail page.
4. Add Spanish and English copy to the corresponding sections of `src/i18n/dictionary.ts`.
5. Run `pnpm check`, `pnpm test`, and `pnpm build`.

The dynamic case-study routes are generated from `CASES`; no separate page file is needed for each slug.

## CV and social assets

Typst source files live under `cv/`:

```bash
bash cv/build.sh       # Rebuild both language PDFs in public/
bash cv/og-build.sh    # Rebuild public/og-image.webp
```

The generated files are:

- `public/Resume_Gonzalo_Reynoso_ES.pdf`
- `public/Resume_Gonzalo_Reynoso_EN.pdf`
- `public/og-image.webp`

## Domain and deployment

The definitive site domain is **https://gonreynoso.com**. It is configured in `astro.config.mjs`, which drives canonical URLs and the sitemap. JSON-LD, footer copy, CV sources, and the social-card source use the same domain.

The project is configured for a static Vercel deployment. Before deploying, run:

```bash
pnpm check
pnpm test
pnpm build
```

The legacy Refugio Ilón bot URLs are redirected permanently in `vercel.json` for both locales:

- `/casos/refugioilon-bot` → `/casos/refugioilon-booking`
- `/en/cases/refugioilon-bot` → `/en/cases/refugioilon-booking`

The former `.dev` domain is not configured by this repository; DNS and registrar settings must point the `.com` domain to the deployment provider.
