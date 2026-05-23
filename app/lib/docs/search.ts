import type { DocsSearchEntry } from "./schema";
import { getAllDocPages } from "./nav";

export function getSearchEntries(): DocsSearchEntry[] {
  return getAllDocPages().map((page) => ({
    slug: page.slug,
    title: page.navTitle,
    group: page.group,
    description: page.description
  }));
}
