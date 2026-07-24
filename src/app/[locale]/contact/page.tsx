import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { CONTACTS, LOCALES, path, type Locale } from "@/content/site";
import { getDictionary } from "@/content/locales";
import { buildMetadata } from "@/lib/seo";
import { breadcrumbSchema, graph } from "@/lib/jsonld";
import { Icon } from "@/lib/icons";
import { JsonLd } from "@/components/common/json-ld";
import { PageHero } from "@/components/common/page-hero";
import { Reveal } from "@/components/common/reveal";
import { ContactForm } from "@/components/sections/contact-form";

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

  /** Each channel card resolves to a real destination. */
  const hrefFor = (action: string) => {
    switch (action) {
      case "writeTelegram":
        return { href: CONTACTS.telegramUrl, external: true };
      case "writeEmail":
        return { href: `mailto:${CONTACTS.email}`, external: false };
      case "discussInfrastructure":
        return { href: path(typedLocale, "infrastructure"), external: false };
      default:
        return { href: path(typedLocale, "ai"), external: false };
    }
  };

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

      <section className="pb-4">
        <div className="container-page grid gap-8 lg:grid-cols-[1.15fr_1fr] lg:gap-10">
          <Reveal>
            <ContactForm dict={dict} />
          </Reveal>

          <div className="flex flex-col gap-6">
            <Reveal delay={0.06} className="flex flex-col gap-4">
              <h2 className="text-lg font-semibold">
                {contact.channels.title}
              </h2>

              <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
                {contact.channels.items.map((item) => {
                  const { href, external } = hrefFor(item.action);
                  const label =
                    dict.actions[item.action as keyof typeof dict.actions];

                  const inner = (
                    <>
                      <span className="inline-flex size-10 shrink-0 items-center justify-center rounded-lg border border-primary/25 bg-primary/10 text-primary">
                        <Icon name={item.icon} className="size-[1.05rem]" />
                      </span>
                      <span className="flex flex-col gap-0.5">
                        <span className="text-sm font-semibold">
                          {item.title}
                        </span>
                        <span className="text-xs leading-relaxed text-muted-foreground">
                          {item.text}
                        </span>
                        <span className="mt-1 inline-flex items-center gap-1.5 text-xs font-medium text-primary">
                          {label}
                          <ArrowRight className="size-3" aria-hidden />
                        </span>
                      </span>
                    </>
                  );

                  const className =
                    "card-hover flex h-full items-start gap-3.5 rounded-xl border border-border bg-card/60 p-4 outline-none focus-visible:ring-2 focus-visible:ring-ring";

                  return (
                    <li key={item.title}>
                      {external ? (
                        <a
                          href={href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={className}
                        >
                          {inner}
                        </a>
                      ) : (
                        <Link href={href} className={className}>
                          {inner}
                        </Link>
                      )}
                    </li>
                  );
                })}
              </ul>
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
