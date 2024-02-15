"use client";

import "./Comment.scss";
import { ChangeEvent, FormEvent, useCallback, useState } from "react";
import { MdRefresh } from "react-icons/md";
import Title from "../common/Title";
import CommentList from "./CommentList";
import { useQuery } from "react-query";
import { todayGamesComment } from "@/lib/api/todayAPI";

export interface CommentData {
  id?: number;
  username?: string;
  team: {
    img: string;
    name: string;
    color: string;
  };
  comment?: string;
}

export interface Team {
  img: string;
  name: string;
  color: string;
}

function Comment() {
  const [value, setValue] = useState("");
  const [comment, setComment] = useState<CommentData[]>([]);

  useQuery({
    queryKey: ["today-comment"],
    queryFn: () =>
      todayGamesComment()?.then((res) => {
        console.log(res.data);
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
          id: comment.length + 1,
          username: "하하",
          comment: value,
          team: {
            img: "/images/lions.svg",
            color: "lions",
            name: "삼성 라이온즈",
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
          <Title medium>댓글 {comment.length}개</Title>
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
        <CommentList comment={comment} />
      </form>
    </section>
  );
}

export default Comment;
