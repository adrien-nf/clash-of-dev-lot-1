import { Character } from "@/components/character";
import type { TagsItemProps } from "@/components/character/tags-item";
import image from "@/assets/people/lina.webp";

export type LinaProps = Pick<TagsItemProps, "color"> & {
  className?: string;
};

export function Lina(props: LinaProps) {
  return (
    <Character.Header.Tags.Item side="top-left" {...props} name="@maislina_">
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
            <a href="http://linablidi.com/">Website</a>
          </li>
          <li>
            <a href="https://www.instagram.com/maislina_/">Insta</a>
          </li>
          <li>
            <a href="http://twitch.tv/maislina_">Twitch</a>
          </li>
        </ul>
      </div>
    </Character.Header.Tags.Item>
  );
}
