import { PropsWithChildren } from "react";

export type BodyDescriptionProps = PropsWithChildren;

export function BodyDescription({ children }: BodyDescriptionProps) {
  return (
    <aside className="flex flex-col flex-1 gap-8 mt-0 md:mt-[26px] text-cod-dark text-opacity-60 text-sm md:min-w-60 h-full">
      {children}
    </aside>
  );
}
