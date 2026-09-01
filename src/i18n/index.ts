import { dict } from "./dictionary";
import { DEFAULT_LANG, type Lang } from "./types";
import { getLangFromUrl } from "./routing";

export { dict } from "./dictionary";
export type { Dict } from "./dictionary";
export type { Lang } from "./types";
export { LANGS, DEFAULT_LANG, isLang } from "./types";
export {
  CASES_SEGMENT,
  getLangFromUrl,
  otherLang,
  stripLangPrefix,
  localizePath,
  alternatePath,
} from "./routing";

/**
 * The strings for a page, chosen from its URL.
 *
 * Components call this rather than taking a `lang` prop, so a new section can
 * be dropped anywhere in the tree without threading the locale through it.
 */
export function useTranslations(url: URL) {
  const lang: Lang = getLangFromUrl(url);
  return { lang, t: dict[lang] };
}

/** BCP 47 tags for `<html lang>` and Open Graph. */
export const HTML_LANG: Record<Lang, string> = { es: "es", en: "en" };
export const OG_LOCALE: Record<Lang, string> = { es: "es_ES", en: "en_US" };

export { DEFAULT_LANG as SITE_DEFAULT_LANG };
