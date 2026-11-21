import { cn } from "@/lib/utils";
import { SectionHeading } from "@/components/common/section-heading";
import { Reveal } from "@/components/common/reveal";

/** Centred heading, a console mock-up under it, and an honest caption. */
export function VisualSection({
  title,
  subtitle,
  note,
  alt = false,
  children,
}: {
  title: string;
  subtitle: string;
  note: string;
  /** Renders on the grey band. */
  alt?: boolean;
  children: React.ReactNode;
}) {
  return (
    <section className={cn("section", alt && "surface-alt")}>
      <div className="container-page flex flex-col items-center gap-12">
        <SectionHeading title={title} subtitle={subtitle} />
        <Reveal className="w-full max-w-[88rem]">
          {children}
          <p className="mx-auto mt-4 max-w-2xl text-center text-xs text-muted-foreground">
            {note}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
