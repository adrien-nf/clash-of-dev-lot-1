import { LightningIcon } from "@/components/icons";
import { twMerge } from "tailwind-merge";

export type LightningBubbleProps = {
  className?: string;
};

export function LightningBubble({ className }: LightningBubbleProps) {
  return (
    <div
      className={twMerge(
        "size-10 bg-blue-main rounded-full items-center flex justify-center text-blue-light",
        className
      )}
    >
      <LightningIcon />
    </div>
  );
}
