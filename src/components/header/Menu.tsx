import { Menu as MenuIcon } from "../icons/menu";

export function Menu() {
  return (
    <div className="cursor-pointer rounded-lg border border-white border-opacity-30 p-2 transition-all duration-300 hover:bg-neutral-800 md:hidden">
      <MenuIcon />
    </div>
  );
}
