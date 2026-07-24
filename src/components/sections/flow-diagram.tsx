"use client";

import * as React from "react";
import { motion, useReducedMotion } from "motion/react";
import {
  Activity,
  Braces,
  Container,
  Cpu,
  Globe,
  HardDrive,
  Microchip,
  ShieldCheck,
  Timer,
  type LucideIcon,
} from "lucide-react";
import { cn } from "@/lib/utils";
import type { Dictionary } from "@/content/locales";

type NodeId =
  | "request"
  | "gateway"
  | "queue"
  | "k8s"
  | "cpu"
  | "gpu"
  | "storage"
  | "api"
  | "monitoring";

/** Layout in SVG user units; the viewBox scales it to the container. */
const GEOMETRY: Record<NodeId, { x: number; y: number; icon: LucideIcon }> = {
  request: { x: 100, y: 200, icon: Globe },
  gateway: { x: 300, y: 132, icon: ShieldCheck },
  queue: { x: 300, y: 268, icon: Timer },
  k8s: { x: 520, y: 64, icon: Container },
  cpu: { x: 520, y: 200, icon: Cpu },
  gpu: { x: 520, y: 336, icon: Microchip },
  storage: { x: 748, y: 64, icon: HardDrive },
  api: { x: 748, y: 200, icon: Braces },
  monitoring: { x: 748, y: 336, icon: Activity },
};

const EDGES: [NodeId, NodeId][] = [
  ["request", "gateway"],
  ["request", "queue"],
  ["gateway", "k8s"],
  ["gateway", "queue"],
  ["queue", "cpu"],
  ["queue", "gpu"],
  ["k8s", "cpu"],
  ["k8s", "gpu"],
  ["cpu", "storage"],
  ["gpu", "storage"],
  ["cpu", "api"],
  ["storage", "api"],
  ["k8s", "monitoring"],
  ["gpu", "monitoring"],
];

/** Visual grouping used by the stacked mobile layout. */
const STAGES: NodeId[][] = [
  ["request"],
  ["gateway", "queue"],
  ["k8s", "cpu", "gpu"],
  ["storage", "api", "monitoring"],
];

const NODE_W = 170;
const NODE_H = 56;

function edgePath(from: NodeId, to: NodeId) {
  const a = GEOMETRY[from];
  const b = GEOMETRY[to];
  const x1 = a.x + NODE_W / 2;
  const x2 = b.x - NODE_W / 2;
  const gap = Math.max((x2 - x1) * 0.55, 26);
  return `M ${x1} ${a.y} C ${x1 + gap} ${a.y}, ${x2 - gap} ${b.y}, ${x2} ${b.y}`;
}

export function FlowDiagram({ dict }: { dict: Dictionary }) {
  const nodes = dict.home.diagram.nodes;
  const [activeId, setActiveId] = React.useState<NodeId | null>(null);
  const reduced = useReducedMotion();

  const active = nodes.find((n) => n.id === activeId) ?? null;

  const isDimmed = (id: string) =>
    activeId !== null &&
    activeId !== id &&
    !EDGES.some(
      ([from, to]) =>
        (from === activeId && to === id) || (to === activeId && from === id),
    );

  const isEdgeActive = (from: NodeId, to: NodeId) =>
    activeId === from || activeId === to;

  return (
    <div className="flex flex-col gap-5">
      {/* Wide layout: a real diagram with animated connections. */}
      <div className="relative hidden overflow-hidden rounded-2xl border border-border bg-card/40 p-2 md:block">
        <svg
          viewBox="0 0 900 400"
          className="h-auto w-full"
          role="img"
          aria-label={dict.home.diagram.title}
        >
          <defs>
            <linearGradient id="flow-line" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="var(--primary)" stopOpacity="0.5" />
              <stop offset="100%" stopColor="var(--accent)" stopOpacity="0.5" />
            </linearGradient>
          </defs>

          {EDGES.map(([from, to]) => {
            const activeEdge = isEdgeActive(from, to);
            const dim = activeId !== null && !activeEdge;
            return (
              <g key={`${from}-${to}`}>
                <path
                  d={edgePath(from, to)}
                  fill="none"
                  stroke="url(#flow-line)"
                  strokeWidth={activeEdge ? 2 : 1.25}
                  opacity={dim ? 0.15 : activeEdge ? 1 : 0.55}
                  className="transition-all duration-300"
                />
                {!reduced && (
                  <path
                    d={edgePath(from, to)}
                    fill="none"
                    stroke="var(--accent)"
                    strokeWidth={activeEdge ? 2.4 : 1.6}
                    strokeLinecap="round"
                    strokeDasharray="3 21"
                    opacity={dim ? 0.1 : activeEdge ? 0.95 : 0.4}
                    className="animate-dash-flow transition-opacity duration-300"
                  />
                )}
              </g>
            );
          })}

          {nodes.map((node) => {
            const geo = GEOMETRY[node.id as NodeId];
            if (!geo) return null;
            const NodeIcon = geo.icon;
            const selected = activeId === node.id;
            const dim = isDimmed(node.id);

            return (
              <g
                key={node.id}
                tabIndex={0}
                role="button"
                aria-pressed={selected}
                aria-label={node.label}
                onMouseEnter={() => setActiveId(node.id as NodeId)}
                onMouseLeave={() => setActiveId(null)}
                onFocus={() => setActiveId(node.id as NodeId)}
                onBlur={() => setActiveId(null)}
                onClick={() =>
                  setActiveId((prev) =>
                    prev === node.id ? null : (node.id as NodeId),
                  )
                }
                className="cursor-pointer outline-none [&:focus-visible>rect]:stroke-ring"
                opacity={dim ? 0.35 : 1}
                style={{ transition: "opacity 300ms ease" }}
              >
                <rect
                  x={geo.x - NODE_W / 2}
                  y={geo.y - NODE_H / 2}
                  width={NODE_W}
                  height={NODE_H}
                  rx={14}
                  fill="var(--card)"
                  stroke={selected ? "var(--primary)" : "var(--border-strong)"}
                  strokeWidth={selected ? 2 : 1}
                  className="transition-all duration-300"
                />
                <foreignObject
                  x={geo.x - NODE_W / 2}
                  y={geo.y - NODE_H / 2}
                  width={NODE_W}
                  height={NODE_H}
                >
                  <div className="flex h-full items-center gap-2.5 px-3.5">
                    <NodeIcon
                      className={cn(
                        "size-[1.15rem] shrink-0",
                        selected ? "text-primary" : "text-muted-foreground",
                      )}
                      strokeWidth={1.7}
                      aria-hidden
                    />
                    <span className="truncate text-[0.82rem] leading-tight font-medium text-foreground">
                      {node.label}
                    </span>
                  </div>
                </foreignObject>
              </g>
            );
          })}
        </svg>
      </div>

      {/* Narrow layout: the same nodes as stacked, tappable chips. */}
      <div className="flex flex-col gap-3 md:hidden">
        {STAGES.map((stage, index) => (
          <div key={index} className="flex flex-col gap-2">
            <div className="grid grid-cols-1 gap-2 xs:grid-cols-2">
              {stage.map((id) => {
                const node = nodes.find((n) => n.id === id);
                if (!node) return null;
                const NodeIcon = GEOMETRY[id].icon;
                const selected = activeId === id;
                return (
                  <button
                    key={id}
                    type="button"
                    aria-pressed={selected}
                    onClick={() =>
                      setActiveId((prev) => (prev === id ? null : id))
                    }
                    className={cn(
                      "flex items-center gap-2.5 rounded-xl border px-3.5 py-3 text-left transition-colors",
                      selected
                        ? "border-primary/60 bg-primary/5"
                        : "border-border bg-card/50",
                    )}
                  >
                    <NodeIcon
                      className={cn(
                        "size-[1.1rem] shrink-0",
                        selected ? "text-primary" : "text-muted-foreground",
                      )}
                      strokeWidth={1.7}
                      aria-hidden
                    />
                    <span className="text-sm font-medium">{node.label}</span>
                  </button>
                );
              })}
            </div>
            {index < STAGES.length - 1 && (
              <div
                aria-hidden
                className="mx-auto h-4 w-px bg-gradient-to-b from-primary/50 to-accent/30"
              />
            )}
          </div>
        ))}
      </div>

      {/* Description panel — reserves height so selection causes no shift. */}
      <div className="min-h-20 rounded-xl border border-border bg-elevated/50 px-5 py-4">
        <motion.div
          key={active?.id ?? "empty"}
          initial={reduced ? false : { opacity: 0, y: 4 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.22 }}
        >
          {active ? (
            <>
              <p className="text-sm font-semibold text-foreground">
                {active.label}
              </p>
              <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                {active.desc}
              </p>
            </>
          ) : (
            <p className="text-sm text-muted-foreground">
              {dict.home.diagram.hint}
            </p>
          )}
        </motion.div>
      </div>
    </div>
  );
}
