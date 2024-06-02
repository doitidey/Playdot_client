import "@/components/previous/Select.scss";
import Text from "../common/Text";
import Title from "../common/Title";
import { useState } from "react";
import { useQuery } from "react-query";
import { getPrevious } from "@/lib/api/previousAPI";

interface SelectArray {
  title: string;
  text: string;
}

interface PreviousData {
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

const date = new Date();
const year = date.getFullYear();
const month = date.getMonth();
const now = date.getDate();
const dayOfWeek = date.getDay();

const week = [];

for (let i = 0; i < 7; i++) {
  const result = new Date(year, month, now + (i - dayOfWeek));
  const yyyy = result.getFullYear();
  const mm = result.getMonth() + 1;
  const dd = result.getDate();

  const resultMonth = mm.toString().length === 1 ? "0" + mm : mm;
  const resultDay = dd.toString().length === 1 ? "0" + dd : dd;

  week[i] = `${yyyy}-${resultMonth}-${resultDay}`;
}

console.warn(week);

function Select() {
  const [activeTab, setActiveTab] = useState(0);
  const onSelectClick = (index: number) => {
    setActiveTab(index);
  };

  useQuery({
    queryKey: ["previous"],
    queryFn: () =>
      getPrevious("2024-03-24", "2024-04-17")?.then((res) =>
        console.warn(res.data),
      ),
    refetchOnWindowFocus: false,
  });
  return (
    <ul className="select-block">
      {selectArr.map((item, index) => (
        <li
          key={index}
          className={`select-block__item ${
            activeTab === index ? "active-select" : ""
          }`}
          onClick={() => onSelectClick(index)}
        >
          <Title small>{item.title}</Title>
          <Text small>{item.text}</Text>
        </li>
      ))}
    </ul>
  );
}

export default Select;
