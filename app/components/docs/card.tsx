import Link from "next/link";
import { ArrowRight, type LucideIcon } from "lucide-react";
import type { ReactNode } from "react";

export function DocsCardGrid({
  children,
  cols = 2
}: {
  children: ReactNode;
  cols?: 2 | 3;
}) {
  return (
    <div className="docs-card-grid" data-cols={cols}>
      {children}
    </div>
  );
}

export function DocsCard({
  href,
  icon: Icon,
  title,
  description,
  cta
}: {
  href: string;
  icon?: LucideIcon;
  title: string;
  description: string;
  cta?: string;
}) {
  return (
    <Link href={href} className="docs-card">
      {Icon ? (
        <span className="docs-card-icon">
          <Icon size={15} aria-hidden />
        </span>
      ) : null}
      <h3 className="docs-card-title">{title}</h3>
      <p className="docs-card-desc">{description}</p>
      {cta ? (
        <span className="docs-card-arrow">
          {cta} <ArrowRight size={12} aria-hidden />
        </span>
      ) : null}
    </Link>
  );
}
