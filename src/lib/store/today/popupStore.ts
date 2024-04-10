import { create } from "zustand";

interface PopupStore {
  isOpen: boolean;
  setOpenPopup: () => void;
  setClosePopup: () => void;
}

const usePopupStore = create<PopupStore>((set) => ({
  isOpen: false,
  setOpenPopup: () =>
    set(() => ({
      isOpen: true,
    })),

  setClosePopup: () =>
    set(() => ({
      isOpen: false,
    })),
}));

export default usePopupStore;
