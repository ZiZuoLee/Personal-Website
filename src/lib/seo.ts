import type { Metadata } from "next";
import { profile, type Locale, type Project } from "@/lib/content";

const defaultDescription = {
  en: "Portfolio of Zi Zuo Lee, a Fudan CS student building AI systems, full-stack products, trading infrastructure, and C++ quant engineering tools.",
  zh: "吕子卓的个人作品集：复旦计算机本科生，关注 AI 系统、全栈产品、交易基础设施与 C++ 量化工程。",
};

function localizedPath(locale: Locale, path: string) {
  const normalized = path === "/" ? "" : path;
  return locale === "en" ? normalized || "/" : `/zh${normalized}`;
}

export function pageMetadata({
  locale,
  path,
  title,
  description,
}: {
  locale: Locale;
  path: string;
  title: string;
  description: string;
}): Metadata {
  const canonical = localizedPath(locale, path);
  const english = localizedPath("en", path);
  const chinese = localizedPath("zh", path);

  return {
    title,
    description,
    alternates: {
      canonical,
      languages: {
        en: english,
        "zh-CN": chinese,
      },
    },
    openGraph: {
      title,
      description,
      url: canonical,
      siteName: "Zi Zuo Lee Portfolio",
      images: [
        {
          url: "/og-image.svg",
          width: 1200,
          height: 630,
          alt: "Zi Zuo Lee — AI Systems and Quant Engineering",
        },
      ],
      locale: locale === "en" ? "en_US" : "zh_CN",
      alternateLocale: locale === "en" ? ["zh_CN"] : ["en_US"],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/og-image.svg"],
    },
  };
}

export function projectMetadata(project: Project, locale: Locale): Metadata {
  const copy = project[locale];
  return pageMetadata({
    locale,
    path: `/projects/${project.slug}`,
    title: copy.title,
    description: copy.summary,
  });
}

export function rootMetadata(locale: Locale): Metadata {
  return {
    metadataBase: new URL(profile.siteUrl),
    title: {
      default:
        locale === "en"
          ? "Zi Zuo Lee — AI Systems & Quant Engineering"
          : "吕子卓 — AI 系统与量化工程",
      template: "%s | Zi Zuo Lee",
    },
    description: defaultDescription[locale],
    applicationName: "Zi Zuo Lee Portfolio",
    authors: [{ name: profile.displayName, url: profile.siteUrl }],
    creator: profile.displayName,
    keywords: [
      "Zi Zuo Lee",
      "Fudan University",
      "AI systems",
      "LLM agents",
      "quant engineering",
      "C++",
      "Next.js",
    ],
  };
}

export function structuredData(locale: Locale) {
  return [
    {
      "@context": "https://schema.org",
      "@type": "Person",
      name: profile.displayName,
      alternateName: locale === "zh" ? "吕子卓" : profile.name,
      url: profile.siteUrl,
      image: `${profile.siteUrl.replace(/\/$/, "")}${profile.avatar}`,
      email: `mailto:${profile.email}`,
      alumniOf: {
        "@type": "CollegeOrUniversity",
        name: "Fudan University",
      },
      sameAs: [profile.github, profile.linkedin],
      knowsAbout: [
        "AI agents",
        "LLM evaluation",
        "retrieval systems",
        "quant engineering",
        "full-stack development",
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      name: "Zi Zuo Lee Portfolio",
      url: profile.siteUrl,
      inLanguage: locale === "en" ? "en" : "zh-CN",
      author: {
        "@type": "Person",
        name: profile.displayName,
      },
    },
  ];
}

