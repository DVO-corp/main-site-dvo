import { Info } from "lucide-react";
import type { Dictionary } from "@/content/locales";
import { SectionHeading } from "@/components/common/section-heading";
import { Reveal } from "@/components/common/reveal";
import { InfraModels } from "./infra-models";
import { GpuPool } from "./gpu-pool";

export function SharedInfra({ dict }: { dict: Dictionary }) {
  const { shared } = dict.home;

  return (
    <section className="section">
      <div className="container-page flex flex-col gap-10">
        <SectionHeading title={shared.title} subtitle={shared.subtitle} />

        <Reveal>
          <InfraModels dict={dict} />
        </Reveal>

        <div className="grid gap-6 lg:grid-cols-[1fr_1.1fr]">
          <Reveal className="flex flex-col gap-4 rounded-2xl border border-accent/25 bg-accent/[0.06] p-6 sm:p-8">
            <h3 className="text-lg font-semibold">{shared.example.title}</h3>
            <p className="leading-relaxed text-foreground/90">
              {shared.example.text}
            </p>
            <div className="mt-auto flex items-start gap-3 rounded-lg border border-border/70 bg-background/50 p-4">
              <Info className="mt-0.5 size-4 shrink-0 text-warning" aria-hidden />
              <div>
                <p className="text-xs font-medium tracking-wide text-muted-foreground uppercase">
                  {dict.labels.note}
                </p>
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                  {shared.example.note}
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <GpuPool dict={dict} />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
