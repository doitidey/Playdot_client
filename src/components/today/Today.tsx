"use client";

import "@/components/today/Today.scss";
import { useQuery } from "react-query";
import DateSection from "@/components/today/DateSection";
import ScoreList from "@/components/today/ScoreList";
import ChatFloatSection from "@/components/float/ChatFloatSection";
import { getTodayGames } from "@/lib/api/todayAPI";
import { TodayMatchData } from "@/lib/types/today/today";
import Comment from "../comment/Comment";

function Today() {
  const { data: todayData } = useQuery<TodayMatchData[]>(
    "today",
    () => getTodayGames(),
    {
      staleTime: 1000 * 60,
      cacheTime: 1000 * 60 * 5,
    },
  );

  return (
    <>
      <div className="today-block">
        <DateSection />
        <ScoreList todayData={todayData as []} />
        <Comment commentType="today" />
        <ChatFloatSection game={todayData as []} />
      </div>
    </>
  );
}

export default Today;
