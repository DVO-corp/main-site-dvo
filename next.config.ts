import type { NextConfig } from "next";

/**
 * The site is deployed as a fully static bundle to GitHub Pages behind the
 * custom domain dvocorp.com, so there is no Node server at runtime:
 *  - `output: "export"` emits plain HTML/CSS/JS into ./out
 *  - `trailingSlash` makes every route a directory with an index.html,
 *    which is what GitHub Pages serves reliably
 *  - the image optimizer needs a server, so it is disabled
 */
const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
