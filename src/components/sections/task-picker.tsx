"use client";

import * as React from "react";
import Link from "next/link";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { path, type Locale, type RouteKey } from "@/content/site";
import type { Dictionary } from "@/content/locales";
import { Icon } from "@/lib/icons";
import { cn } from "@/lib/utils";

export function TaskPicker({
  locale,
  dict,
}: {
  locale: Locale;
  dict: Dictionary;
}) {
  const items = dict.home.tasks.items;
  const [activeIndex, setActiveIndex] = React.useState(0);
  const reduced = useReducedMotion();
  const active = items[activeIndex];

  return (
    <div className="grid gap-6 lg:grid-cols-[1fr_1.05fr]">
      <ul className="flex flex-col gap-2" role="tablist" aria-orientation="vertical">
        {items.map((item, index) => {
          const selected = index === activeIndex;
          return (
            <li key={item.title}>
              <button
                type="button"
                role="tab"
                id={`task-tab-${index}`}
                aria-selected={selected}
                aria-controls="task-panel"
                onClick={() => setActiveIndex(index)}
                className={cn(
                  "flex w-full items-start gap-3.5 rounded-xl border px-4 py-3.5 text-left transition-colors outline-none focus-visible:ring-2 focus-visible:ring-ring",
                  selected
                    ? "border-primary/50 bg-primary/[0.07]"
                    : "border-border bg-card/50 hover:border-border-strong hover:bg-card",
                )}
              >
                <span
                  className={cn(
                    "mt-0.5 inline-flex size-9 shrink-0 items-center justify-center rounded-lg border transition-colors",
                    selected
                      ? "border-primary/35 bg-primary/12 text-primary"
                      : "border-border bg-muted/50 text-muted-foreground",
                  )}
                >
                  <Icon name={item.icon} className="size-[1.05rem]" />
                </span>
                <span className="flex flex-col gap-1">
                  <span className="text-sm font-semibold">{item.title}</span>
                  <span className="text-xs leading-relaxed text-muted-foreground">
                    {item.text}
                  </span>
                </span>
              </button>
            </li>
          );
        })}
      </ul>

      <div
        id="task-panel"
        role="tabpanel"
        aria-labelledby={`task-tab-${activeIndex}`}
        className="relative flex min-h-64 flex-col gap-4 overflow-hidden rounded-2xl border border-border bg-card/60 p-6 sm:p-8"
      >
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 -z-10 grid-surface opacity-60"
        />
        <AnimatePresence mode="wait">
          <motion.div
            key={activeIndex}
            initial={reduced ? false : { opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reduced ? { opacity: 0 } : { opacity: 0, y: -8 }}
            transition={{ duration: 0.24, ease: "easeOut" }}
            className="flex h-full flex-col gap-4"
          >
            <span className="inline-flex size-12 items-center justify-center rounded-xl border border-accent/25 bg-accent/10 text-accent">
              <Icon name={active.icon} className="size-5" />
            </span>
            <h3 className="text-xl font-semibold">{active.title}</h3>
            <p className="leading-relaxed text-muted-foreground">
              {active.solution}
            </p>
            <Link
              href={path(locale, active.route as RouteKey)}
              className="mt-auto inline-flex w-fit items-center gap-2 rounded-full border border-border-strong px-4 py-2 text-sm font-medium transition-colors hover:border-primary/50 hover:text-primary"
            >
              {dict.actions.learnMore}
              <ArrowRight className="size-4" aria-hidden />
            </Link>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
