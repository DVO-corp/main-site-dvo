import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { landingPath, path, type Locale } from "@/content/site";
import type { Dictionary } from "@/content/locales";
import { hasLandings } from "@/content/landings";
import { Icon } from "@/lib/icons";
import { cn } from "@/lib/utils";
import { SectionHeading } from "@/components/common/section-heading";
import { Sparkline } from "@/components/visuals/charts";

/** Where a service card leads: its landing, or its anchor on /services/. */
export function serviceHref(locale: Locale, service: { id: string; slug: string }) {
  return hasLandings(locale)
    ? landingPath(locale, service.slug)
    : `${path(locale, "services")}#${service.id}`;
}

/** Decorative sample series for the large tiles. */
const TRAFFIC = [4, 5, 4, 6, 9, 13, 12, 14, 13, 15, 12, 9, 7, 5];
const COST = [14, 14, 15, 14, 11, 9, 8, 8, 7, 7, 7, 6, 6, 6];
const PODS = [1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0];

function PodGrid() {
  return (
    <div aria-hidden className="grid grid-cols-6 gap-1.5">
      {PODS.map((running, index) => (
        <span
          key={index}
          className={cn(
            "h-5 rounded-md",
            running
              ? "bg-primary"
              : "border border-dashed border-border-strong",
          )}
        />
      ))}
    </div>
  );
}

function PipelineDots() {
  return (
    <div aria-hidden className="flex items-center gap-2">
      {[0, 1, 2, 3].map((index) => (
        <span key={index} className="flex flex-1 items-center gap-2">
          <span className="size-4 shrink-0 rounded-full bg-primary" />
          {index < 3 && <span className="h-0.5 flex-1 rounded-full bg-primary/40" />}
        </span>
      ))}
    </div>
  );
}

/** The four tiles drawn large, each with a small visual of what it is about. */
const FEATURED: Record<string, React.ReactNode> = {
  aws: <Sparkline series={COST} />,
  kubernetes: <PodGrid />,
  cicd: <PipelineDots />,
  monitoring: <Sparkline series={TRAFFIC} />,
};

const TILE =
  "card-hover group flex h-full flex-col gap-3 rounded-[1.75rem] bg-card p-7 outline-none focus-visible:ring-2 focus-visible:ring-ring";

/**
 * The service list on the home page as a tile grid. It reads the same array
 * as /services/, so a service is described in exactly one place.
 */
export function ServicesGrid({
  locale,
  dict,
}: {
  locale: Locale;
  dict: Dictionary;
}) {
  const all = dict.services.categories;
  const featured = all.filter((service) => service.id in FEATURED);
  const rest = all.filter((service) => !(service.id in FEATURED));

  return (
    <section className="section surface-alt">
      <div className="container-page flex flex-col gap-12">
        <SectionHeading
          title={dict.home.services.title}
          subtitle={dict.home.services.subtitle}
        />

        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-6">
          {featured.map((service) => (
            <li key={service.id} className="lg:col-span-3">
              <Link href={serviceHref(locale, service)} className={cn(TILE, "sm:p-9")}>
                <h3 className="text-2xl leading-tight font-semibold sm:text-[1.75rem]">
                  {service.name}
                </h3>
                <p className="max-w-md leading-snug text-muted-foreground">
                  {service.text}
                </p>
                <span className="inline-flex items-center gap-0.5 text-primary">
                  {dict.actions.learnMore}
                  <ChevronRight className="size-4" aria-hidden />
                </span>
                <div className="mt-auto pt-6">{FEATURED[service.id]}</div>
              </Link>
            </li>
          ))}

          {rest.map((service) => (
            <li key={service.id} className="lg:col-span-2">
              <Link href={serviceHref(locale, service)} className={TILE}>
                <Icon name={service.icon} className="size-7 text-primary" />
                <h3 className="text-lg leading-snug font-semibold">
                  {service.name}
                </h3>
                <p className="text-sm leading-snug text-muted-foreground">
                  {service.text}
                </p>
                <span className="mt-auto inline-flex items-center gap-0.5 pt-2 text-sm text-primary">
                  {dict.actions.learnMore}
                  <ChevronRight className="size-3.5" aria-hidden />
                </span>
              </Link>
            </li>
          ))}

          <li className="sm:col-span-2 lg:col-span-4">
            <Link
              href={path(locale, "contact")}
              className={cn(TILE, "bg-primary text-primary-foreground")}
            >
              <h3 className="text-2xl leading-tight font-semibold">
                {dict.services.cta.title}
              </h3>
              <p className="max-w-xl leading-snug opacity-90">
                {dict.services.cta.text}
              </p>
              <span className="mt-auto inline-flex items-center gap-0.5 pt-2 font-medium">
                {dict.actions.discussProject}
                <ChevronRight className="size-4" aria-hidden />
              </span>
            </Link>
          </li>
        </ul>
      </div>
    </section>
  );
}
