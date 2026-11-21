import { ArrowUpRight, Check } from "lucide-react";
import { PRODUCTS } from "@/content/site";
import type { Dictionary } from "@/content/locales";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { KvPanel } from "@/components/common/kv-panel";
import { Reveal } from "@/components/common/reveal";

/** "We run what we sell": our own product as the reference installation. */
export function Proof({ dict }: { dict: Dictionary }) {
  const { proof } = dict.home;

  return (
    <section className="section border-y border-border bg-elevated/50">
      <div className="container-page grid gap-10 lg:grid-cols-[1.2fr_1fr] lg:gap-14">
        <Reveal className="flex flex-col gap-5">
          <Badge variant="primary" className="w-fit">
            {proof.badge}
          </Badge>
          <h2 className="text-2xl leading-tight sm:text-3xl lg:text-[2.5rem]">
            {proof.title}
          </h2>
          <p className="max-w-2xl leading-relaxed text-muted-foreground">
            {proof.text}
          </p>
          <ul className="flex flex-col gap-2.5">
            {proof.points.map((point) => (
              <li key={point} className="flex items-start gap-3 text-sm leading-relaxed">
                <Check className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden />
                {point}
              </li>
            ))}
          </ul>
          <Button asChild variant="secondary" className="mt-2 w-fit">
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
        </Reveal>

        <Reveal delay={0.08} className="lg:pt-12">
          <KvPanel title={PRODUCTS.metaplatho.host} rows={proof.facts} />
        </Reveal>
      </div>
    </section>
  );
}
