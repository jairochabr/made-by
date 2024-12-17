import Image from "next/image";
import Link from "next/link";

import { madeByLogo } from "@/assets";

export function Logo() {
  return (
    <Link href="/" className="flex items-center gap-3">
      <div className="relative">
        <div className="absolute bottom-0 top-2 w-full bg-shadow blur-md"></div>
        <Image
          src={madeByLogo}
          alt="Made By company logo"
          className="relative h-12 w-12"
        />
      </div>
      <span className="sr-only font-secondary font-medium text-white lg:not-sr-only">
        made by
      </span>
    </Link>
  );
}
