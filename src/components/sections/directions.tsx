import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { path, type Locale, type RouteKey } from "@/content/site";
import type { Dictionary } from "@/content/locales";
import { Icon } from "@/lib/icons";
import { SectionHeading } from "@/components/common/section-heading";
import { Reveal } from "@/components/common/reveal";

export function Directions({
  locale,
  dict,
}: {
  locale: Locale;
  dict: Dictionary;
}) {
  const { directions } = dict.home;

  return (
    <section className="section">
      <div className="container-page flex flex-col gap-10">
        <SectionHeading
          title={directions.title}
          subtitle={directions.subtitle}
        />

        <ul className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {directions.items.map((item, index) => (
            <Reveal as="li" key={item.title} delay={index * 0.05}>
              <Link
                href={path(locale, item.route as RouteKey)}
                className="card-hover group flex h-full flex-col gap-4 rounded-xl border border-border bg-card/70 p-6 outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                <span className="inline-flex size-11 items-center justify-center rounded-xl border border-accent/25 bg-accent/10 text-accent">
                  <Icon name={item.icon} className="size-5" />
                </span>

                <div className="flex flex-col gap-2">
                  <h3 className="text-lg font-semibold">{item.title}</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {item.text}
                  </p>
                </div>

                <ul className="mt-auto flex flex-col gap-1.5 pt-2">
                  {item.points.map((point) => (
                    <li
                      key={point}
                      className="flex items-center gap-2 text-xs text-muted-foreground"
                    >
                      <Check
                        className="size-3.5 shrink-0 text-primary"
                        aria-hidden
                      />
                      {point}
                    </li>
                  ))}
                </ul>

                <span className="inline-flex items-center gap-1.5 text-sm font-medium text-primary">
                  {dict.actions.learnMore}
                  <ArrowRight
                    className="size-4 transition-transform group-hover:translate-x-0.5"
                    aria-hidden
                  />
                </span>
              </Link>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
