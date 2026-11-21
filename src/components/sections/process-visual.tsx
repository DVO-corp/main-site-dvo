import { Icon } from "@/lib/icons";
import { SectionHeading } from "@/components/common/section-heading";
import { Reveal } from "@/components/common/reveal";

/** One icon per stage, in order: talk, plan, build, launch, operate. */
const STEP_ICONS = ["MessagesSquare", "ClipboardList", "Hammer", "Rocket", "LifeBuoy"];

/**
 * The project stages as a picture: icons on a line with a short title each.
 * The longer description of every step is kept for screen readers and search
 * engines instead of being printed under it.
 */
export function ProcessVisual({
  title,
  subtitle,
  steps,
}: {
  title: string;
  subtitle: string;
  steps: { title: string; text: string }[];
}) {
  return (
    <section className="section">
      <div className="container-page flex flex-col items-center gap-14">
        <SectionHeading title={title} subtitle={subtitle} />

        <Reveal
          as="ol"
          className="relative grid w-full max-w-5xl grid-cols-2 gap-y-10 sm:grid-cols-5"
        >
          <span
            aria-hidden
            className="absolute top-10 right-[10%] left-[10%] hidden h-0.5 rounded-full bg-primary/30 sm:block"
          />
          {steps.map((step, index) => (
            <li
              key={step.title}
              className="relative flex flex-col items-center gap-4 px-2 text-center"
            >
              <span className="relative flex size-20 items-center justify-center rounded-full bg-card text-primary ring-4 ring-background">
                <Icon name={STEP_ICONS[index] ?? "Boxes"} className="size-8" />
                <span className="absolute -top-1 -right-1 flex size-7 items-center justify-center rounded-full bg-primary text-xs font-semibold text-primary-foreground">
                  {index + 1}
                </span>
              </span>
              <h3 className="text-base leading-snug font-semibold">
                {step.title}
              </h3>
              <p className="sr-only">{step.text}</p>
            </li>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
