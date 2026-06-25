export type ProjectTag = { name: string; class: string };

export const PROJECT_TAGS: Record<string, ProjectTag> = {
  WA_API: { name: "WhatsApp Cloud API", class: "bg-[#25D366] text-black" },
  CLAUDE: { name: "Claude API", class: "bg-[#d97757] text-white" },
  NODE: { name: "Node.js", class: "bg-[#539e43] text-white" },
  EXPRESS: { name: "Express", class: "bg-[#111827] text-white border border-gray-700" },
  POSTGRES: { name: "PostgreSQL", class: "bg-[#336791] text-white" },
  DO: { name: "DigitalOcean", class: "bg-[#0080ff] text-white" },
  SASS: { name: "SASS", class: "bg-[#cd6799] text-white" },
  JS: { name: "JavaScript", class: "bg-[#f7df1e] text-black" },
  BOOTSTRAP: { name: "Bootstrap", class: "bg-[#7952b3] text-white" },
  HTML: { name: "HTML", class: "bg-[#e34f26] text-white" },
  WORDPRESS: { name: "WordPress", class: "bg-[#21759B] text-white" },
  PHP: { name: "PHP", class: "bg-[#777BB4] text-white" },
  SQL: { name: "SQL", class: "bg-[#00758F] text-white" },
  ANGULAR: { name: "Angular", class: "bg-[#dd0031] text-white" },
  TYPESCRIPT: { name: "TypeScript", class: "bg-[#3178c6] text-white" },
  ASTR: { name: "Astro", class: "bg-[#bc52ee] text-white" },
  TAILWIND: { name: "Tailwind CSS", class: "bg-[#38bdf8] text-black" },
  GSAP: { name: "GSAP", class: "bg-[#88ce02] text-black" },
  NEXTJS: { name: "Next.js", class: "bg-black text-white border border-gray-700" },
  LARAVEL: { name: "Laravel", class: "bg-[#ff2d20] text-white" },
  LIVEWIRE: { name: "Livewire", class: "bg-[#4e56a6] text-white" },
  MYSQL: { name: "MySQL", class: "bg-[#4479a1] text-white" },
  VERCEL: { name: "Vercel", class: "bg-[#111111] text-white border border-gray-700" },
  MERCADOPAGO: { name: "Mercado Pago", class: "bg-[#009ee3] text-white" },
  PYTHON: { name: "Python", class: "bg-[#3776ab] text-white" },
  FASTAPI: { name: "FastAPI", class: "bg-[#009688] text-white" },
  REACT: { name: "React", class: "bg-[#61dafb] text-black" },
  VITE: { name: "Vite", class: "bg-[#646cff] text-white" },
  SUPABASE: { name: "Supabase", class: "bg-[#3ecf8e] text-black" },
  NETLIFY: { name: "Netlify", class: "bg-[#00c7b7] text-black" },
};

const TAG_BADGE_BASE =
  "inline-flex items-center px-2 py-0.5 text-xs font-medium rounded-full";

const TAG_BADGE_FALLBACK =
  "bg-stone-100 text-stone-700 border border-stone-300 dark:bg-gray-800 dark:text-gray-200 dark:border-gray-700";

/** Ordered rules: more specific patterns first. */
const BADGE_MATCHERS: Array<[RegExp, keyof typeof PROJECT_TAGS]> = [
  [/whatsapp|wa[\s.-]?api/i, "WA_API"],
  [/claude/i, "CLAUDE"],
  [/postgresql|postgres/i, "POSTGRES"],
  [/mysql/i, "MYSQL"],
  [/mercado[\s-]?pago/i, "MERCADOPAGO"],
  [/livewire/i, "LIVEWIRE"],
  [/laravel/i, "LARAVEL"],
  [/tailwind/i, "TAILWIND"],
  [/typescript/i, "TYPESCRIPT"],
  [/next[\s.]?js/i, "NEXTJS"],
  [/wordpress/i, "WORDPRESS"],
  [/fastapi/i, "FASTAPI"],
  [/python/i, "PYTHON"],
  [/react/i, "REACT"],
  [/vite/i, "VITE"],
  [/supabase/i, "SUPABASE"],
  [/netlify/i, "NETLIFY"],
  [/vercel/i, "VERCEL"],
  [/digitalocean/i, "DO"],
  [/astro/i, "ASTR"],
  [/gsap/i, "GSAP"],
  [/angular/i, "ANGULAR"],
  [/sass|scss/i, "SASS"],
  [/bootstrap/i, "BOOTSTRAP"],
  [/javascript|js[\s-]?es|\bes6\b/i, "JS"],
  [/express/i, "EXPRESS"],
  [/node[\s.]?js/i, "NODE"],
  [/\bphp\b/i, "PHP"],
  [/\bhtml\b/i, "HTML"],
  [/\bsql\b/i, "SQL"],
];

export function getTagForBadge(badge: string): ProjectTag | null {
  const normalized = badge.toLowerCase().trim();

  for (const [pattern, key] of BADGE_MATCHERS) {
    if (pattern.test(normalized)) return PROJECT_TAGS[key];
  }

  for (const tag of Object.values(PROJECT_TAGS)) {
    if (tag.name.toLowerCase() === normalized) return tag;
  }

  return null;
}

export function getTagBadgeClass(badge: string): string {
  const tag = getTagForBadge(badge);
  if (tag) return `${TAG_BADGE_BASE} ${tag.class}`;
  return `${TAG_BADGE_BASE} ${TAG_BADGE_FALLBACK}`;
}
