import { HorizontalScroll } from "@/components/horizontal-scroll";
import { BracketInCircleIcon, SmileInCircleIcon } from "@/components/icons";

export function Title() {
  return (
    <HorizontalScroll>
      <span className="flex flex-row gap-2 items-center text-6xl text-nowrap font-semibold">
        {`<A>`}Front les Tous!
        <BracketInCircleIcon className="min-w-8 min-h-8" />
        Clash of Dev
        <SmileInCircleIcon className="min-w-8 min-8" />
      </span>
    </HorizontalScroll>
  );
}
