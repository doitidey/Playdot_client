//구독 메세지 타입
export type MessageType = {
  gameId: number;
  message: string;
  profile: {
    nickname: string;
    profileImageUrl: string;
    teamName: string;
  };
  teamType: string;
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
  };
  startedAt: string;
};

export type GameData = {
  gameId: number;
  homeTeam: {
    teamName: string;
    teamShortName: string;
    score: number;
    voteRatio: number;
    id: number;
    hasVote: boolean;
  };
  awayTeam: {
    teamName: string;
    teamShortName: string;
    score: number;
    voteRatio: number;
    id: number;
    hasVote: boolean;
  };
  gameTime: string;
  status: string;
};

export type voteRatioResults = {
  creatorNickname: string;
  creatorOptions: {
    question: string;
    option1: string;
    option2: string;
  };
  myProfile: {
    nickname: string;
    profileImageUrl: string;
    teamName: string;
  };
  voteRatio: {
    option1VoteRatio: number;
    option2VoteRatio: number;
  };
};
