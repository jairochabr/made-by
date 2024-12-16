"use client";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import { Plus, Minus } from "../icons";

interface QuestionsProps {
  question: string;
  answer: string;
}

export function Questions({ question, answer }: QuestionsProps) {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div
      className="cursor-pointer border-b border-white/30 py-7"
      onClick={handleToggle}
    >
      <div className="flex items-center text-white">
        <span className="flex-1 text-lg font-bold">{question}</span>
        {isOpen ? <Minus /> : <Plus />}
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="text-white/80"
            initial={{
              opacity: 0,
              height: 0,
              marginTop: 0,
            }}
            animate={{
              opacity: 1,
              height: "auto",
              marginTop: "16px",
            }}
            exit={{
              opacity: 0,
              height: 0,
              marginTop: 0,
            }}
          >
            {answer}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
