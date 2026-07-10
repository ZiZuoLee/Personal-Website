import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";

type TrackedLinkProps = ComponentProps<typeof Link> & {
  children: ReactNode;
  eventTarget: string;
  external?: boolean;
};

export function TrackedLink({ children, eventTarget, external = false, ...props }: TrackedLinkProps) {
  return (
    <Link
      {...props}
      data-analytics-target={eventTarget}
      target={external ? "_blank" : props.target}
      rel={external ? "noopener noreferrer" : props.rel}
    >
      {children}
    </Link>
  );
}
