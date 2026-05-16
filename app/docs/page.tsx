import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { DocsArticle } from "@/app/components/docs/article";
import { getDocPage } from "@/app/lib/docs";

export const metadata: Metadata = {
  title: "Docs",
  description:
    "Deterministic interaction testing for recommender, search, and agent systems."
};

export default function DocsOverviewPage() {
  const page = getDocPage("overview");
  if (!page) notFound();
  return <DocsArticle page={page} />;
}
