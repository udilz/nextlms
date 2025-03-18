

import type { Meta, StoryObj } from "@storybook/react";

import { Card } from "../ui/card";

const Meta = {
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

export default Meta;
type Story = StoryObj<typeof Meta>;

export const BasicCard: Story = {
  args: {
    children: "Card",
  }
};
