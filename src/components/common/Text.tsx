import { ReactNode } from "react";
import "./Text.scss";
import classNames from "classnames";

interface TextProps {
  /** 화면에 출력할 글자를 받아옵니다. */
  children: ReactNode;
  /** 출력할 텍스트 크기가 large인지 판단합니다. */
  large?: boolean;
  /** 출력할 텍스트 크기가 medium인지 판단합니다. */
  medium?: boolean;
  /** 출력할 텍스트 크기가 small인지 판단합니다. */
  small?: boolean;
  /** 출력할 텍스트 크기가 caption인지 판단합니다. */
  caption?: boolean;
  /** text에 필요한 classname을 받아옵니다. */
  className?: string;
}

/**
 * 커스텀 텍스트 컴포넌트
 * @param large 18px / 500(medium)
 * @param medium 16px / 500(medium)
 * @param small 14px / 500(medium)
 * @param caption 12px / 400(normal)
 */
function Text({
  children,
  large,
  medium,
  small,
  caption,
  className,
}: TextProps) {
  return (
    <span
      className={classNames(
        `${large ? "text-1" : ""}`,
        `${medium ? "text-2" : ""}`,
        `${small ? "text-3" : ""}`,
        `${caption ? "caption-text" : ""}`,
        className,
      )}
    >
      {children}
    </span>
  );
}

export default Text;
