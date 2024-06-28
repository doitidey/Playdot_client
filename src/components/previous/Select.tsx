import "@/components/previous/Select.scss";
import Text from "../common/Text";
import Title from "../common/Title";
import { selectArr } from "@/lib/util/previous/select";
import { SelectProps } from "@/lib/types/previous/select";

function Select({ activeTab, onSelectClick }: SelectProps) {
  return (
    <ul className="select-block">
      {selectArr.map((item) => (
        <li
          key={item.id}
          className={`select-block__item ${
            activeTab === item.id ? "active-select" : ""
          }`}
          onClick={() => onSelectClick(item.id)}
        >
          <Title small>{item.title}</Title>
          <Text small>{item.text}</Text>
        </li>
      ))}
    </ul>
  );
}

export default Select;
