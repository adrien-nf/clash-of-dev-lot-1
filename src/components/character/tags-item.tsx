import { PropsWithChildren } from "react";
import { tagsItemStyle } from "./character.styles";
import { TagsItemCursorIcon } from "./tags-item-cursor-icon";

export type TagsItemProps = PropsWithChildren & {
  side: "top-left" | "top-right" | "bottom-left" | "bottom-right";
};

export function TagsItem({ children, side }: TagsItemProps) {
  return (
    <div className="flex flex-col gap-1">
      <TagsItemCursorIcon className="group-[.bg-purple-light]/character:text-purple-main group-[.bg-pink-light]/character:text-pink-main group-[.bg-green-light]/character:text-green-main group-[.bg-blue-light]/character:text-blue-main group-[.bg-yellow-light]/character:text-yellow-main group-[.bg-orange-light]/character:text-orange-main" />
      <div className={tagsItemStyle({ side })}>{children}</div>
    </div>
  );
}
