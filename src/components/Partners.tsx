import Image from "next/image";
import { PARTNERS } from "@/constants";

export function Partners() {
  return (
    <div className="mt-2 text-white">
      <div className="container">
        <h2 className="text-center font-secondary text-xl text-white/70">
          Trusted by the world’s most innovative teams
        </h2>
        <div className="mt-9 overflow-hidden
         before:absolute after:absolute before:h-full after:h-full before:w-5 after:w-5 relative after:right-0 before:left-0 before:top-0 after:top-0 before:bg-[linear-gradient(to_left,#000,rgb(0,0,0,0))] after:bg-[linear-gradient(to_right,#000,rgb(0,0,0,0))]">
          <div className="flex items-center gap-16">
            {PARTNERS.map((partner) => (
              <Image
                key={partner.id}
                src={partner.src}
                alt={partner.alt}
                className="h-8 w-auto flex-none"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
