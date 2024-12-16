import Link from "next/link";

import { SOCIALS } from "@/constants";

export function Social() {
  return (
    <div className="flex items-center justify-center gap-3">
      {SOCIALS.map((link, index) => (
        <Link key={index} href={link.href}>
          <link.icon />
          <span className="sr-only">{link.label}</span>
        </Link>
      ))}
    </div>
  );
}
