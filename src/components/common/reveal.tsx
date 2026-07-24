"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

type Direction = "up" | "left" | "right" | "none";

/**
 * Fades a section in the first time it scrolls into view.
 *
 * The hidden state is applied by CSS gated on the `.js` class, which the
 * inline head script sets before first paint. That means:
 *  - without JavaScript the content is simply visible, never blank;
 *  - the transition is pure CSS, so no animation library ships with static
 *    sections and there is no layout shift;
 *  - `prefers-reduced-motion` skips the movement (see globals.css).
 *
 * Above-the-fold content deliberately does not use this — hiding the LCP
 * element until an observer fires would slow the measured paint.
 */
export function Reveal({
  children,
  className,
  delay = 0,
  direction = "up",
  as: Tag = "div",
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: Direction;
  as?: "div" | "section" | "li" | "article" | "ol" | "ul";
}) {
  const ref = React.useRef<HTMLElement>(null);

  React.useEffect(() => {
    const element = ref.current;
    if (!element) return;

    if (typeof IntersectionObserver === "undefined") {
      element.classList.add("is-revealed");
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          entry.target.classList.add("is-revealed");
          observer.unobserve(entry.target);
        }
      },
      { rootMargin: "0px 0px -60px 0px", threshold: 0 },
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return React.createElement(
    Tag,
    {
      ref,
      className: cn("reveal", `reveal-${direction}`, className),
      style: delay ? { transitionDelay: `${delay}s` } : undefined,
    },
    children,
  );
}
