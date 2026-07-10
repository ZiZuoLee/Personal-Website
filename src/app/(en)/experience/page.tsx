import type { Metadata } from "next";
import { SiteShell } from "@/components/shell";
import { ExperiencePage } from "@/components/sections";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  locale: "en",
  path: "/experience",
  title: "Experience",
  description: "AI product, trading frontend, large-scale internet product, and C++ quant development experience.",
});

export default function Page() {
  return <SiteShell locale="en" path="/experience"><ExperiencePage locale="en" /></SiteShell>;
}
