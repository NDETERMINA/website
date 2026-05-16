"use client";

import { useEffect, useState } from "react";

export function DocsSubnav({ items }: { items: Array<{ id: string; label: string }> }) {
  const [active, setActive] = useState(items[0]?.id);

  useEffect(() => {
    if (typeof window === "undefined" || items.length === 0) return;
    const els = items
      .map((it) => document.getElementById(it.id))
      .filter((el): el is HTMLElement => el !== null);
    if (els.length === 0) return;

    const obs = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.target.getBoundingClientRect().top - b.target.getBoundingClientRect().top);
        if (visible[0]) setActive((visible[0].target as HTMLElement).id);
      },
      { rootMargin: "-120px 0px -65% 0px", threshold: 0 }
    );
    for (const el of els) obs.observe(el);
    return () => obs.disconnect();
  }, [items]);

  return (
    <nav className="docs-subnav" aria-label="Sections">
      {items.map((s) => (
        <a
          key={s.id}
          href={`#${s.id}`}
          className={s.id === active ? "is-active" : undefined}
          aria-current={s.id === active ? "true" : undefined}
        >
          {s.label}
        </a>
      ))}
    </nav>
  );
}
