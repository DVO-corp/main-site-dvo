import type { Metadata } from "next";
import { LOCALES, type Locale } from "@/content/site";
import { getDictionary } from "@/content/locales";
import { buildMetadata } from "@/lib/seo";
import { breadcrumbSchema, graph } from "@/lib/jsonld";
import { Icon } from "@/lib/icons";
import { JsonLd } from "@/components/common/json-ld";
import { PageHero } from "@/components/common/page-hero";
import { Reveal } from "@/components/common/reveal";
import { SectionHeading } from "@/components/common/section-heading";
import { LogoMark } from "@/components/layout/logo";
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
  return buildMetadata(locale as Locale, "about");
}

export default async function AboutPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const typedLocale = locale as Locale;
  const dict = getDictionary(locale);
  const { about } = dict;

  return (
    <>
      <JsonLd
        data={graph([
          breadcrumbSchema(typedLocale, [
            { name: dict.breadcrumbs.home, route: "home" },
            { name: dict.nav.about, route: "about" },
          ]),
        ])}
      />

      <PageHero
        locale={typedLocale}
        dict={dict}
        route="about"
        badge={about.hero.badge}
        title={about.hero.title}
        subtitle={about.hero.subtitle}
      />

      <section className="pb-4">
        <div className="container-page">
          <Reveal className="grid gap-8 rounded-2xl border border-border bg-card/60 p-6 sm:p-10 lg:grid-cols-[auto_1fr] lg:gap-12">
            <LogoMark className="size-16 shrink-0" />
            <div className="flex flex-col gap-4">
              <h2 className="text-2xl">{about.intro.title}</h2>
              <p className="leading-relaxed text-muted-foreground">
                {about.intro.text}
              </p>
              <p className="leading-relaxed text-foreground/90">
                {about.intro.second}
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="container-page flex flex-col gap-10">
          <SectionHeading title={about.focus.title} />

          <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {about.focus.items.map((item, index) => (
              <Reveal
                as="li"
                key={item.title}
                delay={index * 0.05}
                className="card-hover flex h-full flex-col gap-3 rounded-xl border border-border bg-card/60 p-6"
              >
                <span className="inline-flex size-11 items-center justify-center rounded-xl border border-accent/25 bg-accent/10 text-accent">
                  <Icon name={item.icon} className="size-5" />
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

      <section className="section pt-0">
        <div className="container-page flex flex-col gap-10">
          <SectionHeading title={about.principles.title} />

          <ul className="grid gap-4 md:grid-cols-2">
            {about.principles.items.map((item, index) => (
              <Reveal
                as="li"
                key={item.title}
                delay={index * 0.05}
                className="flex h-full gap-4 rounded-xl border border-border bg-card/50 p-6"
              >
                <span className="font-mono text-sm text-primary">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div className="flex flex-col gap-2">
                  <h3 className="font-semibold">{item.title}</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {item.text}
                  </p>
                </div>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <CtaSection
        locale={typedLocale}
        dict={dict}
        title={about.cta.title}
        text={about.cta.text}
      />
    </>
  );
}
