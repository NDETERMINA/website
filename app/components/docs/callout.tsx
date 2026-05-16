import type { ReactNode } from "react";

type Variant = "note" | "tip" | "warning" | "danger" | "info" | "agent";

const titleFor: Record<Variant, string> = {
  note: "Note",
  tip: "Tip",
  warning: "Warning",
  danger: "Danger",
  info: "Info",
  agent: "For agents"
};

export function DocsCallout({
  variant = "note",
  title,
  children
}: {
  variant?: Variant;
  title?: string;
  children: ReactNode;
}) {
  return (
    <aside className="docs-callout" data-variant={variant}>
      <span className="docs-callout-title">{title ?? titleFor[variant]}</span>
      <span className="docs-callout-body">{children}</span>
    </aside>
  );
}
