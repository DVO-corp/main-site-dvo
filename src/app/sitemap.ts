import type { MetadataRoute } from "next";
import {
  DEFAULT_LOCALE,
  LEGAL_ROUTES,
  LOCALES,
  LOCALE_TAGS,
  NAV_ORDER,
  absoluteUrl,
  landingPath,
  path,
  type RouteKey,
} from "@/content/site";
import { LANDING_LOCALES, LANDING_SLUGS } from "@/content/landings";

/** Required for metadata routes under `output: "export"`. */
export const dynamic = "force-static";

/** Relative importance of each route; the home page leads. */
const PRIORITY: Record<RouteKey, number> = {
  home: 1,
  services: 0.9,
  infrastructure: 0.9,
  products: 0.8,
  about: 0.6,
  contact: 0.7,
  // Indexable and expected by ad reviewers, but never the page we want ranked.
  privacy: 0.3,
  terms: 0.3,
};

/**
 * Emitted as a static sitemap.xml during export. Every URL carries the full
 * set of hreflang alternates so search engines pair the three locales up.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const routes: RouteKey[] = ["home", ...NAV_ORDER, ...LEGAL_ROUTES];
  const lastModified = new Date();

  const landings = LANDING_LOCALES.flatMap((locale) =>
    LANDING_SLUGS.map((slug) => {
      const languages: Record<string, string> = {};
      for (const alt of LANDING_LOCALES) {
        languages[LOCALE_TAGS[alt]] = absoluteUrl(landingPath(alt, slug));
      }
      languages["x-default"] = absoluteUrl(landingPath(DEFAULT_LOCALE, slug));

      return {
        url: absoluteUrl(landingPath(locale, slug)),
        lastModified,
        changeFrequency: "monthly" as const,
        priority: 0.8,
        alternates: { languages },
      };
    }),
  );

  const pages = LOCALES.flatMap((locale) =>
    routes.map((route) => {
      const languages: Record<string, string> = {};
      for (const alt of LOCALES) {
        languages[LOCALE_TAGS[alt]] = absoluteUrl(path(alt, route));
      }
      languages["x-default"] = absoluteUrl(path(DEFAULT_LOCALE, route));

      return {
        url: absoluteUrl(path(locale, route)),
        lastModified,
        changeFrequency: "monthly" as const,
        priority: PRIORITY[route],
        alternates: { languages },
      };
    }),
  );

  return [...pages, ...landings];
}
