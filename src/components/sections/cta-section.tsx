import Link from "next/link";
import { ArrowRight, Mail, Send } from "lucide-react";
import { CONTACTS, path, type Locale } from "@/content/site";
import type { Dictionary } from "@/content/locales";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/common/reveal";

export function CtaSection({
  locale,
  dict,
  title,
  text,
}: {
  locale: Locale;
  dict: Dictionary;
  title: string;
  text: string;
}) {
  return (
    <section className="section">
      <div className="container-page">
        <Reveal className="relative overflow-hidden rounded-2xl border border-border bg-card/60 px-6 py-12 sm:px-12 sm:py-16">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 -z-10 grid-surface opacity-60"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute -top-24 left-1/2 -z-10 h-64 w-[36rem] -translate-x-1/2 rounded-full blur-[100px]"
            style={{ background: "var(--glow-a)" }}
          />

          <div className="mx-auto flex max-w-2xl flex-col items-center gap-5 text-center">
            <h2 className="text-2xl sm:text-[2rem]">{title}</h2>
            <p className="text-muted-foreground">{text}</p>

            <div className="mt-2 flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:flex-wrap sm:justify-center">
              <Button asChild size="lg">
                <Link href={path(locale, "contact")}>
                  {dict.actions.discussProject}
                  <ArrowRight aria-hidden />
                </Link>
              </Button>
              <Button asChild variant="secondary" size="lg">
                <a
                  href={CONTACTS.telegramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Send aria-hidden />
                  {dict.actions.writeTelegram}
                </a>
              </Button>
              <Button asChild variant="ghost" size="lg">
                <a href={`mailto:${CONTACTS.email}`}>
                  <Mail aria-hidden />
                  {CONTACTS.email}
                </a>
              </Button>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
