import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { profile } from "@/lib/content";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(profile.siteUrl),
  title: "Zi Zuo Lee — AI Systems & Quant Engineering",
  description:
    "Personal portfolio of Zi Zuo Lee, a Fudan CS student building AI systems, full-stack products, trading infrastructure, and C++ quant engineering tools.",
  alternates: {
    canonical: "/",
    languages: {
      en: "/",
      zh: "/zh",
    },
  },
  openGraph: {
    title: "Zi Zuo Lee — AI Systems & Quant Engineering",
    description:
      "Fudan CS student building AI systems, full-stack products, trading infrastructure, and C++ quant engineering tools.",
    url: "/",
    siteName: "Zi Zuo Lee Portfolio",
    images: [
      {
        url: "/og-image.svg",
        width: 1200,
        height: 630,
        alt: "Zi Zuo Lee portfolio preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Zi Zuo Lee — AI Systems & Quant Engineering",
    description:
      "Portfolio covering AI systems, full-stack products, trading infrastructure, and C++ quant engineering.",
    images: ["/og-image.svg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full">{children}</body>
    </html>
  );
}
