import { Meta, StoryObj } from "@storybook/react";
import Profile from "@/components/common/Profile";

const meta: Meta<typeof Profile> = {
  title: "COMPONENTS/Profile",
  tags: ["autodocs"],
  component: Profile,
  argTypes: {
    imageUrl: { control: true },
    nickname: { control: true },
    size: { control: true },
  },
  parameters: {
    layout: "centered",
    componentSubtitle: "프로필 사진 컴포넌트 입니다.",
    docs: {
      description: {
        component:
          "url, 크기, 닉네임을 Prop으로 받아와 프로필 사진을 출력하고 클릭시 프로필 모달을 생성합니다.",
      },
    },
  },
};

export default meta;
type Profile = StoryObj<typeof Profile>;
export const EmptyProfile: Profile = {
  parameters: {
    docs: {
      description: {
        story: "url, nickname, size 모두 필수입니다.",
      },
    },
  },
  args: {
    imageUrl: "",
    nickname: "안녕하세요",
    size: 40,
  },
};
export const UseProfile: Profile = {
  parameters: {
    docs: {
      description: {
        story: "url, nickname, size 모두 필수입니다.",
      },
    },
  },
  args: {
    imageUrl: "profiles/34bc2484-c989-4ea4-aca0-55e428991dc7.webp",
    nickname: "안녕하세요",
    size: 100,
  },
};
