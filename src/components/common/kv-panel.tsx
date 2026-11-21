import { cn } from "@/lib/utils";

/**
 * A terminal-style key/value block. Used for the hero summary and the
 * "our own production" facts — content that reads best as a config dump.
 */
export function KvPanel({
  title,
  rows,
  className,
}: {
  title: string;
  rows: { k: string; v: string }[];
  className?: string;
}) {
  return (
    <div
      className={cn(
        "overflow-hidden rounded-lg border border-border bg-card font-mono text-[0.8rem]",
        className,
      )}
    >
      <div className="flex items-center gap-2 border-b border-border bg-muted/60 px-4 py-2.5 text-xs text-muted-foreground">
        <span aria-hidden className="size-2 rounded-full bg-primary" />
        {title}
      </div>
      <dl className="flex flex-col">
        {rows.map((row) => (
          <div
            key={row.k}
            className="grid grid-cols-[6.5rem_1fr] gap-3 border-b border-border/60 px-4 py-2.5 last:border-b-0"
          >
            <dt className="text-primary">{row.k}</dt>
            <dd className="text-foreground/90">{row.v}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
}
