"use client";

import Image from "next/image";

import Title from "@/components/common/Title";
import Text from "@/components/common/Text";
import LoginButton from "@/components/login/LoginButton";
import "@/components/login/LoginSection.scss";
import Button from "../common/Button";
// import { login } from "@/lib/api/authAPI";

import { useUserDataStore } from "@/lib/store/userDataStore";
import { login } from "@/lib/api/loginAPI";

function LoginSection() {
  const { setUserData } = useUserDataStore();
  const handleClickLogin = async () => {
    try {
      const res = await login();
      const userProfile = {
        profileImageUrl: res.data.profileImageUrl,
        nickname: res.data.nickname,
        teamName: res.data.teamName,
        newMember: res.data.newMember,
      };
      setUserData(userProfile);
    } catch (e) {
      console.error(e);
    }
  };
  return (
    <section className="login-block">
      <div className="login-content">
        <Image
          src={"/images/loginicon.svg"}
          alt={"login-logo"}
          width={0}
          height={0}
        />

        <Title large>플레이닷 ID 생성</Title>
        <div className="login-content__text">
          <Text large>간편로그인을 사용하여 아이디,비밀번호 입력 없이</Text>
          <Text large>쉽게 플레이닷 서비스를 이용할 수 있어!</Text>
          <Button
            label="개발용 로그인"
            size="large"
            variant="active"
            onClick={handleClickLogin}
          />
        </div>
      </div>
      <LoginButton />
    </section>
  );
}

export default LoginSection;
