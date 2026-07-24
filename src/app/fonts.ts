import { Inter, JetBrains_Mono } from "next/font/google";

/**
 * Both faces are self-hosted by next/font at build time (no runtime request to
 * Google), subsetted for the three site languages and loaded with
 * `display: swap` so text is never invisible.
 */
export const fontSans = Inter({
  subsets: ["latin", "latin-ext", "cyrillic", "cyrillic-ext"],
  display: "swap",
  variable: "--font-sans",
});

export const fontMono = JetBrains_Mono({
  subsets: ["latin", "latin-ext", "cyrillic"],
  display: "swap",
  variable: "--font-mono",
});

export const fontClass = `${fontSans.variable} ${fontMono.variable}`;
