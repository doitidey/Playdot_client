"use client";

import "@/components/previous/Previous.scss";
import Select from "@/components/previous/Select";
import Title from "../common/Title";
import TeamInfo from "./TeamInfo";
import { useQuery } from "react-query";
import { getPrevious } from "@/lib/api/previousAPI";
import { useState } from "react";

interface SelectArray {
  title: string;
  text: string;
}

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

const selectArr: SelectArray[] = [
  {
    title: "1주",
    text: "12.1 - 12.7",
  },
  {
    title: "2주",
    text: "12.8 - 12.14",
  },
  {
    title: "3주",
    text: "12.15 - 12.21",
  },
  {
    title: "4주",
    text: "12.22 - 12.28",
  },
  {
    title: "5주",
    text: "12.29 - 12.31",
  },
];

function Previous() {
  const [previous, setPrevious] = useState<PreviousData[]>([]);
  useQuery({
    queryKey: ["previous"],
    queryFn: () =>
      getPrevious("2024-03-24", "2024-04-17")?.then((res) => console.warn(res)),
    refetchOnWindowFocus: false,
  });
  return (
    <section className="previous-block">
      <div className="previous-block__content">
        <Title medium>지난 예측</Title>
        <Select />
        {/* <TeamInfo previousData={previousData} /> */}
      </div>
    </section>
  );
}

export default Previous;