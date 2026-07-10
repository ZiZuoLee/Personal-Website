import Link from "next/link";

export type NavItem = readonly [label: string, href: string];

export function NavLinks({
  items,
  currentPath,
  mobile = false,
}: {
  items: readonly NavItem[];
  currentPath: string;
  mobile?: boolean;
}) {
  return (
    <>
      {items.map(([label, href]) => {
        const active = currentPath === href || currentPath.startsWith(`${href}/`);
        return (
          <Link
            key={href}
            href={href}
            aria-current={active ? "page" : undefined}
            className={
              mobile
                ? `rounded-2xl px-4 py-3 text-base transition ${active ? "bg-cyan-300/10 text-cyan-100" : "text-slate-300 hover:bg-white/[.05] hover:text-cyan-100"}`
                : `transition ${active ? "text-cyan-100" : "text-slate-300 hover:text-cyan-200"}`
            }
          >
            {label}
          </Link>
        );
      })}
    </>
  );
}
