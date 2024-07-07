"use client";

import Button from "@/components/common/Button";
import "@/components/reply/month/Reply.scss";
import {
  ChangeEvent,
  FormEvent,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import autosize from "autosize";
import ReplyListDummy from "./ReplyListDummy";
import { Content } from "@/lib/types/comment/comment";

interface ReplyDummyProps {
  onVisibleReply?: () => void;
}

function ReplyDummy({ onVisibleReply }: ReplyDummyProps) {
  const [dummyReply, setDummyReply] = useState<Content[]>([]);
  const [value, setValue] = useState("");
  const [isLiked, setIsLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(0);
  const nextId = useRef(0);
  const replyRef = useRef<HTMLTextAreaElement>(null);

  const onChange = useCallback(
    (event: ChangeEvent) => {
      event.preventDefault();
      const { value } = event.target as HTMLInputElement;
      setValue(value);
    },
    [setValue],
  );

  const onInsert = useCallback(
    (text: string) => {
      const reply: Content = {
        content: text,
        replyId: nextId.current,
        createdAt: "2024-07-06",
        isLiked: isLiked,
        likeCount: likeCount,
        nickname: "test",
        profileImageUrl: "",
        teamName: "LG 트윈스",
      };
      setDummyReply(dummyReply.concat(reply));
      nextId.current += 1;
    },
    [isLiked, likeCount, dummyReply, setDummyReply],
  );

  const onSubmit = useCallback(
    (event: FormEvent) => {
      event.preventDefault();
      if (value === "") {
        window.alert("댓글을 입력하세요!");
      } else {
        onInsert(value);
      }
      setValue("");
    },
    [value, onInsert],
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
      <ReplyListDummy
        dummyReply={dummyReply}
        isLiked={isLiked}
        likeCount={likeCount}
        setIsLiked={setIsLiked}
        setLikeCount={setLikeCount}
        onVisibleReply={onVisibleReply}
      />
    </div>
  );
}

export default ReplyDummy;
