"use client";

import "@/components/month/Month.scss";
// import Comment from "@/components/comment/Comment";
import WinnerMonthItem from "./WinnerMonthItem";
import LoserMonthItem from "./LoserMonthItem";
import { useQuery } from "react-query";
import { getMonthGame } from "@/lib/api/monthAPI";

export interface Members {
  rank: number;
  voteRatio: number;
  memberId: number;
  nickname: string;
  winFairyCount: number;
  loseFairyCount: number;
  title: string;
}

export interface MonthData {
  winMembers: Members[];
  loseMembers: Members[];
}

function Month() {
  const { data: monthData } = useQuery<MonthData>("month", () =>
    getMonthGame(),
  );
  console.warn(monthData?.winMembers);
  return (
    <>
      <section className="month-block">
        <div className="month-content">
          <WinnerMonthItem monthData={monthData as MonthData} />
          <LoserMonthItem monthData={monthData as MonthData} />
        </div>
      </section>
      {/* <Comment /> */}
    </>
  );
}

export default Month;
