import { create } from "zustand";

interface SignupState {
  formData: FormData;
  setFormData: (key: string, value: string) => void;
  clearFormData: () => void;
}

const useSignupStore = create<SignupState>((set) => ({
  formData: new FormData(),
  setFormData: (key, value) =>
    set((state) => {
      state.formData.set(key, value);
      return { formData: state.formData };
    }),
  clearFormData: () => set({ formData: new FormData() }),
}));

export default useSignupStore;
