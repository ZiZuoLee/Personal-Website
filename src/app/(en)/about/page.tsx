import type { Metadata } from "next";
import { SiteShell } from "@/components/shell";
import { AboutPage } from "@/components/sections";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  locale: "en",
  path: "/about",
  title: "About",
  description: "About Zi Zuo Lee and the connection between AI systems, product engineering, trading, and quant development.",
});

export default function Page() {
  return <SiteShell locale="en" path="/about"><AboutPage locale="en" /></SiteShell>;
}
