import { useEffect, useState } from "react";

import useclickedCardStore from "@/lib/store/signup/clickedCardStore";
import useTeamsStore from "@/lib/store/signup/teamsStore";
import { getTeams } from "@/lib/api/signupAPI";
import TeamCards from "./TeamCards";
import "@/components/common/TeamCardsList.scss";

type TeamInfo = {
  teamId: number;
  teamName: string;
};

function TeamCardsList() {
  const { setClickedCardStore } = useclickedCardStore();
  const { teamStore, setTeamStore } = useTeamsStore();

  useEffect(() => {
    const getTeamsInfo = async () => {
      const res = await getTeams();
      //카드 데이터 store에 저장
      setTeamStore(res.data);
    };
    getTeamsInfo();
  }, []);

  const [selectedTeam, setSelectedTeam] = useState(
    teamStore.slice(0).map(() => false),
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
    <div className="teamcards">
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
  );
}

export default TeamCardsList;
