"use client";

import React, { useState } from "react";
import "@/components/signup/SignupStepOne.scss";
import Title from "@/components/common/Title";
import SignupTeamCards from "@/components/signup/SignupTeamCards";
import { TEAMS_INFO } from "./TeamsInfo";
import useclickedCardStore from "@/lib/store/signup/clickedCardStore";

function SignupStepOne() {
  const { setClickedCardStore } = useclickedCardStore();
  const [selectedTeam, setSelectedTeam] = useState(
    TEAMS_INFO.slice(0).map(() => false),
  );

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
        {TEAMS_INFO.slice(0).map((team, index) => (
          <SignupTeamCards
            key={team.name}
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
