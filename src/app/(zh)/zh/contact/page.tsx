import type { Metadata } from "next";
import { SiteShell } from "@/components/shell";
import { ContactPage } from "@/components/sections";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  locale: "zh",
  path: "/contact",
  title: "联系",
  description: "通过邮件、GitHub 或 LinkedIn 联系吕子卓。",
});

export default function Page() {
  return <SiteShell locale="zh" path="/contact"><ContactPage locale="zh" /></SiteShell>;
}
