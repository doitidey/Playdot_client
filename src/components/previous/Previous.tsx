"use client";

import "@/components/previous/Previous.scss";
import Select from "@/components/previous/Select";
import Title from "../common/Title";
import TeamInfo from "./TeamInfo";
import { useQueries } from "react-query";
import { getPrevious } from "@/lib/api/previousAPI";
import {
  fifthEndDate,
  fifthStartDate,
  firstEndDate,
  firstStartDate,
  fourthEndDate,
  fourthStartDate,
  secondEndDate,
  secondStartDate,
  thirdEndDate,
  thirdStartDate,
} from "@/lib/util/previous/date";

export interface PreviousData {
  gameId: number;
  homeTeam: {
    teamName: string;
    voteRatio: number;
    id: number;
  };
  awayTeam: {
    teamName: string;
    voteRatio: number;
    id: number;
  };
  gameTime: string;
  voteTeamId: number;
}

function Previous() {
  const previousData = useQueries<PreviousData[]>([
    {
      queryKey: ["previous", 1],
      queryFn: () => getPrevious(firstStartDate, firstEndDate),
      staleTime: 1000 * 60,
      cacheTime: 1000 * 60 * 5,
    },
    {
      queryKey: ["previous", 2],
      queryFn: () => getPrevious(secondStartDate, secondEndDate),
      staleTime: 1000 * 60,
      cacheTime: 1000 * 60 * 5,
    },
    {
      queryKey: ["previous", 3],
      queryFn: () => getPrevious(thirdStartDate, thirdEndDate),
      staleTime: 1000 * 60,
      cacheTime: 1000 * 60 * 5,
    },
    {
      queryKey: ["previous", 4],
      queryFn: () => getPrevious(fourthStartDate, fourthEndDate),
      staleTime: 1000 * 60,
      cacheTime: 1000 * 60 * 5,
    },
    {
      queryKey: ["previous", 5],
      queryFn: () => getPrevious(fifthStartDate, fifthEndDate),
      staleTime: 1000 * 60,
      cacheTime: 1000 * 60 * 5,
    },
  ]);

  console.warn(previousData);

  return (
    <section className="previous-block">
      <div className="previous-block__content">
        <Title medium>지난 예측</Title>
        <Select />
        <TeamInfo />
      </div>
    </section>
  );
}

export default Previous;
