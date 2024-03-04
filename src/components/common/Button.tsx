import "@/components/common/Button.scss";
import classNames from "classnames";

interface ButtonProps {
  label: string;
  size: "small" | "medium" | "large";
  variant: "primary" | "secondary" | "active";
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
