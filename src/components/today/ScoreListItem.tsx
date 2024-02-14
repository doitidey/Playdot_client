"use client";

import { memo, useCallback, useState } from "react";
import Text from "../common/Text";
import "./ScoreListItem.scss";
import classNames from "classnames";
import Image from "next/image";
import Title from "../common/Title";
import { TodayMatchData } from "./Today";
import { getAwayLogo, getHomeLogo } from "@/lib/util/getLogo";
import { gameDate } from "@/lib/util/getGameTime";

// Interface
interface ScoreListItemProps extends TodayMatchData {}

// Component
function ScoreListItem({ homeTeam, awayTeam, gameTime }: ScoreListItemProps) {
  const [selectHome, setSelectHome] = useState(false);
  const [selectAway, setSelectAway] = useState(false);

  const onClickLeft = useCallback(() => {
    setSelectHome(!selectHome);
    setSelectAway(false);
  }, [selectHome]);

  const onClickRight = useCallback(() => {
    setSelectAway(!selectAway);
    setSelectHome(false);
  }, [selectAway]);

  return (
    <>
      <Title className="match-day" small>
        {gameDate(gameTime)}
      </Title>
      <li className="score-item-block">
        <div
          className={classNames(
            `score-item-block__left ${selectHome ? "active-left" : ""}`,
          )}
          onClick={onClickLeft}
        >
          <div className="team-img">
            <Image
              src={getHomeLogo(homeTeam.teamName)}
              alt="lions"
              width={0}
              height={0}
              draggable={false}
            />
          </div>
          <div className="team-info-left">
            {selectHome ? (
              <Text large>{homeTeam.teamName}</Text>
            ) : (
              <Text large>{homeTeam.teamName}</Text>
            )}
            <Title medium>{homeTeam.voteRatio}%</Title>
          </div>
        </div>
        <div
          className={classNames(
            `score-item-block__right ${selectAway ? "active-right" : ""}`,
          )}
          onClick={onClickRight}
        >
          <div className="team-img">
            <Image
              src={getAwayLogo(awayTeam.teamName)}
              alt="lions"
              width={0}
              height={0}
              draggable={false}
            />
          </div>
          <div className="team-info-right">
            {selectAway ? (
              <Text large>{awayTeam.teamName}</Text>
            ) : (
              <Text large>{awayTeam.teamName}</Text>
            )}
            <Title medium>{awayTeam.voteRatio}%</Title>
          </div>
        </div>
      </li>
    </>
  );
}

export default memo(ScoreListItem);
