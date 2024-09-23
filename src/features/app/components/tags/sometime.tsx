import { Character } from "@/components/character";
import type { TagsItemProps } from "@/components/character/tags-item";
import image from "@/assets/people/sometime.webp";

export type SometimeProps = Pick<TagsItemProps, "color"> & {
  className?: string;
};

export function Sometime(props: SometimeProps) {
  return (
    <Character.Header.Tags.Item
      side="top-right"
      {...props}
      name="@sometime.crea"
    >
      <div className="flex flex-row gap-2 py-1 pt-2">
        <img
          src={image}
          width={60}
          height={60}
          alt=""
          className="rounded-xl"
          draggable={false}
        />
        <ul>
          <li>
            <a href="https://nithushasuthakaran.framer.website">Web</a>
          </li>
          <li>
            <a href="https://www.instagram.com/sometime.crea">Insta</a>
          </li>
          <li>
            <a href="https://www.instagram.com/sometime.crea">Twitter</a>
          </li>
        </ul>
      </div>
    </Character.Header.Tags.Item>
  );
}
