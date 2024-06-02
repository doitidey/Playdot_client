import { create } from "zustand";

interface UseTokenNumberStore {
  totalStore: number;
  setTotalStore: (num: number) => void;
}

const useTokenNumberStore = create<UseTokenNumberStore>((set) => ({
  totalStore: 0,
  setTotalStore: (num) => set({ totalStore: num }),
}));

export default useTokenNumberStore;
