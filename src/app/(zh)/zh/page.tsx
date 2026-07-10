import type { Metadata } from "next";
import { SiteShell } from "@/components/shell";
import { HomePage } from "@/components/sections";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  locale: "zh",
  path: "/",
  title: "吕子卓 — AI 系统与量化工程",
  description: "复旦计算机本科生，构建实用的 AI 系统、全栈产品、交易基础设施与 C++ 量化工程工具。",
});

export default function Page() {
  return <SiteShell locale="zh" path="/"><HomePage locale="zh" /></SiteShell>;
}
