import type { Meta, StoryObj } from "@storybook/react";
import Button from "@/components/common/Button";

const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    componentSubtitle: "특정 이벤트를 실행하기 위한 버튼 컴포넌트입니다.",
    docs: {
      description: {
        component: "label, variant, size가 필요합니다.",
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const DefaultButton: Story = {
  parameters: {
    docs: {
      description: {
        story: "메인 색상을 가지는 button 입니다.",
      },
    },
  },
  args: {
    label: "button",
    size: "medium",
    variant: "primary",
  },
};

export const SecondaryButton: Story = {
  parameters: {
    docs: {
      description: {
        story: "두 번째 메인 색상을 가지는 button 입니다.",
      },
    },
  },
  args: {
    label: "button",
    size: "medium",
    variant: "disactive",
  },
};

export const ActiveButton: Story = {
  parameters: {
    docs: {
      description: {
        story: "활성화 된 button 입니다.",
      },
    },
  },
  args: {
    label: "button",
    size: "medium",
    variant: "active",
  },
};

export const XsmallButton: Story = {
  parameters: {
    docs: {
      description: {
        story:
          "x-small 크기의 button 입니다. 댓글 등록 input에 사용되며 74px의 가로 사이즈를 가집니다.",
      },
    },
  },
  args: {
    label: "button",
    size: "x-small",
    variant: "active",
  },
};

export const SmallButton: Story = {
  parameters: {
    docs: {
      description: {
        story:
          "small 크기의 button 입니다. 말풍선에 사용되며 142px의 가로 사이즈를 가집니다.",
      },
    },
  },
  args: {
    label: "button",
    size: "small",
    variant: "primary",
  },
};

export const MediumButton: Story = {
  parameters: {
    docs: {
      description: {
        story: "medium 크기의 button 입니다. 224px의 가로 사이즈를 가집니다.",
      },
    },
  },
  args: {
    label: "button",
    size: "medium",
    variant: "primary",
  },
};

export const LargeButton: Story = {
  parameters: {
    docs: {
      description: {
        story: "large 크기의 button 입니다. 506px의 가로 사이즈를 가집니다.",
      },
    },
  },
  args: {
    label: "button",
    size: "large",
    variant: "primary",
  },
};
