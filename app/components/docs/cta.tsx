import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function DocsCTA({
  title,
  description,
  href,
  action,
  external = false
}: {
  title: string;
  description?: string;
  href: string;
  action: string;
  external?: boolean;
}) {
  const Tag = external ? "a" : Link;
  return (
    <div className="docs-cta">
      <div>
        <p className="docs-cta-title">{title}</p>
        {description ? <p className="docs-cta-desc">{description}</p> : null}
      </div>
      <Tag
        href={href}
        {...(external ? { target: "_blank", rel: "noreferrer" } : {})}
        className="docs-cta-action"
      >
        {action}
        <ArrowRight size={14} aria-hidden />
      </Tag>
    </div>
  );
}
