import { InputHTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

interface InputPros extends InputHTMLAttributes<HTMLInputElement> {
  type: "text" | "email";
}

export function Input({ type, ...rest }: InputPros) {
  return (
    <input
      {...rest}
      className={twMerge("rounded-lg bg-brand-gray px-3 py-2", rest.className)}
      type={type}
    />
  );
}
