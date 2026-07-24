"use client";

import * as React from "react";
import { usePathname } from "next/navigation";
import { Moon, Sun } from "lucide-react";
import { cn } from "@/lib/utils";
import { THEME_STORAGE_KEY } from "@/lib/theme-script";

/**
 * The theme lives on <html class="dark">, applied by the inline script in
 * `lib/theme-script.ts` before first paint. React subscribes to that DOM state
 * with `useSyncExternalStore` instead of mirroring it into component state,
 * so there is no hydration mismatch and no render-time flash.
 */
const listeners = new Set<() => void>();

function subscribe(onChange: () => void) {
  listeners.add(onChange);
  return () => {
    listeners.delete(onChange);
  };
}

function getSnapshot() {
  return document.documentElement.classList.contains("dark");
}

/** Dark is the default everywhere; only a stored "light" overrides it. */
function getServerSnapshot() {
  return true;
}

function storedPrefersDark() {
  try {
    return localStorage.getItem(THEME_STORAGE_KEY) !== "light";
  } catch {
    return true;
  }
}

function applyTheme(dark: boolean) {
  document.documentElement.classList.toggle("dark", dark);
  document.documentElement.style.colorScheme = dark ? "dark" : "light";
  try {
    localStorage.setItem(THEME_STORAGE_KEY, dark ? "dark" : "light");
  } catch {
    /* storage can be unavailable in private mode — the toggle still works */
  }
  for (const listener of listeners) listener();
}

export function ThemeToggle({
  labels,
  className,
}: {
  labels: { toLight: string; toDark: string };
  className?: string;
}) {
  const isDark = React.useSyncExternalStore(
    subscribe,
    getSnapshot,
    getServerSnapshot,
  );
  const pathname = usePathname();

  React.useEffect(() => {
    // Every locale renders its own <html>, so a client-side navigation can
    // make React re-render that element and drop the class the pre-paint
    // script set. Re-assert the stored preference after each navigation.
    const dark = storedPrefersDark();
    if (document.documentElement.classList.contains("dark") !== dark) {
      applyTheme(dark);
    }
  }, [pathname]);

  const label = isDark ? labels.toLight : labels.toDark;

  return (
    <button
      type="button"
      onClick={() => applyTheme(!isDark)}
      aria-label={label}
      title={label}
      className={cn(
        "inline-flex size-10 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:border-primary/50 hover:text-foreground",
        className,
      )}
    >
      {isDark ? (
        <Sun className="size-[1.05rem]" strokeWidth={1.7} aria-hidden />
      ) : (
        <Moon className="size-[1.05rem]" strokeWidth={1.7} aria-hidden />
      )}
    </button>
  );
}
