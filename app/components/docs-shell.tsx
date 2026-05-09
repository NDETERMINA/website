import Link from "next/link";
import { ArrowRight, ExternalLink } from "lucide-react";

import { CodeBlock } from "@/app/components/code-block";
import { DomainFlowVisual } from "@/app/components/domain-flow-visual";
import { docsNav, getDocPage, type DocPage } from "@/app/lib/docs";
import { siteLinks } from "@/app/lib/site";

function Table({
  headings,
  rows
}: {
  headings: string[];
  rows: string[][];
}) {
  return (
    <>
      <div className="grid gap-3 sm:hidden">
        {rows.map((row) => (
          <div
            key={row.join(":")}
            className="rounded-md border p-3 text-sm theme-line bg-[var(--panel)]"
          >
            {row.map((cell, index) => (
              <div key={`${headings[index]}:${cell}`} className="mb-3 last:mb-0">
                <p className="text-xs font-semibold uppercase theme-accent">
                  {headings[index]}
                </p>
                <p className="mt-1 leading-6 theme-muted [overflow-wrap:anywhere]">
                  {cell}
                </p>
              </div>
            ))}
          </div>
        ))}
      </div>
      <div className="hidden min-w-0 max-w-full overflow-hidden rounded-md border theme-line sm:block">
        <table className="w-full table-fixed border-collapse text-left text-sm">
          <thead className="bg-[var(--panel-strong)] text-[var(--text)]">
            <tr>
              {headings.map((heading) => (
                <th key={heading} className="px-3 py-3 font-semibold">
                  {heading}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr key={row.join(":")} className="border-t theme-line bg-[var(--panel)]">
                {row.map((cell) => (
                  <td
                    key={cell}
                    className="break-words px-3 py-3 leading-6 theme-muted [overflow-wrap:anywhere]"
                  >
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export function DocsShell({ page }: { page: DocPage }) {
  const nextPage = page.next ? getDocPage(page.next) : null;

  return (
    <div className="theme-bg">
      <section className="border-b theme-line theme-section">
        <div className="container py-12">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase theme-accent-strong">Docs</p>
              <h1 className="mt-4 max-w-4xl text-4xl font-semibold tracking-normal md:text-6xl">
                {page.title}
              </h1>
            </div>
            <p className="max-w-2xl text-base leading-7 theme-muted">
              {page.description}
            </p>
          </div>
        </div>
      </section>

      <div className="container grid gap-8 py-10 lg:grid-cols-[260px_minmax(0,1fr)]">
        <aside className="lg:sticky lg:top-20 lg:self-start">
          <nav className="rounded-md border p-4 theme-panel">
            {docsNav.map((group) => (
              <div key={group.group} className="mb-5 last:mb-0">
                <p className="mb-2 text-xs font-semibold uppercase theme-muted">
                  {group.group}
                </p>
                <div className="grid gap-1">
                  {group.pages.map((slug) => {
                    const navPage = getDocPage(slug);
                    if (!navPage) {
                      return null;
                    }
                    const Icon = navPage.icon;
                    const active = navPage.slug === page.slug;
                    return (
                      <Link
                        key={navPage.slug}
                        href={`/docs/${navPage.slug}`}
                        className={`flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium ${
                          active
                            ? "theme-soft"
                            : "theme-muted hover:bg-[var(--panel-strong)] hover:text-[var(--text)]"
                        }`}
                      >
                        <Icon size={16} aria-hidden="true" />
                        {navPage.navTitle}
                      </Link>
                    );
                  })}
                </div>
              </div>
            ))}
          </nav>
        </aside>

        <article className="min-w-0">
          <div className="grid min-w-0 gap-5">
            {page.sections.map((section) => (
              <section
                key={section.title}
                className="min-w-0 rounded-md border p-5 theme-panel md:p-7"
              >
                <h2 className="text-2xl font-semibold tracking-normal text-[var(--text)]">
                  {section.title}
                </h2>
                {section.body ? (
                  <p className="mt-3 max-w-3xl text-base leading-7 theme-muted">
                    {section.body}
                  </p>
                ) : null}
                {section.bullets ? (
                  <ul className="mt-4 grid gap-2 text-sm leading-6 theme-muted">
                    {section.bullets.map((bullet) => (
                      <li key={bullet} className="flex min-w-0 gap-3">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--accent)]" />
                        <span className="min-w-0 [overflow-wrap:anywhere]">
                          {bullet}
                        </span>
                      </li>
                    ))}
                  </ul>
                ) : null}
                {section.code ? (
                  <div className="mt-4">
                    <CodeBlock code={section.code} />
                  </div>
                ) : null}
                {section.table ? (
                  <div className="mt-4">
                    <Table headings={section.table.headings} rows={section.table.rows} />
                  </div>
                ) : null}
                {section.visual === "domain-flow" ? (
                  <div className="mt-4">
                    <DomainFlowVisual compact />
                  </div>
                ) : null}
              </section>
            ))}
          </div>

          <div className="mt-6 flex flex-col gap-3 rounded-md border p-5 theme-panel sm:flex-row sm:items-center sm:justify-between">
            <a
              href={siteLinks.githubProduct}
              className="inline-flex h-11 items-center justify-center gap-2 rounded-md border px-4 text-sm font-semibold theme-button-secondary"
            >
              Source docs
              <ExternalLink size={16} aria-hidden="true" />
            </a>
            {nextPage ? (
              <Link
                href={`/docs/${nextPage.slug}`}
                className="inline-flex h-11 items-center justify-center gap-2 rounded-md px-4 text-sm font-semibold theme-button-primary"
              >
                Next: {nextPage.navTitle}
                <ArrowRight size={16} aria-hidden="true" />
              </Link>
            ) : (
              <Link
                href="/docs"
                className="inline-flex h-11 items-center justify-center gap-2 rounded-md px-4 text-sm font-semibold theme-button-primary"
              >
                Back to docs
                <ArrowRight size={16} aria-hidden="true" />
              </Link>
            )}
          </div>
        </article>
      </div>
    </div>
  );
}
