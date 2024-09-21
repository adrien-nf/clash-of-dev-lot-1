import { PropsWithChildren } from "react";
import { tagsItemCursorStyle, tagsItemStyle } from "./character.styles";
import { TagsItemCursorIcon } from "./tags-item-cursor-icon";
import { twMerge } from "tailwind-merge";

export type TagsItemProps = PropsWithChildren & {
  side: "top-left" | "top-right";
  color?: "purple" | "pink" | "green" | "blue" | "yellow" | "orange";
  className?: string;
};

export function TagsItem({ children, side, color, className }: TagsItemProps) {
  return (
    <div className={twMerge("flex flex-col gap-1", className)}>
      <TagsItemCursorIcon className={tagsItemCursorStyle({ side, color })} />
      <div className={tagsItemStyle({ side, color })}>{children}</div>
    </div>
  );
}
