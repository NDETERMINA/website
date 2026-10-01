import Link from "next/link";
import { LabHeader, LabFooter } from "@/app/components/lab/site-shell";

export default function NotFound() {
  return <div className="lab-shell"><LabHeader /><main id="main-content" className="lab-container lab-missing"><h1>Page not found.</h1><p>This address doesn’t point to a page. You can return home or browse the documentation.</p><div className="lab-actions"><Link href="/">Return home</Link><Link href="/docs">Browse docs</Link></div></main><LabFooter /></div>;
}
