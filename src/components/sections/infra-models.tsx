"use client";

import * as React from "react";
import { Check } from "lucide-react";
import type { Dictionary } from "@/content/locales";
import { Icon } from "@/lib/icons";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

/**
 * The "Your server / Managed DVO / Shared DVO" switcher. Rendered on both the
 * home page and the infrastructure page, so it takes its heading from the
 * caller instead of hardcoding one.
 */
export function InfraModels({ dict }: { dict: Dictionary }) {
  const models = dict.home.shared.models;
  const [value, setValue] = React.useState(models[0]?.id ?? "own");

  return (
    <Tabs value={value} onValueChange={setValue} className="flex flex-col gap-6">
      <TabsList className="flex-col sm:inline-flex sm:flex-row">
        {models.map((model) => (
          <TabsTrigger key={model.id} value={model.id} className="w-full sm:w-auto">
            <Icon name={model.icon} className="size-4" />
            {model.tab}
          </TabsTrigger>
        ))}
      </TabsList>

      {models.map((model) => (
        <TabsContent key={model.id} value={model.id}>
          <div className="grid gap-8 rounded-2xl border border-border bg-card/60 p-6 sm:p-8 lg:grid-cols-[1fr_1fr]">
            <div className="flex flex-col gap-4">
              <span className="inline-flex size-12 items-center justify-center rounded-xl border border-primary/25 bg-primary/10 text-primary">
                <Icon name={model.icon} className="size-5" />
              </span>
              <h3 className="text-xl font-semibold">{model.title}</h3>
              <p className="leading-relaxed text-muted-foreground">
                {model.text}
              </p>
              <div className="mt-auto rounded-lg border border-border/70 bg-background/40 p-4">
                <p className="text-xs font-medium tracking-wide text-muted-foreground uppercase">
                  {dict.labels.bestFor}
                </p>
                <p className="mt-1.5 text-sm leading-relaxed">{model.bestFor}</p>
              </div>
            </div>

            <ul className="flex flex-col gap-3">
              {model.points.map((point) => (
                <li
                  key={point}
                  className="flex items-start gap-3 rounded-lg border border-border/60 bg-background/30 px-4 py-3"
                >
                  <Check
                    className="mt-0.5 size-4 shrink-0 text-accent"
                    aria-hidden
                  />
                  <span className="text-sm leading-relaxed">{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </TabsContent>
      ))}
    </Tabs>
  );
}
