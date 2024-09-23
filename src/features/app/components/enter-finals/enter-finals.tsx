import { SmoothSmileyIcon } from "@/components/icons";
import { StarBubble } from "./star-bubble";
import { LightningBubble } from "./lightning-bubble";
import { BracketsBubble } from "./brackets-bubble";
import { useEffect, useState } from "react";

export type EnterFinalsProps = {
  hasEasterEggBeenSolved: boolean;
};

export function EnterFinals({ hasEasterEggBeenSolved }: EnterFinalsProps) {
  const [hasBeenClicked, setHasBeenClicked] = useState(false);

  useEffect(() => {
    if (hasEasterEggBeenSolved) setHasBeenClicked(false);
  }, [hasEasterEggBeenSolved]);

  return (
    <article className="bg-[#262625] w-full flex flex-col gap-10 rounded-[60px] px-12 pt-10 pb-20 group/character overflow-hidden relative h-full mb-4 justify-between">
      <div className="flex flex-col gap-8 h-full">
        <span className="font-medium text-sm text-cod-white text-opacity-80">
          / FINALE02
        </span>
        <SmoothSmileyIcon className="text-5xl self-end mr-5" />
        <div className="font-semibold text-[40px] flex justify-center flex-col text-justify flex-1 self-center text-cod-beige">
          <span>
            {hasBeenClicked
              ? hasEasterEggBeenSolved
                ? "Merci d'avoir exploré ce site!"
                : "Click Me ? Might enter the finals"
              : "Click Me ? Might enter the finals"}
          </span>

          {hasBeenClicked && hasEasterEggBeenSolved && (
            <div className="flex flex-col gap-4 text-2xl">
              <span>En espérant vous revoir en finale du Clash of Dev.</span>
              <a href="https://www.linkedin.com/in/adrien-nf/">Mon LinkedIn</a>
              <a href="https://www.adriennefe.com/">Mon Blog</a>
              <span className="text-right">- Adrien NEFE</span>
            </div>
          )}
        </div>
      </div>
      <div className="self-center relative">
        <button
          onClick={() => setHasBeenClicked(true)}
          className="relative peer block bg-cod-beige py-[22px] px-8 rounded-[60px] text-nowrap z-10 text-center hover:py-7 hover:px-10 transition-all font-semibold ease-in-out"
        >
          {hasBeenClicked
            ? hasEasterEggBeenSolved
              ? "Tu passes au niveau suivant, bravo!"
              : "En fait non, t'as pas résolu l'easter egg."
            : "Enter Next Level"}
        </button>
        <StarBubble className="absolute top-0 -translate-x-1/4 -translate-y-1/4 transition-transform peer-hover:-translate-x-1/2 peer-hover:-translate-y-1/3 z-20" />
        <LightningBubble className="absolute bottom-0 right-0 -translate-x-1/4 translate-y-1/2 transition-transform peer-hover:translate-x-1/2 peer-hover:translate-y-1/3 z-20" />
        <BracketsBubble className="absolute top-0 right-0 translate-x-1/3 -translate-y-1/2 transition-transform peer-hover:translate-x-1/2 peer-hover:-translate-y-1/3" />
      </div>
    </article>
  );
}
