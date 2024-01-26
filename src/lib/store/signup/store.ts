import { create } from "zustand";

interface StepState {
  signUpStep: number;
  increaseStep: () => void;
  decreaseStep: () => void;
}

const useStore = create<StepState>((set) => ({
  signUpStep: 1,
  increaseStep: () => set((state) => ({ signUpStep: state.signUpStep + 1 })),
  decreaseStep: () =>
    set((state) => ({ signUpStep: Math.max(1, state.signUpStep - 1) })),
}));

export default useStore;
