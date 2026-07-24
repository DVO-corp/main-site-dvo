import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import {
  DEFAULT_LOCALE,
  LOCALE_TAGS,
  NAV_ORDER,
  SITE_URL,
  path,
} from "@/content/site";
import { getDictionary } from "@/content/locales";
import { Button } from "@/components/ui/button";
import { GridBackground } from "@/components/common/grid-background";
import { Logo } from "@/components/layout/logo";
import { themeInitScript } from "@/lib/theme-script";
import { fontClass } from "./fonts";
import "./globals.css";

const dict = getDictionary(DEFAULT_LOCALE);

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: dict.seo.notFound.title,
  description: dict.seo.notFound.description,
  robots: { index: false, follow: true },
};

/**
 * Exported as `out/404.html`, which GitHub Pages serves for any unknown path.
 * It renders its own document because the root layout is a pass-through.
 */
export default function NotFound() {
  return (
    <html lang={LOCALE_TAGS[DEFAULT_LOCALE]} className={fontClass}>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body className="min-h-dvh antialiased">
        <div className="relative flex min-h-dvh flex-col">
          <GridBackground />

          <header className="container-page flex h-16 items-center md:h-[4.5rem]">
            <Link href={path(DEFAULT_LOCALE, "home")} aria-label={dict.nav.home}>
              <Logo />
            </Link>
          </header>

          <main
            id="main"
            className="container-page flex flex-1 flex-col items-center justify-center gap-6 py-16 text-center"
          >
            <p
              className="text-gradient text-7xl font-semibold sm:text-8xl"
              aria-hidden
            >
              404
            </p>
            <h1 className="text-2xl sm:text-3xl">{dict.notFound.title}</h1>
            <p className="max-w-md text-muted-foreground">
              {dict.notFound.text}
            </p>

            <Button asChild size="lg">
              <Link href={path(DEFAULT_LOCALE, "home")}>
                <ArrowLeft aria-hidden />
                {dict.actions.backHome}
              </Link>
            </Button>

            <section className="mt-6 flex flex-col items-center gap-3">
              <h2 className="text-sm font-medium text-muted-foreground">
                {dict.notFound.suggestions}
              </h2>
              <nav className="flex flex-wrap items-center justify-center gap-2">
                {NAV_ORDER.map((route) => (
                  <Link
                    key={route}
                    href={path(DEFAULT_LOCALE, route)}
                    className="rounded-full border border-border px-4 py-2 text-sm text-muted-foreground transition-colors hover:border-primary/50 hover:text-foreground"
                  >
                    {dict.nav[route as keyof typeof dict.nav]}
                  </Link>
                ))}
              </nav>
            </section>
          </main>
        </div>
      </body>
    </html>
  );
}
