import { Character } from "@/components/character";
import type { TagsItemProps } from "@/components/character/tags-item";

export type ChrisProps = Pick<TagsItemProps, "color"> & {
  className?: string;
};

export function Chris(props: ChrisProps) {
  return (
    <Character.Header.Tags.Item side="top-left" {...props}>
      @LLCoolChris_
    </Character.Header.Tags.Item>
  );
}
