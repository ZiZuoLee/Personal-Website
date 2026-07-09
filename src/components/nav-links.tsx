"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

type NavItem = readonly [label: string, href: string];

export function NavLinks({
  items,
  mobile = false,
}: {
  items: readonly NavItem[];
  mobile?: boolean;
}) {
  const pathname = usePathname();

  return (
    <>
      {items.map(([label, href]) => {
        const active =
          href === "/" || href === "/zh"
            ? pathname === href
            : pathname === href || pathname.startsWith(`${href}/`);

        return (
          <Link
            key={href}
            href={href}
            aria-current={active ? "page" : undefined}
            className={
              mobile
                ? `shrink-0 rounded-full px-3 py-1.5 transition ${
                    active
                      ? "bg-cyan-300/10 text-cyan-100"
                      : "text-slate-400 hover:text-cyan-200"
                  }`
                : `transition ${
                    active ? "text-cyan-100" : "text-slate-300 hover:text-cyan-200"
                  }`
            }
          >
            {label}
          </Link>
        );
      })}
    </>
  );
}
