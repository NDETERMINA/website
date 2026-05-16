import { ArrowRight } from "lucide-react";
import Link from "next/link";

import type { DocPage, DocSection } from "@/app/lib/docs";
import { getNeighbors, getDocPageGroup, getNavTitle } from "@/app/lib/docs";
import { DocsPageHeader } from "./page-header";
import { DocsTOC, type DocsTocItem } from "./toc";
import { DocsCodeBlock } from "./code-block";
import { DocsCommandBlock } from "./command-block";
import { DocsCallout } from "./callout";
import { DocsCard, DocsCardGrid } from "./card";
import { DocsPrevNext } from "./prev-next";
import { DocsCTA } from "./cta";
import { DocsSubnav } from "./subnav";

function slug(s: string) {
  return s
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

function SectionBlock({ section }: { section: DocSection }) {
  const id = slug(section.title);
  return (
    <section>
      <h2 id={id}>{section.title}</h2>
      {section.body ? <p>{section.body}</p> : null}
      {section.bullets ? (
        <ul>
          {section.bullets.map((b) => (
            <li key={b}>{b}</li>
          ))}
        </ul>
      ) : null}
      {section.code ? <DocsCodeBlock code={section.code} /> : null}
      {section.table ? (
        <div className="docs-table-wrap">
          <table className="docs-table">
            <thead>
              <tr>
                {section.table.headings.map((h) => (
                  <th key={h}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {section.table.rows.map((row) => (
                <tr key={row.join("|")}>
                  {row.map((cell, i) => (
                    <td key={`${i}-${cell}`}>{cell}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : null}
    </section>
  );
}

function MentalModelDiagram({ steps }: { steps: string[] }) {
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        alignItems: "center",
        gap: 8,
        padding: "18px 16px",
        margin: "24px 0",
        border: "1px solid var(--docs-border)",
        borderRadius: 8,
        background:
          "radial-gradient(ellipse at top left, var(--docs-accent-soft), transparent 55%), var(--docs-surface)",
        fontFamily: "var(--font-geist-mono), ui-monospace, monospace",
        fontSize: 13
      }}
    >
      {steps.map((s, i) => (
        <span key={s} style={{ display: "inline-flex", alignItems: "center", gap: 8 }}>
          <span
            style={{
              padding: "4px 10px",
              borderRadius: 4,
              border: "1px solid var(--docs-border)",
              background: "var(--docs-bg)",
              color: "var(--docs-accent-strong)"
            }}
          >
            {s}
          </span>
          {i < steps.length - 1 ? (
            <ArrowRight size={13} aria-hidden style={{ color: "var(--docs-text-dim)" }} />
          ) : null}
        </span>
      ))}
    </div>
  );
}

function OverviewBody({ page }: { page: DocPage }) {
  return (
    <>
      {page.cards ? (
        <section>
          <h2 id="start-here">Start here</h2>
          <DocsCardGrid cols={2}>
            {page.cards.map((c) => (
              <DocsCard
                key={c.title}
                title={c.title}
                description={c.description}
                href={c.href}
                cta={c.cta ?? "Read"}
              />
            ))}
          </DocsCardGrid>
        </section>
      ) : null}

      {page.mentalModel ? (
        <section>
          <h2 id="mental-model">The mental model</h2>
          <p>
            Every Evidpath workflow walks the same six nouns. They map one-to-one to entities in
            the dashboard, the SDK, and the on-disk Evidence Bundle.
          </p>
          <MentalModelDiagram steps={page.mentalModel.steps} />
          <div className="docs-table-wrap">
            <table className="docs-table">
              <thead>
                <tr>
                  <th>Noun</th>
                  <th>What it is</th>
                </tr>
              </thead>
              <tbody>
                {page.mentalModel.rows.map((r) => (
                  <tr key={r.noun}>
                    <td>
                      <Link href={r.href}>{r.noun}</Link>
                    </td>
                    <td>{r.desc}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      ) : null}

      {page.sections.map((s) => (
        <SectionBlock key={s.title} section={s} />
      ))}
    </>
  );
}

function QuickstartBody({ page }: { page: DocPage }) {
  if (!page.steps) return null;
  return (
    <>
      {page.steps.map((step, i) => {
        const id = slug(step.title);
        return (
          <div key={step.title} className="docs-step">
            <span className="docs-step-num">{i + 1}</span>
            <h2 id={id}>{step.title}</h2>
            {step.body ? <p>{step.body}</p> : null}
            {step.commands ? <DocsCommandBlock commands={step.commands} /> : null}
            {step.code ? <DocsCodeBlock code={step.code} language={step.language} /> : null}
            {step.callout ? (
              <DocsCallout variant={step.callout.variant} title={step.callout.title}>
                {step.callout.body}
              </DocsCallout>
            ) : null}
            {step.verify ? (
              <div className="docs-verify">
                <span className="docs-verify-label">Verify</span>
                {step.verify}
              </div>
            ) : null}
          </div>
        );
      })}
      <DocsCTA
        title="You're done."
        description="Next: read the Mental Model to understand each of the six nouns in depth."
        href="/docs/swarm-model"
        action="Mental model"
      />
    </>
  );
}

function ReferenceBody({ page }: { page: DocPage }) {
  return (
    <>
      {page.subnav ? <DocsSubnav items={page.subnav} /> : null}
      {page.sections.map((s) => (
        <SectionBlock key={s.title} section={s} />
      ))}
    </>
  );
}

function DefaultBody({ page }: { page: DocPage }) {
  return (
    <>
      {page.sections.map((s) => (
        <SectionBlock key={s.title} section={s} />
      ))}
    </>
  );
}

function tocFor(page: DocPage): DocsTocItem[] {
  if (page.kind === "quickstart" && page.steps) {
    return page.steps.map((s) => ({ id: slug(s.title), title: s.title }));
  }
  if (page.kind === "overview") {
    const items: DocsTocItem[] = [];
    if (page.cards) items.push({ id: "start-here", title: "Start here" });
    if (page.mentalModel) items.push({ id: "mental-model", title: "The mental model" });
    for (const s of page.sections) items.push({ id: slug(s.title), title: s.title });
    return items;
  }
  return page.sections.map((s) => ({ id: slug(s.title), title: s.title }));
}

export function DocsArticle({ page }: { page: DocPage }) {
  const { prev, next } = getNeighbors(page.slug);
  const eyebrow = page.eyebrow ?? getDocPageGroup(page.slug);
  const tocItems = tocFor(page);
  const hrefFor = (s: string) => (s === "overview" ? "/docs" : `/docs/${s}`);

  return (
    <>
      <article className="docs-article docs-prose">
        <DocsPageHeader eyebrow={eyebrow} title={page.title} lede={page.description} />
        {page.kind === "overview" ? (
          <OverviewBody page={page} />
        ) : page.kind === "quickstart" ? (
          <QuickstartBody page={page} />
        ) : page.kind === "reference" ? (
          <ReferenceBody page={page} />
        ) : (
          <DefaultBody page={page} />
        )}
        <DocsPrevNext
          prev={prev ? { title: getNavTitle(prev), href: hrefFor(prev) } : undefined}
          next={next ? { title: getNavTitle(next), href: hrefFor(next) } : undefined}
        />
      </article>
      <DocsTOC items={tocItems} />
    </>
  );
}
