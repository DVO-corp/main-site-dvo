import { AreaChart, StatusDot } from "./charts";
import { ConsoleFrame, ConsolePanel } from "./console-frame";

/*
 * Sample series. They describe no real system: the widget shows what a
 * project dashboard looks like, and the caption under it says so.
 */
const REQUESTS = [
  38, 36, 33, 31, 30, 34, 45, 62, 78, 86, 91, 88, 84, 87, 93, 97, 92, 85, 79,
  72, 64, 55, 47, 41,
];
const LATENCY = [
  120, 118, 121, 117, 119, 124, 131, 142, 150, 158, 149, 146, 152, 161, 172,
  166, 155, 148, 141, 136, 130, 126, 122, 120,
];

const KPIS = [
  { label: "Services", value: "12" },
  { label: "Healthy", value: "12 / 12" },
  { label: "Deploys today", value: "7" },
  { label: "Open alerts", value: "0" },
];

const SERVICES = [
  { name: "api-gateway", pods: "6 / 6", cpu: "41%" },
  { name: "billing", pods: "3 / 3", cpu: "28%" },
  { name: "worker-pool", pods: "9 / 9", cpu: "63%" },
  { name: "postgres-main", pods: "2 / 2", cpu: "35%" },
];

const DEPLOYS = [
  { service: "api-gateway", version: "v2.14.1", when: "12 min ago" },
  { service: "worker-pool", version: "v1.9.0", when: "1 h ago" },
  { service: "billing", version: "v3.2.4", when: "3 h ago" },
];

/**
 * A project dashboard drawn in the style of a cloud console: overview
 * numbers, traffic and latency charts, service health and recent deploys.
 */
export function DashboardMock({ className }: { className?: string }) {
  return (
    <ConsoleFrame
      title="production · overview"
      meta="eu-central-1 · last 24 h"
      className={className}
    >
      <ConsolePanel title="Service overview">
        <dl className="grid grid-cols-2 gap-y-4 sm:grid-cols-4">
          {KPIS.map((kpi, index) => (
            <div
              key={kpi.label}
              className={
                index > 0
                  ? "sm:border-l sm:border-[var(--c-line)] sm:pl-5"
                  : undefined
              }
            >
              <dt className="text-xs font-bold">{kpi.label}</dt>
              <dd className="console-kpi mt-1">{kpi.value}</dd>
            </div>
          ))}
        </dl>
      </ConsolePanel>

      <div className="grid gap-3 sm:gap-4 md:grid-cols-2">
        <ConsolePanel
          title="Requests per second"
          hint="All services, 5 min average"
        >
          <AreaChart series={REQUESTS} max={110} />
        </ConsolePanel>
        <ConsolePanel title="p95 latency, ms" hint="Alarm threshold 250 ms">
          <AreaChart series={LATENCY} max={280} threshold={250} />
        </ConsolePanel>
      </div>

      <div className="hidden gap-4 md:grid md:grid-cols-[1.3fr_1fr]">
        <ConsolePanel title="Service health">
          <table className="w-full text-left text-xs">
            <thead className="console-muted">
              <tr className="border-b border-[var(--c-line)]">
                <th className="pb-2 font-semibold">Service</th>
                <th className="pb-2 font-semibold">Status</th>
                <th className="pb-2 font-semibold">Pods</th>
                <th className="pb-2 text-right font-semibold">CPU</th>
              </tr>
            </thead>
            <tbody>
              {SERVICES.map((service) => (
                <tr
                  key={service.name}
                  className="border-b border-[var(--c-grid)] last:border-b-0"
                >
                  <td className="py-2 font-mono">{service.name}</td>
                  <td className="py-2">
                    <span
                      className="inline-flex items-center gap-1.5"
                      style={{ color: "var(--c-green)" }}
                    >
                      <StatusDot />
                      Healthy
                    </span>
                  </td>
                  <td className="py-2">{service.pods}</td>
                  <td className="py-2 text-right">{service.cpu}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </ConsolePanel>

        <ConsolePanel title="Recent deploys">
          <ul className="flex flex-col text-xs">
            {DEPLOYS.map((deploy) => (
              <li
                key={deploy.service}
                className="flex items-center justify-between gap-3 border-b border-[var(--c-grid)] py-2 last:border-b-0"
              >
                <span className="flex items-center gap-2">
                  <StatusDot />
                  <span className="font-mono">{deploy.service}</span>
                  <span style={{ color: "var(--c-blue)" }}>
                    {deploy.version}
                  </span>
                </span>
                <span className="console-muted">{deploy.when}</span>
              </li>
            ))}
          </ul>
        </ConsolePanel>
      </div>
    </ConsoleFrame>
  );
}
