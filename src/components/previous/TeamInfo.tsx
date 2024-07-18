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
  switch (activeTab) {
    case 0: {
      return (
        <ul className="team-info-block">
          {firstData &&
            firstData.map((item) =>
              item.games.map((item, index) => (
                <>
                  <TeamInfoItem
                    key={index}
                    awayTeam={item.awayTeam}
                    homeTeam={item.homeTeam}
                    voteTeamId={item.voteTeamId}
                  />
                </>
              )),
            )}
        </ul>
      );
    }
    case 1: {
      return (
        <ul className="team-info-block">
          {secondData &&
            secondData.map((item) =>
              item.games.map((item) => (
                <>
                  <TeamInfoItem
                    key={item.gameId}
                    awayTeam={item.awayTeam}
                    homeTeam={item.homeTeam}
                    gameDate={item.gameDate}
                    voteTeamId={item.voteTeamId}
                  />
                </>
              )),
            )}
        </ul>
      );
    }
    case 2: {
      return (
        <ul className="team-info-block">
          {thirdData &&
            thirdData.map((item) =>
              item.games.map((item) => (
                <>
                  <TeamInfoItem
                    key={item.gameId}
                    awayTeam={item.awayTeam}
                    homeTeam={item.homeTeam}
                    gameDate={item.gameDate}
                    voteTeamId={item.voteTeamId}
                  />
                </>
              )),
            )}
        </ul>
      );
    }
    case 3: {
      return (
        <ul className="team-info-block">
          {fourthData &&
            fourthData.map((item) =>
              item.games.map((item) => (
                <>
                  <TeamInfoItem
                    key={item.gameId}
                    awayTeam={item.awayTeam}
                    homeTeam={item.homeTeam}
                    gameDate={item.gameDate}
                    voteTeamId={item.voteTeamId}
                  />
                </>
              )),
            )}
        </ul>
      );
    }
    case 4: {
      return (
        <ul className="team-info-block">
          {fifthData &&
            fifthData.map((item) =>
              item.games.map((item) => (
                <>
                  <TeamInfoItem
                    key={item.gameId}
                    awayTeam={item.awayTeam}
                    homeTeam={item.homeTeam}
                    gameDate={item.gameDate}
                    voteTeamId={item.voteTeamId}
                  />
                </>
              )),
            )}
        </ul>
      );
    }
  }
}

export default TeamInfo;
