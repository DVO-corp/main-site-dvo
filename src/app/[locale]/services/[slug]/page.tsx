import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, Check } from "lucide-react";
import {
  absoluteUrl,
  landingPath,
  path,
  type Locale,
} from "@/content/site";
import { getDictionary } from "@/content/locales";
import {
  LANDING_LOCALES,
  LANDING_SLUGS,
  getLanding,
} from "@/content/landings";
import { buildLandingMetadata } from "@/lib/seo";
import { faqSchema, graph, serviceSchema, trailSchema } from "@/lib/jsonld";
import { JsonLd } from "@/components/common/json-ld";
import { PageHero } from "@/components/common/page-hero";
import { SectionHeading } from "@/components/common/section-heading";
import { Reveal } from "@/components/common/reveal";
import { Process } from "@/components/sections/process";
import { LANDING_DIAGRAM } from "@/components/sections/platform-diagram";
import { Faq } from "@/components/sections/faq";
import { CtaSection } from "@/components/sections/cta-section";
import { VisualSection } from "@/components/sections/visual-section";
import { CostCompare } from "@/components/visuals/cost-compare";
import { DashboardMock } from "@/components/visuals/dashboard-mock";

type Params = Promise<{ locale: string; slug: string }>;

/** The photo beside the heading, by the part of the system the page covers. */
const LANDING_PHOTO: Record<string, string> = {
  all: "/img/cables.webp",
  iac: "/img/rack.webp",
  cluster: "/img/aisle.webp",
  delivery: "/img/code.webp",
  observe: "/img/screens.webp",
  secure: "/img/cables.webp",
  data: "/img/rack.webp",
};

/** Landings that show a console mock-up under the hero. */
const COST_LANDINGS = ["cloud-cost-optimization", "aws-devops", "cloud-migration"];
const DASHBOARD_LANDINGS = [
  "monitoring",
  "infrastructure-support",
  "high-load",
  "devops-outsourcing",
  "kubernetes",
];

export const dynamicParams = false;

/**
 * Landings are published only in the locales that have copy for them, so this
 * returns complete { locale, slug } pairs instead of expanding the parent's
 * locales (an empty list for a locale fails a static export).
 */
export function generateStaticParams() {
  return LANDING_LOCALES.flatMap((locale) =>
    LANDING_SLUGS.map((slug) => ({ locale, slug })),
  );
}

export async function generateMetadata({
  params,
}: {
  params: Params;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  const landing = getLanding(locale, slug);
  if (!landing) return {};
  return buildLandingMetadata(locale as Locale, slug, landing);
}

export default async function LandingPage({ params }: { params: Params }) {
  const { locale, slug } = await params;
  const landing = getLanding(locale, slug);
  if (!landing) notFound();

  const typedLocale = locale as Locale;
  const dict = getDictionary(locale);
  const url = absoluteUrl(landingPath(typedLocale, slug));

  return (
    <>
      <JsonLd
        data={graph([
          trailSchema([
            { name: dict.breadcrumbs.home, url: absoluteUrl(path(typedLocale)) },
            {
              name: dict.nav.services,
              url: absoluteUrl(path(typedLocale, "services")),
            },
            { name: landing.name, url },
          ]),
          serviceSchema({
            name: landing.name,
            description: landing.seo.description,
            url,
          }),
          faqSchema(landing.faq),
        ])}
      />

      <PageHero
        locale={typedLocale}
        dict={dict}
        route="services"
        leaf={landing.name}
        title={landing.h1}
        subtitle={landing.lead}
        aside={
          <div className="relative hidden aspect-[4/3] overflow-hidden rounded-[1.75rem] bg-black lg:block">
            <Image
              src={LANDING_PHOTO[LANDING_DIAGRAM[slug] ?? "all"]}
              alt=""
              fill
              priority
              sizes="(min-width: 1024px) 45vw, 100vw"
              className="object-cover"
            />
          </div>
        }
      />

      <section className="section">
        <div className="container-page grid gap-10 lg:grid-cols-[1fr_1.6fr] lg:gap-14">
          <Reveal className="flex flex-col gap-5">
            <h2 className="text-2xl leading-tight sm:text-3xl">
              {dict.labels.whenNeeded}
            </h2>
            <ul className="flex flex-col">
              {landing.when.map((item) => (
                <li
                  key={item}
                  className="flex gap-3 border-b border-border py-3 text-sm leading-relaxed first:pt-0 last:border-b-0"
                >
                  <span aria-hidden className="font-mono text-primary">
                    →
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>

          <div className="flex flex-col gap-5">
            <h2 className="text-2xl leading-tight sm:text-3xl">
              {dict.labels.included}
            </h2>
            <ul className="grid gap-4 sm:grid-cols-2">
              {landing.included.map((item) => (
                <li key={item.title} className="flex gap-3 rounded-[1.5rem] bg-card p-6">
                  <Check
                    className="mt-0.5 size-4 shrink-0 text-primary"
                    aria-hidden
                  />
                  <div className="flex flex-col gap-1.5">
                    <h3 className="font-semibold">{item.title}</h3>
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      {item.text}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {COST_LANDINGS.includes(slug) && (
        <VisualSection
          alt
          title={dict.visuals.costTitle}
          subtitle={dict.visuals.costSubtitle}
          note={dict.visuals.costNote}
        >
          <CostCompare labels={dict.visuals} />
        </VisualSection>
      )}
      {DASHBOARD_LANDINGS.includes(slug) && (
        <VisualSection
          alt
          title={dict.visuals.dashTitle}
          subtitle={dict.visuals.dashSubtitle}
          note={dict.visuals.sampleNote}
        >
          <DashboardMock />
        </VisualSection>
      )}

      <div>
        <Process
          title={dict.labels.howItGoes}
          subtitle=""
          steps={landing.steps}
          columns={4}
        />
      </div>

      <section className="section">
        <div className="container-page grid gap-12 lg:grid-cols-[1.6fr_1fr] lg:gap-14">
          <div className="flex flex-col gap-6">
            <SectionHeading title={dict.labels.faq} align="left" />
            <Faq items={landing.faq} />
          </div>

          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-4">
              <h2 className="label-mono">{dict.labels.stack}</h2>
              <ul className="flex flex-wrap gap-1.5">
                {landing.stack.map((item) => (
                  <li
                    key={item}
                    className="rounded-full bg-card px-3 py-1 text-xs text-muted-foreground"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <nav className="flex flex-col gap-4" aria-label={dict.labels.related}>
              <h2 className="label-mono">{dict.labels.related}</h2>
              <ul className="flex flex-col">
                {landing.related.map((related) => {
                  const target = getLanding(locale, related);
                  if (!target) return null;
                  return (
                    <li key={related} className="border-b border-border last:border-b-0">
                      <Link
                        href={landingPath(typedLocale, related)}
                        className="group flex items-center justify-between gap-3 py-3 text-sm transition-colors hover:text-primary"
                      >
                        {target.name}
                        <ArrowRight
                          className="size-3.5 text-muted-foreground group-hover:text-primary"
                          aria-hidden
                        />
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </nav>
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
