"use client";

import * as React from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { Layers } from "lucide-react";
import type { Dictionary } from "@/content/locales";
import { cn } from "@/lib/utils";

/**
 * Layered architecture view: edge → platform → workloads → data → delivery →
 * observability. Selecting a layer reveals what usually sits inside it.
 */
export function ArchitectureDiagram({ dict }: { dict: Dictionary }) {
  const layers = dict.infrastructure.diagram.layers;
  const [activeIndex, setActiveIndex] = React.useState(0);
  const reduced = useReducedMotion();
  const active = layers[activeIndex];

  return (
    <div className="grid gap-6 lg:grid-cols-[1.15fr_1fr]">
      <ol className="relative flex flex-col gap-2">
        {/* Vertical rail linking the layers. */}
        <span
          aria-hidden
          className="absolute top-6 bottom-6 left-[1.35rem] w-px bg-gradient-to-b from-primary/50 via-accent/40 to-violet/30"
        />

        {layers.map((layer, index) => {
          const selected = index === activeIndex;
          return (
            <li key={layer.id} className="relative">
              <button
                type="button"
                aria-expanded={selected}
                aria-controls="architecture-detail"
                onClick={() => setActiveIndex(index)}
                className={cn(
                  "flex w-full items-center gap-4 rounded-xl border px-4 py-3.5 text-left transition-colors outline-none focus-visible:ring-2 focus-visible:ring-ring",
                  selected
                    ? "border-primary/50 bg-primary/[0.07]"
                    : "border-border bg-card/50 hover:border-border-strong hover:bg-card",
                )}
              >
                <span
                  className={cn(
                    "relative z-10 inline-flex size-9 shrink-0 items-center justify-center rounded-full border font-mono text-xs font-semibold transition-colors",
                    selected
                      ? "border-primary/50 bg-background text-primary"
                      : "border-border bg-background text-muted-foreground",
                  )}
                >
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="flex min-w-0 flex-col gap-0.5">
                  <span className="text-sm font-semibold">{layer.title}</span>
                  <span className="truncate text-xs text-muted-foreground">
                    {layer.items.join(" · ")}
                  </span>
                </span>
              </button>
            </li>
          );
        })}
      </ol>

      <div
        id="architecture-detail"
        className="relative flex min-h-72 flex-col gap-5 overflow-hidden rounded-2xl border border-border bg-card/60 p-6 sm:p-8"
      >
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 -z-10 grid-surface opacity-60"
        />
        <AnimatePresence mode="wait">
          <motion.div
            key={active.id}
            initial={reduced ? false : { opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reduced ? { opacity: 0 } : { opacity: 0, y: -8 }}
            transition={{ duration: 0.24, ease: "easeOut" }}
            className="flex flex-col gap-5"
          >
            <span className="inline-flex size-12 items-center justify-center rounded-xl border border-violet/25 bg-violet/10 text-violet">
              <Layers className="size-5" strokeWidth={1.6} aria-hidden />
            </span>
            <h3 className="text-xl font-semibold">{active.title}</h3>
            <p className="leading-relaxed text-muted-foreground">
              {active.text}
            </p>
            <ul className="flex flex-wrap gap-2">
              {active.items.map((item) => (
                <li
                  key={item}
                  className="rounded-md border border-border/70 bg-background/50 px-2.5 py-1.5 font-mono text-xs text-foreground/85"
                >
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
