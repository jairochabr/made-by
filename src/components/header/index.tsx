"use client";
import { useEffect, useState } from "react";

import { Logo } from "./Logo";
import { Menu } from "./Menu";
import { Navigation } from "./Navigation";
import { Actions } from "./Actions";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <header
      className={`sticky top-0 z-50 bg-black/40 py-4 backdrop-blur-lg ${isScrolled ? "border-b border-white border-opacity-30" : ""}`}
    >
      <div className="mx-auto flex w-full items-center justify-between px-4 lg:max-w-7xl">
        <Logo />
        <Menu />
        <Navigation />
        <Actions />
      </div>
    </header>
  );
}
