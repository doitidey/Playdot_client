import { Meta, StoryObj } from "@storybook/react";
import Text from "@/components/common/Text";

const meta: Meta<typeof Text> = {
  title: "TEXT/Text",
  tags: ["autodocs"],
  component: Text,
  argTypes: {
    large: { control: true },
    medium: { control: true },
    small: { control: true },
    caption: { control: true },
  },
};

export default meta;
type Story = StoryObj<typeof Text>;

export const Large: Story = {
  args: {
    children: "Large",
    large: true,
  },
};
export const Medium: Story = {
  args: {
    children: "Medium",
    medium: true,
  },
};
export const Small: Story = {
  args: {
    children: "Small",
    small: true,
  },
};
export const Caption: Story = {
  args: {
    children: "Caption",
    caption: true,
  },
};
