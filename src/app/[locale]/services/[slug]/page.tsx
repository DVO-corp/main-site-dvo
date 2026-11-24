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
import { cn } from "@/lib/utils";
import {
  LANDING_LOCALES,
  LANDING_SLUGS,
  getLanding,
} from "@/content/landings";
import { buildLandingMetadata } from "@/lib/seo";
import { faqSchema, graph, serviceSchema, trailSchema } from "@/lib/jsonld";
import { JsonLd } from "@/components/common/json-ld";
import { Button } from "@/components/ui/button";
import { PhotoHero } from "@/components/common/photo-hero";
import { SectionHeading } from "@/components/common/section-heading";
import { Reveal } from "@/components/common/reveal";
import { Process } from "@/components/sections/process";
import { Faq } from "@/components/sections/faq";
import { CtaSection } from "@/components/sections/cta-section";
import { VisualSection } from "@/components/sections/visual-section";
import { CostCompare } from "@/components/visuals/cost-compare";
import { DashboardMock } from "@/components/visuals/dashboard-mock";

type Params = Promise<{ locale: string; slug: string }>;

/**
 * Tiles sit three to a row on wide screens; a short last row is stretched so
 * the grid never ends with an empty slot.
 */
function whenSpan(index: number, total: number): string {
  const tail = total % 3;
  if (tail !== 0 && index >= total - tail) {
    return tail === 2 ? "lg:col-span-3" : "lg:col-span-6";
  }
  return "lg:col-span-2";
}

/** One photo per landing; also used on "related" tiles pointing at it. */
const LANDING_PHOTO: Record<string, string> = {
  "devops-outsourcing": "/img/cables.webp",
  "infrastructure-security": "/img/cables.webp",
  "aws-devops": "/img/rack.webp",
  "high-load": "/img/rack.webp",
  kubernetes: "/img/aisle.webp",
  "managed-hosting": "/img/aisle.webp",
  "terraform-iac": "/img/engineer.webp",
  "api-development": "/img/engineer.webp",
  "ci-cd": "/img/code.webp",
  "devops-for-startups": "/img/code.webp",
  monitoring: "/img/screens.webp",
  "infrastructure-support": "/img/screens.webp",
  "cloud-cost-optimization": "/img/cabinets.webp",
  "ai-infrastructure": "/img/cabinets.webp",
  "cloud-migration": "/img/wires.webp",
  "launch-ai-built-app": "/img/code.webp",
  "deploy-lovable-app": "/img/screens.webp",
  "replit-migration": "/img/wires.webp",
  "bolt-app-hosting": "/img/engineer.webp",
};

/** Landings that show a console mock-up under the hero. */
const COST_LANDINGS = ["cloud-cost-optimization", "aws-devops", "cloud-migration"];
const DASHBOARD_LANDINGS = [
  "monitoring",
  "infrastructure-support",
  "high-load",
  "devops-outsourcing",
  "kubernetes",
  "launch-ai-built-app",
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
            offers: landing.offer?.plans.map((plan) => ({
              name: plan.name,
              amount: plan.amount,
            })),
          }),
          faqSchema(landing.faq),
        ])}
      />

      <PhotoHero
        locale={typedLocale}
        dict={dict}
        route="services"
        leaf={landing.name}
        photo={LANDING_PHOTO[slug] ?? "/img/cables.webp"}
        title={landing.h1}
        subtitle={landing.lead}
      />

      {landing.offer && (
        <section className="section">
          <div className="container-page flex flex-col gap-12">
            <SectionHeading title={landing.offer.title} />
            <ul className="grid gap-3 md:grid-cols-2">
              {landing.offer.plans.map((plan) => (
                <li
                  key={plan.name}
                  className="flex flex-col gap-6 rounded-[1.75rem] bg-card p-7 sm:p-10"
                >
                  <div className="flex flex-col gap-2">
                    <h3 className="text-2xl leading-tight font-semibold">
                      {plan.name}
                    </h3>
                    <p className="flex items-baseline gap-3">
                      <span className="text-5xl font-semibold tracking-tight sm:text-6xl">
                        {plan.price}
                      </span>
                      <span className="text-lg text-muted-foreground">
                        {plan.unit}
                      </span>
                    </p>
                  </div>
                  <p className="text-lg leading-snug text-muted-foreground">
                    {plan.text}
                  </p>
                  <ul className="flex flex-col gap-3">
                    {plan.points.map((point) => (
                      <li key={point} className="flex gap-3 leading-snug">
                        <Check
                          className="mt-0.5 size-5 shrink-0 text-primary"
                          aria-hidden
                        />
                        {point}
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
            <div className="flex flex-col items-center gap-6 text-center">
              <p className="measure max-w-3xl leading-snug text-muted-foreground">
                {landing.offer.note}
              </p>
              <Button asChild size="lg">
                <Link href={path(typedLocale, "contact")}>
                  {landing.offer.cta}
                  <ArrowRight aria-hidden />
                </Link>
              </Button>
            </div>
          </div>
        </section>
      )}

      <section className="section">
        <div className="container-page flex flex-col gap-12">
          <SectionHeading title={dict.labels.whenNeeded} />
          <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-6">
            {landing.when.map((item, index) => (
              <Reveal
                as="li"
                key={item}
                delay={Math.min(index, 4) * 0.04}
                className={cn(
                  "flex flex-col gap-4 rounded-[1.75rem] bg-card p-7 sm:p-8",
                  whenSpan(index, landing.when.length),
                )}
              >
                <span className="text-3xl font-semibold text-primary">
                  {index + 1}
                </span>
                <p className="text-xl leading-snug font-medium">{item}</p>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <section className="section surface-alt">
        <div className="container-page flex flex-col gap-12">
          <SectionHeading title={dict.labels.included} />
          <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {landing.included.map((item) => (
              <li
                key={item.title}
                className="flex flex-col gap-3 rounded-[1.75rem] bg-card p-7 sm:p-8"
              >
                <Check className="size-7 text-primary" aria-hidden />
                <h3 className="text-2xl leading-tight font-semibold">
                  {item.title}
                </h3>
                <p className="leading-snug text-muted-foreground">
                  {item.text}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {COST_LANDINGS.includes(slug) && (
        <VisualSection
          title={dict.visuals.costTitle}
          subtitle={dict.visuals.costSubtitle}
          note={dict.visuals.costNote}
        >
          <CostCompare labels={dict.visuals} />
        </VisualSection>
      )}
      {DASHBOARD_LANDINGS.includes(slug) && (
        <VisualSection
          title={dict.visuals.dashTitle}
          subtitle={dict.visuals.dashSubtitle}
          note={dict.visuals.sampleNote}
        >
          <DashboardMock />
        </VisualSection>
      )}

      <Process
        title={dict.labels.howItGoes}
        subtitle=""
        steps={landing.steps}
        columns={4}
      />

      <section className="section surface-alt">
        <div className="container-page flex flex-col gap-12">
          <SectionHeading title={dict.labels.faq} />
          <div className="measure max-w-4xl">
            <Faq items={landing.faq} />
          </div>
          <ul className="flex flex-wrap justify-center gap-2">
            {landing.stack.map((item) => (
              <li
                key={item}
                className="rounded-full bg-card px-4 py-1.5 text-sm text-muted-foreground"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="py-3">
        <nav aria-label={dict.labels.related} className="container-page">
          <ul className="grid gap-3 md:grid-cols-3">
            {landing.related.map((related) => {
              const target = getLanding(locale, related);
              if (!target) return null;
              return (
                <li key={related}>
                  <Link
                    href={landingPath(typedLocale, related)}
                    className="group relative flex min-h-[18rem] flex-col justify-end overflow-hidden rounded-[1.75rem] bg-black p-7 text-white outline-none focus-visible:ring-2 focus-visible:ring-ring"
                  >
                    <Image
                      src={LANDING_PHOTO[related] ?? "/img/cables.webp"}
                      alt=""
                      fill
                      sizes="(min-width: 768px) 33vw, 100vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                    />
                    <div
                      aria-hidden
                      className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/10"
                    />
                    <span className="relative z-10 text-sm text-white/70">
                      {dict.labels.related}
                    </span>
                    <span className="relative z-10 flex items-center justify-between gap-3 text-2xl leading-tight font-semibold">
                      {target.name}
                      <ArrowRight
                        className="size-5 shrink-0 transition-transform group-hover:translate-x-1"
                        aria-hidden
                      />
                    </span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
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
