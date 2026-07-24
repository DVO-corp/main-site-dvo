import type { MetadataRoute } from "next";
import {
  DEFAULT_LOCALE,
  LOCALES,
  LOCALE_TAGS,
  NAV_ORDER,
  absoluteUrl,
  path,
  type RouteKey,
} from "@/content/site";

/** Required for metadata routes under `output: "export"`. */
export const dynamic = "force-static";

/** Relative importance of each route; the home page leads. */
const PRIORITY: Record<RouteKey, number> = {
  home: 1,
  services: 0.9,
  ai: 0.9,
  infrastructure: 0.9,
  products: 0.8,
  about: 0.6,
  contact: 0.7,
};

/**
 * Emitted as a static sitemap.xml during export. Every URL carries the full
 * set of hreflang alternates so search engines pair the three locales up.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const routes: RouteKey[] = ["home", ...NAV_ORDER];
  const lastModified = new Date();

  return LOCALES.flatMap((locale) =>
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
}
