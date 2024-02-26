"use client";

import "@/components/signup/SignupSection.scss";

import useStepsStore from "@/lib/store/signup/stepsStore";
import SignupStepOne from "@/components/signup/SignupStepOne";
import SignupStepTwo from "@/components/signup/SignupStepTwo";
import SignupButtons from "@/components/signup/Buttons/SignupButtons";

function SignupSection() {
  const { signUpStep, increaseStep, decreaseStep } = useStepsStore();

  const handleOnclickNextButton = () => {
    increaseStep();
  };
  const handleOnclickPreviousButton = () => {
    decreaseStep();
  };

  return (
    <section className="signup-block">
      <div className="signup-block__buttons">
        {signUpStep === 1 ? (
          <SignupButtons title={"다음"} onClick={handleOnclickNextButton} />
        ) : (
          <>
            <SignupButtons title={"완료"} onClick={handleOnclickNextButton} />
            <SignupButtons
              title={"이전"}
              onClick={handleOnclickPreviousButton}
            />
          </>
        )}
      </div>
      <div className="signup-block__intro">
        <div className="signup-block__intro__circles">{signUpStep}</div>
      </div>
      {signUpStep === 1 ? <SignupStepOne /> : <SignupStepTwo />}
    </section>
  );
}

export default SignupSection;
