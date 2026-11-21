import { cn } from "@/lib/utils";

/**
 * Small SVG charts used inside console mock-ups and service tiles.
 *
 * Everything here is an illustration drawn from fixed sample series — there is
 * no live data on a static site — and the captions next to them say so.
 */

function path(points: number[], width: number, height: number, max: number) {
  const step = width / (points.length - 1);
  return points
    .map(
      (value, index) =>
        `${index === 0 ? "M" : "L"}${(index * step).toFixed(1)} ${(height - (value / max) * height).toFixed(1)}`,
    )
    .join(" ");
}

function GridLines({ width, height }: { width: number; height: number }) {
  return (
    <>
      {[0.25, 0.5, 0.75].map((fraction) => (
        <line
          key={fraction}
          x1={0}
          x2={width}
          y1={height * fraction}
          y2={height * fraction}
          stroke="var(--c-grid)"
          strokeWidth={1}
        />
      ))}
    </>
  );
}

export function AreaChart({
  series,
  max,
  className,
  color = "var(--c-blue)",
  threshold,
}: {
  series: number[];
  max: number;
  className?: string;
  color?: string;
  /** Draws a dashed alarm line at this value. */
  threshold?: number;
}) {
  const width = 300;
  const height = 90;
  const line = path(series, width, height, max);
  const alarmY =
    threshold === undefined ? null : height - (threshold / max) * height;

  return (
    <svg
      viewBox={`0 0 ${width} ${height}`}
      preserveAspectRatio="none"
      aria-hidden
      className={cn("h-24 w-full", className)}
      fill="none"
    >
      <GridLines width={width} height={height} />
      <path
        d={`${line} L${width} ${height} L0 ${height} Z`}
        fill={color}
        opacity={0.14}
      />
      <path
        d={line}
        stroke={color}
        strokeWidth={2}
        vectorEffect="non-scaling-stroke"
      />
      {alarmY !== null && (
        <line
          x1={0}
          x2={width}
          y1={alarmY}
          y2={alarmY}
          stroke="var(--c-red)"
          strokeWidth={1.2}
          strokeDasharray="5 4"
          vectorEffect="non-scaling-stroke"
        />
      )}
    </svg>
  );
}

const BAR_TONES = {
  before: "var(--c-muted)",
  after: "var(--c-blue)",
  plain: "var(--c-blue-soft)",
};

export function BarChart({
  bars,
  max,
  className,
}: {
  bars: { value: number; tone?: keyof typeof BAR_TONES }[];
  max: number;
  className?: string;
}) {
  const width = 300;
  const height = 110;
  const slot = width / bars.length;

  return (
    <svg
      viewBox={`0 0 ${width} ${height}`}
      preserveAspectRatio="none"
      aria-hidden
      className={cn("h-32 w-full", className)}
    >
      <GridLines width={width} height={height} />
      {bars.map((bar, index) => {
        const barHeight = (bar.value / max) * height;
        return (
          <rect
            key={index}
            x={index * slot + slot * 0.18}
            y={height - barHeight}
            width={slot * 0.64}
            height={barHeight}
            rx={3}
            fill={BAR_TONES[bar.tone ?? "plain"]}
          />
        );
      })}
    </svg>
  );
}

/** Tiny line for service tiles; inherits the accent colour. */
export function Sparkline({
  series,
  className,
}: {
  series: number[];
  className?: string;
}) {
  const max = Math.max(...series);
  const line = path(series, 120, 34, max);
  return (
    <svg
      viewBox="0 0 120 36"
      preserveAspectRatio="none"
      aria-hidden
      className={cn("h-12 w-full text-primary", className)}
      fill="none"
    >
      <path d={`${line} L120 36 L0 36 Z`} fill="currentColor" opacity={0.12} />
      <path
        d={line}
        stroke="currentColor"
        strokeWidth={2}
        vectorEffect="non-scaling-stroke"
      />
    </svg>
  );
}

export function StatusDot({ tone = "ok" }: { tone?: "ok" | "warn" }) {
  return (
    <span
      aria-hidden
      className="inline-block size-2 shrink-0 rounded-full"
      style={{ background: tone === "ok" ? "var(--c-green)" : "var(--c-red)" }}
    />
  );
}

/** Wraps a chart with y-axis ticks and x-axis labels, like a console widget. */
export function ChartAxes({
  yTicks,
  xLabels,
  children,
}: {
  /** Top to bottom. */
  yTicks: string[];
  xLabels: string[];
  children: React.ReactNode;
}) {
  return (
    <div className="console-muted grid grid-cols-[auto_1fr] gap-x-2 text-[0.68rem] leading-none">
      <div className="flex flex-col justify-between py-0.5 text-right">
        {yTicks.map((tick) => (
          <span key={tick}>{tick}</span>
        ))}
      </div>
      <div className="border-b border-l border-[var(--c-line)]">{children}</div>
      <span />
      <div className="flex justify-between pt-1.5">
        {xLabels.map((label) => (
          <span key={label}>{label}</span>
        ))}
      </div>
    </div>
  );
}
