import { create } from "zustand";
import { persist } from "zustand/middleware";

interface TodayState {
  selectHome: boolean;
  selectAway: boolean;
  setSelectHome: (selectHome: boolean, selectAway: boolean) => void;
  setSelectAway: (selectAway: boolean, selectHome: boolean) => void;
}

export const useTodayStore = create<TodayState>()(
  persist(
    (set) => ({
      selectHome: false,
      selectAway: false,
      setSelectHome: (selectHome, selectAway) =>
        set({
          selectHome: selectHome === true && selectAway === false,
        }),
      setSelectAway: (selectAway, selectHome) =>
        set({
          selectAway: selectAway === true && selectHome === false,
        }),
    }),
    { name: "today" },
  ),
);
