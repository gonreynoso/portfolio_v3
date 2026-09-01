/**
 * Canonical display names for the technologies used across projects, so a tag
 * cannot drift into "Tailwind CSS" in one place and "TailwindCSS" in another.
 *
 * These carried brand colors until v4, whose tag styling is monochrome — the
 * accent goes to the headline tag by position, not by technology.
 */
export const PROJECT_TAGS = {
  WA_API: "WhatsApp Cloud API",
  CLAUDE: "Claude API",
  NODE: "Node.js",
  EXPRESS: "Express",
  POSTGRES: "PostgreSQL",
  DO: "DigitalOcean",
  SASS: "SASS",
  JS: "JavaScript",
  BOOTSTRAP: "Bootstrap",
  HTML: "HTML",
  WORDPRESS: "WordPress",
  PHP: "PHP",
  SQL: "SQL",
  ANGULAR: "Angular",
  TYPESCRIPT: "TypeScript",
  ASTR: "Astro",
  TAILWIND: "Tailwind CSS",
  GSAP: "GSAP",
  NEXTJS: "Next.js",
  LARAVEL: "Laravel",
  LIVEWIRE: "Livewire",
  MYSQL: "MySQL",
  VERCEL: "Vercel",
  MERCADOPAGO: "Mercado Pago",
  PYTHON: "Python",
  FASTAPI: "FastAPI",
  REACT: "React",
  VITE: "Vite",
  SUPABASE: "Supabase",
  NETLIFY: "Netlify",
} as const satisfies Record<string, string>;

export type ProjectTagKey = keyof typeof PROJECT_TAGS;
