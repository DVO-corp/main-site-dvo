import Link from "next/link";
import { ArrowRight, Send } from "lucide-react";
import { CONTACTS, path, type Locale } from "@/content/site";
import type { Dictionary } from "@/content/locales";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { GridBackground } from "@/components/common/grid-background";
import { PlatformDiagram } from "./platform-diagram";

/**
 * Above-the-fold content renders statically — no entrance animation — so the
 * heading is the Largest Contentful Paint the moment the HTML arrives.
 */
export function Hero({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const { hero } = dict.home;

  return (
    <section className="relative overflow-hidden border-b border-border pt-12 pb-16 sm:pt-16 md:pt-20 md:pb-20">
      <GridBackground />

      <div className="container-page grid items-center gap-12 lg:grid-cols-[1.25fr_1fr]">
        <div className="flex flex-col gap-6">
          <Badge variant="primary" className="w-fit">
            {hero.badge}
          </Badge>

          <h1 className="text-[2.1rem] leading-[1.06] font-semibold sm:text-5xl lg:text-[3.4rem]">
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
              <a
                href={CONTACTS.telegramUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Send aria-hidden />
                {dict.actions.writeTelegram}
              </a>
            </Button>
            <Button asChild variant="ghost" size="lg">
              <Link href={path(locale, "services")}>
                {dict.actions.viewServices}
              </Link>
            </Button>
          </div>

          <p className="max-w-xl border-l-2 border-primary/50 pl-4 text-sm leading-relaxed text-muted-foreground">
            {hero.note}
          </p>
        </div>

        <div className="rounded-lg border border-border bg-card/60 p-3 sm:p-4">
          <PlatformDiagram
            label={hero.panel.map((row) => row.v).join("; ")}
          />
        </div>
      </div>
    </section>
  );
}
