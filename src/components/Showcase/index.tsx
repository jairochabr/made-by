import { ShowImage } from "./ShowImage";
import { Title } from "../ui/Title";

export function ShowCase() {
  return (
    <section className="bg-gradient-to-b from-black to-brand-primary pb-[171px] pt-[93px]">
      <div className="container">
        <div className="mx-auto mb-14 max-w-[535px] space-y-5 text-center">
          <Title as="h3" className="text-3xl sm:text-5xl">
            Intuitive interface
          </Title>
          <p className="font-secondary text-xl text-white/80">
            Celebrate the joy of accomplishment with an app designed to track
            your progress, motivate your efforts, and celebrate your successes,
            one task at a time.
          </p>
        </div>
        <ShowImage />
      </div>
    </section>
  );
}
