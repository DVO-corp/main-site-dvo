import { cn } from "@/lib/utils";

export type DiagramGroup =
  | "delivery"
  | "cluster"
  | "data"
  | "iac"
  | "observe"
  | "secure";

/**
 * The whole offer as one picture: code goes through a pipeline into a
 * cluster, the cluster sits on infrastructure described as code, and
 * everything is watched and backed up.
 *
 * Labels are tool and protocol names, so the drawing needs no translation.
 * `highlight` accents one part (used on service landings); without it every
 * part carries the accent. Pure SVG — no client JavaScript.
 */
export function PlatformDiagram({
  highlight,
  className,
  label,
}: {
  highlight?: DiagramGroup;
  className?: string;
  /** Accessible description of the drawing. */
  label: string;
}) {
  const on = (group: DiagramGroup) => !highlight || highlight === group;
  const box = (group: DiagramGroup) =>
    cn(
      "transition-colors",
      on(group)
        ? "fill-primary/10 stroke-primary"
        : "fill-card stroke-border-strong",
    );
  const text = (group: DiagramGroup) =>
    on(group) ? "fill-foreground" : "fill-muted-foreground";
  const line = (group: DiagramGroup) =>
    on(group) ? "stroke-primary" : "stroke-border-strong";

  const pods = ["api", "api", "worker", "worker", "cron"];
  const stores = ["PostgreSQL", "Redis", "S3"];
  const bars = [10, 16, 12, 22, 14, 26, 18, 30, 20, 24];

  return (
    <svg
      viewBox="0 0 560 376"
      role="img"
      aria-label={label}
      className={cn("h-auto w-full font-mono text-[11px]", className)}
      fill="none"
      strokeWidth={1.2}
    >
      {/* Delivery: git → build/test → deploy */}
      {["git push", "build · test", "deploy"].map((name, index) => (
        <g key={name}>
          <rect
            x={16 + index * 190}
            y={16}
            width={148}
            height={42}
            rx={5}
            className={box("delivery")}
          />
          <text
            x={90 + index * 190}
            y={41}
            textAnchor="middle"
            className={text("delivery")}
            stroke="none"
          >
            {name}
          </text>
          {index < 2 && (
            <path
              d={`M${166 + index * 190} 37 h36 m-6 -5 l6 5 l-6 5`}
              className={cn(line("delivery"), "animate-dash-flow")}
              strokeDasharray="4 4"
            />
          )}
        </g>
      ))}
      <path
        d="M470 58 v30 m-5 -6 l5 6 l5 -6"
        className={cn(line("delivery"), "animate-dash-flow")}
        strokeDasharray="4 4"
      />

      {/* Cluster */}
      <rect
        x={16}
        y={92}
        width={528}
        height={128}
        rx={6}
        className={cn(
          on("cluster") ? "stroke-primary" : "stroke-border-strong",
          "fill-background",
        )}
      />
      <text x={30} y={111} className={text("cluster")} stroke="none">
        Kubernetes · EKS
      </text>
      {pods.map((name, index) => (
        <g key={`${name}-${index}`}>
          <rect
            x={30 + index * 86}
            y={122}
            width={76}
            height={34}
            rx={4}
            className={box("cluster")}
          />
          <text
            x={68 + index * 86}
            y={143}
            textAnchor="middle"
            className={text("cluster")}
            stroke="none"
          >
            {name}
          </text>
        </g>
      ))}
      <rect
        x={460}
        y={122}
        width={70}
        height={34}
        rx={4}
        strokeDasharray="4 4"
        className={line("cluster")}
      />
      <text
        x={495}
        y={143}
        textAnchor="middle"
        className={text("cluster")}
        stroke="none"
      >
        + scale
      </text>

      {/* Data and edge, inside the cluster boundary */}
      {stores.map((name, index) => (
        <g key={name}>
          <rect
            x={30 + index * 130}
            y={170}
            width={118}
            height={34}
            rx={4}
            className={box("data")}
          />
          <text
            x={89 + index * 130}
            y={191}
            textAnchor="middle"
            className={text("data")}
            stroke="none"
          >
            {name}
          </text>
        </g>
      ))}
      <rect
        x={420}
        y={170}
        width={110}
        height={34}
        rx={4}
        className={box("secure")}
      />
      <text
        x={475}
        y={191}
        textAnchor="middle"
        className={text("secure")}
        stroke="none"
      >
        TLS · WAF
      </text>

      {/* Infrastructure as code */}
      <rect
        x={16}
        y={234}
        width={528}
        height={40}
        rx={5}
        className={box("iac")}
      />
      <text x={30} y={258} className={text("iac")} stroke="none">
        Terraform
      </text>
      <text
        x={530}
        y={258}
        textAnchor="end"
        className={text("iac")}
        stroke="none"
      >
        AWS · Hetzner · any cloud
      </text>

      {/* Observability, alerts, backups */}
      <rect
        x={16}
        y={290}
        width={166}
        height={70}
        rx={5}
        className={box("observe")}
      />
      <text x={30} y={310} className={text("observe")} stroke="none">
        metrics · logs
      </text>
      {bars.map((height, index) => (
        <rect
          key={index}
          x={30 + index * 14}
          y={350 - height}
          width={8}
          height={height}
          stroke="none"
          className={on("observe") ? "fill-primary" : "fill-border-strong"}
        />
      ))}

      <rect
        x={197}
        y={290}
        width={166}
        height={70}
        rx={5}
        className={box("observe")}
      />
      <text x={211} y={310} className={text("observe")} stroke="none">
        alerts
      </text>
      <circle
        cx={217}
        cy={336}
        r={5}
        stroke="none"
        className={cn(
          on("observe") ? "fill-primary" : "fill-border-strong",
          "animate-pulse-soft",
        )}
      />
      <text x={232} y={340} className={text("observe")} stroke="none">
        → Telegram · Slack
      </text>

      <rect
        x={378}
        y={290}
        width={166}
        height={70}
        rx={5}
        className={box("secure")}
      />
      <text x={392} y={310} className={text("secure")} stroke="none">
        backups · secrets
      </text>
      <path
        d="M392 338 h18 m-5 -5 l5 5 l-5 5"
        className={line("secure")}
      />
      <text x={418} y={342} className={text("secure")} stroke="none">
        restore tested
      </text>
    </svg>
  );
}

/** Which part of the picture each service landing is about. */
export const LANDING_DIAGRAM: Record<string, DiagramGroup | undefined> = {
  "aws-devops": "iac",
  kubernetes: "cluster",
  "terraform-iac": "iac",
  "ci-cd": "delivery",
  monitoring: "observe",
  "cloud-cost-optimization": "cluster",
  "infrastructure-security": "secure",
  "cloud-migration": "iac",
  "infrastructure-support": "observe",
  "high-load": "cluster",
  "managed-hosting": "cluster",
  "api-development": "delivery",
  "ai-infrastructure": "cluster",
};
