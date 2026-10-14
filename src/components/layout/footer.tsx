import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import {
  CONTACTS,
  NAV_ORDER,
  PRODUCTS,
  SOCIAL,
  path,
  type Locale,
} from "@/content/site";
import type { Dictionary } from "@/content/locales";
import { Logo } from "./logo";

export function Footer({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  // Static export: this is evaluated once at build time.
  const year = new Date().getFullYear();

  return (
    <footer className="relative mt-8 border-t border-border bg-elevated/40">
      <div className="container-page grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-4">
        <div className="flex flex-col gap-4 sm:col-span-2 lg:col-span-1">
          <Link href={path(locale, "home")} aria-label={dict.nav.home}>
            <Logo />
          </Link>
          <p className="max-w-sm text-sm leading-relaxed text-muted-foreground">
            {dict.footer.tagline}
          </p>
          <div className="flex flex-wrap gap-2">
            {SOCIAL.map((item) => (
              <a
                key={item.id}
                href={item.href}
                target="_blank"
                rel="me noopener noreferrer"
                className="inline-flex items-center gap-1 rounded-full border border-border px-3 py-1.5 text-xs text-muted-foreground transition-colors hover:border-primary/50 hover:text-foreground"
              >
                {item.label}
                <ArrowUpRight className="size-3" aria-hidden />
              </a>
            ))}
          </div>
        </div>

        <nav aria-label={dict.footer.navTitle} className="flex flex-col gap-3">
          <h2 className="text-sm font-semibold">{dict.footer.navTitle}</h2>
          <ul className="flex flex-col gap-2 text-sm text-muted-foreground">
            <li>
              <Link
                href={path(locale, "home")}
                className="transition-colors hover:text-foreground"
              >
                {dict.nav.home}
              </Link>
            </li>
            {NAV_ORDER.map((route) => (
              <li key={route}>
                <Link
                  href={path(locale, route)}
                  className="transition-colors hover:text-foreground"
                >
                  {dict.nav[route as keyof typeof dict.nav]}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex flex-col gap-3">
          <h2 className="text-sm font-semibold">
            {dict.footer.servicesTitle}
          </h2>
          <ul className="flex flex-col gap-2 text-sm text-muted-foreground">
            {dict.services.categories.slice(0, 6).map((service) => (
              <li key={service.id}>
                <Link
                  href={`${path(locale, "services")}#${service.id}`}
                  className="transition-colors hover:text-foreground"
                >
                  {service.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col gap-3">
          <h2 className="text-sm font-semibold">{dict.footer.productsTitle}</h2>
          <ul className="flex flex-col gap-2 text-sm text-muted-foreground">
            <li>
              <a
                href={PRODUCTS.mediaProcessing.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 transition-colors hover:text-foreground"
              >
                {PRODUCTS.mediaProcessing.name}
                <ArrowUpRight className="size-3" aria-hidden />
                <span className="sr-only">{dict.actions.openInNewTab}</span>
              </a>
            </li>
            <li>
              <Link
                href={path(locale, "products")}
                className="transition-colors hover:text-foreground"
              >
                {dict.products.upcoming.title}
              </Link>
            </li>
          </ul>

          <h2 className="mt-3 text-sm font-semibold">
            {dict.footer.contactTitle}
          </h2>
          <ul className="flex flex-col gap-2 text-sm text-muted-foreground">
            <li>
              <a
                href={CONTACTS.telegramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-foreground"
              >
                @{CONTACTS.telegramUsername}
              </a>
            </li>
            <li>
              <a
                href={`mailto:${CONTACTS.email}`}
                className="transition-colors hover:text-foreground"
              >
                {CONTACTS.email}
              </a>
            </li>
            <li>
              <a
                href={`mailto:${CONTACTS.infoEmail}`}
                className="transition-colors hover:text-foreground"
              >
                {CONTACTS.infoEmail}
              </a>
            </li>
            <li>
              <a
                href={CONTACTS.phoneHref}
                className="transition-colors hover:text-foreground"
              >
                {CONTACTS.phone}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="container-page flex flex-col gap-3 py-6 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} DVO Corp. {dict.footer.rights}
          </p>
          {/* The legal pair sits in the bottom bar, on every page — where ad
              reviewers, app stores and cautious visitors all look for it. */}
          <nav
            aria-label={dict.footer.legalTitle}
            className="flex flex-wrap gap-x-4 gap-y-1"
          >
            <Link
              href={path(locale, "privacy")}
              className="transition-colors hover:text-foreground"
            >
              {dict.nav.privacy}
            </Link>
            <Link
              href={path(locale, "terms")}
              className="transition-colors hover:text-foreground"
            >
              {dict.nav.terms}
            </Link>
          </nav>
          <p>{dict.footer.note}</p>
        </div>
      </div>
    </footer>
  );
}
