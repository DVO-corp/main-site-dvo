import type { MetadataRoute } from "next";
import { SITE_URL } from "@/content/site";

/** Required for metadata routes under `output: "export"`. */
export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        // Next's RSC payload files sit next to the HTML and hold no content
        // worth indexing.
        disallow: ["/_next/"],
      },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}
