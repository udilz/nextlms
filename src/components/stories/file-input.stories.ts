import type { Meta, StoryObj } from "@storybook/react";

import { FileInput } from "../file-input";

const meta = {
    title: "File Input",
    component: FileInput,
    parameters: {
      layout: "centered",
    },
    argTypes: {
      placeholder: { control: "text" },
    },
    tags: ["autodocs"],
  } satisfies Meta<typeof FileInput>;

  export default meta;
  type Story = StoryObj<typeof meta>;
  
  export const FileInputStory: Story = {
    args: {
      placeholder: "Choose your file",
    },
  }