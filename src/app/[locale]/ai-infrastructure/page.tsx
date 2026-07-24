import type { Metadata } from "next";
import { Check, Info } from "lucide-react";
import { LOCALES, type Locale } from "@/content/site";
import { getDictionary } from "@/content/locales";
import { buildMetadata } from "@/lib/seo";
import { breadcrumbSchema, graph, serviceSchema } from "@/lib/jsonld";
import { Icon } from "@/lib/icons";
import { JsonLd } from "@/components/common/json-ld";
import { PageHero } from "@/components/common/page-hero";
import { Reveal } from "@/components/common/reveal";
import { SectionHeading } from "@/components/common/section-heading";
import { Calculator } from "@/components/sections/calculator";
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
  return buildMetadata(locale as Locale, "ai");
}

export default async function AiPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const typedLocale = locale as Locale;
  const dict = getDictionary(locale);
  const { ai } = dict;

  return (
    <>
      <JsonLd
        data={graph([
          breadcrumbSchema(typedLocale, [
            { name: dict.breadcrumbs.home, route: "home" },
            { name: dict.nav.ai, route: "ai" },
          ]),
          serviceSchema(typedLocale, {
            name: ai.hero.title,
            description: dict.seo.ai.description,
            route: "ai",
          }),
        ])}
      />

      <PageHero
        locale={typedLocale}
        dict={dict}
        route="ai"
        badge={ai.hero.badge}
        title={ai.hero.title}
        subtitle={ai.hero.subtitle}
      />

      <section className="pb-4">
        <div className="container-page grid gap-4 md:grid-cols-2">
          {ai.sections.map((item, index) => (
            <Reveal
              key={item.title}
              delay={Math.min(index, 3) * 0.05}
              className="flex flex-col gap-4 rounded-2xl border border-border bg-card/60 p-6 sm:p-7"
            >
              <span className="inline-flex size-11 items-center justify-center rounded-xl border border-accent/25 bg-accent/10 text-accent">
                <Icon name={item.icon} className="size-5" />
              </span>
              <h2 className="text-lg font-semibold">{item.title}</h2>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {item.text}
              </p>
              <ul className="mt-auto flex flex-col gap-2 border-t border-border pt-4">
                {item.points.map((point) => (
                  <li
                    key={point}
                    className="flex items-start gap-2.5 text-sm text-muted-foreground"
                  >
                    <Check
                      className="mt-0.5 size-3.5 shrink-0 text-primary"
                      aria-hidden
                    />
                    {point}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="container-page flex flex-col gap-10">
          <SectionHeading
            title={ai.compare.title}
            subtitle={ai.compare.subtitle}
          />

          <div className="grid gap-4 md:grid-cols-2">
            {[ai.compare.dedicated, ai.compare.shared].map((column, index) => (
              <Reveal
                key={column.title}
                delay={index * 0.06}
                className={`flex flex-col gap-4 rounded-2xl border p-6 sm:p-8 ${
                  index === 0
                    ? "border-border bg-card/50"
                    : "border-primary/30 bg-primary/[0.05]"
                }`}
              >
                <h3 className="text-lg font-semibold">{column.title}</h3>
                <ul className="flex flex-col gap-3">
                  {column.points.map((point) => (
                    <li
                      key={point}
                      className="flex items-start gap-2.5 text-sm leading-relaxed"
                    >
                      <Check
                        className={`mt-0.5 size-4 shrink-0 ${
                          index === 0 ? "text-muted-foreground" : "text-accent"
                        }`}
                        aria-hidden
                      />
                      {point}
                    </li>
                  ))}
                </ul>
              </Reveal>
            ))}
          </div>

          <Reveal className="flex items-start gap-3 rounded-xl border border-border bg-elevated/50 p-5">
            <Info className="mt-0.5 size-4 shrink-0 text-warning" aria-hidden />
            <p className="text-sm leading-relaxed text-muted-foreground">
              {ai.compare.note}
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="container-page flex flex-col gap-10">
          <SectionHeading
            title={ai.calculator.title}
            subtitle={ai.calculator.subtitle}
          />
          <Reveal>
            <Calculator locale={typedLocale} dict={dict} />
          </Reveal>
        </div>
      </section>

      <CtaSection
        locale={typedLocale}
        dict={dict}
        title={ai.cta.title}
        text={ai.cta.text}
      />
    </>
  );
}
