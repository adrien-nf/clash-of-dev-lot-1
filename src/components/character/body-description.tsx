import { PropsWithChildren } from "react";

export type BodyDescriptionProps = PropsWithChildren;

export function BodyDescription({ children }: BodyDescriptionProps) {
  return (
    <div className="flex flex-col gap-8 mt-0 md:mt-[26px] text-cod-dark text-opacity-60 text-sm md:min-w-60 md:max-w-72">
      {children}
    </div>
  );
}
