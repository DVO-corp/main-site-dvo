import Image from "next/image";
import Link from "next/link";
import { path, type Locale } from "@/content/site";
import type { Dictionary } from "@/content/locales";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { BarChart } from "@/components/visuals/charts";
import { DashboardMock } from "@/components/visuals/dashboard-mock";
import { serviceHref } from "./services-grid";

/**
 * The large tiles under the hero: one service per tile, a headline, one line,
 * two buttons, and a picture that fills the rest. Copy comes from the same
 * `services.categories` array as everywhere else.
 */
const PHOTO_TILES: Record<string, { src: string; position?: string }> = {
  aws: { src: "/img/rack.webp" },
  monitoring: { src: "/img/screens.webp", position: "object-bottom" },
  kubernetes: { src: "/img/aisle.webp" },
  cicd: { src: "/img/code.webp" },
};

const ORDER = ["aws", "monitoring", "cost", "kubernetes", "cicd", "support"];

const COST_BARS = [
  { value: 10150, tone: "before" as const },
  { value: 10300, tone: "before" as const },
  { value: 10400, tone: "before" as const },
  { value: 7900, tone: "after" as const },
  { value: 6450, tone: "after" as const },
  { value: 6200, tone: "after" as const },
];

function CostVisual({ dict }: { dict: Dictionary }) {
  return (
    <div className="console mt-auto w-full bg-transparent px-6 pb-6 sm:px-10">
      <div className="flex flex-wrap items-end justify-center gap-x-6 gap-y-2 pb-4">
        <span className="text-3xl font-semibold text-muted-foreground line-through decoration-2 sm:text-5xl">
          $10,400
        </span>
        <span className="text-5xl font-semibold text-primary sm:text-7xl">
          $6,200
        </span>
        <span className="rounded-full bg-success/15 px-3 py-1 text-lg font-semibold text-success">
          −40%
        </span>
      </div>
      <BarChart bars={COST_BARS} max={11500} className="h-40" />
      <p className="pt-3 text-center text-xs text-muted-foreground">
        {dict.visuals.costNote}
      </p>
    </div>
  );
}

export function ShowcaseTiles({
  locale,
  dict,
}: {
  locale: Locale;
  dict: Dictionary;
}) {
  const tiles = ORDER.map((id) =>
    dict.services.categories.find((service) => service.id === id),
  ).filter((service) => service !== undefined);

  return (
    <section className="py-3">
      <ul className="container-page grid gap-3 md:grid-cols-2">
        {tiles.map((service) => {
          const photo = PHOTO_TILES[service.id];
          return (
            <li
              key={service.id}
              className={cn(
                "relative isolate flex min-h-[36rem] flex-col items-center overflow-hidden rounded-[1.75rem] text-center",
                photo ? "bg-black text-white" : "bg-card",
              )}
            >
              {photo && (
                <>
                  <Image
                    src={photo.src}
                    alt=""
                    fill
                    sizes="(min-width: 768px) 50vw, 100vw"
                    className={cn("-z-20 object-cover", photo.position)}
                  />
                  <div
                    aria-hidden
                    className="absolute inset-0 -z-10 bg-[linear-gradient(to_bottom,rgb(0_0_0/0.94)_0%,rgb(0_0_0/0.8)_40%,rgb(0_0_0/0.05)_72%)]"
                  />
                </>
              )}

              <div className="flex flex-col items-center gap-3 px-6 pt-12 pb-8 sm:pt-14">
                <h2 className="text-3xl leading-[1.08] sm:text-[2.75rem]">
                  {service.name}
                </h2>
                <p
                  className={cn(
                    "max-w-md text-lg leading-snug",
                    photo ? "text-white/85" : "text-muted-foreground",
                  )}
                >
                  {service.text}
                </p>
                <div className="flex flex-wrap justify-center gap-3 pt-2">
                  <Button asChild>
                    <Link href={serviceHref(locale, service)}>
                      {dict.actions.learnMore}
                    </Link>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    className={
                      photo
                        ? "border-white/70 text-white hover:border-white hover:bg-white hover:text-black"
                        : "border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                    }
                  >
                    <Link href={path(locale, "contact")}>
                      {dict.actions.discussProject}
                    </Link>
                  </Button>
                </div>
              </div>

              {service.id === "cost" && <CostVisual dict={dict} />}
              {service.id === "support" && (
                <div className="mt-auto w-full px-4 sm:px-8">
                  {/* Cropped on purpose, like a product shot. */}
                  <div className="h-64 overflow-hidden rounded-t-[1.25rem]">
                    <DashboardMock className="rounded-b-none" />
                  </div>
                </div>
              )}
            </li>
          );
        })}
      </ul>
    </section>
  );
}
