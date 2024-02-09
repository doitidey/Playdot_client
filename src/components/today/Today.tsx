"use client";

import DateSection from "@/components/today/DateSection";
import ScoreList from "@/components/today/ScoreList";
import Comment from "@/components/comment/Comment";
import "@/components/today/Today.scss";
import { useCallback, useEffect, useState } from "react";
import { todayGames } from "@/lib/api/todayAPI";

export interface TodayMatchData {
  gameId?: number;
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
  const getTodayMatch = useCallback(async () => {
    const response = await todayGames();
    console.log(response.data);
    setGame(response.data);
  }, []);

  useEffect(() => {
    getTodayMatch();
  }, [getTodayMatch]);

  return (
    <div className="today-block">
      <DateSection />
      <ScoreList game={game} />
      <Comment />
    </div>
  );
}

export default Today;
