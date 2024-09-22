import { PropsWithChildren } from "react";

export type HorizontalScrollProps = PropsWithChildren;

export function HorizontalScroll({ children }: HorizontalScrollProps) {
  return <div className="flex flex-row flex-wrap text-wrap">{children}</div>;
}
