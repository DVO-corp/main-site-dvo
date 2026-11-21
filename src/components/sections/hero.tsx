import Link from "next/link";
import { CONTACTS, path, type Locale } from "@/content/site";
import type { Dictionary } from "@/content/locales";
import { Button } from "@/components/ui/button";
import { DashboardMock } from "@/components/visuals/dashboard-mock";

/**
 * Centred headline, two actions, and the "product shot" under them — a
 * project dashboard. The heading renders statically, with no entrance
 * animation, so it is the Largest Contentful Paint the moment HTML arrives.
 */
export function Hero({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const { hero } = dict.home;

  return (
    <section className="overflow-hidden pt-14 pb-16 sm:pt-20 md:pb-24">
      <div className="container-page flex flex-col items-center gap-6 text-center">
        <p className="text-[0.95rem] font-semibold text-primary">{hero.badge}</p>

        <h1 className="max-w-4xl text-[2.6rem] leading-[1.04] font-semibold sm:text-6xl lg:text-[5rem]">
          {hero.title}
        </h1>

        <p className="max-w-2xl text-lg leading-snug text-muted-foreground sm:text-[1.35rem]">
          {hero.subtitle}
        </p>

        <div className="flex flex-col gap-3 pt-2 sm:flex-row">
          <Button asChild size="lg">
            <Link href={path(locale, "contact")}>
              {dict.actions.discussProject}
            </Link>
          </Button>
          <Button asChild variant="secondary" size="lg">
            <a
              href={CONTACTS.telegramUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              {dict.actions.writeTelegram}
            </a>
          </Button>
        </div>

        <p className="text-sm text-muted-foreground">{hero.note}</p>

        <div className="mt-8 w-full max-w-5xl">
          <DashboardMock />
          <p className="mt-4 text-xs text-muted-foreground">
            {dict.visuals.sampleNote}
          </p>
        </div>
      </div>
    </section>
  );
}
