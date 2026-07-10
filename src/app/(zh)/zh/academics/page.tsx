import type { Metadata } from "next";
import { SiteShell } from "@/components/shell";
import { AcademicsPage } from "@/components/sections";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  locale: "zh",
  path: "/academics",
  title: "学术背景",
  description: "复旦计算机教育、核心课程、研究兴趣、学术项目与语言背景。",
});

export default function Page() {
  return <SiteShell locale="zh" path="/academics"><AcademicsPage locale="zh" /></SiteShell>;
}
