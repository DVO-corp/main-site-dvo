import { BarChart } from "./charts";
import { ConsoleFrame, ConsolePanel } from "./console-frame";

/*
 * Illustrative figures for a cost-review report. They are an example of the
 * report format, not a client result — the caption next to the widget says so.
 */
const LINES = [
  { name: "EC2 / EKS compute", before: 5200, after: 2900 },
  { name: "RDS", before: 2100, after: 1500 },
  { name: "NAT + data transfer", before: 1600, after: 650 },
  { name: "S3 + EBS", before: 900, after: 550 },
  { name: "Other", before: 600, after: 600 },
];

const TOTAL_BEFORE = LINES.reduce((sum, line) => sum + line.before, 0);
const TOTAL_AFTER = LINES.reduce((sum, line) => sum + line.after, 0);

const MONTHS = [
  { label: "M1", value: 10150, tone: "before" as const },
  { label: "M2", value: 10300, tone: "before" as const },
  { label: "M3", value: TOTAL_BEFORE, tone: "before" as const },
  { label: "M4", value: 7900, tone: "after" as const },
  { label: "M5", value: 6450, tone: "after" as const },
  { label: "M6", value: TOTAL_AFTER, tone: "after" as const },
];

const usd = (value: number) => `$${value.toLocaleString("en-US")}`;
const delta = (before: number, after: number) =>
  before === after ? "0%" : `−${Math.round((1 - after / before) * 100)}%`;

const BIG = "mt-1 text-[1.75rem] leading-[1.1] font-bold tracking-tight";

/** Before/after cost report drawn like a cloud billing console. */
export function CostCompare({
  labels,
  className,
}: {
  labels: { before: string; after: string; perMonth: string };
  className?: string;
}) {
  return (
    <ConsoleFrame
      title="billing · cost review"
      meta="monthly, USD"
      className={className}
    >
      <ConsolePanel title="Monthly cost">
        <dl className="grid grid-cols-3 gap-y-3">
          <div>
            <dt className="text-xs font-bold">{labels.before}</dt>
            <dd className={BIG} style={{ color: "var(--c-muted)" }}>
              {usd(TOTAL_BEFORE)}
            </dd>
          </div>
          <div className="border-l border-[var(--c-line)] pl-4 sm:pl-5">
            <dt className="text-xs font-bold">{labels.after}</dt>
            <dd className="console-kpi mt-1">{usd(TOTAL_AFTER)}</dd>
          </div>
          <div className="border-l border-[var(--c-line)] pl-4 sm:pl-5">
            <dt className="text-xs font-bold">Δ {labels.perMonth}</dt>
            <dd className={BIG} style={{ color: "var(--c-green)" }}>
              {delta(TOTAL_BEFORE, TOTAL_AFTER)}
            </dd>
          </div>
        </dl>
      </ConsolePanel>

      <div className="grid gap-3 sm:gap-4 md:grid-cols-[1fr_1.15fr]">
        <ConsolePanel title="Cost by month">
          <BarChart bars={MONTHS} max={11500} />
          <div className="console-muted flex justify-around text-[0.7rem]">
            {MONTHS.map((month) => (
              <span key={month.label}>{month.label}</span>
            ))}
          </div>
          <div className="flex flex-wrap gap-4 text-xs">
            <span className="inline-flex items-center gap-1.5">
              <span
                aria-hidden
                className="size-2.5 rounded-sm"
                style={{ background: "var(--c-muted)" }}
              />
              {labels.before}
            </span>
            <span className="inline-flex items-center gap-1.5">
              <span
                aria-hidden
                className="size-2.5 rounded-sm"
                style={{ background: "var(--c-blue)" }}
              />
              {labels.after}
            </span>
          </div>
        </ConsolePanel>

        <ConsolePanel title="Cost by service">
          <table className="w-full text-left text-xs">
            <thead className="console-muted">
              <tr className="border-b border-[var(--c-line)]">
                <th className="pb-2 font-semibold">Service</th>
                <th className="pb-2 text-right font-semibold">
                  {labels.before}
                </th>
                <th className="pb-2 text-right font-semibold">
                  {labels.after}
                </th>
                <th className="pb-2 text-right font-semibold">Δ</th>
              </tr>
            </thead>
            <tbody>
              {LINES.map((line) => (
                <tr
                  key={line.name}
                  className="border-b border-[var(--c-grid)] last:border-b-0"
                >
                  <td className="py-2">{line.name}</td>
                  <td className="console-muted py-2 text-right">
                    {usd(line.before)}
                  </td>
                  <td className="py-2 text-right font-semibold">
                    {usd(line.after)}
                  </td>
                  <td
                    className="py-2 text-right font-semibold"
                    style={{
                      color:
                        line.before === line.after
                          ? "var(--c-muted)"
                          : "var(--c-green)",
                    }}
                  >
                    {delta(line.before, line.after)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </ConsolePanel>
      </div>
    </ConsoleFrame>
  );
}
