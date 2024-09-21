import { PropsWithChildren } from "react";
import { twMerge } from "tailwind-merge";

export type FullScreenSectionProps = PropsWithChildren & {
  className?: string;
};

export function FullScreenSection({
  children,
  className,
}: FullScreenSectionProps) {
  return (
    <div
      className={twMerge(
        "flex h-min justify-center items-center snap-start sticky",
        className
      )}
    >
      {children}
    </div>
  );
}
