import type { Metadata } from "next";
import { LOCALES, type Locale, type RouteKey } from "@/content/site";
import { getDictionary } from "@/content/locales";
import { buildMetadata } from "@/lib/seo";
import { faqSchema, graph, serviceSchema } from "@/lib/jsonld";
import { JsonLd } from "@/components/common/json-ld";
import { SectionHeading } from "@/components/common/section-heading";
import { Hero } from "@/components/sections/hero";
import { Advantages } from "@/components/sections/advantages";
import { Directions } from "@/components/sections/directions";
import { MediaBlock } from "@/components/sections/media-block";
import { SharedInfra } from "@/components/sections/shared-infra";
import { Process } from "@/components/sections/process";
import { Comparison } from "@/components/sections/comparison";
import { Tasks } from "@/components/sections/tasks";
import { TechStack } from "@/components/sections/tech-stack";
import { Faq } from "@/components/sections/faq";
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
  return buildMetadata(locale as Locale, "home");
}

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const typedLocale = locale as Locale;
  const dict = getDictionary(locale);

  return (
    <>
      {/* FAQPage is emitted only because these questions are rendered below. */}
      <JsonLd
        data={graph([
          faqSchema(dict.home.faq.items),
          ...dict.home.directions.items.map((item) =>
            serviceSchema(typedLocale, {
              name: item.title,
              description: item.text,
              route: item.route as RouteKey,
            }),
          ),
        ])}
      />

      <Hero locale={typedLocale} dict={dict} />
      <Advantages dict={dict} />
      <Directions locale={typedLocale} dict={dict} />
      <MediaBlock locale={typedLocale} dict={dict} />
      <SharedInfra dict={dict} />
      <Process
        title={dict.home.process.title}
        subtitle={dict.home.process.subtitle}
        steps={dict.home.process.steps}
      />
      <Comparison dict={dict} />
      <Tasks locale={typedLocale} dict={dict} />
      <TechStack dict={dict} />

      <section className="section">
        <div className="container-page flex flex-col gap-10">
          <SectionHeading
            title={dict.home.faq.title}
            subtitle={dict.home.faq.subtitle}
          />
          <div className="max-w-3xl">
            <Faq items={dict.home.faq.items} />
          </div>
        </div>
      </section>

      <CtaSection
        locale={typedLocale}
        dict={dict}
        title={dict.home.cta.title}
        text={dict.home.cta.text}
      />
    </>
  );
}
