import { Meta, StoryObj } from "@storybook/react";
import Title from "@/components/common/Title";

const meta: Meta<typeof Title> = {
  component: Title,
  argTypes: {
    largest: { control: true },
    large: { control: true },
    medium: { control: true },
    small: { control: true },
  },
};

export default meta;
type Story = StoryObj<typeof Title>;

export const Largest: Story = {
  args: {
    children: "Largest",
    largest: true,
  },
};

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
