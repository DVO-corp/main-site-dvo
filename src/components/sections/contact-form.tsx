"use client";

import * as React from "react";
import { motion, useReducedMotion } from "motion/react";
import { CircleCheck, Copy, Info, Send } from "lucide-react";
import { CONTACTS, FORM } from "@/content/site";
import type { Dictionary } from "@/content/locales";
import { Button } from "@/components/ui/button";
import { Field, Input, Select, Textarea } from "@/components/ui/field";

interface FormValues {
  name: string;
  company: string;
  contact: string;
  taskType: string;
  description: string;
  load: string;
  budget: string;
}

const EMPTY: FormValues = {
  name: "",
  company: "",
  contact: "",
  taskType: "",
  description: "",
  load: "",
  budget: "",
};

type Errors = Partial<Record<keyof FormValues, string>>;
type Status = "idle" | "submitting" | "done";

/** Accepts an email address or a Telegram handle. */
function isValidContact(value: string): boolean {
  const trimmed = value.trim();
  if (/^@?[a-zA-Z0-9_]{4,32}$/.test(trimmed)) return true;
  return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(trimmed);
}

export function ContactForm({ dict }: { dict: Dictionary }) {
  const t = dict.contact.form;
  const reduced = useReducedMotion();

  const [values, setValues] = React.useState<FormValues>(EMPTY);
  const [errors, setErrors] = React.useState<Errors>({});
  const [status, setStatus] = React.useState<Status>("idle");
  const [copied, setCopied] = React.useState(false);

  const set = <K extends keyof FormValues>(key: K, value: FormValues[K]) => {
    setValues((prev) => ({ ...prev, [key]: value }));
    setErrors((prev) => ({ ...prev, [key]: undefined }));
  };

  function validate(): Errors {
    const next: Errors = {};
    if (!values.name.trim()) next.name = t.validation.nameRequired;
    if (!values.contact.trim()) {
      next.contact = t.validation.contactRequired;
    } else if (!isValidContact(values.contact)) {
      next.contact = t.validation.contactInvalid;
    }
    if (!values.description.trim()) {
      next.description = t.validation.descriptionRequired;
    } else if (values.description.trim().length < 20) {
      next.description = t.validation.descriptionShort;
    }
    return next;
  }

  /** Human-readable summary the visitor can paste into Telegram or email. */
  function composeMessage(): string {
    const label = (id: string, list: { id: string; label: string }[]) =>
      list.find((item) => item.id === id)?.label ?? "—";

    return [
      `${t.fields.name}: ${values.name}`,
      `${t.fields.company}: ${values.company || "—"}`,
      `${t.fields.contact}: ${values.contact}`,
      `${t.fields.taskType}: ${label(values.taskType, t.taskTypes)}`,
      `${t.fields.load}: ${label(values.load, t.loads)}`,
      `${t.fields.budget}: ${label(values.budget, t.budgets)}`,
      "",
      `${t.fields.description}:`,
      values.description,
    ].join("\n");
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const found = validate();
    setErrors(found);
    if (Object.keys(found).length > 0) {
      const firstKey = Object.keys(found)[0];
      document.getElementById(`contact-${firstKey}`)?.focus();
      return;
    }

    setStatus("submitting");

    // When a backend appears, set NEXT_PUBLIC_CONTACT_ENDPOINT and this branch
    // starts posting real leads — no other change is needed here.
    if (!FORM.demoMode) {
      try {
        await fetch(FORM.endpoint, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(values),
        });
      } catch {
        /* fall through to the same confirmation screen */
      }
    }

    setStatus("done");
  }

  async function copyMessage() {
    try {
      await navigator.clipboard.writeText(composeMessage());
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2500);
    } catch {
      /* clipboard can be blocked; the text is still visible on screen */
    }
  }

  if (status === "done") {
    return (
      <motion.div
        initial={reduced ? false : { opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        role="status"
        aria-live="polite"
        className="flex flex-col gap-5 rounded-2xl border border-accent/30 bg-accent/[0.06] p-6 sm:p-8"
      >
        <span className="inline-flex size-12 items-center justify-center rounded-xl border border-accent/30 bg-accent/10 text-accent">
          <CircleCheck className="size-6" strokeWidth={1.6} aria-hidden />
        </span>

        <h3 className="text-xl font-semibold">{t.success.title}</h3>
        <p className="leading-relaxed text-muted-foreground">
          {t.success.text}
        </p>

        <pre className="max-h-60 overflow-auto rounded-lg border border-border bg-background/60 p-4 font-mono text-xs leading-relaxed whitespace-pre-wrap text-muted-foreground">
          {composeMessage()}
        </pre>

        <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
          <Button type="button" onClick={copyMessage} variant="secondary">
            <Copy aria-hidden />
            {copied ? t.success.copied : t.success.copy}
          </Button>
          <Button asChild>
            <a
              href={CONTACTS.telegramUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Send aria-hidden />
              {dict.actions.writeTelegram}
            </a>
          </Button>
          <Button
            type="button"
            variant="ghost"
            onClick={() => {
              setValues(EMPTY);
              setStatus("idle");
            }}
          >
            {dict.actions.sendAnother}
          </Button>
        </div>
      </motion.div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="flex flex-col gap-6 rounded-2xl border border-border bg-card/60 p-6 sm:p-8"
    >
      <div className="flex flex-col gap-1.5">
        <h2 className="text-xl font-semibold">{t.title}</h2>
        <p className="text-sm text-muted-foreground">{t.subtitle}</p>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <Field
          label={t.fields.name}
          htmlFor="contact-name"
          required
          error={errors.name}
        >
          <Input
            id="contact-name"
            name="name"
            autoComplete="name"
            placeholder={t.fields.namePlaceholder}
            value={values.name}
            onChange={(e) => set("name", e.target.value)}
            aria-invalid={Boolean(errors.name)}
          />
        </Field>

        <Field label={t.fields.company} htmlFor="contact-company">
          <Input
            id="contact-company"
            name="company"
            autoComplete="organization"
            placeholder={t.fields.companyPlaceholder}
            value={values.company}
            onChange={(e) => set("company", e.target.value)}
          />
        </Field>

        <Field
          label={t.fields.contact}
          htmlFor="contact-contact"
          required
          error={errors.contact}
        >
          <Input
            id="contact-contact"
            name="contact"
            placeholder={t.fields.contactPlaceholder}
            value={values.contact}
            onChange={(e) => set("contact", e.target.value)}
            aria-invalid={Boolean(errors.contact)}
          />
        </Field>

        <Field label={t.fields.taskType} htmlFor="contact-taskType">
          <Select
            id="contact-taskType"
            name="taskType"
            value={values.taskType}
            onChange={(e) => set("taskType", e.target.value)}
          >
            <option value="">{t.fields.taskTypePlaceholder}</option>
            {t.taskTypes.map((item) => (
              <option key={item.id} value={item.id}>
                {item.label}
              </option>
            ))}
          </Select>
        </Field>

        <Field label={t.fields.load} htmlFor="contact-load">
          <Select
            id="contact-load"
            name="load"
            value={values.load}
            onChange={(e) => set("load", e.target.value)}
          >
            <option value="">{t.fields.loadPlaceholder}</option>
            {t.loads.map((item) => (
              <option key={item.id} value={item.id}>
                {item.label}
              </option>
            ))}
          </Select>
        </Field>

        <Field label={t.fields.budget} htmlFor="contact-budget">
          <Select
            id="contact-budget"
            name="budget"
            value={values.budget}
            onChange={(e) => set("budget", e.target.value)}
          >
            <option value="">{t.fields.budgetPlaceholder}</option>
            {t.budgets.map((item) => (
              <option key={item.id} value={item.id}>
                {item.label}
              </option>
            ))}
          </Select>
        </Field>
      </div>

      <Field
        label={t.fields.description}
        htmlFor="contact-description"
        required
        error={errors.description}
      >
        <Textarea
          id="contact-description"
          name="description"
          placeholder={t.fields.descriptionPlaceholder}
          value={values.description}
          onChange={(e) => set("description", e.target.value)}
          aria-invalid={Boolean(errors.description)}
        />
      </Field>

      {FORM.demoMode && (
        <p className="flex items-start gap-3 rounded-lg border border-border/70 bg-background/40 p-4 text-xs leading-relaxed text-muted-foreground">
          <Info className="mt-0.5 size-4 shrink-0 text-warning" aria-hidden />
          {t.privacy}
        </p>
      )}

      <Button type="submit" size="lg" disabled={status === "submitting"}>
        <Send aria-hidden />
        {status === "submitting" ? dict.actions.sending : dict.actions.send}
      </Button>
    </form>
  );
}
