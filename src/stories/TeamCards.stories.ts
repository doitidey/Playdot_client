import type { Meta, StoryObj } from "@storybook/react";
import SignupTeamCards from "@/components/common/TeamCards";

const meta: Meta<typeof SignupTeamCards> = {
  title: "SignupTeamCards",
  component: SignupTeamCards,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof SignupTeamCards>;

export const SingleTeamCard: Story = {
  args: {
    team: {
      teamId: 1,
      teamName: "LG 트윈스",
    },
    singleCard: true,
  },
};

export const MultipleCards: Story = {
  args: {
    team: {
      teamId: 1,
      teamName: "LG 트윈스",
    },
    isSelected: false,
  },
};
