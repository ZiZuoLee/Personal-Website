import type { Metadata } from "next";
import type { ReactNode } from "react";
import { RootDocument } from "@/components/root-document";
import { geistMono, geistSans } from "@/lib/fonts";
import { rootMetadata } from "@/lib/seo";
import "../globals.css";

export const metadata: Metadata = rootMetadata("zh");

export default function ChineseRootLayout({ children }: { children: ReactNode }) {
  return <RootDocument locale="zh" className={`${geistSans.variable} ${geistMono.variable}`}>{children}</RootDocument>;
}

