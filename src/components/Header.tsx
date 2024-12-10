"use client"
import Link from "next/link";
import { madeByLogo } from "@/assets";
import Image from "next/image";
import { Menu } from "./icons/menu";
import { Button } from "./ui/Button";
import { useEffect, useState } from "react";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return (
    <header className={`bg-black/40 py-4 sticky top-0 z-50 backdrop-blur-lg ${isScrolled ? 'border-b border-white border-opacity-30' : ''}`}>
      <div className="mx-auto flex w-full items-center justify-between px-4 lg:max-w-7xl">
        <Link href="/" className="flex items-center gap-3">
          <div className="relative">
            <div className="absolute bottom-0 top-2 w-full bg-shadow blur-md"></div>
            <Image
              src={madeByLogo}
              alt="Made By company logo"
              className="relative h-12 w-12"
            />
          </div>
          <span className="sr-only font-secondary font-medium text-white lg:not-sr-only">
            made by
          </span>
        </Link>
        <div className="cursor-pointer rounded-lg border border-white border-opacity-30 p-2 transition-all duration-300 hover:bg-[#201e1e] md:hidden">
          <Menu />
        </div>

        <nav className="hidden items-center gap-6 font-secondary md:flex">
          <a
            href="#"
            className="text-white text-opacity-60 transition hover:text-opacity-100"
          >
            About
          </a>
          <a
            href="#"
            className="text-white text-opacity-60 transition hover:text-opacity-100"
          >
            Features
          </a>
          <a
            href="#"
            className="text-white text-opacity-60 transition hover:text-opacity-100"
          >
            Customers
          </a>
          <a
            href="#"
            className="text-white text-opacity-60 transition hover:text-opacity-100"
          >
            Updates
          </a>
          <a
            href="#"
            className="text-white text-opacity-60 transition hover:text-opacity-100"
          >
            Help
          </a>
        </nav>
        <div className="hidden items-center gap-6 md:flex">
          <button className="rounded-lg hover:bg-gray-800 transition-all duration-300 px-4 py-2 font-medium text-white">
            Sign In
          </button>
          <Button>Get for free</Button>
        </div>
      </div>
    </header>
  );
}
