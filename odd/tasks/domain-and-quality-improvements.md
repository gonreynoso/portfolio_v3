# Domain and Quality Improvements

Authorized implementation for the portfolio domain migration and baseline quality improvements.

## Specs

1. **S1 — Domain migration:** "ok soluciona todos las mejoras pero antes tuve que cambiar el dominio de .dev a .com necesito hacer el cambio"
2. **S2 — Analytics:** Remove the duplicate Vercel Analytics initialization while preserving the existing analytics behavior.
3. **S3 — Validation:** Add an explicit Astro type-check command and make the required checker dependency available.
4. **S4 — Routing regression coverage:** Add deterministic tests for locale path localization and legacy redirects, including the English legacy Refugio Ilón URL.
5. **S5 — Documentation and maintenance:** Complete the README with setup, architecture, localization, content, validation, and deployment guidance; update stale Browserslist metadata if practical without unrelated dependency churn.

## Tasks

- T1 — S1 — Update all .dev references to .com in Astro metadata, JSON-LD, footer, CV source, and generated social-card source. — commit: ea22b89
- T2 — S2 — Consolidate analytics loading so the home pages do not initialize Vercel Analytics twice. — commit: ea22b89
- T3 — S3-S4 — Add checker tooling and routing/redirect regression tests. — commit: b646a87
- T4 — S5 — Write the README and perform maintenance updates. — commit: ea22b89

## Log

L1: ok soluciona todos las mejoras pero antes tuve que cambiar el dominio de .dev a .com necesito hacer el cambio
L2: User selected: Usar solo .com — Actualizo canonical, sitemap, JSON-LD, CV y textos al dominio .com; la redirección del .dev queda fuera del repositorio.
