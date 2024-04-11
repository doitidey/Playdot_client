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
