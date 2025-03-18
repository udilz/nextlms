import type { Meta, StoryObj } from "@storybook/react";

import { Button } from "../ui/button";

const Meta = {
  title: "Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    variant: {
      control: { type: "select" },
      options: ["primary", "secondary", "danger"],
    },
    size: {
      control: { type: "select" },
      options: ["sm", "md", "lg"],
    },
    children: { control: "text" },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Button>;

export default Meta;
type Story = StoryObj<typeof Meta>;

export const ButtonPrimary: Story = {
  args: {
    variant: "primary",
    children: "Button",
  },
};

export const ButtonSecondary: Story = {
  args: {
    variant: "secondary",
    children: "Button",
  },
};

export const ButtonDanger: Story = {
  args: {
    variant: "danger",
    children: "Button",
  },
};
