import type { Metadata } from "next";
import { SiteShell } from "@/components/shell";
import { AcademicsPage } from "@/components/sections";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  locale: "en",
  path: "/academics",
  title: "Academics",
  description: "Fudan Computer Science education, selected coursework, research interests, academic projects, and language background.",
});

export default function Page() {
  return <SiteShell locale="en" path="/academics"><AcademicsPage locale="en" /></SiteShell>;
}
