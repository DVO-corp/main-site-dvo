import * as React from "react";
import {
  Activity,
  ArrowRightLeft,
  Blocks,
  Bot,
  Boxes,
  Braces,
  Captions,
  Clapperboard,
  Coins,
  Container,
  Cpu,
  DatabaseBackup,
  Eraser,
  FileArchive,
  Gauge,
  GitBranch,
  HardDrive,
  Layers,
  Lock,
  Mail,
  Microchip,
  Puzzle,
  Rocket,
  Scaling,
  Send,
  Server,
  ServerCog,
  ShieldCheck,
  Shuffle,
  Sparkles,
  Split,
  Timer,
  TrendingDown,
  Type,
  Users,
  Waypoints,
  Workflow,
  Crop,
  type LucideIcon,
} from "lucide-react";

/**
 * Content files reference icons by name so that translations stay plain data.
 * Anything not in this registry falls back to a neutral icon instead of
 * crashing the render.
 */
const registry: Record<string, LucideIcon> = {
  Activity,
  ArrowRightLeft,
  Blocks,
  Bot,
  Boxes,
  Braces,
  Captions,
  Clapperboard,
  Coins,
  Container,
  Cpu,
  Crop,
  DatabaseBackup,
  Eraser,
  FileArchive,
  Gauge,
  GitBranch,
  HardDrive,
  Layers,
  Lock,
  Mail,
  Microchip,
  Puzzle,
  Rocket,
  Scaling,
  Send,
  Server,
  ServerCog,
  ShieldCheck,
  Shuffle,
  Sparkles,
  Split,
  Timer,
  TrendingDown,
  Type,
  Users,
  Waypoints,
  Workflow,
};

export function getIcon(name: string): LucideIcon {
  return registry[name] ?? Boxes;
}

export function Icon({
  name,
  className,
  strokeWidth = 1.6,
}: {
  name: string;
  className?: string;
  strokeWidth?: number;
}) {
  // `createElement` rather than JSX: the component type comes from a lookup,
  // and the registry above guarantees a stable reference per name.
  return React.createElement(getIcon(name), {
    className,
    strokeWidth,
    "aria-hidden": true,
  });
}
