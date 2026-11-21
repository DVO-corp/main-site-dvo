import type { Metadata } from "next";
import { LOCALES, type Locale } from "@/content/site";
import { getDictionary } from "@/content/locales";
import { buildMetadata } from "@/lib/seo";
import { faqSchema, graph } from "@/lib/jsonld";
import { JsonLd } from "@/components/common/json-ld";
import { SectionHeading } from "@/components/common/section-heading";
import { Reveal } from "@/components/common/reveal";
import { Hero } from "@/components/sections/hero";
import { ServicesGrid } from "@/components/sections/services-grid";
import { InfraModels } from "@/components/sections/infra-models";
import { Proof } from "@/components/sections/proof";
import { Process } from "@/components/sections/process";
import { TechStack } from "@/components/sections/tech-stack";
import { Faq } from "@/components/sections/faq";
import { CtaSection } from "@/components/sections/cta-section";
import { VisualSection } from "@/components/sections/visual-section";
import { CostCompare } from "@/components/visuals/cost-compare";

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
      <JsonLd data={graph([faqSchema(dict.home.faq.items)])} />

      <Hero locale={typedLocale} dict={dict} />
      <ServicesGrid locale={typedLocale} dict={dict} />

      <VisualSection
        title={dict.visuals.costTitle}
        subtitle={dict.visuals.costSubtitle}
        note={dict.visuals.costNote}
      >
        <CostCompare labels={dict.visuals} />
      </VisualSection>

      <section className="section pt-0">
        <div className="container-page flex flex-col gap-10">
          <SectionHeading
            title={dict.home.models.title}
            subtitle={dict.home.models.subtitle}
          />
          <Reveal>
            <InfraModels dict={dict} />
          </Reveal>
        </div>
      </section>

      <Proof dict={dict} />

      <Process
        title={dict.home.process.title}
        subtitle={dict.home.process.subtitle}
        steps={dict.home.process.steps}
      />
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
