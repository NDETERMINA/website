"use client";

import { useState } from "react";
import { Check, Copy } from "lucide-react";

export function DocsCopyButton({ value, label = "Copy" }: { value: string; label?: string }) {
  const [copied, setCopied] = useState(false);

  const onClick = () => {
    navigator.clipboard.writeText(value).then(() => {
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1400);
    });
  };

  return (
    <button type="button" onClick={onClick} className="docs-copy-btn" aria-label={`${label} to clipboard`}>
      {copied ? <Check size={12} aria-hidden /> : <Copy size={12} aria-hidden />}
      <span>{copied ? "Copied" : label}</span>
    </button>
  );
}
