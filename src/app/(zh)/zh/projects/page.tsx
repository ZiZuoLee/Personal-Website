import type { Metadata } from "next";
import { SiteShell } from "@/components/shell";
import { ProjectsPage } from "@/components/sections";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  locale: "zh",
  path: "/projects",
  title: "项目",
  description: "覆盖 AI Agent、记忆评估、全栈 AI 产品与交易系统的证据型项目案例。",
});

export default function Page() {
  return <SiteShell locale="zh" path="/projects"><ProjectsPage locale="zh" /></SiteShell>;
}
