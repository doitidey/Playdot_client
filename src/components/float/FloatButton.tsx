"use client";

import "./FloatButton.scss";
import { ButtonHTMLAttributes, ReactNode } from "react";
import { TbPentagonFilled } from "react-icons/tb";
import Text from "../common/Text";

interface FloatButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  chat?: ReactNode;
  home?: string;
  away?: string;
  visibleFloat?: boolean;
  chatButtonTitle?: ReactNode;
}

function FloatButton({ ...props }: FloatButtonProps) {
  return (
    <button className="float-button" {...props}>
      <TbPentagonFilled />
      <div className="float-button__content">
        {props.chat}
        {props.chatButtonTitle}
        {props.visibleFloat && (
          <>
            <Text caption>{props.home}</Text>
            <Text caption>vs</Text>
            <Text caption>{props.away}</Text>
          </>
        )}
      </div>
    </button>
  );
}

export default FloatButton;
