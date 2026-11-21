import type { Metadata } from "next";
import Link from "next/link";
import { LOCALES, absoluteUrl, landingPath, path, type Locale } from "@/content/site";
import { getDictionary } from "@/content/locales";
import { hasLandings } from "@/content/landings";

/**
 * The old "AI Infrastructure" section was folded into the services list. The
 * URL is kept as a forwarding stub so links and search results that still
 * point here land on the right page instead of a 404 (a static export has no
 * server to issue a real redirect).
 */
function targetFor(locale: Locale): string {
  return hasLandings(locale)
    ? landingPath(locale, "ai-infrastructure")
    : `${path(locale, "services")}#ai`;
}

export function generateStaticParams() {
  return LOCALES.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return {
    robots: { index: false, follow: true },
    alternates: { canonical: absoluteUrl(targetFor(locale as Locale)) },
  };
}

export default async function LegacyAiPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const target = targetFor(locale as Locale);
  const dict = getDictionary(locale);

  return (
    <div className="container-page flex min-h-[50vh] flex-col items-center justify-center gap-4 text-center">
      <meta httpEquiv="refresh" content={`0; url=${target}`} />
      <script
        dangerouslySetInnerHTML={{
          __html: `location.replace(${JSON.stringify(target)});`,
        }}
      />
      <Link href={target} className="text-primary underline underline-offset-4">
        {dict.nav.services}
      </Link>
    </div>
  );
}
