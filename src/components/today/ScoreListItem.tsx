"use client";

import { useCallback, useState } from "react";
import Text from "../common/Text";
import "./ScoreListItem.scss";
import classNames from "classnames";
import Image from "next/image";
import Title from "../common/Title";
import { TodayMatchData } from "./Today";

interface ScoreListItemProps extends TodayMatchData {}

// Interface
interface TeamImg {
  lions: string;
  twins: string;
  landers: string;
  bears: string;
  tigers: string;
  eagles: string;
  heroes: string;
  gients: string;
  wiz: string;
  dinos: string;
}

// Constants
const TeamImgHref: TeamImg = {
  lions: "/images/lions.svg",
  tigers: "/images/tigers.svg",
  twins: "/images/twins.svg",
  bears: "/images/bears.svg",
  gients: "/images/giants.svg",
  dinos: "/images/dinos.svg",
  landers: "/images/landers.svg",
  wiz: "/images/wiz.svg",
  eagles: "/images/eagles.svg",
  heroes: "/images/heroes.svg",
};

// Component
function ScoreListItem({ homeTeam, awayTeam, gameTime }: ScoreListItemProps) {
  const [selectHome, setSelectHome] = useState(false);
  const [selectAway, setSelectAway] = useState(false);

  // 추후 moment.js 라이브러리로 전환 예정
  const gameDate = (data: string) => {
    const rDataFormat = /[12][0-9]{3}-[0-9]{2}-[0-9]{2}/;
    if (data.search(rDataFormat) === -1) {
      return data;
    }

    const year = data.substring(0, 4);
    const month = data.substring(5, 7);
    const day = data.substring(10, 8);
    const time = data.substring(11, 16);

    return `${year}년 ${month}월 ${day}일 ${time}`;
  };

  const onClickLeft = useCallback(() => {
    setSelectHome(!selectHome);
    setSelectAway(false);
  }, [selectHome]);

  const onClickRight = useCallback(() => {
    setSelectAway(!selectAway);
    setSelectHome(false);
  }, [selectAway]);

  const getHomeTeamSrc = (data: string) => {
    if (homeTeam.teamName === "LG 트윈스") {
      return TeamImgHref.twins;
    } else if (homeTeam.teamName === "삼성 라이온즈") {
      return TeamImgHref.lions;
    } else if (homeTeam.teamName === "한화 이글스") {
      return TeamImgHref.eagles;
    } else if (homeTeam.teamName === "KIA 타이거즈") {
      return TeamImgHref.tigers;
    } else if (homeTeam.teamName === "키움 히어로즈") {
      return TeamImgHref.heroes;
    } else if (homeTeam.teamName === "롯데 자이언츠") {
      return TeamImgHref.gients;
    } else if (homeTeam.teamName === "SSG 랜더스") {
      return TeamImgHref.landers;
    } else if (homeTeam.teamName === "두산 베어스") {
      return TeamImgHref.bears;
    } else if (homeTeam.teamName === "KT 위즈") {
      return TeamImgHref.wiz;
    } else if (homeTeam.teamName === "NC 다이노스") {
      return TeamImgHref.dinos;
    }
    return data;
  };

  const getAwayTeamSrc = (data: string) => {
    if (awayTeam.teamName === "LG 트윈스") {
      return TeamImgHref.twins;
    } else if (awayTeam.teamName === "삼성 라이온즈") {
      return TeamImgHref.lions;
    } else if (awayTeam.teamName === "한화 이글스") {
      return TeamImgHref.eagles;
    } else if (awayTeam.teamName === "KIA 타이거즈") {
      return TeamImgHref.tigers;
    } else if (awayTeam.teamName === "키움 히어로즈") {
      return TeamImgHref.heroes;
    } else if (awayTeam.teamName === "롯데 자이언츠") {
      return TeamImgHref.gients;
    } else if (awayTeam.teamName === "SSG 랜더스") {
      return TeamImgHref.landers;
    } else if (awayTeam.teamName === "두산 베어스") {
      return TeamImgHref.bears;
    } else if (awayTeam.teamName === "KT 위즈") {
      return TeamImgHref.wiz;
    } else if (awayTeam.teamName === "NC 다이노스") {
      return TeamImgHref.dinos;
    }
    return data;
  };

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
              src={getHomeTeamSrc(homeTeam.teamName)}
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
              src={getAwayTeamSrc(awayTeam.teamName)}
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

export default ScoreListItem;
