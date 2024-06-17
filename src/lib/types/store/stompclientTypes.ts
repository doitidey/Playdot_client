import { Client } from "@stomp/stompjs";
import { MessageType, VoteType } from "@/lib/types/chat/chatTypes";

export interface ClientStore {
  stompClient: Client | null;
  roomId: number | undefined;
  setStompClient: (client: Client | null) => void;
  setRoomId: (roomNumber: number) => void;
}

export interface MessageDataStore {
  messageData: MessageType[] | [];
  setMessageData: (receivedMessage: MessageType) => void;
  setMessageDataEmpty: () => void;
}

export interface ShoutMessageDataStore {
  shoutData: MessageType[] | [];
  //   isShoutMessageShow: boolean;
  setShoutData: (receivedMessage: MessageType) => void;
  setEmptyShoutData: () => void;
  //   setIsShoutMessageShow: () => void;
}

export interface VoteDataStore {
  voteData: VoteType[] | [];
  setVoteData: (receivedMessage: VoteType) => void;
}
