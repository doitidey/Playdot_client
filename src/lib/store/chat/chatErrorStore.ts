import { create } from "zustand";

interface uUeChatErrorStore {
  errorMessage: string;
  setErrorMessage: (msg: string) => void;
}

const useChatErrorStore = create<uUeChatErrorStore>((set) => ({
  errorMessage: "",
  setErrorMessage: (msg) => set({ errorMessage: msg }),
}));

export default useChatErrorStore;
