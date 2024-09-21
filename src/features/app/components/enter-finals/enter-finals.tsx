import { SmoothSmileyIcon } from "@/components/icons";
import { StarBubble } from "./star-bubble";
import { LightningBubble } from "./lightning-bubble";
import { BracketsBubble } from "./brackets-bubble";

export function EnterFinals() {
  return (
    <article className="bg-[#262625] w-full flex flex-col gap-10 rounded-[60px] px-12 pt-10 pb-20 group/character overflow-hidden relative  justify-between">
      <div className="flex flex-col gap-8">
        <span className="font-medium text-sm text-cod-white text-opacity-80">
          / FINALE02
        </span>
        <SmoothSmileyIcon className="text-5xl self-end mr-5" />
        <span className="font-semibold text-[40px] text-justify text-cod-beige">
          Click Me ? Might enter the finals
        </span>
      </div>
      <div className="justify-end self-center relative">
        <button className="relative peer block bg-cod-beige py-[22px] px-8 rounded-[60px] text-nowrap z-10 text-center hover:py-7 hover:px-10 transition-all font-semibold">
          Enter Next Level
        </button>
        <StarBubble className="absolute top-0 -translate-x-1/4 -translate-y-1/4 transition-transform peer-hover:-translate-x-1/2 peer-hover:-translate-y-1/3 z-20" />
        <LightningBubble className="absolute bottom-0 right-0 -translate-x-1/4 translate-y-1/2 transition-transform peer-hover:translate-x-1/2 peer-hover:translate-y-1/3 z-20" />
        <BracketsBubble className="absolute top-0 right-0 translate-x-1/3 -translate-y-1/2 transition-transform peer-hover:translate-x-1/2 peer-hover:-translate-y-1/3" />
      </div>
    </article>
  );
}
