"use client";

import "@/components/comment/Comment.scss";
import {
  ChangeEvent,
  FormEvent,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import { MdRefresh } from "react-icons/md";
import Title from "@/components/common/Title";
import CommentList from "@/components/comment/CommentList";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { postTodayComment, todayGamesComment } from "@/lib/api/todayAPI";
import autosize from "autosize";
import Button from "@/components/common/Button";
import Text from "@/components/common/Text";

interface Sort {
  sorted: boolean;
  empty: boolean;
  unsorted: boolean;
}

export interface CommentData {
  profileImageUrl?: null;
  nickname: string;
  teamName: string;
  replyId?: number;
  content: string;
  likeCount?: number;
  createdAt?: string;
  isLiked?: boolean;
}

interface Pageable {
  pageNumber: number;
  pageSize: number;
  sort: Sort;
  offset: number;
  paged: boolean;
  unpaged: boolean;
}

export interface Comment {
  content: CommentData[];
  pageable: Pageable;
  totalElements: number;
  totalPages: number;
  last: boolean;
  size: number;
  number: number;
  sort: Sort;
  numberOfElements: number;
  first: boolean;
  empty: boolean;
}

export interface Team {
  img: string;
  name: string;
  color: string;
}

function Comment() {
  const queryClient = useQueryClient();

  const [comments, setComments] = useState<Comment>();
  const [comment, setComment] = useState<CommentData[]>(
    comments?.content as [],
  );
  const [value, setValue] = useState("");
  const commentRef = useRef<HTMLTextAreaElement>(null);

  console.warn(comment);

  // TODO: 리액트 쿼리 관련 hook으로 리팩토링
  const { data: commentData = comment, refetch } = useQuery({
    queryKey: ["todayComment"],
    queryFn: () =>
      todayGamesComment()?.then((res) => {
        setComments(res.data.content);
        console.warn(res.data.content);
      }),
    refetchOnWindowFocus: false,
  });

  const { mutate: postComment } = useMutation(
    async () => postTodayComment(value),
    {
      onMutate: () => {
        setComment([
          ...comment,
          {
            teamName: localStorage.getItem("teamName") as string,
            nickname: localStorage.getItem("nickname") as string,
            content: value,
          },
        ]);
        setValue("");
      },
      onSettled: () => {
        queryClient.invalidateQueries("todayComment");
      },
    },
  );

  const onRefresh = useCallback(() => {
    refetch();
  }, [refetch]);

  const onChange = useCallback(
    (event: ChangeEvent) => {
      event.preventDefault();
      const { value } = event.target as HTMLInputElement;
      setValue(value);
    },
    [setValue],
  );

  const onSubmit = useCallback(
    async (event: FormEvent) => {
      event.preventDefault();
      if (value === "") {
        // 추후 팝업 창으로 개선 예정
        window.alert("댓글을 입력하세요!");
      } else {
        postComment();
      }
    },
    [postComment, value],
  );

  useEffect(() => {
    if (commentRef) {
      autosize(commentRef.current as HTMLTextAreaElement);
    }
  }, []);

  return (
    <section className="comment-block">
      <form className="comment-block__content" onSubmit={onSubmit}>
        <div className="comment-header">
          <Title medium>댓글 {comments?.totalElements}개</Title>
          <div onClick={onRefresh}>
            <MdRefresh />
          </div>
        </div>
        <div className="comment-input-area">
          <textarea
            className="comment-input"
            value={value}
            onChange={onChange}
            placeholder="댓글을 입력하세요."
            rows={1}
            maxLength={300}
            spellCheck={false}
            ref={commentRef}
          />
          <Button size="submit" variant="active" type="submit" label="등록" />
        </div>
        <Text medium className="value-length">
          {value.length} / 300
        </Text>
        {/* <CommentList
          comment={commentData}
          setComment={setComment}
          queryClient={queryClient}
        /> */}
      </form>
    </section>
  );
}

export default Comment;
