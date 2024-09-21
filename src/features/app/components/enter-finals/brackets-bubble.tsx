import { BracketsIcon } from "@/components/icons";
import { twMerge } from "tailwind-merge";

export type BracketsBubbleProps = {
  className?: string;
};

export function BracketsBubble({ className }: BracketsBubbleProps) {
  return (
    <div
      className={twMerge(
        "size-16 bg-pink-main rounded-full items-center flex justify-center text-pink-light",
        className
      )}
    >
      <BracketsIcon className="rotate-[30deg]" />
    </div>
  );
}
