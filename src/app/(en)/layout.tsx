import type { Metadata } from "next";
import type { ReactNode } from "react";
import { RootDocument } from "@/components/root-document";
import { geistMono, geistSans } from "@/lib/fonts";
import { rootMetadata } from "@/lib/seo";
import "../globals.css";

export const metadata: Metadata = rootMetadata("en");

export default function EnglishRootLayout({ children }: { children: ReactNode }) {
  return <RootDocument locale="en" className={`${geistSans.variable} ${geistMono.variable}`}>{children}</RootDocument>;
}

