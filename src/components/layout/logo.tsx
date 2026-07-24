import { cn } from "@/lib/utils";
import { COMPANY } from "@/content/site";

/**
 * DVO mark: an enclosure (O) holding two converging paths (V) that meet at a
 * single node — infrastructure from many sources routed into one place.
 */
export function LogoMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("size-9", className)}
      role="img"
      aria-label={COMPANY.name}
    >
      <defs>
        <linearGradient id="dvo-grad" x1="4" y1="4" x2="36" y2="36">
          <stop offset="0%" stopColor="#5B7CFA" />
          <stop offset="52%" stopColor="#38C6D9" />
          <stop offset="100%" stopColor="#A05CF5" />
        </linearGradient>
      </defs>
      <rect
        x="2.4"
        y="2.4"
        width="35.2"
        height="35.2"
        rx="11"
        stroke="url(#dvo-grad)"
        strokeWidth="2.2"
        opacity="0.9"
      />
      <path
        d="M12.6 13.4 L20 27.2 L27.4 13.4"
        stroke="url(#dvo-grad)"
        strokeWidth="2.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="12.6" cy="13.4" r="2.1" fill="url(#dvo-grad)" />
      <circle cx="27.4" cy="13.4" r="2.1" fill="url(#dvo-grad)" />
    </svg>
  );
}

export function Logo({
  className,
  showText = true,
}: {
  className?: string;
  showText?: boolean;
}) {
  return (
    <span className={cn("inline-flex items-center gap-2.5", className)}>
      <LogoMark />
      {showText && (
        <span className="flex flex-col leading-none">
          <span className="text-[1.15rem] font-semibold tracking-tight">
            DVO<span className="text-primary"> Corp</span>
          </span>
          <span className="mt-0.5 text-[0.62rem] font-medium tracking-[0.14em] text-muted-foreground uppercase">
            DevOps · Virt · Opt
          </span>
        </span>
      )}
    </span>
  );
}
