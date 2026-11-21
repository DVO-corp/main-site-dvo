import { TECH_STACK } from "@/content/site";
import type { Dictionary } from "@/content/locales";
import { SectionHeading } from "@/components/common/section-heading";
import { Reveal } from "@/components/common/reveal";

export function TechStack({ dict }: { dict: Dictionary }) {
  const { tech } = dict.home;

  return (
    <section className="section">
      <div className="container-page flex flex-col gap-10">
        <SectionHeading title={tech.title} subtitle={tech.subtitle} />

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {TECH_STACK.map((group, index) => (
            <Reveal
              key={group.id}
              delay={index * 0.05}
              className="flex flex-col gap-4 rounded-[1.5rem] bg-card p-6"
            >
              <h3 className="text-base font-semibold">
                {tech.groups[group.id]}
              </h3>
              <ul className="flex flex-wrap gap-1.5">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="rounded-full bg-background px-3 py-1 text-xs text-muted-foreground"
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
