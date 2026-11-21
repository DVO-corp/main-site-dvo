import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { landingPath, path, type Locale } from "@/content/site";
import type { Dictionary } from "@/content/locales";
import { hasLandings } from "@/content/landings";

/** Where a service link leads: its landing, or its anchor on /services/. */
export function serviceHref(locale: Locale, service: { id: string; slug: string }) {
  return hasLandings(locale)
    ? landingPath(locale, service.slug)
    : `${path(locale, "services")}#${service.id}`;
}

/**
 * Every service as a plain directory: a name, one line, no cards. The large
 * tiles above it carry the pictures; this is the complete list.
 */
export function ServicesGrid({
  locale,
  dict,
}: {
  locale: Locale;
  dict: Dictionary;
}) {
  return (
    <section className="section surface-alt">
      <div className="container-page flex flex-col gap-12">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <h2 className="max-w-3xl text-[2rem] leading-[1.08] sm:text-5xl lg:text-[3.5rem]">
            {dict.home.services.title}
          </h2>
          <p className="max-w-md text-lg leading-snug text-muted-foreground">
            {dict.home.services.subtitle}
          </p>
        </div>

        <ul className="grid gap-x-10 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
          {dict.services.categories.map((service) => (
            <li key={service.id} className="border-t border-border">
              <Link
                href={serviceHref(locale, service)}
                className="group flex h-full flex-col gap-1.5 py-6 outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                <span className="flex items-center justify-between gap-3 text-xl font-semibold">
                  {service.name}
                  <ChevronRight
                    className="size-5 shrink-0 text-muted-foreground transition-transform group-hover:translate-x-1 group-hover:text-primary"
                    aria-hidden
                  />
                </span>
                <span className="leading-snug text-muted-foreground">
                  {service.text}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
