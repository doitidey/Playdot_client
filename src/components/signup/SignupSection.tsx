import "@/components/signup/SignupSection.scss";
import SignupTeamCards from "./SignupTeamCards";
import { TEAMS_INFO } from "./TeamsInfo";
import Title from "@/components/common/Title";

function SignupSection() {
  return (
    <section className="signup-block">
      <div className="signup-block__intro">
        <div className="signup-block__intro__circles">1</div>
        <Title largest>나의 구단 선택하기</Title>
        <Title small className="signup-block__intro__content">
          내가 응원하는 구단을 골라주세요!
          <br />팀 뱃지를 부여받고 커뮤니티에서 소통할 수 있어요.
        </Title>
      </div>
      <div className="teamcards-block">
        {TEAMS_INFO.map((team) => (
          <SignupTeamCards key={team.name} {...team} />
        ))}
      </div>
    </section>
  );
}

export default SignupSection;
