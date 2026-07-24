import type { ReactNode } from "react";

/**
 * Pass-through root layout.
 *
 * Each localized tree renders its own <html lang="…"> in
 * `src/app/[locale]/layout.tsx`, which is the only way to emit a correct
 * `lang` attribute per locale in a statically exported App Router site.
 * The root redirect page and the 404 page render their own documents too.
 */
export default function RootLayout({ children }: { children: ReactNode }) {
  return children;
}
