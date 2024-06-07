"use client";

import "@/components/today/Today.scss";
import { useQuery } from "react-query";
import DateSection from "@/components/today/DateSection";
import ScoreList from "@/components/today/ScoreList";
import Comment from "@/components/comment/Comment";
import ChatFloatSection from "@/components/float/ChatFloatSection";

import { getTodayGames } from "@/lib/api/todayAPI";

export interface TodayMatchData {
  gameId: number;
  gameTime: string;
  homeTeam: {
    id: number;
    score: number;
    teamName: string;
    teamShortName: string;
    voteRatio: number;
    hasVote: boolean;
  };
  awayTeam: {
    id: number;
    score: number;
    teamName: string;
    teamShortName: string;
    voteRatio: number;
    hasVote: boolean;
  };
  status?: string;
}

function Today() {
  const { data: todayData } = useQuery<TodayMatchData[]>(
    "today",
    () => getTodayGames(),
    {
      staleTime: 1000 * 60,
      cacheTime: 1000 * 60 * 5,
    },
  );

  console.warn(todayData);

  return (
    <>
      <div className="today-block">
        <DateSection />
        <ScoreList todayData={todayData as []} />
        <Comment />
        <ChatFloatSection game={todayData as []} />
      </div>
    </>
  );
}

export default Today;
