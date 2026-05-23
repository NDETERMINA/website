import type { DocPage } from "@/app/lib/docs";
import { getNeighbors, getDocPageGroup, getNavTitle, hrefForDoc } from "@/app/lib/docs";
import { DocsPageHeader } from "./page-header";
import { DocsTOC, type DocsTocItem } from "./toc";
import { DocsPrevNext } from "./prev-next";
import { DocsSubnav } from "./subnav";
import { mdxComponents } from "./mdx";

function tocFor(page: DocPage): DocsTocItem[] {
  return page.headings ?? [];
}

export function DocsArticle({ page }: { page: DocPage }) {
  const { prev, next } = getNeighbors(page.slug);
  const eyebrow = getDocPageGroup(page.slug);
  const tocItems = tocFor(page);
  const Content = page.Content;

  return (
    <>
      <article className="docs-article docs-prose">
        <DocsPageHeader eyebrow={eyebrow} title={page.title} lede={page.description} meta={page.meta} />
        {page.kind === "reference" && tocItems.length > 0 ? (
          <DocsSubnav items={tocItems.map((item) => ({ id: item.id, label: item.title }))} />
        ) : null}
        <Content components={mdxComponents} />
        <DocsPrevNext
          prev={prev ? { title: getNavTitle(prev), href: hrefForDoc(prev) } : undefined}
          next={next ? { title: getNavTitle(next), href: hrefForDoc(next) } : undefined}
        />
      </article>
      <DocsTOC items={tocItems} />
    </>
  );
}
