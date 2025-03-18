import type { Meta, StoryObj } from "@storybook/react";

import { TextArea } from "../ui/textarea";

const Meta = {
  title: "Textarea",
  component: TextArea,
  parameters: {
    layout: "centered",
  },

  tags: ["autodocs"],
} satisfies Meta<typeof TextArea>;

export default Meta;
type Story = StoryObj<typeof Meta>;

export const BasicTextArea: Story = {
  args: {
    placeholder: "Input your text",
  }
};
