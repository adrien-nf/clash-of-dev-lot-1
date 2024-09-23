import { PropsWithChildren } from "react";

export type ImageTagsProps = PropsWithChildren;

export function ImageTags({ children }: ImageTagsProps) {
  return (
    <div className="absolute flex flex-col right-0 top-0 translate-x-12 -translate-y-8 sm:hidden">
      {children}
    </div>
  );
}
