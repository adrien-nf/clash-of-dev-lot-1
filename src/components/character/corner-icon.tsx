import { PropsWithChildren } from "react";
import PointerIcon from "../icons/pointer-icon";

export type CornerIconProps = PropsWithChildren;

export function CornerIcon({ children }: CornerIconProps) {
  return (
    <>
      <div className="aspect-square w-1/2 max-w-[310px] mt-[-20%]" />
      <div className="rounded-full w-1/2 md:w-1/4 max-w-[310px] absolute aspect-square self-end bottom-0 right-0 translate-x-1/4 translate-y-1/4 group-[.bg-purple-light]/character:bg-purple-main group-[.bg-purple-light]/character:border-purple-dark group-[.bg-pink-light]/character:bg-pink-main group-[.bg-pink-light]/character:border-pink-dark group-[.bg-green-light]/character:bg-green-main group-[.bg-green-light]/character:border-green-dark group-[.bg-blue-light]/character:bg-blue-main group-[.bg-blue-light]/character:border-blue-dark group-[.bg-yellow-light]/character:bg-yellow-main group-[.bg-yellow-light]/character:border-yellow-dark group-[.bg-orange-light]/character:bg-orange-main group-[.bg-orange-light]/character:border-orange-dark">
        <div className="text-[30px] sm:text-[50px] w-full h-full flex items-center justify-center group-[.bg-purple-light]/character:text-purple-light group-[.bg-pink-light]/character:text-pink-light group-[.bg-green-light]/character:text-green-light group-[.bg-blue-light]/character:text-blue-light group-[.bg-yellow-light]/character:text-yellow-light group-[.bg-orange-light]/character:text-orange-light">
          {children}
        </div>
      </div>
    </>
  );
}
