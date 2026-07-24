import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { path, type Locale, type RouteKey } from "@/content/site";
import type { Dictionary } from "@/content/locales";
import { Badge } from "@/components/ui/badge";
import { GridBackground } from "./grid-background";

/**
 * Shared header for inner pages. Like the home hero, it renders statically so
 * the page heading is painted from the served HTML.
 */
export function PageHero({
  locale,
  dict,
  route,
  badge,
  title,
  subtitle,
  children,
}: {
  locale: Locale;
  dict: Dictionary;
  route: RouteKey;
  badge?: string;
  title: string;
  subtitle: string;
  children?: React.ReactNode;
}) {
  return (
    <section className="relative overflow-hidden pt-10 pb-14 md:pt-14 md:pb-20">
      <GridBackground />

      <div className="container-page flex flex-col gap-6">
        <nav aria-label="Breadcrumb">
          <ol className="flex items-center gap-1.5 text-sm text-muted-foreground">
            <li>
              <Link
                href={path(locale, "home")}
                className="transition-colors hover:text-foreground"
              >
                {dict.breadcrumbs.home}
              </Link>
            </li>
            <li aria-hidden className="flex items-center">
              <ChevronRight className="size-3.5" />
            </li>
            <li aria-current="page" className="text-foreground">
              {dict.nav[route as keyof typeof dict.nav]}
            </li>
          </ol>
        </nav>

        <div className="flex max-w-3xl flex-col gap-5">
          {badge && (
            <Badge variant="primary" className="w-fit">
              {badge}
            </Badge>
          )}
          <h1 className="text-[2rem] leading-[1.1] font-semibold sm:text-5xl">
            {title}
          </h1>
          <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">
            {subtitle}
          </p>
        </div>

        {children}
      </div>
    </section>
  );
}
