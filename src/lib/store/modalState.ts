import { create } from "zustand";

interface ModalDataState {
  isOpen?: boolean;
  isNotCloseModal?: boolean;
  content: JSX.Element | string;
}

interface ModalState {
  modalData: ModalDataState;
  setModalDataState: (state: ModalDataState) => void;
}

const modalState = create<ModalState>((set) => ({
  modalData: {
    isOpen: false,
    isNotCloseModal: false,
    content: "",
  },
  setModalDataState: (state) =>
    set((prev) => ({
      modalData: { ...prev.modalData, ...state },
    })),
}));

export default modalState;
