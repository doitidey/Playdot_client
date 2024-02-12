"use client";

import DateSection from "@/components/today/DateSection";
import ScoreList from "@/components/today/ScoreList";
import Comment from "@/components/comment/Comment";
import "@/components/today/Today.scss";
import { useState } from "react";
import { todayGames } from "@/lib/api/todayAPI";
import { useQuery } from "react-query";

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
  const { data = game } = useQuery({
    queryKey: ["today"],
    queryFn: () => todayGames()?.then((res) => setGame(res.data)),
  });

  return (
    <div className="today-block">
      <DateSection />
      <ScoreList game={data} />
      <Comment />
    </div>
  );
}

export default Today;
