import { cn } from "@/lib/utils";

/**
 * Decorative backdrop: a faint static grid that fades out below the heading.
 * Purely presentational — `aria-hidden`, no layout impact, no animation.
 */
export function GridBackground({ className }: { className?: string }) {
  return (
    <div
      aria-hidden
      className={cn(
        "pointer-events-none absolute inset-0 -z-10 overflow-hidden",
        className,
      )}
    >
      <div className="absolute inset-0 grid-surface grid-mask" />
    </div>
  );
}
