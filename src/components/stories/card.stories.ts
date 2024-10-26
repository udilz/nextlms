import type { Meta, StoryObj } from "@storybook/react";

import { Card } from "../card";

const meta = {
  title: "Card",
  component: Card,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    children: { control: "text" },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Card>;

export default meta;

type Story = StoryObj<typeof meta>;
export const CardCourse: Story = {
  args: {
    children: "Create course",
  },
};
