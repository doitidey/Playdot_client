import { create } from "zustand";

interface UseSelectedGameDataStore {
  gameData: TodayMatchData;
  setGameData: (data: TodayMatchData) => void;
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
const useSelectedGameDataStore = create<UseSelectedGameDataStore>((set) => ({
  gameData: {
    gameId: 0,
    gameTime: "",
    homeTeam: {
      id: 0,
      score: 0,
      teamName: "",
      teamShortName: "",
      voteRatio: 0,
    },
    awayTeam: {
      id: 0,
      score: 0,
      teamName: "",
      teamShortName: "",
      voteRatio: 0,
    },
    status: "",
  },
  setGameData: (data) =>
    set(() => ({
      gameData: data,
    })),
}));

export default useSelectedGameDataStore;
