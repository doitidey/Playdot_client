import "@/components/previous/Select.scss";
import Text from "../common/Text";
import Title from "../common/Title";
import { useState } from "react";
import {
  fifthEndDateSub,
  fifthStartDateSub,
  firstEndDateSub,
  firstStartDateSub,
  fourthEndDateSub,
  fourthStartDateSub,
  secondEndDateSub,
  secondStartDateSub,
  thirdEndDateSub,
  thirdStartDateSub,
} from "@/lib/util/previous/date";

interface SelectArray {
  title: string;
  text: string;
}

const selectArr: SelectArray[] = [
  {
    title: "1주",
    text: `${firstStartDateSub} ~ ${firstEndDateSub}`,
  },
  {
    title: "2주",
    text: `${secondStartDateSub} ~ ${secondEndDateSub}`,
  },
  {
    title: "3주",
    text: `${thirdStartDateSub} ~ ${thirdEndDateSub}`,
  },
  {
    title: "4주",
    text: `${fourthStartDateSub} ~ ${fourthEndDateSub}`,
  },
  {
    title: "5주",
    text: `${fifthStartDateSub} ~ ${fifthEndDateSub}`,
  },
];

function Select() {
  const [activeTab, setActiveTab] = useState(0);
  const onSelectClick = (index: number) => {
    setActiveTab(index);
  };
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
