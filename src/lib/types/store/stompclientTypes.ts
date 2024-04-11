import { Client } from "@stomp/stompjs";
import { MessageType, VoteType } from "@/lib/types/chat/chatTypes";

export interface ClientStore {
  stompClient: Client | null;
  roomId: number;
  setStompClient: (client: Client) => void;
  setRoomId: (roomNumber: number) => void;
}

export interface MessageDataStore {
  messageData: MessageType[] | [];
  setMessageData: (receivedMessage: MessageType) => void;
}

export interface ShoutMessageDataStore {
  shoutData: MessageType[] | [];
  //   isShoutMessageShow: boolean;
  setShoutData: (receivedMessage: MessageType) => void;
  //   setEmptyShoutData: () => void;
  //   setIsShoutMessageShow: () => void;
}

export interface VoteDataStore {
  voteData: VoteType | {};
  setVoteData: (receivedMessage: VoteType) => void;
}
