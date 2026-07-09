import Link from "next/link";
import type { ReactNode } from "react";
import { NavLinks } from "@/components/nav-links";
import { profile, type Locale } from "@/lib/content";

const nav = {
  en: [
    ["Projects", "/projects"],
    ["Experience", "/experience"],
    ["Resume", "/resume"],
    ["About", "/about"],
    ["Contact", "/contact"],
  ],
  zh: [
    ["项目", "/zh/projects"],
    ["经历", "/zh/experience"],
    ["简历", "/zh/resume"],
    ["关于", "/zh/about"],
    ["联系", "/zh/contact"],
  ],
} as const;

export function SiteShell({
  locale = "en",
  children,
}: {
  locale?: Locale;
  children: ReactNode;
}) {
  const home = locale === "en" ? "/" : "/zh";
  const switchHref = locale === "en" ? "/zh" : "/";

  return (
    <div className="min-h-screen overflow-hidden bg-[#050814] text-slate-100">
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute left-1/2 top-0 h-[560px] w-[560px] -translate-x-1/2 rounded-full bg-cyan-500/20 blur-[120px]" />
        <div className="absolute bottom-0 right-0 h-[480px] w-[480px] rounded-full bg-fuchsia-500/15 blur-[120px]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.045)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.045)_1px,transparent_1px)] bg-[size:48px_48px] [mask-image:radial-gradient(circle_at_top,black,transparent_75%)]" />
      </div>

      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#050814]/75 backdrop-blur-xl">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <Link href={home} className="group flex items-center gap-3">
            <span className="grid size-10 place-items-center rounded-2xl border border-cyan-300/40 bg-cyan-300/10 text-sm font-semibold text-cyan-200 shadow-[0_0_28px_rgba(34,211,238,.2)]">
              ZZ
            </span>
            <span>
              <span className="block text-sm font-semibold tracking-wide">
                {profile.displayName}
              </span>
              <span className="hidden text-xs text-slate-400 sm:block">
                AI Systems · Quant Engineering
              </span>
            </span>
          </Link>

          <div className="hidden items-center gap-7 text-sm md:flex">
            <NavLinks items={nav[locale]} />
          </div>

          <div className="flex items-center gap-3">
            <Link
              href={switchHref}
              className="rounded-full border border-white/10 px-3 py-2 text-xs font-medium text-slate-300 transition hover:border-cyan-300/50 hover:text-cyan-100"
            >
              {locale === "en" ? "中文" : "EN"}
            </Link>
            <a
              href={profile.resumeEn}
              className="hidden rounded-full bg-cyan-300 px-4 py-2 text-xs font-semibold text-slate-950 transition hover:bg-cyan-200 sm:inline-flex"
            >
              {locale === "en" ? "Download CV" : "下载简历"}
            </a>
          </div>
        </nav>

        <div className="flex gap-2 overflow-x-auto px-4 pb-3 text-sm md:hidden">
          <NavLinks items={nav[locale]} mobile />
        </div>
      </header>

      <main>{children}</main>

      <footer className="border-t border-white/10 px-4 py-10 text-sm text-slate-400 sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 {profile.displayName}. Built with Next.js.</p>
          <div className="flex gap-5">
            <a className="hover:text-cyan-200" href={profile.github}>
              GitHub
            </a>
            <a className="hover:text-cyan-200" href={profile.linkedin}>
              LinkedIn
            </a>
            <a className="hover:text-cyan-200" href={`mailto:${profile.email}`}>
              Email
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
