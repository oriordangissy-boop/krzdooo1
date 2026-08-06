import type { AnchorHTMLAttributes, ReactNode } from "react";

type StaticLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  href: string;
  children: ReactNode;
};

export function StaticLink({ href, children, ...props }: StaticLinkProps) {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
  const staticHref = href.startsWith("/") ? `${basePath}${href}` : href;
  return <a href={staticHref} {...props}>{children}</a>;
}
