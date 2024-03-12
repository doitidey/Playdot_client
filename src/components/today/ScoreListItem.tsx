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
import { deleteTodayGameVote, todayGameVote } from "@/lib/api/todayAPI";
import { useMutation } from "react-query";

// Interface
interface ScoreListItemProps extends TodayMatchData {}

// Component
function ScoreListItem({
  homeTeam,
  awayTeam,
  gameTime,
  gameId,
}: ScoreListItemProps) {
  const [selectHome, setSelectHome] = useState(false);
  const [selectAway, setSelectAway] = useState(false);
  const [voteHome, setVoteHome] = useState(homeTeam.voteRatio);
  const [voteAway, setVoteAway] = useState(awayTeam.voteRatio);

  const { mutate: home } = useMutation(
    async () => todayGameVote(gameId as number, homeTeam.id),
    {
      onMutate: () => {
        console.warn("홈 팀 선택 완료!");
      },
    },
  );

  const { mutate: homeDelete } = useMutation(
    async () => deleteTodayGameVote(gameId as number),
    {
      onMutate: () => {
        console.warn("홈 팀 삭제 완료");
      },
    },
  );

  const { mutate: away } = useMutation(
    async () => todayGameVote(gameId as number, awayTeam.id),
    {
      onMutate: () => {
        console.warn("원정 팀 선택 완료!");
      },
    },
  );

  const { mutate: awayDelete } = useMutation(
    async () => deleteTodayGameVote(gameId as number),
    {
      onMutate: () => {
        console.warn("원정 팀 삭제 완료");
      },
    },
  );

  const onClickHome = useCallback(() => {
    // Toggle select home
    setSelectHome(!selectHome);
    setSelectAway(false);
    !selectHome ? home() : homeDelete();
    setVoteHome(homeTeam.voteRatio);
  }, [home, homeDelete, selectHome, homeTeam.voteRatio]);

  const onClickAway = useCallback(() => {
    // Toggle select away
    setSelectAway(!selectAway);
    setSelectHome(false);
    !selectAway ? away() : awayDelete();
    setVoteAway(awayTeam.voteRatio);
  }, [away, awayDelete, selectAway, awayTeam.voteRatio]);

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
          onClick={onClickHome}
        >
          <div className="team-img">
            <Image
              src={getHomeLogo(homeTeam.teamName)}
              alt={homeTeam.teamName}
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
            <Title medium>{voteHome}%</Title>
          </div>
        </div>
        <div
          className={classNames(
            `score-item-block__right ${selectAway ? "active-right" : ""}`,
          )}
          onClick={onClickAway}
        >
          <div className="team-img">
            <Image
              src={getAwayLogo(awayTeam.teamName)}
              alt={awayTeam.teamName}
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
            <Title medium>{voteAway}%</Title>
          </div>
        </div>
      </li>
    </>
  );
}

export default memo(ScoreListItem);
