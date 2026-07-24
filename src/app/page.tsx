import type { Metadata } from "next";
import Link from "next/link";
import {
  DEFAULT_LOCALE,
  LOCALES,
  LOCALE_NAMES,
  LOCALE_TAGS,
  SITE_URL,
  path,
} from "@/content/site";
import { fontClass } from "./fonts";
import { LogoMark } from "@/components/layout/logo";
import { themeInitScript } from "@/lib/theme-script";
import "./globals.css";

const target = path(DEFAULT_LOCALE);

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "DVO Corp",
  description: "DevOps, Virtualization & Optimization.",
  alternates: {
    canonical: `${SITE_URL}${target}`,
  },
  // The root URL only forwards to a locale; it should not compete in search.
  robots: { index: false, follow: true },
};

/**
 * Entry point for https://dvocorp.com — forwards to the default locale.
 *
 * There is no server to issue a 301 on GitHub Pages, so the redirect is done
 * three ways: a `<meta http-equiv="refresh">` for crawlers and no-JS visitors,
 * an inline `location.replace` that fires immediately, and real links as the
 * final fallback.
 */
export default function RootRedirectPage() {
  return (
    <html lang={LOCALE_TAGS[DEFAULT_LOCALE]} className={fontClass}>
      <head>
        <meta httpEquiv="refresh" content={`0; url=${target}`} />
        <link rel="canonical" href={`${SITE_URL}${target}`} />
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
        <script
          dangerouslySetInnerHTML={{
            __html: `location.replace(${JSON.stringify(target)});`,
          }}
        />
      </head>
      <body className="min-h-dvh antialiased">
        <main className="flex min-h-dvh flex-col items-center justify-center gap-6 px-6 text-center">
          <LogoMark className="size-12" />
          <p className="text-sm text-muted-foreground">
            DVO Corp — DevOps, Virtualization &amp; Optimization
          </p>
          <nav className="flex flex-wrap items-center justify-center gap-3">
            {LOCALES.map((locale) => (
              <Link
                key={locale}
                href={path(locale)}
                hrefLang={LOCALE_TAGS[locale]}
                className="rounded-full border border-border px-4 py-2 text-sm transition-colors hover:border-primary/60"
              >
                {LOCALE_NAMES[locale]}
              </Link>
            ))}
          </nav>
        </main>
      </body>
    </html>
  );
}
