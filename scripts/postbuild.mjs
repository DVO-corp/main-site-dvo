/**
 * Post-processing for the static export.
 *
 * 1. Next writes the generated Open Graph card to `out/opengraph-image` with
 *    no file extension. GitHub Pages serves unknown extensions as
 *    application/octet-stream, and social crawlers reject that, so the file is
 *    republished as `out/og.png` — the URL referenced from the metadata.
 * 2. Verifies the files GitHub Pages needs are present, failing loudly in CI
 *    rather than silently deploying a broken site.
 */
import { copyFile, access, writeFile, stat } from "node:fs/promises";
import { constants } from "node:fs";
import path from "node:path";

const OUT = path.resolve("out");

async function exists(file) {
  try {
    await access(file, constants.F_OK);
    return true;
  } catch {
    return false;
  }
}

async function main() {
  if (!(await exists(OUT))) {
    throw new Error("out/ is missing — run `next build` first.");
  }

  const generated = path.join(OUT, "opengraph-image");
  const target = path.join(OUT, "og.png");

  if (await exists(generated)) {
    await copyFile(generated, target);
    const { size } = await stat(target);
    console.log(`postbuild: og.png written (${Math.round(size / 1024)} KB)`);
  } else {
    console.warn("postbuild: no generated Open Graph image found");
  }

  // Jekyll would otherwise skip the _next directory on GitHub Pages.
  const nojekyll = path.join(OUT, ".nojekyll");
  if (!(await exists(nojekyll))) {
    await writeFile(nojekyll, "");
  }

  const required = ["index.html", "404.html", "CNAME", "sitemap.xml", "robots.txt"];
  const missing = [];
  for (const file of required) {
    if (!(await exists(path.join(OUT, file)))) missing.push(file);
  }
  if (missing.length > 0) {
    throw new Error(`postbuild: missing from out/: ${missing.join(", ")}`);
  }

  console.log("postbuild: export verified");
}

main().catch((error) => {
  console.error(error.message);
  process.exit(1);
});
