import { create } from "zustand";
import { persist } from "zustand/middleware";

interface UserProfile {
  profileImageUrl: null | string;
  nickname: string;
  teamName: null | string;
  newMember: boolean;
}

interface UserDataStore {
  userData: UserProfile;
  setUserData: (data: UserProfile) => void;
}

export const useUserDataStore = create<UserDataStore>()(
  persist(
    (set) => ({
      userData: {
        profileImageUrl: "",
        nickname: "",
        teamName: null,
        newMember: false,
      },

      setUserData: (data) =>
        set((prev) => ({
          userData: { ...prev.userData, ...data },
        })),
    }),
    { name: "userData" },
  ),
);
