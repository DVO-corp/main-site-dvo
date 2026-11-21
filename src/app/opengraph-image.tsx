import { ImageResponse } from "next/og";
import { COMPANY } from "@/content/site";

export const alt = `${COMPANY.name} — ${COMPANY.expansion}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
/** Required for metadata image routes under `output: "export"`. */
export const dynamic = "force-static";

/**
 * Social preview card, rendered to a PNG at build time. It sits at the root of
 * the app tree so every route inherits it via the file-based metadata
 * convention; `lib/seo.ts` deliberately leaves `openGraph.images` unset.
 */
export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background:
            "#151618",
          padding: 72,
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <div
            style={{
              width: 64,
              height: 64,
              borderRadius: 8,
              border: "3px solid #4ADE80",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#4ADE80",
              fontSize: 34,
              fontWeight: 700,
            }}
          >
            V
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <span style={{ color: "#F4F6FB", fontSize: 34, fontWeight: 600 }}>
              DVO Corp
            </span>
            <span style={{ color: "#8A93A8", fontSize: 18, letterSpacing: 2 }}>
              DEPLOY · VERIFY · OPERATE
            </span>
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <span
            style={{
              color: "#FFFFFF",
              fontSize: 62,
              fontWeight: 600,
              lineHeight: 1.12,
              maxWidth: 940,
            }}
          >
            DevOps team for products that have to stay up
          </span>
          <span style={{ color: "#9AA3B8", fontSize: 26, maxWidth: 900 }}>
            Production infrastructure, operations and custom APIs. In your cloud or on our servers.
          </span>
        </div>

        <div style={{ display: "flex", gap: 14 }}>
          {["AWS", "Kubernetes", "Terraform", "CI/CD", "Monitoring"].map(
            (chip) => (
              <span
                key={chip}
                style={{
                  color: "#C3CAD9",
                  fontSize: 20,
                  border: "1px solid #2E3446",
                  borderRadius: 6,
                  padding: "8px 20px",
                }}
              >
                {chip}
              </span>
            ),
          )}
        </div>
      </div>
    ),
    size,
  );
}
