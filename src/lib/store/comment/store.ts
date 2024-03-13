import { CommentData } from "@/components/comment/Comment";
import { create } from "zustand";

interface CommentStore {
  comments: CommentData[];
  setPostComment: (value: string) => void;
}

export const useComment = create<CommentStore>((set) => ({
  comments: [],
  setPostComment: () => {
    set((state) => ({ ...state }));
  },
}));
