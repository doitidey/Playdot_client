import Image from "next/image";

import Title from "@/components/common/Title";
import LoginButton from "@/components/login/LoginButton";
import "@/components/login/LoginSection.scss";

function LoginSection() {
  return (
    <section className="login-block">
      <div className="login-content">
        <Image
          src={"/images/loginicon.svg"}
          alt={"login-logo"}
          width={0}
          height={0}
          style={{ width: "72px", height: "auto", marginBottom: "22px" }}
        />

        <Title largest>플레이닷 ID 생성</Title>
        <div className="login-content__text">
          <Title small>간편로그인을 사용하여 아이디,비밀번호 입력 없이</Title>
          <Title small>쉽게 플레이닷 서비스를 이용할 수 있어!</Title>
        </div>
      </div>
      <LoginButton />
    </section>
  );
}

export default LoginSection;
