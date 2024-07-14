"use client";

import { Content } from "@/lib/types/comment/reply";
import Text from "@/components/common/Text";
import "@/components/reply/month/ReplyList.scss";
import ReplyItemDummy from "./ReplyItemDummy";
import { Dispatch, SetStateAction } from "react";

interface ReplyListProps {
  dummyReply?: Content[];
  setIsLiked: Dispatch<SetStateAction<boolean>>;
  setLikeCount: Dispatch<SetStateAction<number>>;
  isLiked: boolean;
  likeCount: number;
  onVisibleReply?: () => void;
}

function ReplyListDummy({
  onVisibleReply,
  dummyReply,
  isLiked,
  likeCount,
  setIsLiked,
  setLikeCount,
}: ReplyListProps) {
  return (
    <>
      <ul className="reply-list-block">
        {dummyReply?.map((item) => (
          <ReplyItemDummy
            key={item.replyId}
            content={item.content}
            createdAt={item.createdAt}
            isLiked={isLiked}
            likeCount={likeCount}
            setIsLiked={setIsLiked}
            setLikeCount={setLikeCount}
            teamName={item.teamName}
          />
        ))}
      </ul>
      <div className="hide" onClick={onVisibleReply}>
        <Text>답글 숨기기</Text>
      </div>
    </>
  );
}

export default ReplyListDummy;
