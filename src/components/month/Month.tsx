"use client";

import "@/components/month/Month.scss";
import WinnerMonthItem from "./WinnerMonthItem";
import LoserMonthItem from "./LoserMonthItem";
import { useQuery } from "react-query";
import { getMonthGame } from "@/lib/api/monthAPI";
import { MonthData } from "@/lib/types/month/month";
import Title from "../common/Title";
import Text from "../common/Text";
import Comment from "../comment/Comment";

const description =
  "월간 승리 요정은 매달 1일에 지난달 진행된 승부예측에서 가장 많이 예측을 성공한 승리요정, 가장 예측을 빗나간 패배요정을 통계내어 순위를 매긴 페이지야! \n 각 부문 1위를 하게되면 한마디도 보이니 1위 하는게 좋겠지?";

function Month() {
  const { data: monthData } = useQuery<MonthData>(
    "month",
    () => getMonthGame(),
    {
      staleTime: 1000 * 60,
      cacheTime: 1000 * 60 * 5,
    },
  );
  console.warn(monthData?.winMembers);
  return (
    <>
      <div className="description">
        <div className="description__content">
          <Title medium>월간 승리요정이란?</Title>
          <Text>{description}</Text>
        </div>
      </div>
      <section className="month-block">
        <div className="month-content">
          <WinnerMonthItem monthData={monthData as MonthData} />
          <LoserMonthItem monthData={monthData as MonthData} />
        </div>
      <Comment commentType="month" />
      </section>
    </>
  );
}

export default Month;
