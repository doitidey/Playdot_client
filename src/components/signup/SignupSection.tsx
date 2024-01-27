"use client";

import "@/components/signup/SignupSection.scss";

import useStore from "@/lib/store/signup/store";
import SignupStepOne from "@/components/signup/SignupStepOne";
import SignupStepTwo from "@/components/signup/SignupStepTwo";

function SignupSection() {
  const { signUpStep } = useStore();

  return (
    <section className="signup-block">
      <div className="signup-block__intro">
        <div className="signup-block__intro__circles">{signUpStep}</div>
      </div>
      {signUpStep === 1 ? <SignupStepOne /> : <SignupStepTwo />}
    </section>
  );
}

export default SignupSection;
