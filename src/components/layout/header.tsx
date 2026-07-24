"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { NAV_ORDER, path, type Locale, type RouteKey } from "@/content/site";
import type { Dictionary } from "@/content/locales";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Logo } from "./logo";
import { ThemeToggle } from "./theme";
import { LanguageSwitcher } from "./language-switcher";

export function Header({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const pathname = usePathname() ?? "";
  const [open, setOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Any link inside the drawer navigates, so the drawer should close with it.
  const closeOnNavigation = (event: React.MouseEvent<HTMLElement>) => {
    if ((event.target as HTMLElement).closest("a")) setOpen(false);
  };

  // The drawer covers the page, so the body behind it must not scroll.
  React.useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const isActive = (route: RouteKey) => {
    const target = path(locale, route);
    return pathname === target || pathname.startsWith(target);
  };

  const navLabel = (route: RouteKey) =>
    dict.nav[route as keyof typeof dict.nav];

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full border-b transition-colors duration-300",
        // Once the page scrolls, content passes under the bar — it has to be
        // near-opaque or the text behind it shows through the navigation.
        scrolled
          ? "border-border bg-background/95 shadow-sm backdrop-blur-xl backdrop-saturate-150"
          : "border-transparent bg-background/40 backdrop-blur-sm",
      )}
    >
      <a
        href="#main"
        className="sr-only rounded-full bg-primary px-4 py-2 text-primary-foreground focus:not-sr-only focus:absolute focus:top-3 focus:left-3 focus:z-50"
      >
        {dict.nav.skipToContent}
      </a>

      <div className="container-page flex h-16 items-center justify-between gap-4 md:h-[4.5rem]">
        <Link
          href={path(locale, "home")}
          className="rounded-lg transition-opacity hover:opacity-85"
          aria-label={dict.nav.home}
        >
          <Logo />
        </Link>

        <nav
          aria-label={dict.nav.mainNav}
          className="hidden items-center gap-1 lg:flex"
        >
          {NAV_ORDER.map((route) => (
            <Link
              key={route}
              href={path(locale, route)}
              aria-current={isActive(route) ? "page" : undefined}
              className={cn(
                "relative rounded-full px-3.5 py-2 text-sm font-medium transition-colors",
                isActive(route)
                  ? "text-foreground"
                  : "text-muted-foreground hover:text-foreground",
              )}
            >
              {navLabel(route)}
              {isActive(route) && (
                <span
                  aria-hidden
                  className="absolute inset-x-3.5 -bottom-0.5 h-px bg-gradient-to-r from-primary to-accent"
                />
              )}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <LanguageSwitcher
            locale={locale}
            label={dict.nav.changeLanguage}
            className="hidden sm:block"
          />
          <ThemeToggle
            labels={{ toLight: dict.nav.toLight, toDark: dict.nav.toDark }}
          />
          <Button asChild size="sm" className="hidden xl:inline-flex">
            <Link href={path(locale, "contact")}>
              {dict.actions.discussProject}
            </Link>
          </Button>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? dict.nav.closeMenu : dict.nav.openMenu}
            aria-expanded={open}
            aria-controls="mobile-menu"
            className="inline-flex size-10 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:border-primary/50 hover:text-foreground lg:hidden"
          >
            {open ? (
              <X className="size-5" strokeWidth={1.7} aria-hidden />
            ) : (
              <Menu className="size-5" strokeWidth={1.7} aria-hidden />
            )}
          </button>
        </div>
      </div>

      {open && (
        <div
          id="mobile-menu"
          // Opaque rather than glass: at narrow widths the page behind would
          // otherwise show through the menu and hurt legibility. The entrance
          // is a plain CSS animation, so it never depends on a JS frame loop.
          className="animate-menu-in absolute inset-x-0 top-full max-h-[calc(100dvh-4rem)] overflow-y-auto border-b border-border bg-background shadow-2xl lg:hidden"
        >
          <nav
            aria-label={dict.nav.mainNav}
            onClick={closeOnNavigation}
            className="container-page flex flex-col gap-1 py-4"
          >
            {NAV_ORDER.map((route) => (
              <Link
                key={route}
                href={path(locale, route)}
                aria-current={isActive(route) ? "page" : undefined}
                className={cn(
                  "rounded-lg px-3 py-3 text-base font-medium transition-colors",
                  isActive(route)
                    ? "bg-muted text-foreground"
                    : "text-muted-foreground hover:bg-muted/60 hover:text-foreground",
                )}
              >
                {navLabel(route)}
              </Link>
            ))}

            <div className="mt-3 flex items-center justify-between gap-3 border-t border-border pt-4">
              <LanguageSwitcher
                locale={locale}
                label={dict.nav.changeLanguage}
              />
              <Button asChild size="sm" className="flex-1">
                <Link href={path(locale, "contact")}>
                  {dict.actions.discussProject}
                </Link>
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
