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
import { Content } from "@/lib/types/comment/comment";
import CommentListDummy from "./CommentListDummy";

// component
function CommentDummy() {
  // hooks
  const [value, setValue] = useState("");
  const [isLiked, setIsLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(0);
  const commentRef = useRef<HTMLTextAreaElement>(null);
  const [dummy, setDummy] = useState<Content[]>([]);
  const nextId = useRef(0);

  console.warn(dummy);

  // 댓글 입력 이벤트 함수
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
      const comment: Content = {
        content: text,
        replyId: nextId.current,
        createdAt: "2024-07-06",
        isLiked: isLiked,
        likeCount: likeCount,
        nickname: "test",
        profileImageUrl: "",
        teamName: "삼성 라이온즈",
      };
      setDummy(dummy.concat(comment));
      nextId.current += 1;
    },
    [isLiked, likeCount, dummy],
  );

  // 댓글 Submit 이벤트 함수
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

  const onDeleteComment = useCallback(
    (id: number) => {
      setDummy(dummy.filter((comment) => comment.replyId !== id));
    },
    [dummy],
  );

  useEffect(() => {
    if (commentRef) {
      autosize(commentRef.current as HTMLTextAreaElement);
    }
  }, []);

  // render
  return (
    <>
      <div className="comment-block">
        <form className="comment-block__content" onSubmit={onSubmit}>
          <div className="comment-header">
            <Title medium>댓글 {dummy.length}개</Title>
            <div className="comment-header__refresh">
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
        </form>
      </div>
      <CommentListDummy
        commentData={dummy as Content[]}
        setIsLiked={setIsLiked}
        setLikeCount={setLikeCount}
        isLiked={isLiked}
        likeCount={likeCount}
        onDeleteComment={onDeleteComment}
      />
      {/* <Pagination
        activePage={(commentData?.pageable?.pageNumber as number) + 1}
        totalItemsCount={commentData?.totalElements as number}
        itemsCountPerPage={15}
        pageRangeDisplayed={5}
        onChange={onPageChange}
        hideFirstLastPages={true}
        prevPageText={<MdNavigateBefore />}
        nextPageText={<MdNavigateNext />}
      /> */}
      <div className="space" />
    </>
  );
}

export default CommentDummy;
