"use client";

import Image from "next/image";
import classNames from "classnames";
import { ButtonHTMLAttributes, ReactNode } from "react";
import { TbPentagonFilled } from "react-icons/tb";

import "./FloatButton.scss";
import Text from "@/components/common/Text";

type buttonstyle = "chatting" | "floating";

interface FloatButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  chat?: ReactNode;
  home?: string;
  away?: string;
  visiblefloat: string;
  chatbuttontitle?: ReactNode;
  buttonstyle?: buttonstyle;
}

function FloatButton({ ...props }: FloatButtonProps) {
  return (
    <button
      className={classNames(
        "float-button",
        `float-button__${props.buttonstyle}`,
      )}
      {...props}
    >
      <TbPentagonFilled />

      {props.buttonstyle === "floating" ? (
        <div className="float-button__content">
          {props.visiblefloat === "true" ? (
            //TODO: X버튼으로 변경
            <Image src="/images/chat.svg" alt="" width={38} height={38} />
          ) : (
            <Image src="/images/chat.svg" alt="" width={38} height={38} />
          )}
          <Text large>채팅방</Text>
        </div>
      ) : (
        <div className="float-button__content">
          {props.visiblefloat === "true" && (
            <>
              <Text caption>{props.home}</Text>
              <Text caption>vs</Text>
              <Text caption>{props.away}</Text>
            </>
          )}
        </div>
      )}
    </button>
  );
}

export default FloatButton;
