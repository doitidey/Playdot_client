"use client";

import "@/components/signup/SignupSection.scss";

import useStore from "@/lib/store/signup/store";
import SignupStepOne from "@/components/signup/SignupStepOne";

function SignupSection() {
  const { signUpStep } = useStore();

  return (
    <section className="signup-block">
      <div className="signup-block__intro">
        <div className="signup-block__intro__circles">{signUpStep}</div>
      </div>
      <SignupStepOne />
    </section>
  );
}

export default SignupSection;
