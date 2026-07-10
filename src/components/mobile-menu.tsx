import { LanguageSwitch } from "@/components/language-switch";
import { NavLinks, type NavItem } from "@/components/nav-links";
import { TrackedLink } from "@/components/tracked-link";
import type { Locale } from "@/lib/content";

export function MobileMenu({
  locale,
  items,
  resumeHref,
  switchHref,
  currentPath,
}: {
  locale: Locale;
  items: readonly NavItem[];
  resumeHref: string;
  switchHref: string;
  currentPath: string;
}) {
  return (
    <details className="group lg:hidden">
      <summary className="cursor-pointer list-none rounded-full border border-white/10 px-4 py-2 text-sm font-medium text-slate-200 transition hover:border-cyan-300/50 hover:text-cyan-100">
        <span className="group-open:hidden">{locale === "en" ? "Menu" : "菜单"}</span>
        <span className="hidden group-open:inline">{locale === "en" ? "Close" : "关闭"}</span>
      </summary>
      <div className="absolute inset-x-0 top-full border-b border-white/10 bg-[#050814]/98 px-4 pb-5 pt-3 shadow-2xl backdrop-blur-xl">
        <nav aria-label={locale === "en" ? "Mobile navigation" : "移动导航"} className="mx-auto grid max-w-7xl gap-1">
          <NavLinks items={items} currentPath={currentPath} mobile />
          <div className="mt-3 grid grid-cols-2 gap-3 border-t border-white/10 pt-4">
            <LanguageSwitch locale={locale} href={switchHref} className="btn-secondary px-4 py-2" />
            <TrackedLink
              href={resumeHref}
              eventTarget={locale === "en" ? "resume_en_mobile" : "resume_zh_mobile"}
              className="btn-primary px-4 py-2"
            >
              {locale === "en" ? "Download CV" : "下载简历"}
            </TrackedLink>
          </div>
        </nav>
      </div>
    </details>
  );
}
