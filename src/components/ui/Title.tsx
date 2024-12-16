import { HTMLAttributes, ReactNode } from "react";
import { twMerge } from "tailwind-merge";
import { tv } from "tailwind-variants";

interface TitleProps extends HTMLAttributes<HTMLHeadingElement> {
  children: ReactNode;
  as?: "h1" | "h2" | "h3" | "h4";
  size?: "sm" | "md" | "lg" | "xl";
}

export function Title({
  children,
  size = "lg",
  as: Component = "h2",
  ...rest
}: TitleProps) {
  const title = tv({
    base: "font-bold tracking-tighter text-white",
    variants: {
      size: {
        sm: "text-2xl sm:text-3xl",
        md: "text-3xl sm:text-4xl",
        lg: "text-4xl sm:text-5xl",
        xl: "text-7xl sm:text-9xl",
      },
    },
  });
  return (
    <Component {...rest} className={twMerge(title({ size }), rest.className)}>
      {children}
    </Component>
  );
}
