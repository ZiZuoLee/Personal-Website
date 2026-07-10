import { Analytics } from "@vercel/analytics/next";
import type { ReactNode } from "react";
import { AnalyticsEvents } from "@/components/analytics-events";
import { structuredData } from "@/lib/seo";
import type { Locale } from "@/lib/content";

export function RootDocument({
  locale,
  className,
  children,
}: {
  locale: Locale;
  className: string;
  children: ReactNode;
}) {
  const jsonLd = structuredData(locale);

  return (
    <html lang={locale === "en" ? "en" : "zh-CN"} className={`${className} h-full antialiased`}>
      <body className="min-h-full">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
        {process.env.VERCEL === "1" ? (
          <>
            <AnalyticsEvents />
            <Analytics />
          </>
        ) : null}
      </body>
    </html>
  );
}
