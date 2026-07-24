import * as React from "react";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { Reveal } from "./reveal";

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "left",
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
            ? "text-3xl leading-[1.1] sm:text-5xl lg:text-6xl"
            : "text-2xl leading-tight sm:text-3xl lg:text-[2.5rem]",
        )}
      >
        {title}
      </Tag>
      {subtitle && (
        <p
          className={cn(
            "max-w-2xl text-[1.02rem] leading-relaxed text-muted-foreground",
            align === "center" && "mx-auto",
          )}
        >
          {subtitle}
        </p>
      )}
    </Reveal>
  );
}
