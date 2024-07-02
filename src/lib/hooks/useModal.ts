import { useCallback } from "react";
import modalState from "@/lib/store/modalState";

interface ModalDataState {
  isOpen?: boolean;
  isNotCloseModal?: boolean;
  content: JSX.Element | string;
}

export const useModal = () => {
  const { modalData, setModalDataState } = modalState();

  const closeModal = useCallback(
    () =>
      setModalDataState({
        ...modalData,
        isOpen: false,
        isNotCloseModal: false,
      }),
    [modalData, setModalDataState],
  );

  const openModal = useCallback(
    (prop: ModalDataState) => setModalDataState({ ...prop, isOpen: true }),
    [setModalDataState],
  );

  return { modalData, closeModal, openModal };
};
