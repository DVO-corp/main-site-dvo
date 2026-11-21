"use client";

import * as React from "react";
import { ArrowRight, Check } from "lucide-react";
import type { Dictionary } from "@/content/locales";
import { Icon } from "@/lib/icons";
import { ModelIllustration } from "@/components/visuals/model-illustration";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

/**
 * The "your infrastructure / our infrastructure / function as an API" switcher. Rendered on both the
 * home page and the infrastructure page, so it takes its heading from the
 * caller instead of hardcoding one.
 */
/** Icons for the three-step picture of each model: who → how → where. */
const FLOW_ICONS: Record<string, string[]> = {
  own: ["Users", "GitBranch", "Cloud"],
  managed: ["GitBranch", "Workflow", "Server"],
  api: ["AppWindow", "KeyRound", "Braces"],
};

export function InfraModels({ dict }: { dict: Dictionary }) {
  const models = dict.home.models.items;
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
        <TabsContent key={model.id} value={model.id} className="flex flex-col gap-4">
          <ol className="grid items-stretch gap-2 sm:grid-cols-[1fr_auto_1fr_auto_1fr]">
            {model.flow.map((step, index) => (
              <React.Fragment key={step}>
                {index > 0 && (
                  <li
                    aria-hidden
                    className="flex items-center justify-center text-primary"
                  >
                    <ArrowRight className="size-5 rotate-90 sm:rotate-0" />
                  </li>
                )}
                <li
                  className={
                    index === 2
                      ? "flex items-center gap-3 rounded-2xl bg-primary/10 px-4 py-3 ring-1 ring-primary"
                      : "flex items-center gap-3 rounded-2xl bg-card px-4 py-3"
                  }
                >
                  <Icon
                    name={FLOW_ICONS[model.id]?.[index] ?? "Boxes"}
                    className="size-6 shrink-0 text-primary"
                  />
                  <span className="text-sm font-medium">{step}</span>
                </li>
              </React.Fragment>
            ))}
          </ol>
          <div className="grid items-center gap-8 rounded-[1.75rem] bg-card p-6 sm:p-9 lg:grid-cols-[1.15fr_1fr]">
            {/* The picture stands in for the description; the text stays
                available to screen readers and search engines. */}
            <div className="flex flex-col gap-5">
              <h3 className="text-2xl leading-tight font-semibold">
                {model.title}
              </h3>
              <ModelIllustration id={model.id} label={model.text} />
              <p className="sr-only">
                {model.text} {model.bestFor}
              </p>
            </div>

            <ul className="flex flex-col gap-3.5">
              {model.points.map((point) => (
                <li key={point} className="flex items-start gap-3 leading-snug">
                  <Check
                    className="mt-0.5 size-5 shrink-0 text-primary"
                    aria-hidden
                  />
                  {point}
                </li>
              ))}
            </ul>
          </div>
        </TabsContent>
      ))}
    </Tabs>
  );
}
