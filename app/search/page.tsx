import type { Metadata } from "next";

import { SystemPage, systemPages } from "@/app/components/system/system-page";

export const metadata: Metadata = {
  title: "Search And RAG Systems",
  description:
    "Rehearse retrieval, citation, source freshness, and support behavior before stale search results reach users."
};

export default function SearchPage() {
  return <SystemPage page={systemPages.search} />;
}
