import { Anchor } from "./Anchor";

export function Banner() {
  return (
    <div className="bg-gradient py-3">
      <div className="container flex justify-center">
        <p className="flex gap-1 font-medium">
          <span className="sr-only sm:not-sr-only">
            This page is included in a free SaaS Website Kit.
          </span>
          <Anchor href="#">View the complete Kit</Anchor>
        </p>
      </div>
    </div>
  );
}
