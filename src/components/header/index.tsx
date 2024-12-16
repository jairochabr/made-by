import { Logo } from "./Logo";
import { Menu } from "./Menu";
import { Navigation } from "./Navigation";
import { Actions } from "./Actions";
import { Border } from "./Border";

export function Header() {
  return (
    <header className="sticky top-0 z-50 bg-black/40 backdrop-blur-lg">
      <div className="px-4 py-4">
        <div className="mx-auto flex items-center justify-between lg:max-w-7xl">
          <Logo />
          <Menu />
          <Navigation />
          <Actions />
        </div>
      </div>
      <Border />
    </header>
  );
}
