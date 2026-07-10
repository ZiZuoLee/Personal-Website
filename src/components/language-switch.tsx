import Link from "next/link";
import type { Locale } from "@/lib/content";

export function LanguageSwitch({
  locale,
  href,
  className = "",
}: {
  locale: Locale;
  href: string;
  className?: string;
}) {
  return (
    <Link href={href} className={className} hrefLang={locale === "en" ? "zh-CN" : "en"}>
      {locale === "en" ? "中文" : "EN"}
    </Link>
  );
}
