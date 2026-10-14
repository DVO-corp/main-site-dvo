import type { Dictionary } from "@/content/locales";
import { Reveal } from "@/components/common/reveal";

type LegalDoc = Dictionary["legal"]["privacy"];

/**
 * Date of the last substantive revision of the legal pages. A constant rather
 * than a build timestamp: "last updated" must mean "we changed the terms", not
 * "we redeployed the site".
 */
export const LEGAL_UPDATED = "2026-07-28";

/**
 * Renders one legal document from the dictionary.
 *
 * Static by design — no client component, no state. These pages must be
 * complete in the served HTML: an ad reviewer or a crawler that does not run
 * JavaScript still has to see the whole policy.
 */
export function LegalDocument({
  doc,
  dict,
  updated,
}: {
  doc: LegalDoc;
  dict: Dictionary;
  /** ISO date of the last substantive revision. */
  updated: string;
}) {
  return (
    <section className="section">
      <div className="container-page flex max-w-3xl flex-col gap-10">
        <p className="text-sm text-muted-foreground">
          {dict.legal.updated}: {updated}
        </p>

        <Reveal className="flex flex-col gap-3 rounded-2xl border border-border bg-card/60 p-6">
          <h2 className="text-sm font-semibold">{dict.legal.contents}</h2>
          <ul className="flex flex-col gap-1.5 text-sm">
            {doc.sections.map((section) => (
              <li key={section.id}>
                <a
                  href={`#${section.id}`}
                  className="text-muted-foreground transition-colors hover:text-foreground"
                >
                  {section.heading}
                </a>
              </li>
            ))}
          </ul>
        </Reveal>

        {doc.sections.map((section) => (
          <section
            key={section.id}
            id={section.id}
            className="flex scroll-mt-24 flex-col gap-4"
          >
            <h2 className="text-xl font-semibold sm:text-2xl">{section.heading}</h2>
            {section.paras.map((text, i) => (
              <p key={i} className="leading-relaxed text-muted-foreground">
                {text}
              </p>
            ))}
            {section.bullets.length > 0 && (
              <ul className="flex list-disc flex-col gap-2 pl-5 leading-relaxed text-muted-foreground marker:text-primary">
                {section.bullets.map((text, i) => (
                  <li key={i}>{text}</li>
                ))}
              </ul>
            )}
          </section>
        ))}
      </div>
    </section>
  );
}
