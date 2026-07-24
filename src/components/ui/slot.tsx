import * as React from "react";
import { cn } from "@/lib/utils";

/**
 * Minimal `asChild` implementation.
 *
 * `@radix-ui/react-slot` creates a React context at module scope without a
 * "use client" directive, which makes any server component that renders a
 * `<Button asChild>` fail to evaluate. We only need prop merging, so this
 * clone-based version keeps buttons and links fully server-rendered with no
 * extra client JavaScript.
 */
export function Slot({
  children,
  className,
  style,
  ...slotProps
}: React.HTMLAttributes<HTMLElement> & { children?: React.ReactNode }) {
  if (!React.isValidElement(children)) return null;

  const childProps = children.props as React.HTMLAttributes<HTMLElement>;

  return React.cloneElement(children as React.ReactElement<Record<string, unknown>>, {
    ...slotProps,
    ...childProps,
    className: cn(className, childProps.className),
    style: { ...style, ...childProps.style },
  });
}
