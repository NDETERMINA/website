import type { ReactNode } from "react";

export function DocsPageHeader({
  eyebrow,
  title,
  lede,
  meta
}: {
  eyebrow?: string;
  title: string;
  lede?: ReactNode;
  meta?: string[];
}) {
  return (
    <header>
      {eyebrow ? <span className="docs-eyebrow">{eyebrow}</span> : null}
      <h1 className="docs-h1">{title}</h1>
      {lede ? <p className="lede" style={{ fontSize: 17, lineHeight: 1.6, color: "var(--docs-text-muted)", margin: "0 0 24px" }}>{lede}</p> : null}
      {meta && meta.length > 0 ? (
        <div className="docs-meta-row">
          {meta.map((m, i) => (
            <span key={m} style={{ display: "inline-flex", alignItems: "center", gap: 12 }}>
              {i > 0 ? <span className="docs-meta-dot" aria-hidden /> : null}
              <span>{m}</span>
            </span>
          ))}
        </div>
      ) : null}
    </header>
  );
}
