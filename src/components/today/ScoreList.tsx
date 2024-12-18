"use client";

import { TodayMatchData } from "@/lib/types/today/today";
import "./ScoreList.scss";
import ScoreListItem from "./ScoreListItem";

interface ScoreListProps {
  todayData: TodayMatchData[];
}

type Status = "READY" | "PROGRASS" | "END";

function ScoreList({ todayData }: ScoreListProps) {
  return (
    <section className="score-block">
      <ul className="score-block__content">
        {todayData?.map((item) => (
          <ScoreListItem
            key={item.gameId}
            homeTeam={item.homeTeam}
            awayTeam={item.awayTeam}
            gameTime={item.gameTime}
            gameId={item.gameId}
            status={item.status as Status}
          />
        ))}
      </ul>
    </section>
  );
}

export default ScoreList;
