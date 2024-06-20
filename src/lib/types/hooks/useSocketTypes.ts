export type MessageDetailProps = {
  message: string;
  type: string;
};

export type CreateVoteDetailProps = {
  question: string;
  option1: string;
  option2: string;
};

export type SendVoteDetailProps = {
  miniGameId: number;
  option: number;
};

export type Headers = {
  gameId: string;
  Authorization: string;
};
