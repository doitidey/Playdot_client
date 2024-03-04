import { Meta, StoryObj } from "@storybook/react";
import Header from "@/components/common/Header";

const meta: Meta<typeof Header> = {
  tags: ["autodocs"],
  component: Header,
};

export default meta;
type Story = StoryObj<typeof Header>;

export const HeaderStory: Story = {};
