import classNames from "classnames";
import { ButtonHTMLAttributes } from "react";

import "@/components/common/Button.scss";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  /** 버튼 내용을 받아옵니다. */
  label?: string;
  /** 버튼 사이즈를 지정합니다. */
  size: "x-small" | "small" | "medium" | "x-medium" | "large" | "submit";
  /** 버튼 타입을 지정합니다. */
  variant: "primary" | "disactive" | "active" | "cancel";
}

function Button({ ...props }: ButtonProps) {
  return (
    <button
      {...props}
      className={classNames(
        "button-block",
        `button-block__${props.size}`,
        `button-block__${props.variant}`,
      )}
    >
      {props.label}
    </button>
  );
}

export default Button;
