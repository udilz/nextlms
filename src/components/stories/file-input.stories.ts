

import type { Meta, StoryObj } from "@storybook/react";

import { FileInput } from "../ui/file-input";

const Meta = {
  title: "FileInput",
  component: FileInput,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof FileInput>;

export default Meta;
type Story = StoryObj<typeof Meta>;

export const BasicFileInput: Story = {
  args: {
    placeholder: "Choose File",
  }
};
