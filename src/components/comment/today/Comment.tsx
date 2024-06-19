"use client";

import "@/components/comment/today/Comment.scss";
import Button from "@/components/common/Button";
import Text from "@/components/common/Text";
import Title from "@/components/common/Title";
import autosize from "autosize";
import {
  ChangeEvent,
  FormEvent,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import { MdRefresh } from "react-icons/md";
import CommentList from "./CommentList";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { getTodayComment, postTodayComment } from "@/lib/api/todayAPI";

export interface Content {
  profileImageUrl?: string;
  nickname?: string;
  teamName?: string;
  replyId?: number;
  content?: string;
  likeCount?: number;
  createdAt?: string;
  isLiked?: boolean;
}

interface Sort {
  sorted?: boolean;
  empty?: boolean;
  unsorted?: boolean;
}

interface Pageable {
  pageNumber?: number;
  pageSize?: number;
  sort?: Sort;
  offset?: number;
  paged?: boolean;
  unpaged?: boolean;
}

export interface CommentData {
  content: Content[];
  pageable?: Pageable;
  totalElements?: number;
  totalPages?: number;
  last?: boolean;
  size?: number;
  number?: number;
  sort?: Sort;
  numberOfElements?: number;
  first?: boolean;
  empty?: boolean;
}

function Comment() {
  const [value, setValue] = useState("");

  const commentRef = useRef<HTMLTextAreaElement>(null);

  const queryClient = useQueryClient();

  const { data: commentData, refetch } = useQuery<CommentData>(
    "todayComment",
    () => getTodayComment(),
    {
      staleTime: 1000 * 60,
      cacheTime: 1000 * 60 * 5,
    },
  );

  const { mutate: postComment } = useMutation(() => postTodayComment(value), {
    onSuccess: () => {
      console.warn(`댓글 입력 완료: ${value}`);
      queryClient.invalidateQueries({ queryKey: ["todayComment"] });
    },
    onError: () => {
      console.warn(`댓글 입력 실패`);
    },
  });

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
        postComment();
      }
    },
    [postComment, value],
  );

  const onRefresh = useCallback(() => {
    refetch();
  }, [refetch]);

  useEffect(() => {
    if (commentRef) {
      autosize(commentRef.current as HTMLTextAreaElement);
    }
  }, []);

  return (
    <div className="comment-block">
      <form className="comment-block__content" onSubmit={onSubmit}>
        <div className="comment-header">
          <Title medium>댓글 {commentData?.totalElements}개</Title>
          <div className="comment-header__refresh" onClick={onRefresh}>
            <MdRefresh />
          </div>
        </div>
        <div className="comment-input-area">
          <textarea
            className="comment-input"
            placeholder="댓글을 입력하세요."
            rows={1}
            maxLength={300}
            spellCheck={false}
            value={value}
            onChange={onChange}
          />
          <Button size="submit" variant="active" type="submit" label="등록" />
        </div>
        <Text medium className="value-length">
          {value.length} / 300
        </Text>
        <CommentList commentData={commentData as CommentData} />
      </form>
    </div>
  );
}

export default Comment;
