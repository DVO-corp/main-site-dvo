/**
 * Search landings: one page per service a buyer actually searches for.
 *
 * Landings exist in Ukrainian and English only. Each lives in its own file
 * under `data/` and is registered in `index.ts`; the route, sitemap, hreflang
 * and the "related" links are all derived from that registry.
 */
export const LANDING_LOCALES = ["uk", "en"] as const;
export type LandingLocale = (typeof LANDING_LOCALES)[number];

export interface Landing {
  seo: { title: string; description: string; keywords: string[] };
  /** Short name for breadcrumbs, cards and "related" links. */
  name: string;
  h1: string;
  lead: string;
  /** Situations in which a client needs this service (3–5). */
  when: string[];
  /** What the work consists of (5–7). */
  included: { title: string; text: string }[];
  /** How the engagement goes (4 steps). */
  steps: { title: string; text: string }[];
  /** Tool names, shown as chips. */
  stack: string[];
  faq: { q: string; a: string }[];
  /** Slugs of 3 related landings. */
  related: string[];
}

export type LandingEntry = Record<LandingLocale, Landing>;
