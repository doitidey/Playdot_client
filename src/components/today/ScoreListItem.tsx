"use client";

import { memo, useCallback } from "react";
import Text from "../common/Text";
import "./ScoreListItem.scss";
import classNames from "classnames";
import Image from "next/image";
import Title from "../common/Title";
import { TodayMatchData } from "./Today";
import { getAwayLogo, getHomeLogo } from "@/lib/util/getLogo";
import { gameDate } from "@/lib/util/getGameTime";
import { useMutation } from "react-query";
import { deleteTodayGames, voteTodayGames } from "@/lib/api/todayAPI";
import { queryClient } from "../common/Layout";

// Interface
interface ScoreListItemProps extends TodayMatchData {
  status: string;
}

// Component
function ScoreListItem({
  homeTeam,
  awayTeam,
  gameTime,
  gameId,
  status,
}: ScoreListItemProps) {
  const { mutate: awayVote } = useMutation(
    () => voteTodayGames(gameId, awayTeam.id),
    {
      onSuccess: () => {
        console.warn("원정 팀 선택 완료");
        queryClient.invalidateQueries({ queryKey: ["today"] });
      },
    },
  );

  const { mutate: deleteAwayVote } = useMutation(
    () => deleteTodayGames(gameId),
    {
      onSuccess: () => {
        console.warn("원정 팀 투표 취소 완료");
        queryClient.invalidateQueries({ queryKey: ["today"] });
      },
    },
  );

  const { mutate: homeVote } = useMutation(
    () => voteTodayGames(gameId, homeTeam.id),
    {
      onSuccess: () => {
        console.warn("홈 팀 선택 완료");
        queryClient.invalidateQueries({ queryKey: ["today"] });
      },
    },
  );

  const { mutate: deleteHomeVote } = useMutation(
    () => deleteTodayGames(gameId),
    {
      onSuccess: () => {
        console.warn("원정 팀 투표 취소 완료");
        queryClient.invalidateQueries({ queryKey: ["today"] });
      },
    },
  );

  const onClickAway = useCallback(() => {
    // switch case 문으로 조건 정의
    awayVote();
  }, [awayVote]);

  const onDeleteAwayVote = useCallback(() => {
    deleteAwayVote();
  }, [deleteAwayVote]);

  const onClickHome = useCallback(() => {
    homeVote();
  }, [homeVote]);

  const onDeleteHomeVote = useCallback(() => {
    deleteHomeVote();
  }, [deleteHomeVote]);

  return (
    <>
      <div className="match-date-block">
        <Title className="match-day" small>
          {gameDate(gameTime)}
        </Title>
        {/* <GameStatus status={status} gameTime={gameTime} /> */}
      </div>
      <li className="score-item-block">
        {status === "READY" || (
          <div className="vote-end">
            {status === "PROGRESS" && <Title small>예측 마감</Title>}
            {status === "CANCEL" && <Title small>경기 취소</Title>}
            {status === "END" && <Title small>경기 종료</Title>}
          </div>
        )}
        <div
          className={classNames(
            `score-item-block__left ${awayTeam.hasVote ? "active-left" : ""}`,
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
          <div className="team-info-left">
            {awayTeam.hasVote ? (
              <Text large>{awayTeam.teamName}</Text>
            ) : (
              <Text large>{awayTeam.teamName}</Text>
            )}
            <Title medium>{awayTeam.voteRatio}%</Title>
            <button onClick={onDeleteAwayVote}>투표취소(임시)</button>
          </div>
        </div>
        <div
          className={classNames(
            `score-item-block__right ${homeTeam.hasVote ? "active-right" : ""}`,
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
          <div className="team-info-right">
            {homeTeam.hasVote ? (
              <Text large>{homeTeam.teamName}</Text>
            ) : (
              <Text large>{homeTeam.teamName}</Text>
            )}
            <Title medium>{homeTeam.voteRatio}%</Title>
            <button onClick={onDeleteHomeVote}>투표취소(임시)</button>
          </div>
        </div>
      </li>
    </>
  );
}

export default memo(ScoreListItem);
