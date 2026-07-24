import { Check, Minus } from "lucide-react";
import type { Dictionary } from "@/content/locales";
import { SectionHeading } from "@/components/common/section-heading";
import { Reveal } from "@/components/common/reveal";

export function Comparison({ dict }: { dict: Dictionary }) {
  const { comparison } = dict.home;

  return (
    <section className="section">
      <div className="container-page flex flex-col gap-10">
        <SectionHeading
          title={comparison.title}
          subtitle={comparison.subtitle}
        />

        <Reveal className="overflow-hidden rounded-2xl border border-border">
          {/* Column captions, wide screens only — the stacked cards below
              repeat them inline so nothing is lost on mobile. */}
          <div className="hidden grid-cols-[1.1fr_1fr_1fr] gap-px bg-border md:grid">
            <div className="bg-elevated px-5 py-3.5" />
            <div className="bg-elevated px-5 py-3.5 text-sm font-semibold text-muted-foreground">
              {comparison.colSelf}
            </div>
            <div className="bg-elevated px-5 py-3.5 text-sm font-semibold text-primary">
              {comparison.colDvo}
            </div>
          </div>

          <div className="flex flex-col gap-px bg-border">
            {comparison.rows.map((row) => (
              <div
                key={row.label}
                className="grid gap-px bg-border md:grid-cols-[1.1fr_1fr_1fr]"
              >
                <div className="bg-card px-5 py-4">
                  <p className="text-sm font-semibold">{row.label}</p>
                </div>

                <div className="bg-card px-5 py-4">
                  <p className="mb-1 text-xs font-medium text-muted-foreground md:hidden">
                    {comparison.colSelf}
                  </p>
                  <p className="flex items-start gap-2.5 text-sm leading-relaxed text-muted-foreground">
                    <Minus
                      className="mt-0.5 size-4 shrink-0 text-warning"
                      aria-hidden
                    />
                    {row.self}
                  </p>
                </div>

                <div className="bg-card px-5 py-4">
                  <p className="mb-1 text-xs font-medium text-primary md:hidden">
                    {comparison.colDvo}
                  </p>
                  <p className="flex items-start gap-2.5 text-sm leading-relaxed">
                    <Check
                      className="mt-0.5 size-4 shrink-0 text-success"
                      aria-hidden
                    />
                    {row.dvo}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
