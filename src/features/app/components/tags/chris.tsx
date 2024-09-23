import { Character } from "@/components/character";
import type { TagsItemProps } from "@/components/character/tags-item";
import image from "@/assets/people/chris.webp";

export type ChrisProps = Pick<TagsItemProps, "color"> & {
  className?: string;
};

export function Chris(props: ChrisProps) {
  return (
    <Character.Header.Tags.Item side="top-left" {...props} name="@LLCoolChris_">
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
            <a href="https://christopher.engineering/">Website</a>
          </li>
          <li>
            <a href="https://www.instagram.com/llcoolchris_/">Insta</a>
          </li>
          <li>
            <a href="https://x.com/llcoolchris_">Twitter</a>
          </li>
        </ul>
      </div>
    </Character.Header.Tags.Item>
  );
}
