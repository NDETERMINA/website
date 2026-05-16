import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { DocsArticle } from "@/app/components/docs/article";
import { docsPages, getDocPage } from "@/app/lib/docs";

export function generateStaticParams() {
  return docsPages
    .filter((p) => p.slug !== "overview")
    .map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const page = getDocPage(slug);
  if (!page) return {};
  return {
    title: page.title,
    description: page.description
  };
}

export default async function DocPage({
  params
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const page = getDocPage(slug);
  if (!page) notFound();
  return <DocsArticle page={page} />;
}
