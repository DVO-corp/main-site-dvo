import type { Locale } from "@/content/site";
import type { Dictionary } from "@/content/locales";
import { SectionHeading } from "@/components/common/section-heading";
import { Reveal } from "@/components/common/reveal";
import { TaskPicker } from "./task-picker";

export function Tasks({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const { tasks } = dict.home;

  return (
    <section className="section">
      <div className="container-page flex flex-col gap-10">
        <SectionHeading title={tasks.title} subtitle={tasks.subtitle} />
        <Reveal>
          <TaskPicker locale={locale} dict={dict} />
        </Reveal>
      </div>
    </section>
  );
}
