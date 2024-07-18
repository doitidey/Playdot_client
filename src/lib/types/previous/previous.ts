export interface PreviousData {
  games: GameData[];
}

export interface GameData {
  gameId?: number;
  homeTeam: {
    id: number;
    teamName: string;
    voteRatio: number;
  };
  awayTeam: {
    id: number;
    teamName: string;
    voteRatio: number;
  };
  gameDate?: string;
  voteTeamId: number | null;
}
