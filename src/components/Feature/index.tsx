import { FEATURES } from "@/constants";

import { FeatCards } from "./FeatCard";
import { Leaf } from "../icons";

export function Feature() {
  return (
    <div className="my-32 bg-black">
      <div className="container">
        <div className="mx-auto max-w-[535px] text-center">
          <h2 className="mb-5 text-4xl font-semibold text-white">
            Everything you need
          </h2>
          <p className="font-secondary text-lg text-white/80">
            Enjoy customizable lists, team work tools, and smart tracking all in
            one place. Set tasks, get reminders, and see your progress simply
            and quickly.
          </p>
        </div>
        <div className="mt-16 flex flex-col items-center justify-center gap-4 lg:flex-row">
          {FEATURES.map(feature => (
            <FeatCards key={feature.id} icon={<Leaf />} feature={feature} />
          ))}
        </div>
      </div>
    </div>
  );
}
