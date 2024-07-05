export interface Members {
  rank: number;
  voteRatio: number;
  memberId: number;
  nickname: string;
  winFairyCount: number;
  loseFairyCount: number;
  title: string;
  teamName: string;
}

export interface MonthData {
  winMembers: Members[];
  loseMembers: Members[];
}
