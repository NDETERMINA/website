import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { DocsShell } from "@/app/components/docs-shell";
import { Footer } from "@/app/components/footer";
import { Header } from "@/app/components/header";
import { docsPages, getDocPage } from "@/app/lib/docs";

export function generateStaticParams() {
  return docsPages.map((page) => ({
    slug: page.slug
  }));
}

export async function generateMetadata({
  params
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const page = getDocPage(slug);
  if (!page) {
    return {};
  }
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

  if (!page) {
    notFound();
  }

  return (
    <main>
      <Header />
      <DocsShell page={page} />
      <Footer />
    </main>
  );
}
