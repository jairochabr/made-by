import Link from "next/link";

import { NAVIGATION } from "@/constants";

export function Navigation() {
  return (
    <nav className="hidden items-center gap-6 font-secondary md:flex">
      {NAVIGATION.map((link, index) => (
        <Link
          key={index}
          href={link.url}
          className="text-white text-opacity-60 transition hover:text-opacity-100"
        >
          {link.title}
        </Link>
      ))}
    </nav>
  );
}
