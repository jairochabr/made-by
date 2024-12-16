import Link from "next/link";
import { ReactNode } from "react";

import { ArrowRight } from "@/components/icons/arrow-right";

interface AnchorProps {
  href: string;
  children: ReactNode;
}

export function Anchor({ href, children }: AnchorProps) {
  return (
    <Link
      href={href}
      className="group flex items-center gap-1 hover:underline hover:underline-offset-2"
      aria-label="View the complete SaaS Website Kit"
    >
      {children}
      <ArrowRight className="transition duration-300 group-hover:-rotate-45" />
    </Link>
  );
}
