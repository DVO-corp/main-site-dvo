"use client";

import * as React from "react";
import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";
import { ArrowRight, Check, Info, RotateCcw } from "lucide-react";
import { path, type Locale } from "@/content/site";
import type { Dictionary } from "@/content/locales";
import {
  VOLUME_MAX,
  VOLUME_MIN,
  VOLUME_STEP,
  recommend,
  type Frequency,
  type Mode,
  type ProcessingType,
} from "@/lib/calculator";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/field";
import { cn } from "@/lib/utils";

const DEFAULTS = {
  volume: 2000,
  type: "image" as ProcessingType,
  gpu: true,
  frequency: "sporadic" as Frequency,
  mode: "unsure" as Mode,
};

export function Calculator({
  locale,
  dict,
}: {
  locale: Locale;
  dict: Dictionary;
}) {
  const t = dict.ai.calculator;
  const reduced = useReducedMotion();

  const [volume, setVolume] = React.useState(DEFAULTS.volume);
  const [type, setType] = React.useState<ProcessingType>(DEFAULTS.type);
  const [gpu, setGpu] = React.useState(DEFAULTS.gpu);
  const [frequency, setFrequency] = React.useState<Frequency>(
    DEFAULTS.frequency,
  );
  const [mode, setMode] = React.useState<Mode>(DEFAULTS.mode);

  const { recommendation, profile } = recommend({
    volume,
    type,
    gpu,
    frequency,
    mode,
  });
  const result = t.results[recommendation];

  function reset() {
    setVolume(DEFAULTS.volume);
    setType(DEFAULTS.type);
    setGpu(DEFAULTS.gpu);
    setFrequency(DEFAULTS.frequency);
    setMode(DEFAULTS.mode);
  }

  return (
    <div className="grid gap-6 lg:grid-cols-[1.1fr_1fr]">
      <div className="flex flex-col gap-7 rounded-2xl border border-border bg-card/60 p-6 sm:p-8">
        {/* Volume */}
        <div className="flex flex-col gap-3">
          <div className="flex items-baseline justify-between gap-4">
            <Label htmlFor="calc-volume">{t.fields.volume}</Label>
            <output
              htmlFor="calc-volume"
              className="font-mono text-sm font-semibold text-primary"
            >
              {volume.toLocaleString(locale)}
              {volume >= VOLUME_MAX ? "+" : ""}
            </output>
          </div>
          <Slider
            id="calc-volume"
            value={[volume]}
            onValueChange={([next]) => setVolume(next)}
            min={VOLUME_MIN}
            max={VOLUME_MAX}
            step={VOLUME_STEP}
            aria-label={t.fields.volume}
          />
        </div>

        {/* Processing type */}
        <fieldset className="flex flex-col gap-3">
          <legend className="mb-3 text-sm font-medium text-foreground/90">
            {t.fields.type}
          </legend>
          <div className="flex flex-wrap gap-2">
            {t.types.map((item) => (
              <button
                key={item.id}
                type="button"
                aria-pressed={type === item.id}
                onClick={() => setType(item.id as ProcessingType)}
                className={cn(
                  "rounded-full border px-3.5 py-2 text-sm transition-colors outline-none focus-visible:ring-2 focus-visible:ring-ring",
                  type === item.id
                    ? "border-primary/50 bg-primary/10 text-primary"
                    : "border-border text-muted-foreground hover:border-border-strong hover:text-foreground",
                )}
              >
                {item.label}
              </button>
            ))}
          </div>
        </fieldset>

        {/* GPU */}
        <div className="flex items-start justify-between gap-6 rounded-lg border border-border/70 bg-background/40 p-4">
          <div className="flex flex-col gap-1">
            <Label htmlFor="calc-gpu">{t.fields.gpu}</Label>
            <p className="text-xs text-muted-foreground">{t.fields.gpuHint}</p>
          </div>
          <Switch
            id="calc-gpu"
            checked={gpu}
            onCheckedChange={setGpu}
            aria-label={t.fields.gpu}
          />
        </div>

        {/* Frequency */}
        <fieldset className="flex flex-col gap-3">
          <legend className="mb-3 text-sm font-medium text-foreground/90">
            {t.fields.frequency}
          </legend>
          <div className="flex flex-wrap gap-2">
            {t.frequencies.map((item) => (
              <button
                key={item.id}
                type="button"
                aria-pressed={frequency === item.id}
                onClick={() => setFrequency(item.id as Frequency)}
                className={cn(
                  "rounded-full border px-3.5 py-2 text-sm transition-colors outline-none focus-visible:ring-2 focus-visible:ring-ring",
                  frequency === item.id
                    ? "border-accent/50 bg-accent/10 text-accent"
                    : "border-border text-muted-foreground hover:border-border-strong hover:text-foreground",
                )}
              >
                {item.label}
              </button>
            ))}
          </div>
        </fieldset>

        {/* Infrastructure preference */}
        <fieldset className="flex flex-col gap-3">
          <legend className="mb-3 text-sm font-medium text-foreground/90">
            {t.fields.mode}
          </legend>
          <div className="flex flex-wrap gap-2">
            {t.modes.map((item) => (
              <button
                key={item.id}
                type="button"
                aria-pressed={mode === item.id}
                onClick={() => setMode(item.id as Mode)}
                className={cn(
                  "rounded-full border px-3.5 py-2 text-sm transition-colors outline-none focus-visible:ring-2 focus-visible:ring-ring",
                  mode === item.id
                    ? "border-violet/50 bg-violet/10 text-violet"
                    : "border-border text-muted-foreground hover:border-border-strong hover:text-foreground",
                )}
              >
                {item.label}
              </button>
            ))}
          </div>
        </fieldset>

        <button
          type="button"
          onClick={reset}
          className="inline-flex w-fit items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          <RotateCcw className="size-3.5" aria-hidden />
          {dict.actions.reset}
        </button>
      </div>

      {/* Result */}
      <div className="flex flex-col gap-5 rounded-2xl border border-primary/25 bg-primary/[0.05] p-6 sm:p-8">
        <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
          <div>
            <p className="text-xs font-medium tracking-wide text-muted-foreground uppercase">
              {dict.labels.loadProfile}
            </p>
            <p className="text-sm font-semibold">{t.profiles[profile]}</p>
          </div>
          <div>
            <p className="text-xs font-medium tracking-wide text-muted-foreground uppercase">
              {dict.labels.recommended}
            </p>
            <p className="text-sm font-semibold text-primary">{result.title}</p>
          </div>
        </div>

        <div className="hairline" />

        <motion.div
          key={recommendation}
          initial={reduced ? false : { opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.25 }}
          className="flex flex-col gap-4"
        >
          <h3 className="text-lg font-semibold">{t.resultTitle}</h3>
          <p className="leading-relaxed text-muted-foreground">{result.text}</p>
          <ul className="flex flex-col gap-2">
            {result.points.map((point) => (
              <li
                key={point}
                className="flex items-start gap-2.5 text-sm leading-relaxed"
              >
                <Check className="mt-0.5 size-4 shrink-0 text-accent" aria-hidden />
                {point}
              </li>
            ))}
          </ul>
        </motion.div>

        <div className="mt-auto flex flex-col gap-4">
          <div className="flex items-start gap-3 rounded-lg border border-border/70 bg-background/50 p-4">
            <Info className="mt-0.5 size-4 shrink-0 text-warning" aria-hidden />
            <p className="text-xs leading-relaxed text-muted-foreground">
              {t.disclaimer}
            </p>
          </div>

          <Button asChild size="lg" className="w-full sm:w-fit">
            <Link href={path(locale, "contact")}>
              {dict.actions.getEstimate}
              <ArrowRight aria-hidden />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
