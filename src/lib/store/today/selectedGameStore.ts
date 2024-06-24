import { create } from "zustand";
import { persist } from "zustand/middleware";

interface UseSelectedGameDataStore {
  gameData: TodayMatchData[] | [];
  setGameData: (data: TodayMatchData[]) => void;
}
interface TodayMatchData {
  gameId: number;
  gameTime: string;
  homeTeam: {
    id: number;
    score: number;
    teamName: string;
    teamShortName: string;
    voteRatio: number;
  };
  awayTeam: {
    id: number;
    score: number;
    teamName: string;
    teamShortName: string;
    voteRatio: number;
  };
  status?: string;
}
const useSelectedGameDataStore = create<UseSelectedGameDataStore>()(
  persist(
    (set) => ({
      gameData: [],

      setGameData: (data) =>
        set(() => ({
          gameData: data,
        })),
    }),
    { name: "TodayGameData" },
  ),
);

export default useSelectedGameDataStore;
