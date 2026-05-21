import Link from "next/link";
import { BookOpen, ListChecks } from "lucide-react";

import { ThemeToggle } from "@/app/components/theme-toggle";

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b theme-line bg-[color-mix(in_srgb,var(--bg)_88%,transparent)] backdrop-blur">
      <div className="container flex h-16 items-center justify-between gap-4">
        <Link href="/" className="flex min-w-0 items-baseline gap-2">
          <span className="text-lg font-semibold tracking-normal text-[var(--text)]">Determina</span>
          <span className="hidden text-sm theme-muted sm:inline">by NDETERMINA</span>
          <span className="hidden rounded-md border px-2 py-1 text-xs font-semibold theme-line theme-soft md:inline">
            Domain pilots
          </span>
        </Link>
        <nav className="flex items-center gap-1 sm:gap-2">
          <Link
            href="/docs"
            className="inline-flex h-10 items-center gap-2 rounded-md px-3 text-sm font-medium text-[var(--text)] hover:bg-[var(--panel-strong)] focus:outline-none focus:ring-2 focus:ring-[var(--accent)]"
          >
            <BookOpen size={17} aria-hidden="true" />
            <span className="hidden sm:inline">Docs</span>
          </Link>
          <Link
            href="/docs/cli-reference"
            className="inline-flex h-10 items-center gap-2 rounded-md px-3 text-sm font-medium text-[var(--text)] hover:bg-[var(--panel-strong)] focus:outline-none focus:ring-2 focus:ring-[var(--accent)]"
          >
            <ListChecks size={17} aria-hidden="true" />
            <span className="hidden sm:inline">CLI</span>
          </Link>
          <ThemeToggle />
        </nav>
      </div>
    </header>
  );
}
