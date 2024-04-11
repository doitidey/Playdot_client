//구독 메세지 타입
export type MessageType = {
  gameId: number;
  message: string;
  profile: {
    nickname: string;
    profileImageUrl: string;
    teamName: string;
  };
  type: string;
};

//구독 투표 정보 메세지 타입
export type VoteType = {
  miniGameId: number;
  message: string;
  profile: {
    nickname: string;
    profileImageUrl: string;
    teamName: string;
  };
  miniGames: {
    question: string;
    option1: string;
    option2: string;
    startedAt: string;
  };
};
