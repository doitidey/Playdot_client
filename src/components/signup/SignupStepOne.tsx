import "@/components/signup/SignupStepOne.scss";

import Title from "@/components/common/Title";
import SignupTeamCards from "@/components/signup/SignupTeamCards";
import { TEAMS_INFO } from "./TeamsInfo";

function SignupStepOne() {
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
        {TEAMS_INFO.map((team) => (
          <SignupTeamCards key={team.name} {...team} />
        ))}
      </div>
    </div>
  );
}

export default SignupStepOne;
