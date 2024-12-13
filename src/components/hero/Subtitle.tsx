import Link from "next/link";
import { ArrowRight } from "../icons/arrow-right";

export function Subtitle() {
  return (
    <div>
      <p className="inline-flex gap-1 rounded-lg border border-white/30 bg-text_gradient bg-clip-text px-3 py-1 font-secondary text-sm font-medium text-transparent [-webkit-background-clip:text]">
        Version 2.0 is here
        <Link href="/" className="group flex items-center gap-1 text-white">
          Read more
          <ArrowRight className="transition duration-300 group-hover:-rotate-45" />
        </Link>
      </p>
    </div>
  );
}
