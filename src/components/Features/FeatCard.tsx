"use client";
import { ReactNode, useEffect, useRef } from "react";
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";

import { Button } from "../ui/Button";
import { Title } from "../ui/Title";

interface FeatCardsProps {
  feature: {
    title: string;
    description: string;
  };
  icon: ReactNode;
}

export function FeatCards({ feature, icon }: FeatCardsProps) {
  const { title, description } = feature;
  const offsetX = useMotionValue(-100);
  const offsetY = useMotionValue(-100);
  const maskImage = useMotionTemplate`
  radial-gradient(100px 100px at ${offsetX}px ${offsetY}px, black, transparent)
  `;
  const border = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const updateMousePosition = (event: MouseEvent) => {
      if (!border.current) {
        return null;
      }
      const borderRect = border.current?.getBoundingClientRect();
      offsetX.set(event.x - borderRect.x);
      offsetY.set(event.y - borderRect.y);
    };
    window.addEventListener("mousemove", updateMousePosition);
    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
    };
  }, [offsetX, offsetY]);
  return (
    <article className="relative h-auto max-w-[375px] rounded-xl border border-white border-opacity-30 bg-black p-10 text-center">
      <motion.div
        className="absolute inset-0 rounded-xl border-2 border-purple-400"
        style={{
          WebkitMaskImage: maskImage,
          maskImage: maskImage,
        }}
        ref={border}
      />
      <Button className="mb-6 px-4 py-4">{icon}</Button>
      <Title as="h3" className="mb-2 text-xl sm:text-lg">
        {title}
      </Title>
      <p className="font-secondary tracking-tighter text-white/60">
        {description}
      </p>
    </article>
  );
}
