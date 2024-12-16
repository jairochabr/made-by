"use client";
import { cursor, message } from "@/assets";
import Image from "next/image";

import { motion } from "framer-motion";

import { Title } from "../ui/Title";

export function HeroTitle() {
  return (
    <div className="relative inline-flex">
      <Title size="xl" as="h1">
        One Task <br /> at a Time
      </Title>
      <motion.div
        className="absolute right-[476px] top-6 hidden sm:inline lg:right-[492px] lg:top-32"
        drag
        dragSnapToOrigin
      >
        <Image
          src={cursor}
          alt="..."
          width="200"
          height="200"
          className="max-w-none"
          draggable="false"
        />
      </motion.div>
      <motion.div
        className="absolute left-[498px] top-[56px] hidden sm:inline lg:left-[510px]"
        drag
        dragSnapToOrigin
      >
        <Image
          src={message}
          alt="..."
          width="200"
          height="200"
          className="max-w-none"
          draggable="false"
        />
      </motion.div>
    </div>
  );
}
