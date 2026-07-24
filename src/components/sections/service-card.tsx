"use client";

import * as React from "react";
import Link from "next/link";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { ArrowRight, Check, ChevronDown, Target, Users } from "lucide-react";
import { path, type Locale } from "@/content/site";
import type { Dictionary } from "@/content/locales";
import { Icon } from "@/lib/icons";
import { Button } from "@/components/ui/button";

type Service = Dictionary["services"]["categories"][number];

/**
 * Expandable service card. The summary is always visible so the page reads
 * fine without interaction; the details expand in place.
 */
export function ServiceCard({
  service,
  locale,
  dict,
  defaultOpen = false,
}: {
  service: Service;
  locale: Locale;
  dict: Dictionary;
  defaultOpen?: boolean;
}) {
  const [open, setOpen] = React.useState(defaultOpen);
  const reduced = useReducedMotion();
  const panelId = `service-panel-${service.id}`;

  return (
    <article
      id={service.id}
      className="card-hover scroll-mt-28 overflow-hidden rounded-2xl border border-border bg-card/60"
    >
      <div className="flex flex-col gap-5 p-6 sm:p-8">
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div className="flex items-start gap-4">
            <span className="inline-flex size-12 shrink-0 items-center justify-center rounded-xl border border-primary/25 bg-primary/10 text-primary">
              <Icon name={service.icon} className="size-5" />
            </span>
            <div className="flex flex-col gap-1">
              <h2 className="text-xl font-semibold">{service.name}</h2>
              <p className="text-sm text-muted-foreground">{service.tagline}</p>
            </div>
          </div>
        </div>

        <div className="rounded-lg border border-border/70 bg-background/40 p-4">
          <p className="text-xs font-medium tracking-wide text-muted-foreground uppercase">
            {dict.labels.problem}
          </p>
          <p className="mt-1.5 text-sm leading-relaxed">{service.problem}</p>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls={panelId}
          className="inline-flex w-fit items-center gap-2 rounded-full border border-border px-4 py-2 text-sm font-medium transition-colors hover:border-primary/50 hover:text-primary"
        >
          {open ? dict.actions.showLess : dict.actions.showMore}
          <ChevronDown
            className={`size-4 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
            aria-hidden
          />
        </button>

        <AnimatePresence initial={false}>
          {open && (
            <motion.div
              id={panelId}
              initial={reduced ? false : { height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={reduced ? { opacity: 0 } : { height: 0, opacity: 0 }}
              transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
              className="overflow-hidden"
            >
              <div className="grid gap-6 pt-1 md:grid-cols-2">
                <div className="flex flex-col gap-3">
                  <h3 className="text-sm font-semibold">
                    {dict.labels.included}
                  </h3>
                  <ul className="flex flex-col gap-2">
                    {service.included.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-2.5 text-sm leading-relaxed text-muted-foreground"
                      >
                        <Check
                          className="mt-0.5 size-4 shrink-0 text-accent"
                          aria-hidden
                        />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-col gap-5">
                  <div className="flex flex-col gap-3">
                    <h3 className="flex items-center gap-2 text-sm font-semibold">
                      <Users className="size-4 text-primary" aria-hidden />
                      {dict.labels.bestFor}
                    </h3>
                    <ul className="flex flex-col gap-2">
                      {service.bestFor.map((item) => (
                        <li
                          key={item}
                          className="text-sm leading-relaxed text-muted-foreground"
                        >
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-col gap-2 rounded-lg border border-accent/25 bg-accent/[0.06] p-4">
                    <h3 className="flex items-center gap-2 text-sm font-semibold">
                      <Target className="size-4 text-accent" aria-hidden />
                      {dict.labels.outcome}
                    </h3>
                    <p className="text-sm leading-relaxed">{service.outcome}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <Button asChild variant="secondary" size="sm" className="w-fit">
          <Link href={path(locale, "contact")}>
            {dict.actions.discussProject}
            <ArrowRight aria-hidden />
          </Link>
        </Button>
      </div>
    </article>
  );
}
