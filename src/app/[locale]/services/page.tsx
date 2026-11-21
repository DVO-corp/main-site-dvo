import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { LOCALES, absoluteUrl, type Locale } from "@/content/site";
import { getDictionary } from "@/content/locales";
import { hasLandings } from "@/content/landings";
import { buildMetadata } from "@/lib/seo";
import { breadcrumbSchema, graph, serviceSchema } from "@/lib/jsonld";
import { Icon } from "@/lib/icons";
import { JsonLd } from "@/components/common/json-ld";
import { PageHero } from "@/components/common/page-hero";
import { Reveal } from "@/components/common/reveal";
import { serviceHref } from "@/components/sections/services-grid";
import { CtaSection } from "@/components/sections/cta-section";

export function generateStaticParams() {
  return LOCALES.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return buildMetadata(locale as Locale, "services");
}

export default async function ServicesPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const typedLocale = locale as Locale;
  const dict = getDictionary(locale);
  const { services } = dict;
  const linked = hasLandings(typedLocale);

  return (
    <>
      <JsonLd
        data={graph([
          breadcrumbSchema(typedLocale, [
            { name: dict.breadcrumbs.home, route: "home" },
            { name: dict.nav.services, route: "services" },
          ]),
          ...services.categories.map((service) =>
            serviceSchema({
              name: service.name,
              description: service.text,
              url: absoluteUrl(serviceHref(typedLocale, service)),
            }),
          ),
        ])}
      />

      <PageHero
        locale={typedLocale}
        dict={dict}
        route="services"
        title={services.hero.title}
        subtitle={services.hero.subtitle}
      />

      <section className="section">
        <div className="container-page grid gap-5 md:grid-cols-2">
          {services.categories.map((service, index) => (
            <Reveal
              as="article"
              key={service.id}
              delay={Math.min(index, 4) * 0.04}
              className="card-hover flex scroll-mt-28 flex-col gap-5 rounded-lg border border-border bg-card p-6 sm:p-7"
            >
              <div id={service.id} className="flex scroll-mt-28 items-start gap-4">
                <span className="inline-flex size-10 shrink-0 items-center justify-center rounded-md border border-primary/30 bg-primary/10 text-primary">
                  <Icon name={service.icon} className="size-5" />
                </span>
                <div className="flex flex-col gap-1.5">
                  <h2 className="text-xl font-semibold">{service.name}</h2>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {service.text}
                  </p>
                </div>
              </div>

              <ul className="flex flex-col gap-2 border-t border-border pt-4">
                {service.included.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2.5 text-sm leading-relaxed"
                  >
                    <Check
                      className="mt-0.5 size-4 shrink-0 text-primary"
                      aria-hidden
                    />
                    {item}
                  </li>
                ))}
              </ul>

              {linked && (
                <Link
                  href={serviceHref(typedLocale, service)}
                  className="mt-auto inline-flex w-fit items-center gap-1.5 font-mono text-xs text-primary underline-offset-4 hover:underline"
                >
                  {dict.actions.learnMore}
                  <ArrowRight className="size-3" aria-hidden />
                </Link>
              )}
            </Reveal>
          ))}
        </div>
      </section>

      <CtaSection
        locale={typedLocale}
        dict={dict}
        title={services.cta.title}
        text={services.cta.text}
      />
    </>
  );
}
