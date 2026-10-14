import type { Metadata } from "next";
import { LOCALES, type Locale } from "@/content/site";
import { getDictionary } from "@/content/locales";
import { buildMetadata } from "@/lib/seo";
import { breadcrumbSchema, graph } from "@/lib/jsonld";
import { JsonLd } from "@/components/common/json-ld";
import { PageHero } from "@/components/common/page-hero";
import { LegalDocument, LEGAL_UPDATED } from "@/components/sections/legal-document";

export function generateStaticParams() {
  return LOCALES.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return buildMetadata(locale as Locale, "terms");
}

export default async function TermsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const typedLocale = locale as Locale;
  const dict = getDictionary(locale);
  const { terms } = dict.legal;

  return (
    <>
      <JsonLd
        data={graph([
          breadcrumbSchema(typedLocale, [
            { name: dict.breadcrumbs.home, route: "home" },
            { name: dict.nav.terms, route: "terms" },
          ]),
        ])}
      />

      <PageHero
        locale={typedLocale}
        dict={dict}
        route="terms"
        badge={terms.hero.badge}
        title={terms.hero.title}
        subtitle={terms.hero.subtitle}
      />

      <LegalDocument doc={terms} dict={dict} updated={LEGAL_UPDATED} />
    </>
  );
}
