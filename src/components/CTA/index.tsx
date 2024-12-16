"use client";
import Image from "next/image";
import { useRef } from "react";
import { useScroll, motion, useTransform } from "framer-motion";
import { emojiStar, helix } from "@/assets";

import { Button } from "../ui/Button";
import { Input } from "../ui/Input";
import { Title } from "../ui/Title";

export function CallToAction() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end end"],
  });
  const translateY = useTransform(scrollYProgress, [0, 1], [-40, 40]);
  return (
    <section className="py-32" ref={containerRef}>
      <div className="container">
        <div className="relative mx-auto max-w-80 text-center sm:max-w-[447px]">
          <motion.div style={{ translateY }}>
            <Image
              src={emojiStar}
              alt="..."
              height="293"
              width="293"
              className="absolute -top-[120px] right-[calc(100%+24px)] hidden sm:inline"
            />
          </motion.div>
          <motion.div style={{ translateY }}>
            <Image
              src={helix}
              alt="..."
              height="255"
              width="255"
              className="absolute left-[calc(100%+36px)] top-6 hidden sm:inline"
            />
          </motion.div>

          <Title as="h2" className="text-3.5xl sm:text-5xl">
            Get instant access
          </Title>
          <p className="mb-10 mt-5 font-secondary text-white/60">
            Celebrate the joy of accomplishment with an app designed to track
            your progress and motivate your efforts.
          </p>
          <form className="flex flex-col gap-2.5 sm:flex-row">
            <Input
              type="email"
              placeholder="name@email.com"
              className="flex-1 text-white placeholder:text-white/20"
            />
            <Button>Get access</Button>
          </form>
        </div>
      </div>
    </section>
  );
}
