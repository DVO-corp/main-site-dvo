import type { Dictionary } from "@/content/locales";
import { Icon } from "@/lib/icons";
import { SectionHeading } from "@/components/common/section-heading";
import { Reveal } from "@/components/common/reveal";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function Advantages({ dict }: { dict: Dictionary }) {
  const { advantages } = dict.home;

  return (
    <section className="section">
      <div className="container-page flex flex-col gap-10">
        <SectionHeading
          title={advantages.title}
          subtitle={advantages.subtitle}
        />

        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {advantages.items.map((item, index) => (
            <Reveal as="li" key={item.title} delay={index * 0.05}>
              <Card className="card-hover h-full">
                <CardHeader>
                  <span className="mb-2 inline-flex size-11 items-center justify-center rounded-xl border border-primary/25 bg-primary/10 text-primary">
                    <Icon name={item.icon} className="size-5" />
                  </span>
                  <CardTitle>{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {item.text}
                  </p>
                </CardContent>
              </Card>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
