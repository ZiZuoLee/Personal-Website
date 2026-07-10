import type { Metadata } from "next";
import { SiteShell } from "@/components/shell";
import { ContactPage } from "@/components/sections";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  locale: "en",
  path: "/contact",
  title: "Contact",
  description: "Contact Zi Zuo Lee by email, GitHub, or LinkedIn.",
});

export default function Page() {
  return <SiteShell locale="en" path="/contact"><ContactPage locale="en" /></SiteShell>;
}
