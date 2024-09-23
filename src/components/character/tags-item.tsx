import { PropsWithChildren } from "react";
import { tagsItemCursorStyle, tagsItemStyle } from "./character.styles";
import { TagsItemCursorIcon } from "./tags-item-cursor-icon";
import { twMerge } from "tailwind-merge";

export type TagsItemProps = PropsWithChildren & {
  side: "top-left" | "top-right";
  color?: "purple" | "pink" | "green" | "blue" | "yellow" | "orange";
  className?: string;
  name: string;
};

export function TagsItem({
  children,
  side,
  color,
  name,
  className,
}: TagsItemProps) {
  return (
    <div className={twMerge("flex flex-col gap-1", className)}>
      <TagsItemCursorIcon className={tagsItemCursorStyle({ side, color })} />
      <details className={tagsItemStyle({ side, color })}>
        <summary className="list-none [&::-webkit-details-marker]:hidden cursor-pointer">
          {name}
        </summary>
        {children}
      </details>
    </div>
  );
}
