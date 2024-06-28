"use client";

import "@/components/previous/Previous.scss";
import Select from "@/components/previous/Select";
import Title from "../common/Title";
import TeamInfo from "./TeamInfo";
import { useQuery } from "react-query";
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
import { useState } from "react";
import { PreviousData } from "@/lib/types/previous/previous";

function Previous() {
  // Hooks
  const [activeTab, setActiveTab] = useState(0);

  // useQuery
  const { data: firstData } = useQuery<PreviousData[]>(
    ["previous", 0],
    () => getPrevious(firstStartDate, firstEndDate),
    {
      staleTime: 1000 * 60,
      cacheTime: 1000 * 60 * 5,
    },
  );
  const { data: secondData } = useQuery<PreviousData[]>(
    ["previous", 1],
    () => getPrevious(secondStartDate, secondEndDate),
    {
      staleTime: 1000 * 60,
      cacheTime: 1000 * 60 * 5,
    },
  );
  const { data: thirdData } = useQuery<PreviousData[]>(
    ["previous", 2],
    () => getPrevious(thirdStartDate, thirdEndDate),
    {
      staleTime: 1000 * 60,
      cacheTime: 1000 * 60 * 5,
    },
  );
  const { data: fourthData } = useQuery<PreviousData[]>(
    ["previous", 3],
    () => getPrevious(fourthStartDate, fourthEndDate),
    {
      staleTime: 1000 * 60,
      cacheTime: 1000 * 60 * 5,
    },
  );
  const { data: fifthData } = useQuery<PreviousData[]>(
    ["previous", 4],
    () => getPrevious(fifthStartDate, fifthEndDate),
    {
      staleTime: 1000 * 60,
      cacheTime: 1000 * 60 * 5,
    },
  );

  // event function
  const onSelectClick = (index: number) => {
    setActiveTab(index);
  };

  return (
    <section className="previous-block">
      <div className="previous-block__content">
        <Title medium>지난 예측</Title>
        <Select activeTab={activeTab} onSelectClick={onSelectClick} />
        <TeamInfo
          activeTab={activeTab}
          firstData={firstData as PreviousData[]}
          secondData={secondData as PreviousData[]}
          thirdData={thirdData as PreviousData[]}
          fourthData={fourthData as PreviousData[]}
          fifthData={fifthData as PreviousData[]}
        />
      </div>
    </section>
  );
}

export default Previous;
