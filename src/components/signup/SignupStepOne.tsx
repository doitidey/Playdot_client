"use client";

import React, { useEffect, useState } from "react";
import "@/components/signup/SignupStepOne.scss";
import Title from "@/components/common/Title";
import TeamCards from "@/components/common/TeamCards";
import useclickedCardStore from "@/lib/store/signup/clickedCardStore";
import { getTeams } from "@/lib/api/signupAPI";
import useTeamsStore from "@/lib/store/signup/teamsStore";

type TeamInfo = {
  teamId: number;
  teamName: string;
};

function SignupStepOne() {
  const { setClickedCardStore } = useclickedCardStore();
  const { teamStore, setTeamStore } = useTeamsStore();

  const [selectedTeam, setSelectedTeam] = useState(
    teamStore.slice(0).map(() => false),
  );

  useEffect(() => {
    const getTeamsInfo = async () => {
      const res = await getTeams();
      //카드 데이터 store에 저장
      setTeamStore(res.data);
    };
    getTeamsInfo();
  }, []);

  const handleCardClick = (index: number) => {
    const clearSelectedTeam = selectedTeam.map(() => false);
    const newSelected = [...clearSelectedTeam];
    newSelected[index] = !newSelected[index];
    setSelectedTeam(newSelected);
    //선택된 카드 index store에 저장
    setClickedCardStore(index);
  };

  return (
    <div className="stepOne__block">
      <Title largest className="stepOne__block--title">
        나의 구단 선택하기
      </Title>
      <Title small className="stepOne__block--text">
        응원하는 구단을 골라줘!
        <br />팀 뱃지를 부여받고 커뮤니티에서 소통할 수 있어.
      </Title>
      <div className="teamcards-block">
        {teamStore &&
          teamStore
            .slice(0)
            .map((team: TeamInfo, index: number) => (
              <TeamCards
                key={team.teamId}
                team={{ ...team }}
                isSelected={selectedTeam[index]}
                onClick={() => handleCardClick(index)}
              />
            ))}
      </div>
    </div>
  );
}

export default SignupStepOne;
