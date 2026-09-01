/**
 * Per-case accent colors, one pair per theme.
 *
 * The `dark` values are the ones originally curated against the near-black
 * page. Each `light` counterpart keeps the exact same hue and chroma and only
 * moves lightness — the minimum shift that reaches a 4.5:1 contrast ratio
 * against that theme's `--bg`, so accent text stays legible in both.
 *
 * Two of the authored colors failed 4.5:1 on the dark page as well
 * (vivero-takumi and laboratorio-spotorno); their `dark` values are the
 * corrected ones.
 */
export type AccentPair = { dark: string; light: string };

export const CASE_ACCENTS = {
  estudiofroment: { dark: "#c5a059", light: "#8e6b20" },
  "refugioilon-booking": { dark: "#6ec1e4", light: "#1e799a" },
  "baiardi-reservas": { dark: "#6b8f71", light: "#56795c" },
  "vivero-takumi": { dark: "#458165", light: "#2d6a4f" },
  "medicina-diagnostica": { dark: "#059669", light: "#008155" },
  "la-carlota": { dark: "#b8860b", light: "#986700" },
  "laboratorio-spotorno": { dark: "#2d6bf4", light: "#2563eb" },
  "legally-on-the-move": { dark: "#8b5cf6", light: "#8150e9" },
} satisfies Record<string, AccentPair>;

export type AccentKey = keyof typeof CASE_ACCENTS;
