"use client";

import "./ScoreList.scss";
import ScoreListItem from "./ScoreListItem";
import { TodayMatchData } from "./Today";

interface ScoreListProps {
  game: TodayMatchData[];
}

type Status = "READY" | "PROGRASS" | "END";

function ScoreList({ game }: ScoreListProps) {
  return (
    <section className="score-block">
      <ul className="score-block__content">
        {game.map((item) => (
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
