import type { Metadata } from "next";
import { SiteShell } from "@/components/shell";
import { HomePage } from "@/components/sections";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  locale: "en",
  path: "/",
  title: "Zi Zuo Lee — AI Systems & Quant Engineering",
  description: "Fudan CS student building practical AI systems, full-stack products, trading infrastructure, and C++ quant engineering tools.",
});

export default function Home() {
  return <SiteShell locale="en" path="/"><HomePage locale="en" /></SiteShell>;
}
