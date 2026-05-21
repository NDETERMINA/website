import Link from "next/link";

import { siteLinks } from "@/app/lib/site";

export function Footer() {
  return (
    <footer className="border-t theme-line theme-section">
      <div className="container flex flex-col gap-6 py-10 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-base font-semibold">Determina by NDETERMINA</p>
          <p className="mt-2 max-w-xl text-sm leading-6 theme-muted">
            Behavioral evidence and launch packets for recommender, search, and agent systems.
          </p>
        </div>
        <div className="flex flex-wrap gap-4 text-sm theme-muted">
          <Link href="/docs" className="hover:text-[var(--text)]">
            Docs
          </Link>
          <a href={siteLinks.pyPI} className="hover:text-[var(--text)]">
            PyPI
          </a>
          <a href={siteLinks.githubSource} className="hover:text-[var(--text)]">
            GitHub
          </a>
          <a href={siteLinks.waitlist} className="hover:text-[var(--text)]">
            Domain pilot
          </a>
        </div>
      </div>
    </footer>
  );
}
