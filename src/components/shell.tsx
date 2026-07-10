import Link from "next/link";
import type { ReactNode } from "react";
import { LanguageSwitch } from "@/components/language-switch";
import { MobileMenu } from "@/components/mobile-menu";
import { NavLinks, type NavItem } from "@/components/nav-links";
import { TrackedLink } from "@/components/tracked-link";
import { profile, type Locale } from "@/lib/content";

const nav: Record<Locale, readonly NavItem[]> = {
  en: [
    ["Projects", "/projects"],
    ["Experience", "/experience"],
    ["Academics", "/academics"],
    ["About", "/about"],
    ["Contact", "/contact"],
  ],
  zh: [
    ["项目", "/zh/projects"],
    ["经历", "/zh/experience"],
    ["学术", "/zh/academics"],
    ["关于", "/zh/about"],
    ["联系", "/zh/contact"],
  ],
};

export function SiteShell({
  locale,
  path,
  children,
}: {
  locale: Locale;
  path: string;
  children: ReactNode;
}) {
  const home = locale === "en" ? "/" : "/zh";
  const resumeHref = locale === "en" ? profile.resumeEn : profile.resumeZh;
  const normalizedPath = path === "/" ? "" : path;
  const currentPath = locale === "en" ? normalizedPath || "/" : `/zh${normalizedPath}`;
  const switchHref = locale === "en" ? `/zh${normalizedPath}` : normalizedPath || "/";
  const currentYear = new Date().getFullYear();

  return (
    <div className="relative isolate min-h-screen overflow-x-clip bg-[#050814] text-slate-100">
      <a
        href="#main-content"
        className="sr-only z-[100] rounded-full bg-cyan-300 px-4 py-2 font-semibold text-slate-950 focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
      >
        {locale === "en" ? "Skip to content" : "跳到主要内容"}
      </a>

      <div className="pointer-events-none fixed inset-0 -z-10" aria-hidden="true">
        <div className="absolute left-1/2 top-0 h-[560px] w-[560px] -translate-x-1/2 rounded-full bg-cyan-500/20 blur-[120px]" />
        <div className="absolute bottom-0 right-0 h-[480px] w-[480px] rounded-full bg-fuchsia-500/15 blur-[120px]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.045)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.045)_1px,transparent_1px)] bg-[size:48px_48px] [mask-image:radial-gradient(circle_at_top,black,transparent_75%)]" />
      </div>

      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#050814]/85 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-5 px-4 py-4 sm:px-6 lg:px-8">
          <Link href={home} className="group flex min-w-0 items-center gap-3">
            <span className="grid size-10 shrink-0 place-items-center rounded-2xl border border-cyan-300/40 bg-cyan-300/10 text-sm font-semibold text-cyan-200 shadow-[0_0_28px_rgba(34,211,238,.2)]">
              ZZ
            </span>
            <span className="min-w-0">
              <span className="block truncate text-sm font-semibold tracking-wide">{profile.displayName}</span>
              <span className="hidden text-xs text-slate-400 sm:block">AI Systems · Quant Engineering</span>
            </span>
          </Link>

          <nav aria-label={locale === "en" ? "Primary navigation" : "主要导航"} className="hidden items-center gap-6 text-sm lg:flex">
            <NavLinks items={nav[locale]} currentPath={currentPath} />
          </nav>

          <div className="hidden shrink-0 items-center gap-3 lg:flex">
            <LanguageSwitch
              locale={locale}
              href={switchHref}
              className="rounded-full border border-white/10 px-3 py-2 text-xs font-medium text-slate-300 transition hover:border-cyan-300/50 hover:text-cyan-100"
            />
            <TrackedLink
              href={resumeHref}
              eventTarget={locale === "en" ? "resume_en_header" : "resume_zh_header"}
              className="rounded-full bg-cyan-300 px-4 py-2 text-xs font-semibold text-slate-950 transition hover:bg-cyan-200"
            >
              {locale === "en" ? "Download CV" : "下载简历"}
            </TrackedLink>
          </div>

          <MobileMenu
            locale={locale}
            items={nav[locale]}
            resumeHref={resumeHref}
            switchHref={switchHref}
            currentPath={currentPath}
          />
        </div>
      </header>

      <main id="main-content">{children}</main>

      <footer className="border-t border-white/10 px-4 py-10 text-sm text-slate-400 sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <p>© {currentYear} {profile.displayName}. Built with Next.js.</p>
          <div className="flex flex-wrap gap-5">
            <TrackedLink className="hover:text-cyan-200" href={profile.github} eventTarget="github_footer" external>
              GitHub
            </TrackedLink>
            <TrackedLink className="hover:text-cyan-200" href={profile.linkedin} eventTarget="linkedin_footer" external>
              LinkedIn
            </TrackedLink>
            <TrackedLink className="hover:text-cyan-200" href={`mailto:${profile.email}`} eventTarget="email_footer">
              Email
            </TrackedLink>
          </div>
        </div>
      </footer>
    </div>
  );
}
