import type { Locale } from "../site";
import { DEFAULT_LOCALE, isLocale } from "../site";
import { uk, type Dictionary } from "./uk";
import { en } from "./en";
import { ru } from "./ru";

const dictionaries = {
  uk: uk as unknown as Dictionary,
  en,
  ru,
} satisfies Record<Locale, Dictionary>;

/**
 * Returns the dictionary for a locale. Everything is bundled statically —
 * there is no async loading, so this is safe to call from server components,
 * `generateMetadata` and the sitemap alike.
 */
export function getDictionary(locale: string): Dictionary {
  return dictionaries[isLocale(locale) ? locale : DEFAULT_LOCALE];
}

export type { Dictionary };
export { dictionaries };
