import Image from "next/image";
import Link from "next/link";
import { CONTACTS, path, type Locale } from "@/content/site";
import type { Dictionary } from "@/content/locales";
import { Button } from "@/components/ui/button";

/**
 * Full-bleed photo hero: the picture fills the screen edge to edge and the
 * headline sits on it. The heading renders statically, so it is the Largest
 * Contentful Paint as soon as the HTML arrives; the photo is preloaded.
 */
export function Hero({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const { hero } = dict.home;

  return (
    <section className="relative isolate flex min-h-[88svh] items-center overflow-hidden bg-black text-white">
      <Image
        src="/img/cables.webp"
        alt=""
        fill
        priority
        sizes="100vw"
        className="-z-20 object-cover"
      />
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-gradient-to-b from-black/75 via-black/55 to-black/85"
      />

      <div className="container-page flex flex-col items-center gap-6 py-24 text-center">
        <p className="text-[0.95rem] font-semibold text-white/80">
          {hero.badge}
        </p>

        <h1 className="max-w-5xl text-[2.6rem] leading-[1.03] font-semibold sm:text-6xl lg:text-[5.5rem]">
          {hero.title}
        </h1>

        <p className="max-w-2xl text-lg leading-snug text-white/85 sm:text-[1.4rem]">
          {hero.subtitle}
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

        <p className="text-sm text-white/65">{hero.note}</p>
      </div>
    </section>
  );
}
