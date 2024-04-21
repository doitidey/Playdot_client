import { create } from "zustand";

interface UsePreviewStore {
  previewUrl: string;
  setPreviewUrl: (state: string) => void;
}

export const usePreviewStore = create<UsePreviewStore>((set) => ({
  previewUrl: "",
  setPreviewUrl: (state) =>
    set(() => ({
      previewUrl: state,
    })),
}));

interface ValidValue {
  validNickname: string;
  validComment: string;
}
interface UseValidStore {
  validStore: ValidValue;
  setValidStore: (state: ValidValue) => void;
  setValidStoreEmpty: () => void;
}

export const useValidStore = create<UseValidStore>((set) => ({
  validStore: {
    validNickname: "",
    validComment: "",
  },
  setValidStore: (state) =>
    set((prev) => ({
      validStore: { ...prev, ...state },
    })),
  setValidStoreEmpty: () =>
    set(() => ({
      validStore: {
        validNickname: "",
        validComment: "",
      },
    })),
}));

interface InputValue {
  nickname: string;
  validNickname: boolean;
  noneDuplicationNickname: boolean;
  comment: string;
  validComment: boolean;
}
interface UseInputStore {
  inputStore: InputValue;
  setInputStore: (store: InputValue) => void;
  setInputStoreEmpty: () => void;
}

export const useInputStore = create<UseInputStore>((set) => ({
  inputStore: {
    nickname: "",
    validNickname: false,
    noneDuplicationNickname: false,
    comment: "",
    validComment: false,
  },
  setInputStore: (state) =>
    set((prev) => ({ inputStore: { ...prev, ...state } })),
  setInputStoreEmpty: () =>
    set(() => ({
      inputStore: {
        nickname: "",
        validNickname: false,
        noneDuplicationNickname: false,
        comment: "",
        validComment: false,
      },
    })),
}));
