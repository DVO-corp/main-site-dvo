import { cn } from "@/lib/utils";

/**
 * Decorative backdrop: a faint technical grid plus three soft colour glows.
 * Purely presentational — `aria-hidden`, no layout impact, and the drift
 * animation is disabled by the global reduced-motion rule.
 */
export function GridBackground({
  className,
  glow = true,
  animated = true,
}: {
  className?: string;
  glow?: boolean;
  animated?: boolean;
}) {
  return (
    <div
      aria-hidden
      className={cn(
        "pointer-events-none absolute inset-0 -z-10 overflow-hidden",
        className,
      )}
    >
      <div
        className={cn(
          "absolute inset-0 grid-surface grid-mask",
          animated && "animate-grid-drift",
        )}
      />
      {glow && (
        <>
          <div
            className="absolute -top-40 left-1/2 h-[32rem] w-[52rem] -translate-x-1/2 rounded-full blur-[120px]"
            style={{ background: "var(--glow-a)" }}
          />
          <div
            className="absolute top-24 -left-32 h-80 w-80 rounded-full blur-[110px]"
            style={{ background: "var(--glow-b)" }}
          />
          <div
            className="absolute -right-24 bottom-0 h-80 w-80 rounded-full blur-[110px]"
            style={{ background: "var(--glow-c)" }}
          />
        </>
      )}
    </div>
  );
}
