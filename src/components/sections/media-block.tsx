import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { PRODUCTS, path, type Locale } from "@/content/site";
import type { Dictionary } from "@/content/locales";
import { Icon } from "@/lib/icons";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/common/reveal";

export function MediaBlock({
  locale,
  dict,
}: {
  locale: Locale;
  dict: Dictionary;
}) {
  const { media } = dict.home;

  return (
    <section className="section">
      <div className="container-page">
        <Reveal className="relative overflow-hidden rounded-2xl border border-border bg-card/60">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 -z-10 grid-surface opacity-70"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute -right-20 -bottom-20 -z-10 h-72 w-72 rounded-full blur-[110px]"
            style={{ background: "var(--glow-c)" }}
          />

          <div className="grid gap-10 p-6 sm:p-10 lg:grid-cols-[1.05fr_1fr] lg:gap-12">
            <div className="flex flex-col gap-5">
              <Badge variant="violet">{media.badge}</Badge>
              <h2 className="text-2xl sm:text-3xl">{media.title}</h2>
              <p className="text-base font-medium text-foreground/85">
                {media.tagline}
              </p>
              <p className="leading-relaxed text-muted-foreground">
                {media.text}
              </p>

              <div className="mt-2 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <Button asChild>
                  <a
                    href={PRODUCTS.mediaProcessing.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {dict.actions.openMediaProcessing}
                    <ArrowUpRight aria-hidden />
                    <span className="sr-only">{dict.actions.openInNewTab}</span>
                  </a>
                </Button>
                <Button asChild variant="secondary">
                  <Link href={path(locale, "contact")}>
                    {dict.actions.orderIntegration}
                  </Link>
                </Button>
                <Button asChild variant="ghost">
                  <Link href={path(locale, "contact")}>
                    {dict.actions.discussWorkflow}
                  </Link>
                </Button>
              </div>

              <p className="font-mono text-xs text-muted-foreground">
                {PRODUCTS.mediaProcessing.host}
              </p>
            </div>

            <ul className="grid grid-cols-1 gap-2 xs:grid-cols-2">
              {media.features.map((feature) => (
                <li
                  key={feature.label}
                  className="flex items-center gap-2.5 rounded-lg border border-border/70 bg-background/40 px-3.5 py-3"
                >
                  <Icon
                    name={feature.icon}
                    className="size-4 shrink-0 text-accent"
                  />
                  <span className="text-[0.82rem] leading-snug text-muted-foreground">
                    {feature.label}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
