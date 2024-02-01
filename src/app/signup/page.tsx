import SignupSection from "@/components/signup/SignupSection";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "플레이닷 | 회원가입",
};

function SignupPage() {
  return <SignupSection />;
}

export default SignupPage;
