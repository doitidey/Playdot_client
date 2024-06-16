"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";

import useStepsStore from "@/lib/store/signup/stepsStore";
import SignupStepOne from "@/components/signup/SignupStepOne";
import SignupStepTwo from "@/components/signup/SignupStepTwo";
import { useUserDataStore } from "@/lib/store/userDataStore";
import "@/components/signup/SignupSection.scss";

function SignupSection() {
  const { signUpStep } = useStepsStore();
  const { userData } = useUserDataStore();
  const router = useRouter();

  // useEffect(() => {
  //   if (!userData.newMember) {
  //     router.push("/");
  //   }
  // }, []);

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
