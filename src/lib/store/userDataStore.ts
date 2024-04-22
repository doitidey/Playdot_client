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
//TODO: 마이페이지에서 정보 변경시 api 요청 후 데이터 다시 세팅
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
