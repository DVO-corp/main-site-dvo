import { TECH_STACK } from "@/content/site";
import type { Dictionary } from "@/content/locales";
import { SectionHeading } from "@/components/common/section-heading";
import { Reveal } from "@/components/common/reveal";
import { Counters } from "./counters";

export function TechStack({ dict }: { dict: Dictionary }) {
  const { tech } = dict.home;

  return (
    <section className="section">
      <div className="container-page flex flex-col gap-10">
        <SectionHeading title={tech.title} subtitle={tech.subtitle} />

        <Reveal>
          <Counters dict={dict} />
        </Reveal>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {TECH_STACK.map((group, index) => (
            <Reveal
              key={group.id}
              delay={index * 0.05}
              className="flex flex-col gap-3 rounded-xl border border-border bg-card/50 p-5"
            >
              <h3 className="text-sm font-semibold tracking-wide text-muted-foreground uppercase">
                {tech.groups[group.id]}
              </h3>
              <ul className="flex flex-wrap gap-1.5">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="rounded-md border border-border/70 bg-background/40 px-2.5 py-1 font-mono text-xs text-foreground/80"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
