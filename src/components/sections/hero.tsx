import Link from "next/link";
import { ArrowRight, ArrowUpRight, Sparkles } from "lucide-react";
import { PRODUCTS, path, type Locale } from "@/content/site";
import type { Dictionary } from "@/content/locales";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Reveal } from "@/components/common/reveal";
import { GridBackground } from "@/components/common/grid-background";
import { FlowDiagram } from "./flow-diagram";

/**
 * Above-the-fold content renders statically — no entrance animation — so the
 * heading is the Largest Contentful Paint the moment the HTML arrives. Only
 * the diagram block below the fold uses a scroll reveal.
 */
export function Hero({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const { hero, diagram } = dict.home;

  return (
    <section className="relative overflow-hidden pt-12 pb-16 sm:pt-16 md:pt-20 md:pb-24">
      <GridBackground />

      <div className="container-page flex flex-col gap-14">
        <div className="flex max-w-3xl flex-col gap-6">
          <Badge variant="primary" className="w-fit gap-2">
            <Sparkles className="size-3.5" aria-hidden />
            {hero.badge}
          </Badge>

          <h1 className="text-[2.1rem] leading-[1.08] font-semibold sm:text-5xl lg:text-6xl">
            {hero.title}
          </h1>

          <p className="max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            {hero.subtitle}
          </p>

          <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Button asChild size="lg">
              <Link href={path(locale, "contact")}>
                {dict.actions.discussProject}
                <ArrowRight aria-hidden />
              </Link>
            </Button>
            <Button asChild variant="secondary" size="lg">
              <Link href={path(locale, "services")}>
                {dict.actions.viewServices}
              </Link>
            </Button>
            <Button asChild variant="ghost" size="lg">
              <a
                href={PRODUCTS.mediaProcessing.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                {dict.actions.mediaProcessing}
                <ArrowUpRight aria-hidden />
                <span className="sr-only">{dict.actions.openInNewTab}</span>
              </a>
            </Button>
          </div>

          <p className="max-w-xl border-l-2 border-primary/40 pl-4 text-sm leading-relaxed text-muted-foreground">
            {hero.note}
          </p>
        </div>

        <Reveal className="flex flex-col gap-5">
          <div className="flex flex-col gap-2">
            <h2 className="text-lg font-semibold sm:text-xl">
              {diagram.title}
            </h2>
            <p className="max-w-2xl text-sm leading-relaxed text-muted-foreground">
              {diagram.subtitle}
            </p>
          </div>
          <FlowDiagram dict={dict} />
        </Reveal>
      </div>
    </section>
  );
}
