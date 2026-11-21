import type { Metadata } from "next";
import { ArrowUpRight, Check } from "lucide-react";
import { LOCALES, PRODUCTS, type Locale } from "@/content/site";
import { getDictionary } from "@/content/locales";
import { buildMetadata } from "@/lib/seo";
import {
  breadcrumbSchema,
  graph,
  softwareApplicationSchema,
} from "@/lib/jsonld";
import { JsonLd } from "@/components/common/json-ld";
import { PageHero } from "@/components/common/page-hero";
import { Reveal } from "@/components/common/reveal";
import { SectionHeading } from "@/components/common/section-heading";
import { Button } from "@/components/ui/button";
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
  return buildMetadata(locale as Locale, "products");
}

/**
 * Illustrative request shape for a custom function. The path is a placeholder:
 * the real one is agreed with the client when the function is built.
 */
const EXAMPLE_CALL = `POST /api/v1/your-function
X-Api-Key: <your key>
Content-Type: application/json

{ "input": { ... } }

200 OK
{ "result": { ... }, "usage": { "units": 1 } }`;

function PointList({ points }: { points: string[] }) {
  return (
    <ul className="flex flex-col gap-2.5">
      {points.map((point) => (
        <li key={point} className="flex items-start gap-3 text-sm leading-relaxed">
          <Check className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden />
          {point}
        </li>
      ))}
    </ul>
  );
}

export default async function ProductsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const typedLocale = locale as Locale;
  const dict = getDictionary(locale);
  const { products } = dict;

  return (
    <>
      <JsonLd
        data={graph([
          breadcrumbSchema(typedLocale, [
            { name: dict.breadcrumbs.home, route: "home" },
            { name: dict.nav.products, route: "products" },
          ]),
          softwareApplicationSchema(typedLocale, {
            name: products.mp.name,
            description: products.mp.text,
          }),
        ])}
      />

      <PageHero
        locale={typedLocale}
        dict={dict}
        route="products"
        badge={products.hero.badge}
        title={products.hero.title}
        subtitle={products.hero.subtitle}
      />

      <section className="section">
        <div className="container-page grid gap-10 lg:grid-cols-[1.2fr_1fr] lg:gap-14">
          <Reveal className="flex flex-col gap-5">
            <p className="label-mono">{products.mp.tagline}</p>
            <h2 className="text-2xl leading-tight sm:text-3xl lg:text-[2.5rem]">
              {products.mp.name}
            </h2>
            <p className="max-w-2xl leading-relaxed text-muted-foreground">
              {products.mp.text}
            </p>
            <div className="flex flex-wrap gap-3">
              <Button asChild>
                <a
                  href={PRODUCTS.metaplatho.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {dict.actions.openProduct}
                  <ArrowUpRight aria-hidden />
                  <span className="sr-only">{dict.actions.openInNewTab}</span>
                </a>
              </Button>
              <Button asChild variant="secondary">
                <a
                  href={PRODUCTS.metaplatho.apiDocsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  API docs
                  <ArrowUpRight aria-hidden />
                  <span className="sr-only">{dict.actions.openInNewTab}</span>
                </a>
              </Button>
            </div>
          </Reveal>

          <Reveal
            delay={0.08}
            className="rounded-lg border border-border bg-card p-6"
          >
            <PointList points={products.mp.points} />
          </Reveal>
        </div>
      </section>

      <div id="api" className="scroll-mt-24 border-y border-border bg-elevated/50">
        <Process
          title={products.api.title}
          subtitle={products.api.text}
          steps={products.api.steps}
          columns={4}
        />
        <div className="container-page grid gap-8 pb-16 lg:grid-cols-2 lg:gap-14">
          <Reveal>
            <PointList points={products.api.points} />
          </Reveal>
          <Reveal delay={0.08} className="flex flex-col gap-3">
            <p className="label-mono">{products.api.exampleTitle}</p>
            <pre className="overflow-x-auto rounded-lg border border-border bg-card p-5 font-mono text-xs leading-relaxed text-foreground/90">
              {EXAMPLE_CALL}
            </pre>
          </Reveal>
        </div>
      </div>

      <section id="hosting" className="section scroll-mt-24">
        <div className="container-page grid gap-10 lg:grid-cols-[1.2fr_1fr] lg:gap-14">
          <SectionHeading
            title={products.hosting.title}
            subtitle={products.hosting.text}
          />
          <Reveal
            delay={0.08}
            className="rounded-lg border border-border bg-card p-6"
          >
            <PointList points={products.hosting.points} />
          </Reveal>
        </div>
      </section>

      <CtaSection
        locale={typedLocale}
        dict={dict}
        title={products.cta.title}
        text={products.cta.text}
      />
    </>
  );
}
