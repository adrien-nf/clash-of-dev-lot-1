import { Character } from "@/components/character";
import type { TagsItemProps } from "@/components/character/tags-item";

export type SometimeProps = Pick<TagsItemProps, "color"> & {
  className?: string;
};

export function Sometime(props: SometimeProps) {
  return (
    <Character.Header.Tags.Item side="top-right" {...props}>
      @sometime.crea
    </Character.Header.Tags.Item>
  );
}
