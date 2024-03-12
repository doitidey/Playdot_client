import { ReactNode } from "react";
import "./Title.scss";
import classNames from "classnames";

interface TitleProps {
  /** 화면에 출력할 글자를 받아옵니다. */
  children: ReactNode;
  /** 출력할 제목의 크기가 largest인지 판단합니다. */
  largest?: boolean;
  /** 출력할 제목의 크기가 large인지 판단합니다. */
  large?: boolean;
  /** 출력할 제목의 크기가 medium인지 판단합니다. */
  medium?: boolean;
  /** 출력할 제목의 크기가 small인지 판단합니다. */
  small?: boolean;
  /** title에 필요한 classname을 받아옵니다. */
  className?: string;
}

/**
 * 커스텀 타이틀 컴포넌트
 * @param largest 48px / 700(bold)
 * @param large 36px / 600(semi bold)
 * @param medium 24px / 600(semi bold)
 * @param small 22px / 500(medium)
 */
function Title({
  children,
  largest,
  large,
  medium,
  small,
  className,
}: TitleProps) {
  return (
    <h2
      className={classNames(
        `${largest ? "title-1" : ""}`,
        `${large ? "title-2" : ""}`,
        `${medium ? "title-3" : ""}`,
        `${small ? "title-4" : ""}`,
        className,
      )}
    >
      {children}
    </h2>
  );
}

export default Title;
