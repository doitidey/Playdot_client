import "@/components/common/Button.scss";
import classNames from "classnames";

interface ButtonProps {
  /** 버튼 내용을 받아옵니다. */
  label: string;
  /** 버튼 사이즈를 지정합니다. */
  size: "small" | "medium" | "large";
  /** 버튼 타입을 지정합니다. */
  variant: "primary" | "secondary" | "active";
  /** 버튼 이벤트 함수를 받아옵니다. */
  onClick?: () => void;
}

function Button(props: ButtonProps) {
  return (
    <button
      className={classNames(
        "button-block",
        `button-block__${props.size}`,
        `button-block__${props.variant}`,
      )}
      onClick={props.onClick}
    >
      {props.label}
    </button>
  );
}

export default Button;
