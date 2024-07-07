"use client";

import "@/components/month/Month.scss";
import WinnerMonthItem from "./WinnerMonthItem";
import LoserMonthItem from "./LoserMonthItem";
import { useQuery } from "react-query";
import { getMonthGame } from "@/lib/api/monthAPI";
import { MonthData } from "@/lib/types/month/month";
import CommentDummy from "../comment/dummy/CommentDummy";

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
      <CommentDummy />
    </>
  );
}

export default Month;
