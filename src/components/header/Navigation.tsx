import { NavLink } from "../ui/NavLink";

import { NAVIGATION } from "@/constants";

export function Navigation() {
  return (
    <nav className="hidden items-center gap-6 font-secondary md:flex">
      {NAVIGATION.map((item) => (
        <NavLink key={item.id} content={item} />
      ))}
    </nav>
  );
}
