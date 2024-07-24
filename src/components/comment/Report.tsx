"use client";

import "@/components/comment/Report.scss";
import Button from "@/components/common/Button";
import Text from "@/components/common/Text";
import Title from "@/components/common/Title";
import { getCommentReport, postCommentReport } from "@/lib/api/todayAPI";
import { ReportData } from "@/lib/types/comment/reply";
import classNames from "classnames";
import { FormEvent, useCallback, useState } from "react";
import { MdClose } from "react-icons/md";
import { useMutation, useQuery } from "react-query";

interface ReportProps {
  onCloseReport: () => void;
  replyId: number;
}

type Select = "ABUSE" | "SPAM" | "PRIVACY" | "ETC";

function Report({ onCloseReport, replyId }: ReportProps) {
  const [reportType, setReportType] = useState<Select>();
  const { data: reportData } = useQuery<ReportData[]>("commentReport", () =>
    getCommentReport(replyId as number),
  );

  const reportComment = reportData?.map((item) => item.comment);

  const { mutate: postReport } = useMutation(
    (type: string) => postCommentReport(replyId, type),
    {
      onSuccess: () => {
        console.warn(`신고 완료: ${replyId} / 신고 내용: ${reportComment}`);
      },
      onError: () => {
        console.warn(`댓글 입력 실패`);
      },
    },
  );

  const onClickSelect = (type: Select) => {
    switch (type) {
      case "ABUSE":
        setReportType("ABUSE");
        console.warn(type);
        break;
      case "SPAM":
        setReportType("SPAM");
        console.warn(type);
        break;
      case "PRIVACY":
        setReportType("PRIVACY");
        console.warn(type);
        break;
      case "ETC":
        setReportType("ETC");
        console.warn(type);
        break;
    }
  };

  const onSubmit = useCallback(
    (event: FormEvent) => {
      event.preventDefault();
      postReport(reportType as Select);
    },
    [postReport, reportType],
  );

  return (
    <div className="report-block">
      <form className="report-popup" onSubmit={onSubmit}>
        <button className="close" onClick={onCloseReport}>
          <MdClose />
        </button>
        <Title medium>정말 해당 플레이어를 신고할거야?</Title>
        <Text small className="subtitle">
          어떤 사유로 신고할래?
        </Text>
        <ul className="report-popup__select">
          {reportData?.map((item, index) => (
            <li
              key={index}
              className={classNames(`report-popup__select__item`)}
              onClick={() => onClickSelect(item.type as Select)}
            >
              <div className="report-popup__select__item__num">{index + 1}</div>
              <Text small>{item.comment}</Text>
            </li>
          ))}
        </ul>
        <Button size="medium" variant="active" label="신고하기" type="submit" />
      </form>
    </div>
  );
}

export default Report;
