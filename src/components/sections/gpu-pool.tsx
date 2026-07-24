"use client";

import { motion, useReducedMotion } from "motion/react";
import type { Dictionary } from "@/content/locales";

/**
 * Side-by-side illustration of the shared-pool idea: the same GPU either
 * serves one project (and idles the rest of the time) or is divided between
 * several. The proportions illustrate the principle rather than measure
 * anything — the surrounding copy says so explicitly.
 */
const SHARES = [
  { key: "A", percent: 34, color: "var(--primary)" },
  { key: "B", percent: 26, color: "var(--accent)" },
  { key: "C", percent: 22, color: "var(--violet)" },
  { key: "D", percent: 18, color: "var(--success)" },
];

const DEDICATED_USED = 31;

function useBarProps(reduced: boolean) {
  return (width: number, delay: number, background: string) =>
    reduced
      ? { style: { background, width: `${width}%` } }
      : {
          style: { background },
          initial: { width: "0%" },
          whileInView: { width: `${width}%` },
          viewport: { once: true, margin: "-40px" },
          transition: {
            duration: 0.8,
            delay,
            ease: [0.22, 1, 0.36, 1] as const,
          },
        };
}

export function GpuPool({ dict }: { dict: Dictionary }) {
  const { pool } = dict.home.shared;
  const reduced = useReducedMotion() ?? false;
  const barProps = useBarProps(reduced);

  return (
    <div className="flex flex-col gap-6 rounded-2xl border border-border bg-card/50 p-6 sm:p-8">
      <div className="flex flex-col gap-1.5">
        <h3 className="text-lg font-semibold">{pool.title}</h3>
        <p className="text-sm leading-relaxed text-muted-foreground">
          {pool.subtitle}
        </p>
      </div>

      <div className="flex flex-col gap-6">
        {/* Dedicated: one project, a lot of paid-for idle time. */}
        <div className="flex flex-col gap-2">
          <p className="text-sm font-medium">{pool.dedicatedLabel}</p>
          <div className="flex h-11 w-full overflow-hidden rounded-lg border border-border bg-muted/60">
            <motion.div
              className="flex items-center justify-center overflow-hidden"
              {...barProps(DEDICATED_USED, 0, "var(--primary)")}
            >
              <span className="px-2 text-[0.7rem] font-medium text-primary-foreground">
                {DEDICATED_USED}%
              </span>
            </motion.div>
            <div className="flex flex-1 items-center justify-center">
              <span className="px-2 text-[0.7rem] text-muted-foreground">
                {pool.idleLabel}
              </span>
            </div>
          </div>
        </div>

        {/* Shared: the same card divided between several projects. */}
        <div className="flex flex-col gap-2">
          <p className="text-sm font-medium">{pool.sharedLabel}</p>
          <div className="flex h-11 w-full overflow-hidden rounded-lg border border-border bg-muted/60">
            {SHARES.map((share, index) => (
              <motion.div
                key={share.key}
                className="flex items-center justify-center overflow-hidden border-r border-background/40 last:border-r-0"
                {...barProps(share.percent, index * 0.1, share.color)}
              >
                <span className="px-1 text-[0.7rem] font-medium text-background">
                  {share.percent}%
                </span>
              </motion.div>
            ))}
          </div>
          <p className="text-xs text-muted-foreground">
            {pool.clientLabel}{" "}
            {SHARES.map((share) => share.key).join(" · ")}
          </p>
        </div>
      </div>

      <div className="flex flex-wrap gap-x-5 gap-y-2 border-t border-border pt-4 text-xs text-muted-foreground">
        <span className="inline-flex items-center gap-2">
          <span
            aria-hidden
            className="size-2.5 rounded-full"
            style={{ background: "var(--primary)" }}
          />
          {pool.legendUsed}
        </span>
        <span className="inline-flex items-center gap-2">
          <span
            aria-hidden
            className="size-2.5 rounded-full bg-muted-foreground/40"
          />
          {pool.legendIdle}
        </span>
      </div>
    </div>
  );
}
