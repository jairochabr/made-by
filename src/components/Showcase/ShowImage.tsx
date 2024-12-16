"use client";
import Image from "next/image";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

import { appScreen } from "@/assets";

export function ShowImage() {
  const appImage = useRef<HTMLImageElement>(null);
  const { scrollYProgress } = useScroll({
    target: appImage,
    offset: ["start end", "end end"],
  });
  
  const rotateX = useTransform(scrollYProgress, [0,1], [15, 0])
  const opacity = useTransform(scrollYProgress, [0, 1],[.5, 1] )
  return (
    <motion.div
      style={{
        opacity: opacity,
        rotateX: rotateX,
        transformPerspective: "800px",
      }}
    >
      <Image src={appScreen} alt="The product screenshot" ref={appImage} />
    </motion.div>
  );
}

