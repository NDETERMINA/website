import type { Metadata } from "next";

import { CompanyPage as CompanyContent } from "@/app/components/company/company-page";

export const metadata: Metadata = {
  title: "Company",
  description:
    "Meet Determina, the company started by Alankrit Verma to build release infrastructure for serious AI systems."
};

export default function CompanyPage() {
  return <CompanyContent />;
}
