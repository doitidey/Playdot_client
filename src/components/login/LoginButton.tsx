"use client";
import classNames from "classnames";
import Image from "next/image";

import "@/components/login/LoginButton.scss";

type ButtonInfo = Array<{
  name: string;
  text: string;
  img: string;
}>;
const BUTTON_INFO: ButtonInfo = [
  { name: "naver", text: "네이버 로그인", img: "/images/naver.svg" },
  { name: "kakao", text: "카카오톡 로그인", img: "/images/kakao.svg" },
  { name: "google", text: "구글 로그인", img: "/images/google.svg" },
];

function LoginButton() {
  const onClickButton = () => {
    console.log("onClickButton");
  };
  return (
    <div className="buttons-block">
      {BUTTON_INFO.map(({ name, text, img }) => (
        <button
          onClick={onClickButton}
          key={name}
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
