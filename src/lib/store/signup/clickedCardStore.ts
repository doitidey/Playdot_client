import { create } from "zustand";

interface ClickedCardStore {
  clickedCardStore: number;
  setClickedCardStore: (index: number) => void;
}
const useclickedCardStore = create<ClickedCardStore>((set) => ({
  clickedCardStore: 0,
  setClickedCardStore: (index) => set({ clickedCardStore: index }),
}));

export default useclickedCardStore;
