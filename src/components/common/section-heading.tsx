import * as React from "react";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { Reveal } from "./reveal";

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
  as: Tag = "h2",
  className,
}: {
  eyebrow?: string;
  title: React.ReactNode;
  subtitle?: string;
  align?: "left" | "center";
  as?: "h1" | "h2" | "h3";
  className?: string;
}) {
  return (
    <Reveal
      className={cn(
        "flex flex-col gap-4",
        align === "center" && "items-center text-center",
        className,
      )}
    >
      {eyebrow && <Badge variant="primary">{eyebrow}</Badge>}
      <Tag
        className={cn(
          "text-balance",
          Tag === "h1"
            ? "text-4xl leading-[1.05] sm:text-6xl lg:text-7xl"
            : "text-[2rem] leading-[1.08] sm:text-5xl lg:text-[3.5rem]",
        )}
      >
        {title}
      </Tag>
      {subtitle && (
        <p
          className={cn(
            "max-w-2xl text-lg leading-snug text-muted-foreground sm:text-xl",
            align === "center" && "mx-auto",
          )}
        >
          {subtitle}
        </p>
      )}
    </Reveal>
  );
}
