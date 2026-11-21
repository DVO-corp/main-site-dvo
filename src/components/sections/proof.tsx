import { ArrowUpRight, Check } from "lucide-react";
import { PRODUCTS } from "@/content/site";
import type { Dictionary } from "@/content/locales";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/common/reveal";
import { PlatformDiagram } from "./platform-diagram";

/** "We run what we sell": our own product as the reference installation. */
export function Proof({ dict }: { dict: Dictionary }) {
  const { proof } = dict.home;

  return (
    <section className="section surface-alt">
      <div className="container-page flex flex-col items-center gap-12">
        <Reveal className="flex max-w-3xl flex-col items-center gap-4 text-center">
          <p className="text-[0.95rem] font-semibold text-primary">
            {proof.badge}
          </p>
          <h2 className="text-[2rem] leading-[1.08] sm:text-5xl lg:text-[3.5rem]">
            {proof.title}
          </h2>
          <p className="text-lg leading-snug text-muted-foreground sm:text-xl">
            {proof.text}
          </p>
        </Reveal>

        <div className="grid w-full gap-4 lg:grid-cols-[1.25fr_1fr]">
          <Reveal className="rounded-[1.75rem] bg-card p-5 sm:p-8">
            <PlatformDiagram label={proof.points.join("; ")} />
          </Reveal>

          <Reveal
            delay={0.08}
            className="flex flex-col gap-6 rounded-[1.75rem] bg-card p-7 sm:p-9"
          >
            <ul className="flex flex-col gap-3.5">
              {proof.points.map((point) => (
                <li key={point} className="flex items-start gap-3 leading-snug">
                  <Check
                    className="mt-0.5 size-5 shrink-0 text-primary"
                    aria-hidden
                  />
                  {point}
                </li>
              ))}
            </ul>
            <Button asChild className="mt-auto w-fit">
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
        </div>
      </div>
    </section>
  );
}
