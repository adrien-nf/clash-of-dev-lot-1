import { HorizontalScroll } from "@/components/horizontal-scroll";
import { BracketInCircleIcon, SmileInCircleIcon } from "@/components/icons";

export function Title() {
  return (
    <HorizontalScroll>
      <span className="gap-2 items-center text-[70px] md:text-[120px] font-semibold my-6 text-center">
        <span>{`<A>`}Front les Tous!</span>
        <BracketInCircleIcon className="min-w-8 min-h-8 inline-block relative align-middle mx-4" />
        <span>Clash of Dev</span>
        <SmileInCircleIcon className="min-w-8 min-8 inline-block relative align-middle mx-4" />
      </span>
    </HorizontalScroll>
  );
}
