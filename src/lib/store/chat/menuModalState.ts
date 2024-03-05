import { create } from "zustand";

interface UseMenuModalState {
  menuModalState: {
    isOpen: boolean;
    isClicked: boolean;
  };
  setMenuModalClicked: () => void;
  setMenuModalStateOpen: () => void;
  setMenuModalStateClose: () => void;
}

const useMenuModalState = create<UseMenuModalState>((set) => ({
  menuModalState: {
    isOpen: false,
    isClicked: false,
  },

  setMenuModalClicked: () =>
    set((prev) => ({
      menuModalState: {
        ...prev.menuModalState,
        isClicked: !prev.menuModalState.isClicked,
      },
    })),

  setMenuModalStateOpen: () =>
    set((prev) => ({
      menuModalState: { ...prev.menuModalState, isOpen: true },
    })),

  setMenuModalStateClose: () =>
    set((prev) => ({
      menuModalState: { ...prev.menuModalState, isOpen: false },
    })),
}));

export default useMenuModalState;
