"use client";

import "@/components/comment/today/Report.scss";
import Button from "@/components/common/Button";
import Text from "@/components/common/Text";
import Title from "@/components/common/Title";
import classNames from "classnames";
import { MdClose } from "react-icons/md";

interface ReportProps {
  onCloseReport: () => void;
}

function ReportDummy({ onCloseReport }: ReportProps) {
  return (
    <div className="report-block" onClick={onCloseReport}>
      <form className="report-popup">
        <button className="close" onClick={onCloseReport}>
          <MdClose />
        </button>
        <Title medium>정말 해당 플레이어를 신고할거야?</Title>
        <Text small className="subtitle">
          어떤 사유로 신고할래?
        </Text>
        <ul className="report-popup__select">
          <li className={classNames(`report-popup__select__item`)}>
            <div className="report-popup__select__item__num">1</div>
            <Text small>부적절한 언행 사용</Text>
          </li>
          <li className={classNames(`report-popup__select__item`)}>
            <div className="report-popup__select__item__num">2</div>
            <Text small>스팸/홍보 및 도배글</Text>
          </li>
          <li className={classNames(`report-popup__select__item`)}>
            <div className="report-popup__select__item__num">3</div>
            <Text small>개인정보 노출</Text>
          </li>
          <li className={classNames(`report-popup__select__item`)}>
            <div className="report-popup__select__item__num">4</div>
            <Text small>기타</Text>
          </li>
        </ul>
        <Button size="medium" variant="active" label="신고하기" />
      </form>
    </div>
  );
}

export default ReportDummy;
