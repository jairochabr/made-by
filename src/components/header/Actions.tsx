import { Button } from "../ui/Button";

export function Actions() {
  return (
    <div className="hidden items-center gap-6 md:flex">
      <button className="rounded-lg px-4 py-2 font-medium text-white transition-all duration-300 hover:bg-gray-800">
        Sign In
      </button>
      <Button>Get for free</Button>
    </div>
  );
}
