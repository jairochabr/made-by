"use client";
import { Background } from "./Background";
import { Subtitle } from "./Subtitle";
import { HeroTitle } from "./Title";
import { Content } from "./Content";
import { Button } from "../ui/Button";

export function Hero() {
  return (
    <section className="relative overflow-clip bg-black bg-hero pb-64 pt-14 text-white">
      <Background />
      <div className="container relative">
        <div className="space-y-8 text-center">
          <Subtitle />
          <HeroTitle />
          <Content />
          <Button size="large">Get for free</Button>
        </div>
      </div>
    </section>
  );
}
