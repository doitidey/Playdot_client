"use client";

import Button from "@/components/common/Button";
import "@/components/reply/Reply.scss";
import ReplyList from "@/components/reply/ReplyList";
import {
  ChangeEvent,
  FormEvent,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import { useMutation, useQueryClient } from "react-query";
import autosize from "autosize";
import { Content } from "@/lib/types/comment/reply";
import { postTodayReply } from "@/lib/api/todayAPI";
import { postMonthReply } from "@/lib/api/monthAPI";
import { CommentType } from "@/components/comment/Comment";

interface ReplyProps {
  replyData: Content[];
  replyId: number;
  setVisibleReply: (visibleReply: boolean) => void;
  replyQuery: CommentType;
  commentType: CommentType;
}

function Reply({
  replyId,
  setVisibleReply,
  replyData,
  replyQuery,
  commentType,
}: ReplyProps) {
  const [value, setValue] = useState("");
  const queryClient = useQueryClient();
  const replyRef = useRef<HTMLTextAreaElement>(null);

  const { mutate: postReply } = useMutation(
    commentType === "today"
      ? () => postTodayReply(value, replyId)
      : () => postMonthReply(value, replyId),
    {
      onSuccess: () => {
        console.warn(`댓글 입력 완료: ${value}`);
        queryClient.invalidateQueries({ queryKey: [replyQuery] });
      },
      onError: () => {
        console.warn(`댓글 입력 실패`);
      },
    },
  );

  const onClickCancel = useCallback(() => {
    setVisibleReply(false);
  }, [setVisibleReply]);

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
          <Button
            size="submit"
            variant="cancel"
            label="취소"
            onClick={onClickCancel}
          />
          <Button size="submit" variant="active" type="submit" label="등록" />
        </div>
      </form>
      <ReplyList
        replyData={replyData as Content[]}
        onClickCancel={onClickCancel}
        replyQuery={replyQuery as CommentType}
      />
    </div>
  );
}

export default Reply;
