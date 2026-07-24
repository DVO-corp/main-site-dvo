"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Check, Languages } from "lucide-react";
import {
  LOCALES,
  LOCALE_NAMES,
  LOCALE_SHORT,
  LOCALE_TAGS,
  type Locale,
} from "@/content/site";
import { cn } from "@/lib/utils";

/** Replaces the locale segment while keeping the rest of the path intact. */
function swapLocale(pathname: string, next: Locale): string {
  const segments = pathname.split("/").filter(Boolean);
  if (segments.length === 0) return `/${next}/`;
  segments[0] = next;
  return `/${segments.join("/")}/`;
}

export function LanguageSwitcher({
  locale,
  label,
  className,
}: {
  locale: Locale;
  label: string;
  className?: string;
}) {
  const pathname = usePathname() ?? `/${locale}/`;
  const [open, setOpen] = React.useState(false);
  const ref = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    if (!open) return;
    function onPointerDown(event: MouseEvent | TouchEvent) {
      if (!ref.current?.contains(event.target as Node)) setOpen(false);
    }
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") setOpen(false);
    }
    document.addEventListener("mousedown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("mousedown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  return (
    <div ref={ref} className={cn("relative", className)}>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-haspopup="menu"
        aria-expanded={open}
        aria-label={label}
        className="inline-flex h-10 items-center gap-1.5 rounded-full border border-border px-3 text-sm font-medium text-muted-foreground transition-colors hover:border-primary/50 hover:text-foreground"
      >
        <Languages className="size-4" strokeWidth={1.7} aria-hidden />
        {LOCALE_SHORT[locale]}
      </button>

      {open && (
        <div
          role="menu"
          className="absolute right-0 z-50 mt-2 w-44 overflow-hidden rounded-lg border border-border bg-card p-1 shadow-xl"
        >
          {LOCALES.map((code) => (
            <Link
              key={code}
              role="menuitem"
              href={swapLocale(pathname, code)}
              hrefLang={LOCALE_TAGS[code]}
              lang={LOCALE_TAGS[code]}
              onClick={() => setOpen(false)}
              className={cn(
                "flex items-center justify-between rounded-md px-3 py-2 text-sm transition-colors hover:bg-muted",
                code === locale ? "text-foreground" : "text-muted-foreground",
              )}
            >
              {LOCALE_NAMES[code]}
              {code === locale && (
                <Check className="size-4 text-primary" aria-hidden />
              )}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
