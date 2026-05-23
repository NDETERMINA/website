import { DOC_GROUPS, type DocPage, type DocsSidebarGroupData } from "./schema";
import { docAliases, docsPages } from "./registry";

const sortedPages = [...docsPages].sort((a, b) => {
  const groupDelta = DOC_GROUPS.indexOf(a.group) - DOC_GROUPS.indexOf(b.group);
  return groupDelta || a.order - b.order || a.slug.localeCompare(b.slug);
});

export function getAllDocPages(): DocPage[] {
  return sortedPages;
}

export function getDocPage(slug: string): DocPage | undefined {
  const normalized = slug || "overview";
  return sortedPages.find((page) => page.slug === normalized);
}

export function getDocAlias(slug: string) {
  return docAliases.find((alias) => alias.from === slug);
}

export function getDocPageOrAlias(slug: string) {
  const page = getDocPage(slug);
  if (page) return { page };
  const alias = getDocAlias(slug);
  if (alias) return { alias, page: getDocPage(alias.to) };
  return {};
}

export function hrefForDoc(slug: string): string {
  return slug === "overview" ? "/docs" : `/docs/${slug}`;
}

export function getFlatNav() {
  return sortedPages.map((page) => page.slug);
}

export function getNeighbors(slug: string) {
  const flat = getFlatNav();
  const idx = flat.indexOf(slug);
  return {
    prev: idx > 0 ? flat[idx - 1] : undefined,
    next: idx >= 0 && idx < flat.length - 1 ? flat[idx + 1] : undefined
  };
}

export function getNavTitle(slug: string): string {
  return getDocPage(slug)?.navTitle ?? slug;
}

export function getDocPageGroup(slug: string) {
  return getDocPage(slug)?.group ?? "Docs";
}

export function getSidebarGroups(): DocsSidebarGroupData[] {
  return DOC_GROUPS.map((group) => ({
    group,
    pages: sortedPages
      .filter((page) => page.group === group)
      .map((page) => ({
        slug: page.slug,
        navTitle: page.navTitle,
        badge: page.badge
      }))
  })).filter((group) => group.pages.length > 0);
}

export function getStaticDocParams() {
  return sortedPages
    .filter((page) => page.slug !== "overview")
    .map((page) => ({ slug: page.slug }));
}
