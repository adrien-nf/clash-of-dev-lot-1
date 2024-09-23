import { useState } from "react";
import { Switch } from "../switch";
import { useAnimationFrame } from "framer-motion";
import { twMerge } from "tailwind-merge";

export function StickyHeader() {
  const [scrollPercent, setScrollPercent] = useState(0);

  useAnimationFrame(() => {
    const scrollTop = window.scrollY;
    const docHeight =
      document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercentage = (scrollTop / docHeight) * 100;
    setScrollPercent(scrollPercentage);
  });

  return (
    <header className="fixed top-10 z-20 justify-between items-center w-full px-3 sm:px-6 grid grid-cols-3">
      <span className="uppercase bg-cod-dark text-purple-light text-sm font-bold text-center px-3 py-2 rounded-full rotate-[8deg] w-fit">
        La Piscine
      </span>

      <span
        className={twMerge(
          "text-cod-dark text-sm font-bold text-center",
          scrollPercent > 99.23 && "text-cod-white"
        )}
      >
        {scrollPercent.toFixed(0)}%
      </span>

      <span className="text-cod-dark text-sm font-bold flex flex-row justify-end">
        <Switch aria-label="Ouvrir la console de l'easter egg." />
      </span>
    </header>
  );
}
