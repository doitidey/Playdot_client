export const GAME_DATA = {
  gameId: 1,
  homeTeam: {
    teamName: "두산 베어스",
    teamShortName: "두산",
    score: 1,
    voteRatio: 60,
    id: 5,
  },
  awayTeam: {
    teamName: "롯데 자이언츠",
    teamShortName: "롯데",
    score: 6,
    voteRatio: 40,
    id: 7,
  },
  gameTime: "2024-01-17 14:00:00",
  status: "PROGRESS",
};

export const VOTE_DATA = [
  {
    miniGameId: 1,
    message: "가능한거임?",
    profile: {
      nickname: "붐뱁",
      profileImageUrl: "profiles/3d54a810-a577-4ee9-8031-c20052ed7aa0.webp",
      teamName: "한화 이글스",
    },
    miniGames: {
      question: "완성 가능할까요?",
      option1: "못한다",
      option2: "아냐 쌉가능",
      startedAt: "2024-06-09 14:00:00",
    },
  },
];
