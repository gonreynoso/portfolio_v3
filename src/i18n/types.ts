export type Lang = "es" | "en";

export const LANGS: Lang[] = ["es", "en"];
export const DEFAULT_LANG: Lang = "es";

export const isLang = (v: unknown): v is Lang =>
  v === "es" || v === "en";
