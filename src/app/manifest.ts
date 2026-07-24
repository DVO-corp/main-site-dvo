import type { MetadataRoute } from "next";
import { COMPANY, DEFAULT_LOCALE, path } from "@/content/site";

/** Required for metadata routes under `output: "export"`. */
export const dynamic = "force-static";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${COMPANY.name} — ${COMPANY.expansion}`,
    short_name: COMPANY.name,
    description:
      "Infrastructure, AI capacity and custom technical solutions for small teams.",
    start_url: path(DEFAULT_LOCALE),
    display: "standalone",
    background_color: "#14161f",
    theme_color: "#14161f",
    icons: [
      {
        src: "/icon.svg",
        sizes: "any",
        type: "image/svg+xml",
        purpose: "any",
      },
    ],
  };
}
