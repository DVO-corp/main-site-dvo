import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { CONTACTS, path, type Locale, type RouteKey } from "@/content/site";
import type { Dictionary } from "@/content/locales";
import { Button } from "@/components/ui/button";

/**
 * Full-bleed photo header for pages nested in a section (service landings):
 * the same treatment as the home hero, plus breadcrumbs. The heading renders
 * statically and the photo is preloaded.
 */
export function PhotoHero({
  locale,
  dict,
  route,
  leaf,
  photo,
  title,
  subtitle,
}: {
  locale: Locale;
  dict: Dictionary;
  route: RouteKey;
  /** Name of the current page, shown as the last breadcrumb. */
  leaf: string;
  photo: string;
  title: string;
  subtitle: string;
}) {
  return (
    <section className="relative flex min-h-[72svh] flex-col overflow-hidden bg-black text-white">
      <Image
        src={photo}
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-black/85 sm:via-black/50"
      />

      <nav aria-label="Breadcrumb" className="relative z-10 container-page pt-6">
        <ol className="flex flex-wrap items-center gap-1.5 text-xs text-white/70">
          <li>
            <Link href={path(locale, "home")} className="hover:text-white">
              {dict.breadcrumbs.home}
            </Link>
          </li>
          <li aria-hidden className="flex items-center">
            <ChevronRight className="size-3.5" />
          </li>
          <li>
            <Link href={path(locale, route)} className="hover:text-white">
              {dict.nav[route as keyof typeof dict.nav]}
            </Link>
          </li>
          <li aria-hidden className="flex items-center">
            <ChevronRight className="size-3.5" />
          </li>
          <li aria-current="page" className="text-white">
            {leaf}
          </li>
        </ol>
      </nav>

      <div className="relative z-10 container-page flex flex-1 flex-col items-center justify-center gap-6 py-16 text-center">
        <h1 className="max-w-5xl text-[2.25rem] leading-[1.05] font-semibold sm:text-5xl lg:text-[4.25rem]">
          {title}
        </h1>
        <p className="max-w-3xl text-lg leading-snug text-white/85 sm:text-[1.3rem]">
          {subtitle}
        </p>
        <div className="flex flex-col gap-3 pt-2 sm:flex-row">
          <Button asChild size="lg">
            <Link href={path(locale, "contact")}>
              {dict.actions.discussProject}
            </Link>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="border-white/70 text-white hover:border-white hover:bg-white hover:text-black"
          >
            <a
              href={CONTACTS.telegramUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              {dict.actions.writeTelegram}
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
