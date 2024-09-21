import { SmoothSmileyIcon } from "@/components/icons";

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
      <button className="justify-end block bg-cod-beige py-[22px] w-44 rounded-[60px] text-nowrap self-center">
        Enter Next Level
      </button>
    </article>
  );
}
