import { AsterixIcon } from "@/components/icons";
import { twMerge } from "tailwind-merge";

export type StarBubbleProps = {
  className?: string;
};

export function StarBubble({ className }: StarBubbleProps) {
  return (
    <div
      className={twMerge(
        "size-8 bg-green-main rounded-full items-center flex justify-center text-green-light",
        className
      )}
    >
      <AsterixIcon />
    </div>
  );
}
