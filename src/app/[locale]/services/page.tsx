import type { Metadata } from "next";
import { LOCALES, type Locale } from "@/content/site";
import { getDictionary } from "@/content/locales";
import { buildMetadata } from "@/lib/seo";
import { breadcrumbSchema, graph, serviceSchema } from "@/lib/jsonld";
import { JsonLd } from "@/components/common/json-ld";
import { PageHero } from "@/components/common/page-hero";
import { Reveal } from "@/components/common/reveal";
import { ServiceCard } from "@/components/sections/service-card";
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

  return (
    <>
      <JsonLd
        data={graph([
          breadcrumbSchema(typedLocale, [
            { name: dict.breadcrumbs.home, route: "home" },
            { name: dict.nav.services, route: "services" },
          ]),
          ...services.categories.map((service) =>
            serviceSchema(typedLocale, {
              name: service.name,
              description: service.problem,
              route: "services",
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
      >
        <Reveal delay={0.15}>
          <ul className="flex flex-wrap gap-2 pt-2">
            {services.categories.map((service) => (
              <li key={service.id}>
                <a
                  href={`#${service.id}`}
                  className="inline-flex rounded-full border border-border bg-card/50 px-3.5 py-1.5 text-sm text-muted-foreground transition-colors hover:border-primary/50 hover:text-foreground"
                >
                  {service.name}
                </a>
              </li>
            ))}
          </ul>
        </Reveal>
      </PageHero>

      <section className="pb-4">
        <div className="container-page flex flex-col gap-5">
          {services.categories.map((service, index) => (
            <Reveal key={service.id} delay={Math.min(index, 3) * 0.04}>
              <ServiceCard
                service={service}
                locale={typedLocale}
                dict={dict}
                defaultOpen={index === 0}
              />
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
