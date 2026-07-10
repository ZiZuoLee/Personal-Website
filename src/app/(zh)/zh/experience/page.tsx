import type { Metadata } from "next";
import { SiteShell } from "@/components/shell";
import { ExperiencePage } from "@/components/sections";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  locale: "zh",
  path: "/experience",
  title: "经历",
  description: "AI 产品、交易前端、大规模互联网产品与 C++ 量化开发经历。",
});

export default function Page() {
  return <SiteShell locale="zh" path="/experience"><ExperiencePage locale="zh" /></SiteShell>;
}
