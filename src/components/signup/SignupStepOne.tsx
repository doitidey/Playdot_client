import "@/components/signup/SignupStepOne.scss";

import Title from "@/components/common/Title";
import SignupTeamCards from "@/components/signup/SignupTeamCards";
import { TEAMS_INFO } from "./TeamsInfo";

function SignupStepOne() {
  return (
    <div>
      <Title largest className="content">
        나의 구단 선택하기
      </Title>
      <Title small className="content">
        내가 응원하는 구단을 골라주세요!
        <br />팀 뱃지를 부여받고 커뮤니티에서 소통할 수 있어요.
      </Title>
      <div className="teamcards-block">
        {TEAMS_INFO.map((team) => (
          <SignupTeamCards key={team.name} {...team} />
        ))}
      </div>
    </div>
  );
}

export default SignupStepOne;
