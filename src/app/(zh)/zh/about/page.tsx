import type { Metadata } from "next";
import { SiteShell } from "@/components/shell";
import { AboutPage } from "@/components/sections";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  locale: "zh",
  path: "/about",
  title: "关于",
  description: "了解吕子卓以及 AI 系统、产品工程、交易和量化开发之间的职业连接。",
});

export default function Page() {
  return <SiteShell locale="zh" path="/about"><AboutPage locale="zh" /></SiteShell>;
}
