import type { Metadata } from "next";
import { SiteShell } from "@/components/shell";
import { ResumePage } from "@/components/sections";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  locale: "zh",
  path: "/resume",
  title: "简历",
  description: "下载吕子卓的中英文 PDF 简历。",
});

export default function Page() {
  return <SiteShell locale="zh" path="/resume"><ResumePage locale="zh" /></SiteShell>;
}
