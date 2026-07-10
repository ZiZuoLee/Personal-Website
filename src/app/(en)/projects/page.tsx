import type { Metadata } from "next";
import { SiteShell } from "@/components/shell";
import { ProjectsPage } from "@/components/sections";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  locale: "en",
  path: "/projects",
  title: "Projects",
  description: "Evidence-backed case studies across AI agents, memory evaluation, full-stack AI products, and trading systems.",
});

export default function Page() {
  return <SiteShell locale="en" path="/projects"><ProjectsPage locale="en" /></SiteShell>;
}
