import { cn } from "@/lib/utils";

/**
 * A window drawn like a cloud console: dark top bar, grey canvas, white
 * bordered panels inside. It frames the dashboards and reports on the site.
 */
export function ConsoleFrame({
  title,
  meta,
  children,
  className,
}: {
  title: string;
  /** Right side of the top bar, e.g. region or period. */
  meta?: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "console overflow-hidden rounded-[1.25rem] border border-border text-left shadow-[0_30px_80px_-40px_rgb(0_0_0/0.45)]",
        className,
      )}
    >
      <div className="console-bar flex items-center justify-between gap-4 px-4 py-2.5 text-xs sm:px-5">
        <span className="flex items-center gap-2.5 font-semibold">
          <span aria-hidden className="flex gap-1.5">
            <span className="size-2.5 rounded-full bg-white/25" />
            <span className="size-2.5 rounded-full bg-white/25" />
            <span className="size-2.5 rounded-full bg-white/25" />
          </span>
          {title}
        </span>
        {meta && <span className="opacity-70">{meta}</span>}
      </div>
      <div className="flex flex-col gap-3 p-3 sm:gap-4 sm:p-5">{children}</div>
    </div>
  );
}

export function ConsolePanel({
  title,
  hint,
  children,
  className,
}: {
  title: string;
  hint?: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section className={cn("console-panel flex flex-col gap-3 p-4", className)}>
      <header className="flex flex-col gap-0.5">
        <h3 className="text-[0.95rem] font-bold tracking-normal">{title}</h3>
        {hint && <p className="console-muted text-xs">{hint}</p>}
      </header>
      {children}
    </section>
  );
}
