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
  parameters: {
    layout: "centered",
    componentSubtitle: "텍스트 출력 컴포넌트 입니다.",
    docs: {
      description: {
        component: "크기 타입을 구분한 뒤, 알맞는 사이즈로 출력합니다.",
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Text>;

export const Large: Story = {
  parameters: {
    docs: {
      description: {
        story: "18px / 500(medium)",
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
        story: "16px / 500(medium)",
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
        story: "14px / 500(medium)",
      },
    },
  },
  args: {
    children: "Small",
    small: true,
  },
};
export const Caption: Story = {
  parameters: {
    docs: {
      description: {
        story: "12px / 400(normal)",
      },
    },
  },
  args: {
    children: "Caption",
    caption: true,
  },
};
