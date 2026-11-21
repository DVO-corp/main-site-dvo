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
            "grid gap-4 sm:grid-cols-2",
            columns === 4 ? "lg:grid-cols-4" : "lg:grid-cols-5",
          )}
        >
          {steps.map((step, index) => (
            <li key={step.title} className="flex flex-col gap-3 rounded-[1.5rem] bg-card p-6">
              <span className="text-3xl font-semibold text-primary">
                {index + 1}
              </span>
              <h3 className="text-lg leading-snug font-semibold">{step.title}</h3>
              <p className="text-sm leading-snug text-muted-foreground">
                {step.text}
              </p>
            </li>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
