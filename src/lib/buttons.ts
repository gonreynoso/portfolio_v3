// Shared button class sets so CTAs don't drift across components.
// Two sizes, two visual rolls. All rounded-full.

const base =
  "inline-flex items-center justify-center gap-2 rounded-full font-medium transition focus:outline-none focus-visible:ring focus-visible:ring-white focus-visible:ring-offset-2 max-w-fit";

export const primaryCta = [
  base,
  "px-5 py-2 text-base font-semibold bg-[#54da7a] text-black hover:bg-[#3fc165] dark:bg-[#54da7a] dark:text-black dark:hover:bg-[#3fc165]",
].join(" ");

export const secondaryCta = [
  base,
  "px-4 py-2 text-base text-gray-800 border border-gray-400 bg-gray-100 hover:bg-gray-200 dark:text-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 dark:hover:text-white",
].join(" ");

// Tighter secondary, for small buttons inside card footers (Projects).
export const cardLinkCta = [
  base,
  "px-4 py-2 text-sm text-gray-800 border border-gray-400 bg-gray-100 hover:bg-gray-200 hover:text-gray-900 dark:text-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 dark:hover:text-white",
].join(" ");

// Accent-colored CTA (case study "Ver sitio en vivo" sidebar button).
// Text color is set inline via accentTextColor() — avoids light-mode gray remaps in global.css.
export const accentCta = [
  base,
  "accent-cta w-full px-4 py-3 text-sm font-bold uppercase tracking-wider shadow-sm transition hover:opacity-85",
].join(" ");

function parseHex(hex: string): [number, number, number] {
  const h = hex.replace("#", "");
  const full =
    h.length === 3
      ? h
          .split("")
          .map((c) => c + c)
          .join("")
      : h;
  const n = Number.parseInt(full, 16);
  return [(n >> 16) & 255, (n >> 8) & 255, n & 255];
}

function relativeLuminance(r: number, g: number, b: number): number {
  const channel = (c: number) => {
    const s = c / 255;
    return s <= 0.03928 ? s / 12.92 : ((s + 0.055) / 1.055) ** 2.4;
  };
  const [rs, gs, bs] = [r, g, b].map(channel);
  return 0.2126 * rs + 0.7152 * gs + 0.0722 * bs;
}

/** Returns #000 or #fff for readable text on a solid accent background. */
export function accentTextColor(hex: string): string {
  const [r, g, b] = parseHex(hex);
  return relativeLuminance(r, g, b) > 0.45 ? "#000000" : "#ffffff";
}
