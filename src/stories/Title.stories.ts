import { Meta, StoryObj } from "@storybook/react";
import Title from "@/components/common/Title";

const meta: Meta<typeof Title> = {
  title: "TEXT/Tiltle",
  tags: ["autodocs"],
  component: Title,
  argTypes: {
    largest: { control: true },
    large: { control: true },
    medium: { control: true },
    small: { control: true },
  },
  parameters: {
    layout: "centered",
    componentSubtitle: "타이틀 출력 컴포넌트 입니다.",
    docs: {
      description: {
        component: "크기 타입을 구분한 뒤, 알맞는 사이즈로 출력합니다.",
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Title>;

export const Largest: Story = {
  parameters: {
    docs: {
      description: {
        story: "48px / 700(bold)",
      },
    },
  },
  args: {
    children: "Largest",
    largest: true,
  },
};

export const Large: Story = {
  parameters: {
    docs: {
      description: {
        story: "36px / 600(semi bold)",
      },
    },
  },
  args: {
    children: "Large",
    large: true,
  },
};

export const Medium: Story = {
  parameters: {
    docs: {
      description: {
        story: "24px / 600(semi bold)",
      },
    },
  },
  args: {
    children: "Medium",
    medium: true,
  },
};

export const Small: Story = {
  parameters: {
    docs: {
      description: {
        story: "22px / 500(medium)",
      },
    },
  },
  args: {
    children: "Small",
    small: true,
  },
};
