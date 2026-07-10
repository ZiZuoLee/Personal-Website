"use client";

import { useEffect } from "react";

export function AnalyticsEvents() {
  useEffect(() => {
    function handleClick(event: MouseEvent) {
      const target = event.target;
      if (!(target instanceof Element)) return;
      const link = target.closest<HTMLElement>("[data-analytics-target]");
      const eventTarget = link?.dataset.analyticsTarget;
      if (!eventTarget) return;
      void import("@vercel/analytics").then(({ track }) =>
        track("cta_click", { target: eventTarget }),
      );
    }

    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

  return null;
}
