"use client";
import { motion } from "framer-motion";
import { PARTNERS } from "@/constants";

import { Partner } from "./Partner";
import { Gradient } from "./Gradient";

export function Partners() {
  const partnersToRender = [...PARTNERS, ...PARTNERS];
  return (
    <div className="mt-2 text-white">
      <div className="container">
        <h3 className="text-center font-secondary text-xl text-white/70">
          Trusted by the world’s most innovative teams
        </h3>
        <div className="relative mt-9 flex overflow-hidden">
          <Gradient position="left" />
          <Gradient position="right" />
          <motion.div
            transition={{ duration: 10, ease: "linear", repeat: Infinity }}
            initial={{ translateX: 0 }}
            animate={{ translateX: "-50%" }}
            className="flex flex-none items-center justify-center gap-16 pr-16"
          >
            {partnersToRender.map((partner, index) => (
              <Partner key={index} src={partner.src} alt={partner.alt} />
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
