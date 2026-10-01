"use client";

import { useState, type MouseEvent } from "react";
import { Check, Copy } from "lucide-react";

export function DocsCopyButton({ value, label = "Copy" }: { value: string; label?: string }) {
  const [status, setStatus] = useState<"idle" | "copied" | "selected">("idle");

  const onClick = async (event: MouseEvent<HTMLButtonElement>) => {
    const button = event.currentTarget;
    try {
      await navigator.clipboard.writeText(value);
      setStatus("copied");
    } catch {
      const code = button.closest(".docs-code")?.querySelector("pre");
      if (!code) return;
      const range = document.createRange();
      range.selectNodeContents(code);
      const selection = window.getSelection();
      selection?.removeAllRanges();
      selection?.addRange(range);
      setStatus("selected");
    }
    window.setTimeout(() => setStatus("idle"), 2200);
  };

  return (
    <button type="button" onClick={onClick} className="docs-copy-btn" aria-label={status === "selected" ? "Code selected. Press Command C or Control C to copy." : `${label} to clipboard`}>
      {status === "copied" ? <Check size={12} aria-hidden /> : <Copy size={12} aria-hidden />}
      <span aria-live="polite">{status === "copied" ? "Copied" : status === "selected" ? "Selected" : label}</span>
    </button>
  );
}
