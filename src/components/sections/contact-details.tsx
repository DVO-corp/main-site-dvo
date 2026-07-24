"use client";

import * as React from "react";
import { Check, Copy, Mail, Send } from "lucide-react";
import { CONTACTS } from "@/content/site";
import type { Dictionary } from "@/content/locales";
import { cn } from "@/lib/utils";

/**
 * Contacts rendered as selectable plain text rather than links only, so they
 * can be read off the page or copied without opening a mail client.
 */
function ContactRow({
  icon: Icon,
  label,
  value,
  copyLabel,
  copiedLabel,
}: {
  icon: typeof Mail;
  label: string;
  value: string;
  copyLabel: string;
  copiedLabel: string;
}) {
  const [copied, setCopied] = React.useState(false);

  async function copy() {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      /* clipboard can be blocked; the value is selectable on screen anyway */
    }
  }

  return (
    <div className="flex flex-wrap items-center gap-3 rounded-lg border border-border/70 bg-background/40 px-4 py-3">
      <Icon className="size-4 shrink-0 text-primary" strokeWidth={1.7} aria-hidden />
      <span className="text-xs tracking-wide text-muted-foreground uppercase">
        {label}
      </span>
      {/* select-all makes one click highlight the whole address */}
      <span className="grow font-mono text-sm break-all text-foreground select-all">
        {value}
      </span>
      <button
        type="button"
        onClick={copy}
        aria-label={`${copyLabel}: ${value}`}
        className={cn(
          "inline-flex shrink-0 items-center gap-1.5 rounded-full border px-3 py-1.5 text-xs transition-colors",
          copied
            ? "border-success/40 text-success"
            : "border-border text-muted-foreground hover:border-primary/50 hover:text-foreground",
        )}
      >
        {copied ? (
          <Check className="size-3.5" aria-hidden />
        ) : (
          <Copy className="size-3.5" aria-hidden />
        )}
        {copied ? copiedLabel : copyLabel}
      </button>
    </div>
  );
}

export function ContactDetails({ dict }: { dict: Dictionary }) {
  const t = dict.contact.details;

  return (
    <div className="flex flex-col gap-4 rounded-2xl border border-border bg-card/60 p-6">
      <div className="flex flex-col gap-1.5">
        <h2 className="text-lg font-semibold">{t.title}</h2>
        <p className="text-sm leading-relaxed text-muted-foreground">
          {t.subtitle}
        </p>
      </div>

      <div className="flex flex-col gap-2">
        <ContactRow
          icon={Mail}
          label={t.emailLabel}
          value={CONTACTS.email}
          copyLabel={dict.actions.copy}
          copiedLabel={dict.actions.copied}
        />
        <ContactRow
          icon={Send}
          label={t.telegramLabel}
          value={`@${CONTACTS.telegramUsername}`}
          copyLabel={dict.actions.copy}
          copiedLabel={dict.actions.copied}
        />
      </div>
    </div>
  );
}
