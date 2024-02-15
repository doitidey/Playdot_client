import { create } from "zustand";

interface UseMenuModalState {
  menuModalState: boolean;
  setMenuModalState: () => void;
}

const useMenuModalState = create<UseMenuModalState>((set) => ({
  menuModalState: false,
  setMenuModalState: () =>
    set((state) => ({ menuModalState: !state.menuModalState })),
}));

export default useMenuModalState;
