"use client";

import "@/components/previous/TeamInfo.scss";
import TeamInfoItem from "./TeamInfoItem";
import { PreviousData } from "@/lib/types/previous/previous";

interface TeamInfoProps {
  activeTab: number;
  firstData: PreviousData[];
  secondData: PreviousData[];
  thirdData: PreviousData[];
  fourthData: PreviousData[];
  fifthData: PreviousData[];
}

function TeamInfo({
  activeTab,
  firstData,
  secondData,
  thirdData,
  fourthData,
  fifthData,
}: TeamInfoProps) {
  console.warn(firstData);
  switch (activeTab) {
    case 0: {
      return (
        <ul className="team-info-block">
          {firstData &&
            firstData.map((item) => (
              <TeamInfoItem
                key={item.gameId}
                awayTeam={item.awayTeam}
                homeTeam={item.homeTeam}
                gameDate={item.gameDate}
              />
            ))}
        </ul>
      );
    }
    case 1: {
      return (
        <ul className="team-info-block">
          {secondData &&
            secondData.map((item) => (
              <TeamInfoItem
                key={item.gameId}
                awayTeam={item.awayTeam}
                homeTeam={item.homeTeam}
                gameDate={item.gameDate}
              />
            ))}
        </ul>
      );
    }
    case 2: {
      return (
        <ul className="team-info-block">
          {thirdData &&
            thirdData.map((item) => (
              <TeamInfoItem
                key={item.gameId}
                awayTeam={item.awayTeam}
                homeTeam={item.homeTeam}
                gameDate={item.gameDate}
              />
            ))}
        </ul>
      );
    }
    case 3: {
      return (
        <ul className="team-info-block">
          {fourthData &&
            fourthData.map((item) => (
              <TeamInfoItem
                key={item.gameId}
                awayTeam={item.awayTeam}
                homeTeam={item.homeTeam}
                gameDate={item.gameDate}
              />
            ))}
        </ul>
      );
    }
    case 4: {
      return (
        <ul className="team-info-block">
          {fifthData &&
            fifthData.map((item) => (
              <TeamInfoItem
                key={item.gameId}
                awayTeam={item.awayTeam}
                homeTeam={item.homeTeam}
                gameDate={item.gameDate}
              />
            ))}
        </ul>
      );
    }
  }
}

export default TeamInfo;
