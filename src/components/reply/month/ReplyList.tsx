"use client";

import { TodayReplyData } from "@/lib/types/comment/reply";
import Text from "@/components/common/Text";
import "@/components/reply/month/ReplyList.scss";
import ReplyItem from "@/components/reply/month/ReplyItem";

interface ReplyListProps {
  todayReply?: TodayReplyData[];
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
        <Text>답글 숨기기</Text>
      </div>
    </>
  );
}

export default ReplyList;
