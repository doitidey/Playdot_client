import { create } from "zustand";
import { Client } from "@stomp/stompjs";

interface ClientStore {
  stompClient: Client | null;
  roomId: number;
  setStompClient: (client: Client) => void;
  setRoomId: (roomNumber: number) => void;
}

type MessageType = {
  gameId: number;
  message: string;
  profile: {
    nickname: string;
    profileImageUrl: string;
    teamName: string;
  };
  type: string;
};

interface MessageDataStore {
  messageData: MessageType[] | [];
  setMessageData: (receivedMessage: MessageType) => void;
}

export const useStompClient = create<ClientStore>((set) => ({
  stompClient: null,
  roomId: 1,
  setStompClient: (client) => {
    set(() => ({ stompClient: client }));
  },
  setRoomId: (roomNumber) => {
    set(() => ({ roomId: roomNumber }));
  },
}));

export const useStompMessageData = create<MessageDataStore>((set) => ({
  messageData: [],
  setMessageData: (receivedMessage) => {
    set((prev) => ({
      messageData: [receivedMessage, ...prev.messageData],
    }));
  },
}));
