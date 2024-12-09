import { ArrowRight } from "./icons/arrow-right";

export function Banner() {
  return (
    <div className="bg-gradient py-3">
      <div className="container flex justify-center">
        <p className="flex gap-1 font-medium">
          <span className="sr-only sm:not-sr-only">
            This page is included in a free SaaS Website Kit.
          </span>
          <a
            href="#"
            className="flex items-center gap-1 hover:underline hover:underline-offset-2"
            aria-label="View the complete SaaS Website Kit"
          >
            View the complete Kit
            <ArrowRight />
          </a>
        </p>
      </div>
    </div>
  );
}
