import { Character } from "@/components/character";
import type { TagsItemProps } from "@/components/character/tags-item";

export type LinaProps = Pick<TagsItemProps, "color"> & {
  className?: string;
};

export function Lina(props: LinaProps) {
  return (
    <Character.Header.Tags.Item side="top-left" {...props}>
      @maislina_
    </Character.Header.Tags.Item>
  );
}
