import { PropsWithChildren } from "react";
import { TagsItem } from "./tags-item";

export type TagsProps = PropsWithChildren;

export function Tags({ children }: TagsProps) {
  return (
    <div className="hidden md:flex flex-row gap-4 h-fit ml-auto flex-wrap">
      {children}
    </div>
  );
}

Tags.Item = TagsItem;
