"use client";

import Button from "@/components/common/Button";
import "@/components/reply/month/Reply.scss";
import ReplyList from "@/components/reply/month/ReplyList";
import {
  ChangeEvent,
  FormEvent,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import { useMutation, useQueryClient } from "react-query";
import { postMonthReply } from "@/lib/api/monthAPI";
import autosize from "autosize";
import { TodayReplyData } from "@/lib/types/comment/reply";

interface ReplyProps {
  todayReply: TodayReplyData[];
  replyId: number;
}

function Reply({ todayReply, replyId }: ReplyProps) {
  const [value, setValue] = useState("");
  const queryClient = useQueryClient();
  const replyRef = useRef<HTMLTextAreaElement>(null);

  const { mutate: postReply } = useMutation(
    () => postMonthReply(value, replyId),
    {
      onSuccess: () => {
        console.warn(`댓글 입력 완료: ${value}`);
        queryClient.invalidateQueries({ queryKey: ["monthReply"] });
      },
      onError: () => {
        console.warn(`댓글 입력 실패`);
      },
    },
  );

  const onChange = useCallback(
    (event: ChangeEvent) => {
      event.preventDefault();
      const { value } = event.target as HTMLInputElement;
      setValue(value);
    },
    [setValue],
  );

  const onSubmit = useCallback(
    (event: FormEvent) => {
      event.preventDefault();
      if (value === "") {
        window.alert("댓글을 입력하세요!");
      } else {
        postReply();
      }
      setValue("");
    },
    [postReply, value],
  );

  useEffect(() => {
    if (replyRef) {
      autosize(replyRef.current as HTMLTextAreaElement);
    }
  }, []);

  return (
    <div className="reply-block">
      <form className="reply-block__content" onSubmit={onSubmit}>
        <div className="input-area">
          <textarea
            placeholder="댓글을 입력하세요."
            rows={1}
            maxLength={300}
            spellCheck={false}
            value={value}
            onChange={onChange}
          />
          <Button size="submit" variant="cancel" type="submit" label="취소" />
          <Button size="submit" variant="active" type="submit" label="등록" />
        </div>
      </form>
      <ReplyList todayReply={todayReply} />
    </div>
  );
}

export default Reply;
