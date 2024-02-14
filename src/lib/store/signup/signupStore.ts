import { create } from "zustand";

interface FormData {
  image?: File;
  data: {
    nickname: string;
    comment: string;
  };
}

interface SignupStore {
  formData: FormData;
  setFormData: (data: FormData) => void;
}

const useSignupStore = create<SignupStore>((set) => ({
  formData: {
    data: {
      nickname: "",
      comment: "",
    },
  },
  setFormData: (data) =>
    set((state) => ({
      formData: {
        ...state.formData,
        ...data,
      },
    })),
}));

export default useSignupStore;
