import type { Metadata } from "next";
import { CONTACTS, LOCALES, type Locale } from "@/content/site";
import { getDictionary } from "@/content/locales";
import { buildMetadata } from "@/lib/seo";
import { breadcrumbSchema, graph } from "@/lib/jsonld";
import { JsonLd } from "@/components/common/json-ld";
import { PageHero } from "@/components/common/page-hero";
import { Reveal } from "@/components/common/reveal";
import { ContactForm } from "@/components/sections/contact-form";
import { ContactDetails } from "@/components/sections/contact-details";

export function generateStaticParams() {
  return LOCALES.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return buildMetadata(locale as Locale, "contact");
}

export default async function ContactPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const typedLocale = locale as Locale;
  const dict = getDictionary(locale);
  const { contact } = dict;

  return (
    <>
      <JsonLd
        data={graph([
          breadcrumbSchema(typedLocale, [
            { name: dict.breadcrumbs.home, route: "home" },
            { name: dict.nav.contact, route: "contact" },
          ]),
        ])}
      />

      <PageHero
        locale={typedLocale}
        dict={dict}
        route="contact"
        badge={contact.hero.badge}
        title={contact.hero.title}
        subtitle={contact.hero.subtitle}
      />

      <section className="pt-14 pb-4">
        <div className="container-page grid gap-8 lg:grid-cols-[1.15fr_1fr] lg:gap-10">
          <Reveal>
            <ContactForm dict={dict} />
          </Reveal>

          <div className="flex flex-col gap-6">
            <Reveal>
              <ContactDetails dict={dict} />
            </Reveal>

            <Reveal
              delay={0.12}
              className="flex flex-col gap-4 rounded-2xl border border-border bg-elevated/40 p-6"
            >
              <h2 className="text-lg font-semibold">
                {contact.response.title}
              </h2>
              <ol className="flex flex-col gap-3">
                {contact.response.steps.map((step, index) => (
                  <li key={step} className="flex gap-3">
                    <span className="font-mono text-xs text-primary">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="text-sm leading-relaxed text-muted-foreground">
                      {step}
                    </span>
                  </li>
                ))}
              </ol>

              <div className="hairline" />

              <ul className="flex flex-col gap-2 text-sm">
                <li>
                  <a
                    href={CONTACTS.telegramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground transition-colors hover:text-foreground"
                  >
                    @{CONTACTS.telegramUsername}
                  </a>
                </li>
                <li>
                  <a
                    href={`mailto:${CONTACTS.email}`}
                    className="text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {CONTACTS.email}
                  </a>
                </li>
              </ul>
            </Reveal>
          </div>
        </div>
      </section>

      <div className="pb-16" />
    </>
  );
}
