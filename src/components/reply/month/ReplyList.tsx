"use client";

import { Content } from "@/lib/types/comment/reply";
import Text from "@/components/common/Text";
import "@/components/reply/month/ReplyList.scss";
import ReplyItem from "@/components/reply/month/ReplyItem";

interface ReplyListProps {
  replyData: Content[];
  onClickCancel: () => void;
}

function ReplyList({ replyData, onClickCancel }: ReplyListProps) {
  return (
    <>
      <ul className="reply-list-block">
        {replyData?.map((item, index) => (
          <ReplyItem
            key={index}
            content={item.content}
            createdAt={item.createdAt}
            nickname={item.nickname}
            isLiked={item.isLiked}
            likeCount={item.likeCount}
            profileImageUrl={item.profileImageUrl}
            replyId={item.replyId}
            teamName={item.teamName}
          />
        ))}
      </ul>
      <div className="hide" onClick={onClickCancel}>
        <div className="line" />
        <Text>답글 숨기기</Text>
      </div>
    </>
  );
}

export default ReplyList;
