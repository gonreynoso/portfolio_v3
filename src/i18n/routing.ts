import { DEFAULT_LANG, isLang, type Lang } from "./types";

/**
 * Locale lives in the URL: `/` serves Spanish, `/en/` serves English.
 *
 * The default locale carries no prefix, so a path is Spanish unless its first
 * segment names another locale.
 */

/** URL segment for the case-study collection, per locale. */
export const CASES_SEGMENT: Record<Lang, string> = {
  es: "casos",
  en: "cases",
};

export function getLangFromUrl(url: URL): Lang {
  const [, first] = url.pathname.split("/");
  return isLang(first) && first !== DEFAULT_LANG ? first : DEFAULT_LANG;
}

export function otherLang(lang: Lang): Lang {
  return lang === "es" ? "en" : "es";
}

/** Drops a locale prefix, returning the path as the default locale writes it. */
export function stripLangPrefix(pathname: string): string {
  const [, first, ...rest] = pathname.split("/");
  if (isLang(first) && first !== DEFAULT_LANG) {
    return `/${rest.join("/")}`;
  }
  return pathname;
}

/**
 * Rewrites a default-locale path for `lang`, including the translated
 * case-study segment. Pass paths as Spanish writes them: `/casos/x`, `/resume`.
 */
export function localizePath(path: string, lang: Lang): string {
  const bare = stripLangPrefix(path);
  const translated = bare.replace(
    /^\/casos(\/|$)/,
    `/${CASES_SEGMENT[lang]}$1`,
  );
  const prefixed =
    lang === DEFAULT_LANG ? translated : `/${lang}${translated}`;

  // Keep the trailing slash Astro generates for directory-style routes, and
  // never collapse the root to an empty string.
  return prefixed === "" ? "/" : prefixed;
}

/** The same page in the other locale, for the language switcher. */
export function alternatePath(url: URL, lang: Lang): string {
  const bare = stripLangPrefix(url.pathname);
  // The case segment is translated, so normalise it back to Spanish first.
  const normalised = bare.replace(
    new RegExp(`^/${CASES_SEGMENT.en}(/|$)`),
    "/casos$1",
  );
  return localizePath(normalised, lang);
}
