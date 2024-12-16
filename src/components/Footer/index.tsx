import { Social } from "./Social";

export function Footer() {
  return (
    <footer className="border-t border-white/30 py-8 sm:py-5">
      <div className="container px-0">
        <div className="mx-auto flex max-w-80 flex-col items-center gap-2 sm:max-w-full sm:flex-row sm:justify-between">
          <p className="text-sm text-zinc-500">
            &copy; 2024 Your Company, Inc. All rights reserved
          </p>
          <Social />
        </div>
      </div>
    </footer>
  );
}
