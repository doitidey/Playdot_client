import type { Meta, StoryObj } from "@storybook/react";
import TeamCards from "@/components/common/TeamCards";

const meta: Meta<typeof TeamCards> = {
  title: "COMPONENTS/TeamCards",
  component: TeamCards,
  tags: ["autodocs"],
  argTypes: {
    singleCard: { control: true },
  },
  parameters: {
    layout: "centered",
    componentSubtitle: "팀 카드를 보여주는 컴포넌트 입니다.",
    docs: {
      description: {
        component: "`SingleTeamCard`와 `MultipleCards`를 구분하여 출력합니다.",
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof TeamCards>;

const TEAM_DATA = {
  teamId: 1,
  teamName: "LG 트윈스",
};

export const SingleTeamCard: Story = {
  parameters: {
    docs: {
      description: {
        story:
          "`SingleTeamCard`는 홀로 쓰이는 카드로 마우스 hover 인터랙션이 있습니다.",
      },
    },
  },
  args: {
    team: TEAM_DATA,
    singleCard: true,
  },
};

export const MultipleCards: Story = {
  parameters: {
    docs: {
      description: {
        story:
          "`MultipleCards`는 리스트 형식에 쓰이는 카드로 hover, click 인터랙션 및 함수 실행이 가능합니다.",
      },
    },
  },
  args: {
    team: TEAM_DATA,
    isSelected: false,
  },
};
