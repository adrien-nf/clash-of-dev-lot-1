import type { Meta, StoryObj } from "@storybook/react";

import { HorizontalScroll } from "./horizontal-scroll";
import { BracketInCircleIcon, SmileInCircleIcon } from "../icons";

const meta = {
  component: HorizontalScroll,
  tags: ["autodocs"],
} satisfies Meta<typeof HorizontalScroll>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: (
      <div className="flex flex-row gap-2 items-center text-6xl text-nowrap font-semibold overflow-x-scroll">
        <span className="align-middle">{`<A>`}Front les Tous!</span>
        <BracketInCircleIcon className="min-w-8 min-h-8" />
        <span>Clash of Dev</span>
        <SmileInCircleIcon className="min-w-8 min-8" />
      </div>
    ),
  },
};
