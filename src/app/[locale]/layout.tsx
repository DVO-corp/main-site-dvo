import type { ReactNode } from "react";
import type { Metadata, Viewport } from "next";
import { notFound } from "next/navigation";
import {
  COMPANY,
  LOCALES,
  LOCALE_TAGS,
  SITE_URL,
  isLocale,
  type Locale,
} from "@/content/site";
import { getDictionary } from "@/content/locales";
import { graph, organizationSchema, websiteSchema } from "@/lib/jsonld";
import { JsonLd } from "@/components/common/json-ld";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { themeInitScript } from "@/lib/theme-script";
import { fontClass } from "../fonts";
import "../globals.css";

export const dynamicParams = false;

export function generateStaticParams() {
  return LOCALES.map((locale) => ({ locale }));
}

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  applicationName: COMPANY.name,
  authors: [{ name: COMPANY.name, url: SITE_URL }],
  creator: COMPANY.name,
  publisher: COMPANY.name,
  formatDetection: { telephone: false, address: false, email: false },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f7f8fb" },
    { media: "(prefers-color-scheme: dark)", color: "#14161f" },
  ],
};

export default async function LocaleLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  const typedLocale = locale as Locale;
  const dict = getDictionary(typedLocale);

  return (
    <html lang={LOCALE_TAGS[typedLocale]} className={fontClass} suppressHydrationWarning>
      <head>
        {/* Applies the stored theme before first paint to avoid a flash. */}
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body className="min-h-dvh antialiased">
        <JsonLd
          data={graph([
            organizationSchema(typedLocale),
            websiteSchema(typedLocale),
          ])}
        />
        <div className="flex min-h-dvh flex-col">
          <Header locale={typedLocale} dict={dict} />
          <main id="main" className="flex-1">
            {children}
          </main>
          <Footer locale={typedLocale} dict={dict} />
        </div>
      </body>
    </html>
  );
}
