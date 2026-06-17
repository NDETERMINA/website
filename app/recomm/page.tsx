import type { Metadata } from "next";

import { SystemPage, systemPages } from "@/app/components/system/system-page";

export const metadata: Metadata = {
  title: "Recommendation Systems",
  description:
    "Rehearse recommendation behavior under production-like cohorts, profile state, candidate pools, and policy thresholds before rollout."
};

export default function RecommPage() {
  return <SystemPage page={systemPages.recomm} />;
}
