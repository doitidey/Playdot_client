import "@/components/signup/SignupStepOne.scss";
import Title from "@/components/common/Title";
import useStepsStore from "@/lib/store/signup/stepsStore";
import Button from "../common/Button";
import TeamCardsList from "@/components/common/TeamCardsList";

function SignupStepOne() {
  const { increaseStep } = useStepsStore();

  const onClickNextButton = () => {
    increaseStep();
  };
  return (
    <section className="stepone">
      <Button
        label="다음"
        size="small"
        variant="primary"
        onClick={onClickNextButton}
      />
      <Title largest className="stepone__title">
        나의 구단 선택하기
      </Title>
      <Title small className="stepone__desc">
        응원하는 구단을 골라줘!
        <br />팀 뱃지를 부여받고 커뮤니티에서 소통할 수 있어.
      </Title>
      <TeamCardsList />
    </section>
  );
}

export default SignupStepOne;
