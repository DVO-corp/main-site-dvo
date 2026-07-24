import type { Dictionary } from "@/content/locales";
import { SectionHeading } from "@/components/common/section-heading";
import { Reveal } from "@/components/common/reveal";

export function Process({
  title,
  subtitle,
  steps,
}: {
  title: string;
  subtitle: string;
  steps: Dictionary["home"]["process"]["steps"];
}) {
  return (
    <section className="section">
      <div className="container-page flex flex-col gap-10">
        <SectionHeading title={title} subtitle={subtitle} />

        <ol className="relative grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {/* Connector rail, desktop only. */}
          <span
            aria-hidden
            className="absolute top-5 right-0 left-0 hidden h-px bg-gradient-to-r from-primary/40 via-accent/30 to-transparent lg:block"
          />

          {steps.map((step, index) => (
            <Reveal
              as="li"
              key={step.title}
              delay={index * 0.06}
              className="relative flex flex-col gap-3"
            >
              <span className="relative z-10 inline-flex size-10 items-center justify-center rounded-full border border-primary/35 bg-background font-mono text-sm font-semibold text-primary">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="text-base font-semibold">{step.title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {step.text}
              </p>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
