"use client";

import "./Comment.scss";
import { ChangeEvent, FormEvent, useCallback, useState } from "react";
import { MdRefresh } from "react-icons/md";
import Title from "../common/Title";
import CommentList from "./CommentList";
import { useQuery } from "react-query";
import { todayGamesComment } from "@/lib/api/todayAPI";

export interface CommentData {
  profile: {
    profileImageUrl?: null;
    nickname: string;
    teamName: string;
  };
  reply: {
    replyId?: number;
    content: string;
    count: number;
    createdAt: string;
  };
}

export interface Team {
  img: string;
  name: string;
  color: string;
}

function Comment() {
  const [value, setValue] = useState("");
  const [comment, setComment] = useState<CommentData[]>([]);

  const { data = comment } = useQuery({
    queryKey: ["today-comment"],
    queryFn: () =>
      todayGamesComment()?.then((res) => {
        setComment(res.data.content);
      }),
  });

  const onChange = useCallback((event: ChangeEvent) => {
    event.preventDefault();
    const { value } = event.target as HTMLInputElement;
    setValue(value);
    console.log(value);
  }, []);

  const onSubmit = useCallback(
    (event: FormEvent) => {
      event.preventDefault();
      setComment([
        ...comment,
        {
          profile: {
            nickname: "aaa",
            teamName: "삼성 라이온즈",
          },
          reply: {
            content: value,
            count: 0,
            createdAt: "",
          },
        },
      ]);
      setValue("");
    },
    [comment, value],
  );

  return (
    <section className="comment-block">
      <form className="comment-block__content" onSubmit={onSubmit}>
        <div className="comment-header">
          <Title medium>댓글 {data.length}개</Title>
          <button type="submit">
            <MdRefresh />
          </button>
        </div>
        <input
          className="comment-input"
          type="text"
          value={value}
          onChange={onChange}
          placeholder="댓글을 입력해주세요."
        />
        <CommentList comment={data} />
      </form>
    </section>
  );
}

export default Comment;
