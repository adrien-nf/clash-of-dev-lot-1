import type { Meta, StoryObj } from "@storybook/react";
import { Character } from "./character";
import { PointerIcon } from "../icons/pointer-icon";
import { ArtistImage } from "@/features/app/components/characters/artist-image";
import { Lina } from "@/features/app/components/tags";

const meta = {
  component: Character,
  tags: ["autodocs"],
  render: (args) => (
    <Character {...args}>
      <Character.Header>
        <Character.Header.Graduation>
          <Character.Header.Graduation.Title>
            Design
          </Character.Header.Graduation.Title>
          <Character.Header.Graduation.Score>
            /6 pts
          </Character.Header.Graduation.Score>
        </Character.Header.Graduation>
        <Character.Header.Name>L'artiste de renom</Character.Header.Name>
        <Character.Header.Tags>
          <Character.Header.Tags.Item name="@maislina" side="top-left" />
        </Character.Header.Tags>
      </Character.Header>
      <Character.Body>
        <Character.Body.Image>
          <ArtistImage />

          <Character.Body.Image.Tags>
            <Lina />
          </Character.Body.Image.Tags>
        </Character.Body.Image>
        <Character.Body.Description>
          <p>
            <span className="font-semibold">Le design</span>, c'est son terrain
            de jeu. Il maîtrise et retranscrit correctement chaque pixel de la
            maquette.
          </p>

          <p>
            Virtuose des couleurs il ne se trompe jamais de code HEX, de spacing
            ou de border-radius;&nbsp;
            <span className="font-semibold">
              Figma n'a aucun secret pour ce Dev de talent.
            </span>
          </p>
          <Character.Body.CornerIcon>
            <PointerIcon />
          </Character.Body.CornerIcon>
        </Character.Body.Description>
      </Character.Body>
    </Character>
  ),
} satisfies Meta<typeof Character>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Purple: Story = {
  args: {
    color: "purple",
  },
};

export const Pink: Story = {
  args: {
    color: "pink",
  },
};

export const Green: Story = {
  args: {
    color: "green",
  },
};

export const Blue: Story = {
  args: {
    color: "blue",
  },
};

export const Yellow: Story = {
  args: {
    color: "yellow",
  },
};

export const Orange: Story = {
  args: {
    color: "orange",
  },
};
