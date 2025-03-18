

import type { Meta, StoryObj } from "@storybook/react";

import { Input } from "../ui/input";

const Meta = {
  title: "Input",
  component: Input,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    children: { control: "text" },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Input>;

export default Meta;
type Story = StoryObj<typeof Meta>;

export const TextInput: Story = {
  args: {
    type: "text",
    placeholder: "Input your text",
  }
};

export const PasswordInput: Story = {
  args: {
    type: "password",
    placeholder: "Input your password",
  }
};
