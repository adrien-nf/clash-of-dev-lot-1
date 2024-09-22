import { Switch } from "../switch";

export function StickyHeader() {
  return (
    <header className="fixed top-10 z-20 justify-between items-center w-full px-3 grid grid-cols-3">
      <span className="uppercase bg-cod-dark text-purple-light text-sm font-bold text-center px-3 py-2 rounded-full rotate-[8deg]">
        La Piscine
      </span>

      <span className="text-cod-dark text-sm font-bold text-center">0%</span>

      <span className="text-cod-dark text-sm font-bold flex flex-row justify-end">
        <Switch />
      </span>
    </header>
  );
}
