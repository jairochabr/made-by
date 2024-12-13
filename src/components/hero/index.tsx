import { Background } from "./Background";
import { Subtitle } from "./Subtitle";
import { Title } from "./Title";
import { Description } from "./Description";
import { Button } from "../ui/Button";

export function Hero() {
  return (
    <div className="relative overflow-clip bg-black bg-hero pb-64 pt-14 text-white">
      <Background />
      <div className="container relative">
        <div className="space-y-8 text-center">
          <Subtitle />
          <Title />
          <Description />
          <Button className="px-5 py-4">Get for free</Button>
        </div>
      </div>
    </div>
  );
}
