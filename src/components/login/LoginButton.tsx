"use client";
import classNames from "classnames";
import Image from "next/image";

import { useRouter } from "next/navigation";
import { useEffect } from "react";
import "@/components/login/LoginButton.scss";

import { BUTTON_INFO, LOGIN_LINKS } from "@/lib/util/login/loginButton";

function LoginButton() {
  const router = useRouter();

  useEffect(() => {
    const authToken = localStorage.getItem("authToken");
    if (authToken) {
      router.push("/match/today");
    }
  }, [router]);

  const onClickButton = (event: React.MouseEvent<HTMLButtonElement>) => {
    const name = event.currentTarget.getAttribute("data-name");
    if (!name || !LOGIN_LINKS[name]) {
      console.error("로그인 링크를 찾을 수 없음");
      return;
    }
    try {
      window.location.href = LOGIN_LINKS[name];
    } catch (error) {
      console.error("로그인 실패:", error);
    }
  };

  return (
    <div className="buttons-block">
      {BUTTON_INFO.map(({ name, text, img }) => (
        <button
          onClick={onClickButton}
          key={name}
          data-name={name}
          className={classNames(
            "buttons-block__button",
            `buttons-block__button--${name}`,
          )}
        >
          <div className="description">
            <Image src={img} alt={name} width={0} height={0} />
            <p>{text}</p>
          </div>
        </button>
      ))}
    </div>
  );
}

export default LoginButton;
