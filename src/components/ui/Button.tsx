import { ButtonHTMLAttributes, ReactNode } from "react";
import { twMerge } from "tailwind-merge";
import { tv } from "tailwind-variants";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  color?: "primary" | "secondary";
  size?: "small" | "large";
}

export function Button({ children, color = "primary", size = "small", ...rest}: ButtonProps) {
  const button = tv({
    base: "rounded-lg font-secondary font-medium",
    variants: {
      color: {
        primary: "bg-white text-black transition-all duration-300 hover:text-brand-secondary",
        secondary: "text-white transition-all duration-300 hover:bg-gray-800",
      },
      size: {
        small: "px-4 py-2",
        large: "px-5 py-4",
      },
    },
    defaultVariants: {
      color: "primary",
      size: "small",
    },
  });

  return (
    <button
      {...rest}
      className={twMerge(button({ color, size }), rest.className)}
    >
      {children}
    </button>
  );
}
