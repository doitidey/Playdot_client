"use client";
import { useState } from "react";
import { useQuery } from "react-query";

import "@/components/today/Today.scss";
import DateSection from "@/components/today/DateSection";
import ScoreList from "@/components/today/ScoreList";
import Comment from "@/components/comment/Comment";
import ChatFloatSection from "@/components/float/ChatFloatSection";

import { todayGames } from "@/lib/api/todayAPI";

export interface TodayMatchData {
  gameId: number;
  gameTime: string;
  homeTeam: {
    id: number;
    score: number;
    teamName: string;
    teamShortName: string;
    voteRatio: number;
  };
  awayTeam: {
    id: number;
    score: number;
    teamName: string;
    teamShortName: string;
    voteRatio: number;
  };
  status?: string;
}

function Today() {
  const [game, setGame] = useState<TodayMatchData[]>([]);
  const { data: todayData = game } = useQuery({
    queryKey: ["today"],
    queryFn: () =>
      todayGames()?.then((res) => {
        setGame(res.data);
      }),
    refetchOnWindowFocus: false,
    refetchOnMount: false,
    // refetchInterval: 60000,
  });

  console.warn(todayData);

  return (
    <>
      <div className="today-block">
        <DateSection />
        <ScoreList game={todayData} />
        <Comment />
        <ChatFloatSection game={todayData} />
      </div>
    </>
  );
}

export default Today;
