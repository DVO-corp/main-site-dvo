"use client";

import * as React from "react";
import { animate, useInView, useReducedMotion } from "motion/react";
import { TECH_COUNT } from "@/content/site";
import type { Dictionary } from "@/content/locales";

/** Counts up once, the first time the block scrolls into view. */
function Counter({ value, suffix }: { value: number; suffix: string }) {
  const ref = React.useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const reduced = useReducedMotion();
  const [animated, setAnimated] = React.useState(0);

  React.useEffect(() => {
    if (!inView || reduced) return;
    const controls = animate(0, value, {
      duration: 1.1,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (latest) => setAnimated(Math.round(latest)),
    });
    return () => controls.stop();
  }, [inView, reduced, value]);

  // With reduced motion the final figure is shown straight away.
  const display = reduced ? value : animated;

  return (
    <span ref={ref} className="text-gradient text-4xl font-semibold sm:text-5xl">
      {display}
      {suffix}
    </span>
  );
}

export function Counters({ dict }: { dict: Dictionary }) {
  const { counters } = dict.home;

  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {counters.items.map((item) => (
        <div
          key={item.id}
          className="flex flex-col gap-1.5 rounded-xl border border-border bg-card/50 p-6"
        >
          {/* The technology figure is derived from the actual stack list so
              the two can never drift apart — and since it is then exact, the
              approximating "+" is dropped. */}
          <Counter
            value={item.id === "tech" ? TECH_COUNT : item.value}
            suffix={item.id === "tech" ? "" : item.suffix}
          />
          <p className="text-sm font-medium">{item.label}</p>
          <p className="text-xs text-muted-foreground">{item.note}</p>
        </div>
      ))}
    </div>
  );
}
