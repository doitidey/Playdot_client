import {
  ClientStore,
  MessageDataStore,
  ShoutMessageDataStore,
  VoteDataStore,
  VoteNoticeDataStore,
  VoteRatioData,
} from "@/lib/types/store/stompclientTypes";
import { create } from "zustand";

export const useStompClient = create<ClientStore>((set) => ({
  stompClient: null,
  roomId: undefined,
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
  setMessageDataEmpty: () => {
    set(() => ({ messageData: [] }));
  },
}));

export const useStompShoutData = create<ShoutMessageDataStore>((set) => ({
  shoutData: [],
  // shout가 노출 되어야하는지 마는지 판단해야할때
  // isShoutMessageShow: false,
  setShoutData: (receivedMessage) => {
    set((prev) => ({
      shoutData: [...prev.shoutData, receivedMessage],
    }));
  },
  setEmptyShoutData: () => {
    set(() => ({
      shoutData: [],
    }));
  },
  // setIsShoutMessageShow: () => {
  //   set((prev) => ({
  //     isShoutMessageShow: !prev.isShoutMessageShow,
  //   }));
  // },
}));

export const useStompVoteData = create<VoteDataStore>((set) => ({
  voteData: [],
  setVoteData: (receivedMessage) => {
    set(() => ({
      voteData: [receivedMessage],
    }));
  },
  setVoteDataEmpty: () => {
    set(() => ({
      voteData: [],
    }));
  },
}));

export const useStompVoteNoticeData = create<VoteNoticeDataStore>((set) => ({
  voteNoticeData: [],
  setVoteNoticeData: (receivedMessage) => {
    set(() => ({
      voteNoticeData: [receivedMessage],
    }));
  },
  setVoteNoticeDataEmpty: () => {
    set(() => ({
      voteNoticeData: [],
    }));
  },
}));

export const useStompVoteRatiosData = create<VoteRatioData>((set) => ({
  voteRatioData: [],
  setVoteRatioData: (receivedMessage) => {
    set(() => ({
      voteRatioData: [receivedMessage],
    }));
  },
  setVoteRatioDataEmpty: () => {
    set(() => ({
      voteRatioData: [],
    }));
  },
}));
