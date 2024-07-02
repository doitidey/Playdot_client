import { SelectArray } from "@/lib/types/previous/select";
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

export const selectArr: SelectArray[] = [
  {
    title: "1주",
    text: `${firstStartDateSub} ~ ${firstEndDateSub}`,
    id: 0,
  },
  {
    title: "2주",
    text: `${secondStartDateSub} ~ ${secondEndDateSub}`,
    id: 1,
  },
  {
    title: "3주",
    text: `${thirdStartDateSub} ~ ${thirdEndDateSub}`,
    id: 2,
  },
  {
    title: "4주",
    text: `${fourthStartDateSub} ~ ${fourthEndDateSub}`,
    id: 3,
  },
  {
    title: "5주",
    text: `${fifthStartDateSub} ~ ${fifthEndDateSub}`,
    id: 4,
  },
];
