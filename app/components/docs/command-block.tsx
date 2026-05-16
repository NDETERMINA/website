"use client";

import { useState } from "react";
import { DocsCopyButton } from "./copy-button";

export type DocsCommand = { label: string; command: string };

export function DocsCommandBlock({ commands }: { commands: DocsCommand[] }) {
  const [index, setIndex] = useState(0);
  const active = commands[index];

  return (
    <div className="docs-code">
      <div className="docs-tabs" role="tablist">
        {commands.map((c, i) => (
          <button
            key={c.label}
            role="tab"
            type="button"
            aria-selected={i === index}
            onClick={() => setIndex(i)}
            className="docs-tab"
          >
            {c.label}
          </button>
        ))}
        <span className="ml-auto flex items-center pr-2">
          <DocsCopyButton value={active.command} />
        </span>
      </div>
      <pre>{active.command}</pre>
    </div>
  );
}
