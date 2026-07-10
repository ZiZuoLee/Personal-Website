import type { Metadata } from "next";
import { SiteShell } from "@/components/shell";
import { ResumePage } from "@/components/sections";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  locale: "en",
  path: "/resume",
  title: "Resume",
  description: "Download Zi Zuo Lee's English or Chinese PDF resume.",
});

export default function Page() {
  return <SiteShell locale="en" path="/resume"><ResumePage locale="en" /></SiteShell>;
}
