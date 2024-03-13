"use client";

import "@/components/signup/SignupSection.scss";

import useStepsStore from "@/lib/store/signup/stepsStore";
import SignupStepOne from "@/components/signup/SignupStepOne";
import SignupStepTwo from "@/components/signup/SignupStepTwo";

function SignupSection() {
  const { signUpStep } = useStepsStore();

  return (
    <section className="signup">
      <div className="signup__intro">
        <div className="signup__intro__circles">{signUpStep}</div>
      </div>
      {signUpStep === 1 ? <SignupStepOne /> : <SignupStepTwo />}
    </section>
  );
}

export default SignupSection;
