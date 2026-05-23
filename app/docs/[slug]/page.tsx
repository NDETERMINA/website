import type { Metadata } from "next";
import { notFound, redirect } from "next/navigation";

import { DocsArticle } from "@/app/components/docs/article";
import { getDocPage, getDocPageOrAlias, getStaticDocParams, hrefForDoc } from "@/app/lib/docs";

export function generateStaticParams() {
  return getStaticDocParams();
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
  const { page, alias } = getDocPageOrAlias(slug);
  if (alias) redirect(hrefForDoc(alias.to));
  if (!page) notFound();
  return <DocsArticle page={page} />;
}
