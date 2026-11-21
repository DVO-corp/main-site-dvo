import { SectionHeading } from "@/components/common/section-heading";
import { Reveal } from "@/components/common/reveal";
import { cn } from "@/lib/utils";

export function Process({
  title,
  subtitle,
  steps,
  columns = 5,
}: {
  title: string;
  subtitle: string;
  steps: { title: string; text: string }[];
  columns?: 4 | 5;
}) {
  return (
    <section className="section">
      <div className="container-page flex flex-col gap-10">
        <SectionHeading title={title} subtitle={subtitle || undefined} />

        <Reveal
          as="ol"
          className={cn(
            "grid gap-px overflow-hidden rounded-lg border border-border bg-border sm:grid-cols-2",
            columns === 4 ? "lg:grid-cols-4" : "lg:grid-cols-5",
          )}
        >
          {steps.map((step, index) => (
            <li key={step.title} className="flex flex-col gap-3 bg-background p-5">
              <span className="font-mono text-sm text-primary">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="text-base font-semibold">{step.title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {step.text}
              </p>
            </li>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
