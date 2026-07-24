import type { Metadata } from "next";
import { LOCALES, type Locale } from "@/content/site";
import { getDictionary } from "@/content/locales";
import { buildMetadata } from "@/lib/seo";
import { breadcrumbSchema, graph, serviceSchema } from "@/lib/jsonld";
import { Icon } from "@/lib/icons";
import { JsonLd } from "@/components/common/json-ld";
import { PageHero } from "@/components/common/page-hero";
import { Reveal } from "@/components/common/reveal";
import { SectionHeading } from "@/components/common/section-heading";
import { ArchitectureDiagram } from "@/components/sections/architecture-diagram";
import { InfraModels } from "@/components/sections/infra-models";
import { Process } from "@/components/sections/process";
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
  return buildMetadata(locale as Locale, "infrastructure");
}

export default async function InfrastructurePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const typedLocale = locale as Locale;
  const dict = getDictionary(locale);
  const infra = dict.infrastructure;

  return (
    <>
      <JsonLd
        data={graph([
          breadcrumbSchema(typedLocale, [
            { name: dict.breadcrumbs.home, route: "home" },
            { name: dict.nav.infrastructure, route: "infrastructure" },
          ]),
          serviceSchema(typedLocale, {
            name: infra.hero.title,
            description: dict.seo.infrastructure.description,
            route: "infrastructure",
          }),
        ])}
      />

      <PageHero
        locale={typedLocale}
        dict={dict}
        route="infrastructure"
        badge={infra.hero.badge}
        title={infra.hero.title}
        subtitle={infra.hero.subtitle}
      />

      <section className="pb-4">
        <div className="container-page flex flex-col gap-8">
          <div className="flex flex-col gap-2">
            <h2 className="text-2xl sm:text-3xl">{infra.diagram.title}</h2>
            <p className="max-w-2xl leading-relaxed text-muted-foreground">
              {infra.diagram.subtitle}
            </p>
          </div>
          <Reveal>
            <ArchitectureDiagram dict={dict} />
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="container-page flex flex-col gap-10">
          <SectionHeading title={infra.capabilities.title} />

          <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {infra.capabilities.items.map((item, index) => (
              <Reveal
                as="li"
                key={item.title}
                delay={Math.min(index, 5) * 0.04}
                className="card-hover flex h-full flex-col gap-3 rounded-xl border border-border bg-card/60 p-5"
              >
                <span className="inline-flex size-10 items-center justify-center rounded-lg border border-primary/25 bg-primary/10 text-primary">
                  <Icon name={item.icon} className="size-[1.1rem]" />
                </span>
                <h3 className="font-semibold">{item.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {item.text}
                </p>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <section className="section">
        <div className="container-page flex flex-col gap-10">
          <SectionHeading
            title={infra.models.title}
            subtitle={infra.models.subtitle}
          />
          <Reveal>
            <InfraModels dict={dict} />
          </Reveal>
        </div>
      </section>

      <Process
        title={infra.migration.title}
        subtitle={infra.migration.subtitle}
        steps={infra.migration.steps}
      />

      <CtaSection
        locale={typedLocale}
        dict={dict}
        title={infra.cta.title}
        text={infra.cta.text}
      />
    </>
  );
}
