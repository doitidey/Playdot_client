"use client";

import { TodayReplyData } from "@/lib/types/comment/reply";
import Text from "@/components/common/Text";
import "@/components/reply/today/ReplyList.scss";
import ReplyItem from "./ReplyItem";

interface ReplyListProps {
  todayReply: TodayReplyData[];
}

function ReplyList({ todayReply }: ReplyListProps) {
  return (
    <>
      <ul className="reply-list-block">
        {todayReply?.map((item) => (
          <ReplyItem key={item.replyId} />
        ))}
      </ul>
      <div className="hide">
        <Text medium>답글 숨기기</Text>
      </div>
    </>
  );
}

export default ReplyList;
