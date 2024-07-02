export interface PreviousData {
  gameId?: number;
  homeTeam: {
    teamName: string;
    voteRatio: number;
    id: number;
  };
  awayTeam: {
    teamName: string;
    voteRatio: number;
    id: number;
  };
  gameDate: string;
  voteTeamId: number | null;
}
