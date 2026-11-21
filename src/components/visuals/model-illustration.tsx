import { cn } from "@/lib/utils";

/**
 * One picture per engagement model, replacing the paragraph that used to
 * describe it. Labels are tool and protocol names only, so the drawings need
 * no translation; the paragraph itself is passed in as the accessible label.
 */

const FRAME = "fill-background stroke-border-strong";
const ACCENT = "fill-primary/10 stroke-primary";
const TEXT = "fill-muted-foreground";
const STRONG = "fill-foreground";

function Arrow({ d }: { d: string }) {
  return (
    <path
      d={d}
      className="animate-dash-flow stroke-primary"
      strokeDasharray="5 5"
      strokeWidth={1.6}
      fill="none"
    />
  );
}

function Server({ x, y, label }: { x: number; y: number; label: string }) {
  return (
    <g>
      <rect x={x} y={y} width={96} height={30} rx={8} className={ACCENT} />
      <circle cx={x + 14} cy={y + 15} r={3.5} className="fill-success" stroke="none" />
      <text x={x + 26} y={y + 19} className={STRONG} stroke="none">
        {label}
      </text>
    </g>
  );
}

/** Our engineers work inside the client's own cloud account. */
function Own() {
  return (
    <>
      {/* Repository on the left */}
      <rect x={16} y={84} width={112} height={72} rx={14} className={FRAME} />
      <text x={72} y={112} textAnchor="middle" className={STRONG} stroke="none">
        git repo
      </text>
      <text x={72} y={132} textAnchor="middle" className={TEXT} stroke="none">
        Terraform · Helm
      </text>
      <Arrow d="M128 120 h44 m-8 -6 l8 6 l-8 6" />
      <text x={150} y={108} textAnchor="middle" className={TEXT} stroke="none">
        PR
      </text>

      {/* The client's account */}
      <rect x={176} y={24} width={248} height={192} rx={20} className={FRAME} />
      <text x={194} y={50} className={STRONG} stroke="none">
        your AWS account
      </text>
      <rect x={338} y={36} width={72} height={22} rx={11} className={ACCENT} />
      <text x={374} y={51} textAnchor="middle" className={STRONG} stroke="none">
        IAM role
      </text>
      <Server x={194} y={72} label="EKS" />
      <Server x={306} y={72} label="RDS" />
      <Server x={194} y={116} label="S3" />
      <Server x={306} y={116} label="VPC" />
      <rect x={194} y={162} width={208} height={36} rx={10} className={FRAME} />
      <text x={298} y={185} textAnchor="middle" className={TEXT} stroke="none">
        metrics · alerts · backups
      </text>
    </>
  );
}

/** The client's code runs on clusters we own and operate. */
function Managed() {
  return (
    <>
      <rect x={16} y={84} width={112} height={72} rx={14} className={FRAME} />
      <text x={72} y={112} textAnchor="middle" className={STRONG} stroke="none">
        your repo
      </text>
      <text x={72} y={132} textAnchor="middle" className={TEXT} stroke="none">
        git push
      </text>
      <Arrow d="M128 120 h44 m-8 -6 l8 6 l-8 6" />
      <text x={150} y={108} textAnchor="middle" className={TEXT} stroke="none">
        CI/CD
      </text>

      <rect x={176} y={24} width={248} height={192} rx={20} className={ACCENT} />
      <text x={194} y={50} className={STRONG} stroke="none">
        our Kubernetes
      </text>
      {[0, 1, 2].map((row) => (
        <g key={row}>
          <rect
            x={194}
            y={66 + row * 34}
            width={208}
            height={26}
            rx={8}
            className={FRAME}
          />
          <circle
            cx={208}
            cy={79 + row * 34}
            r={3.5}
            className="fill-success"
            stroke="none"
          />
          <text x={222} y={83 + row * 34} className={STRONG} stroke="none">
            {["your app", "database", "queue · storage"][row]}
          </text>
          {[0, 1, 2, 3].map((bar) => (
            <rect
              key={bar}
              x={352 + bar * 11}
              y={73 + row * 34}
              width={7}
              height={12}
              rx={2}
              stroke="none"
              className={bar < 3 - row ? "fill-primary" : "fill-border-strong"}
            />
          ))}
        </g>
      ))}
      <text x={298} y={196} textAnchor="middle" className={TEXT} stroke="none">
        TLS · monitoring · backups
      </text>
    </>
  );
}

/** One function behind an HTTP endpoint, billed by usage. */
function Api() {
  return (
    <>
      <rect x={16} y={72} width={120} height={96} rx={14} className={FRAME} />
      <rect x={16} y={72} width={120} height={22} rx={11} className="fill-muted" stroke="none" />
      <text x={76} y={124} textAnchor="middle" className={STRONG} stroke="none">
        your app
      </text>
      <text x={76} y={146} textAnchor="middle" className={TEXT} stroke="none">
        X-Api-Key
      </text>

      <Arrow d="M136 104 h64 m-8 -6 l8 6 l-8 6" />
      <text x={168} y={94} textAnchor="middle" className={TEXT} stroke="none">
        POST
      </text>
      <Arrow d="M204 138 h-64 m8 -6 l-8 6 l8 6" />
      <text x={172} y={158} textAnchor="middle" className={TEXT} stroke="none">
        200 OK
      </text>

      <rect x={204} y={48} width={132} height={144} rx={20} className={ACCENT} />
      <text x={270} y={76} textAnchor="middle" className={STRONG} stroke="none">
        MetaPlatho
      </text>
      <rect x={220} y={92} width={100} height={30} rx={8} className={FRAME} />
      <text x={270} y={111} textAnchor="middle" className={STRONG} stroke="none">
        your function
      </text>
      <rect x={220} y={132} width={100} height={30} rx={8} className={FRAME} />
      <text x={270} y={151} textAnchor="middle" className={TEXT} stroke="none">
        queue · scale
      </text>

      {/* Usage meter */}
      <rect x={352} y={72} width={72} height={96} rx={14} className={FRAME} />
      <text x={388} y={94} textAnchor="middle" className={TEXT} stroke="none">
        usage
      </text>
      {[14, 22, 18, 30, 26].map((height, index) => (
        <rect
          key={index}
          x={364 + index * 10}
          y={150 - height}
          width={6}
          height={height}
          rx={2}
          stroke="none"
          className="fill-primary"
        />
      ))}
    </>
  );
}

const DRAWINGS: Record<string, () => React.ReactNode> = {
  own: Own,
  managed: Managed,
  api: Api,
};

export function ModelIllustration({
  id,
  label,
  className,
}: {
  id: string;
  /** The description the picture stands in for. */
  label: string;
  className?: string;
}) {
  const Drawing = DRAWINGS[id];
  if (!Drawing) return null;

  return (
    <svg
      viewBox="0 0 440 240"
      role="img"
      aria-label={label}
      className={cn("h-auto w-full text-[12px]", className)}
      strokeWidth={1.2}
      fill="none"
    >
      <Drawing />
    </svg>
  );
}
