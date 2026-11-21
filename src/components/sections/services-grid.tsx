import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { landingPath, path, type Locale } from "@/content/site";
import type { Dictionary } from "@/content/locales";
import { hasLandings } from "@/content/landings";
import { Icon } from "@/lib/icons";
import { SectionHeading } from "@/components/common/section-heading";

/** Where a service card leads: its landing, or its anchor on /services/. */
export function serviceHref(locale: Locale, service: { id: string; slug: string }) {
  return hasLandings(locale)
    ? landingPath(locale, service.slug)
    : `${path(locale, "services")}#${service.id}`;
}

/**
 * The service list on the home page. It reads the same array as /services/,
 * so a service is described in exactly one place.
 */
export function ServicesGrid({
  locale,
  dict,
}: {
  locale: Locale;
  dict: Dictionary;
}) {
  return (
    <section className="section">
      <div className="container-page flex flex-col gap-10">
        <SectionHeading
          title={dict.home.services.title}
          subtitle={dict.home.services.subtitle}
        />

        <ul className="grid gap-px overflow-hidden rounded-lg border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
          {dict.services.categories.map((service) => (
            <li key={service.id} className="bg-background">
              <Link
                href={serviceHref(locale, service)}
                className="group flex h-full flex-col gap-3 p-6 transition-colors outline-none hover:bg-card focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-inset"
              >
                <span className="flex items-center gap-3">
                  <Icon name={service.icon} className="size-5 text-primary" />
                  <h3 className="font-semibold">{service.name}</h3>
                </span>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {service.text}
                </p>
                <span className="mt-auto inline-flex items-center gap-1.5 pt-1 font-mono text-xs text-muted-foreground transition-colors group-hover:text-primary">
                  {dict.actions.learnMore}
                  <ArrowRight className="size-3" aria-hidden />
                </span>
              </Link>
            </li>
          ))}
          <li className="bg-background">
            <Link
              href={path(locale, "contact")}
              className="group flex h-full flex-col gap-3 p-6 transition-colors outline-none hover:bg-card focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-inset"
            >
              <h3 className="font-semibold text-primary">
                {dict.services.cta.title}
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {dict.services.cta.text}
              </p>
              <span className="mt-auto inline-flex items-center gap-1.5 pt-1 font-mono text-xs text-muted-foreground transition-colors group-hover:text-primary">
                {dict.actions.discussProject}
                <ArrowRight className="size-3" aria-hidden />
              </span>
            </Link>
          </li>
        </ul>
      </div>
    </section>
  );
}
