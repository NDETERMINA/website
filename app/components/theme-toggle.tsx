"use client";

import { Moon, Sun } from "lucide-react";
import { useSyncExternalStore } from "react";

type Theme = "dark" | "light";

function getCurrentTheme(): Theme {
  if (typeof document === "undefined") {
    return "light";
  }

  return document.documentElement.dataset.theme === "light" ? "light" : "dark";
}

function subscribe(callback: () => void) {
  window.addEventListener("storage", callback);
  window.addEventListener("determina-theme-change", callback);

  return () => {
    window.removeEventListener("storage", callback);
    window.removeEventListener("determina-theme-change", callback);
  };
}

export function ThemeToggle() {
  const theme = useSyncExternalStore(subscribe, getCurrentTheme, () => "light");

  const toggleTheme = () => {
    const nextTheme: Theme = getCurrentTheme() === "dark" ? "light" : "dark";
    document.documentElement.dataset.theme = nextTheme;
    localStorage.setItem("determina-theme", nextTheme);
    window.dispatchEvent(new Event("determina-theme-change"));
  };

  const Icon = theme === "dark" ? Sun : Moon;
  const label = theme === "dark" ? "Use light mode" : "Use dark mode";

  return (
    <button
      type="button"
      aria-label={label}
      title={label}
      onClick={toggleTheme}
      className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-md border theme-line theme-button-secondary focus:outline-none focus:ring-2 focus:ring-[var(--accent)]"
    >
      <Icon size={17} aria-hidden="true" />
    </button>
  );
}
