import { create } from "zustand";
type TeamInfo = {
  teamId: number;
  teamName: string;
};
interface TeamsStore {
  teamStore: TeamInfo[];
  setTeamStore: (index: TeamInfo[]) => void;
}
const useTeamsStore = create<TeamsStore>((set) => ({
  teamStore: [],
  setTeamStore: (data) => set({ teamStore: data }),
}));

export default useTeamsStore;
