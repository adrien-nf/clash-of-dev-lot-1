import { PropsWithChildren } from "react";

export type HorizontalScrollProps = PropsWithChildren;

export function HorizontalScroll({ children }: HorizontalScrollProps) {
  return (
    <div className="w-full overflow-y-scroll scrollbar-hidden">{children}</div>
  );
}
