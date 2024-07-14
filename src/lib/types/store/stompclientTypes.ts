import { Client } from "@stomp/stompjs";
import {
  MessageType,
  VoteType,
  voteRatioResults,
} from "@/lib/types/chat/chatTypes";

export interface ClientStore {
  stompClient: Client | null;
  roomId: string | undefined;
  setStompClient: (client: Client | null) => void;
  setRoomId: (roomNumber: string) => void;
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
  setVoteDataEmpty: () => void;
}

export interface VoteNoticeDataStore {
  voteNoticeData: VoteType[] | [];
  setVoteNoticeData: (receivedMessage: VoteType) => void;
  setVoteNoticeDataEmpty: () => void;
}

export interface VoteRatioData {
  voteRatioData: voteRatioResults[] | [];
  setVoteRatioData: (receivedMessage: voteRatioResults) => void;
  setVoteRatioDataEmpty: () => void;
}
