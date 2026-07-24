import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, Check } from "lucide-react";
import { LOCALES, PRODUCTS, path, type Locale } from "@/content/site";
import { getDictionary } from "@/content/locales";
import { buildMetadata } from "@/lib/seo";
import {
  breadcrumbSchema,
  graph,
  softwareApplicationSchema,
} from "@/lib/jsonld";
import { Icon } from "@/lib/icons";
import { JsonLd } from "@/components/common/json-ld";
import { PageHero } from "@/components/common/page-hero";
import { Reveal } from "@/components/common/reveal";
import { SectionHeading } from "@/components/common/section-heading";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
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

export default async function ProductsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const typedLocale = locale as Locale;
  const dict = getDictionary(locale);
  const { products } = dict;

  const statusLabel = {
    available: dict.labels.available,
    inDevelopment: dict.labels.inDevelopment,
    planned: dict.labels.planned,
  } as const;

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
            description: products.mp.tagline,
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

      {/* Media Processing — the flagship product */}
      <section className="pb-4">
        <div className="container-page">
          <Reveal className="relative overflow-hidden rounded-2xl border border-border bg-card/60">
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 -z-10 grid-surface opacity-70"
            />
            <div
              aria-hidden
              className="pointer-events-none absolute -top-24 -right-24 -z-10 h-72 w-72 rounded-full blur-[110px]"
              style={{ background: "var(--glow-b)" }}
            />

            <div className="flex flex-col gap-8 p-6 sm:p-10">
              <div className="flex flex-col gap-4">
                <div className="flex flex-wrap items-center gap-3">
                  <Badge variant="accent">
                    {statusLabel[products.mp.status as keyof typeof statusLabel]}
                  </Badge>
                  <span className="font-mono text-xs text-muted-foreground">
                    {PRODUCTS.mediaProcessing.host}
                  </span>
                </div>
                <h2 className="text-2xl sm:text-3xl">{products.mp.name}</h2>
                <p className="text-base font-medium text-foreground/85">
                  {products.mp.tagline}
                </p>
                <p className="max-w-3xl leading-relaxed text-muted-foreground">
                  {products.mp.text}
                </p>
              </div>

              <div className="grid gap-4 md:grid-cols-3">
                {products.mp.groups.map((group) => (
                  <div
                    key={group.title}
                    className="flex flex-col gap-3 rounded-xl border border-border/70 bg-background/40 p-5"
                  >
                    <h3 className="text-sm font-semibold tracking-wide text-muted-foreground uppercase">
                      {group.title}
                    </h3>
                    <ul className="flex flex-col gap-2">
                      {group.items.map((item) => (
                        <li
                          key={item}
                          className="flex items-start gap-2.5 text-sm leading-relaxed"
                        >
                          <Check
                            className="mt-0.5 size-4 shrink-0 text-accent"
                            aria-hidden
                          />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <Button asChild size="lg">
                  <a
                    href={PRODUCTS.mediaProcessing.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {dict.actions.openMediaProcessing}
                    <ArrowUpRight aria-hidden />
                    <span className="sr-only">
                      {dict.actions.openInNewTab}
                    </span>
                  </a>
                </Button>
                <Button asChild variant="secondary" size="lg">
                  <Link href={path(typedLocale, "contact")}>
                    {dict.actions.orderIntegration}
                  </Link>
                </Button>
                <Button asChild variant="ghost" size="lg">
                  <Link href={path(typedLocale, "contact")}>
                    {dict.actions.discussWorkflow}
                  </Link>
                </Button>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Upcoming products */}
      <section className="section">
        <div className="container-page flex flex-col gap-10">
          <SectionHeading
            title={products.upcoming.title}
            subtitle={products.upcoming.subtitle}
          />

          <ul className="grid gap-4 md:grid-cols-3">
            {products.upcoming.items.map((item, index) => (
              <Reveal
                as="li"
                key={item.title}
                delay={index * 0.06}
                className="flex h-full flex-col gap-4 rounded-xl border border-dashed border-border-strong bg-card/40 p-6"
              >
                <div className="flex items-start justify-between gap-3">
                  <span className="inline-flex size-11 items-center justify-center rounded-xl border border-border bg-muted/50 text-muted-foreground">
                    <Icon name={item.icon} className="size-5" />
                  </span>
                  <Badge>
                    {statusLabel[item.status as keyof typeof statusLabel]}
                  </Badge>
                </div>
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {item.text}
                </p>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* Custom tooling */}
      <section className="section pt-0">
        <div className="container-page">
          <Reveal className="grid gap-8 rounded-2xl border border-primary/25 bg-primary/[0.05] p-6 sm:p-10 lg:grid-cols-2">
            <div className="flex flex-col gap-4">
              <h2 className="text-2xl">{products.custom.title}</h2>
              <p className="leading-relaxed text-muted-foreground">
                {products.custom.text}
              </p>
              <Button asChild className="mt-2 w-fit">
                <Link href={path(typedLocale, "contact")}>
                  {dict.actions.discussWorkflow}
                </Link>
              </Button>
            </div>

            <ul className="flex flex-col gap-3">
              {products.custom.points.map((point, index) => (
                <li
                  key={point}
                  className="flex items-start gap-3 rounded-lg border border-border/60 bg-background/40 px-4 py-3"
                >
                  <span className="font-mono text-xs text-primary">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="text-sm leading-relaxed">{point}</span>
                </li>
              ))}
            </ul>
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
