"use client";

import { Dispatch, SetStateAction, useCallback, useState } from "react";
import { FaRegThumbsUp, FaThumbsUp } from "react-icons/fa";
import Text from "@/components/common/Text";
import TeamTag from "@/components/tag/TeamTag";
import "@/components/comment/CommentListItem.scss";
// import Reply from "@/components/reply/Reply";
import classNames from "classnames";
import { commentDate } from "@/lib/util/getGameTime";
import { QueryClient, useMutation } from "react-query";
import {
  // cancelLikeTodayComment,
  // likeTodayComment,
  removeTodayComment,
} from "@/lib/api/todayAPI";
import { CommentData } from "./Comment";

interface CommentListItemProps {
  nickname: string;
  teamName: string;
  comment: string;
  createdAt?: string;
  likeCount?: number;
  replyId?: number;
  isLiked?: boolean;
  setComments: Dispatch<SetStateAction<CommentData[]>>;
  queryClient: QueryClient;
}

function CommentListItem({
  nickname,
  teamName,
  comment,
  createdAt,
  likeCount,
  replyId,
  setComments,
  isLiked,
}: CommentListItemProps) {
  const [visibleReply, setVisibleReply] = useState(false);
  const [visibleReplyList, setVisibleReplyList] = useState(false);
  const [like, setLike] = useState(isLiked);
  const [count, setCount] = useState(likeCount);
  const [visibleBalloon, setVisibleBalloon] = useState(false);

  const { mutate: removeComment } = useMutation(
    async () => removeTodayComment(replyId as number),
    {
      onMutate: (commentId: number) => {
        console.warn(`댓글 ${replyId}: 댓글 삭제 완료`);
        setComments((prevComments) =>
          prevComments.filter((comment) => comment.replyId !== commentId),
        );
      },
    },
  );

  // 좋아요 기능 작업 중
  // const { mutate: likeComment } = useMutation(
  //   async () => likeTodayComment(replyId as number),
  //   {
  //     onMutate: () => {
  //       console.warn(replyId);
  //       isLiked && setCount((count as number) + 1);
  //     },
  //   },
  // );

  // const { mutate: cancelLike } = useMutation(
  //   async () => cancelLikeTodayComment(replyId as number),
  //   {
  //     onMutate: () => {
  //       console.warn(replyId);
  //     },
  //   },
  // );

  const onVisible = () => {
    setVisibleReply(!visibleReply);
    setVisibleReplyList(!visibleReplyList);
  };

  // 좋아요 기능 작업 중
  const onLike = () => {
    setLike(!like);
    !like ? setCount((count as number) + 1) : setCount(0);
  };

  const onBalloon = useCallback(() => {
    setVisibleBalloon(!visibleBalloon);
  }, [visibleBalloon]);

  const onRemove = useCallback(() => {
    removeComment(replyId as number);
    setVisibleBalloon(false);
  }, [removeComment, replyId]);

  return (
    <>
      <li className="item-block">
        <div className="item-block__comment">
          <div className="profile-image" />
          <div className="content">
            <div className="content__profile">
              <Text medium>{nickname}</Text>
              <TeamTag teamName={teamName} />
            </div>
            {comment.split("\n").map((text, index) => (
              <Text key={index} medium>
                {text}
              </Text>
            ))}
            <div className="content__reply">
              <span onClick={onVisible}>답글 20</span>
              <span onClick={onVisible}>답글쓰기</span>
            </div>
          </div>
        </div>
        <div className="item-block__button">
          <div className="item-block__button__date">
            {visibleBalloon && (
              <div className="balloon">
                <Text small>삭제 하시겠습니까?</Text>
                <div className="balloon__button">
                  <span onClick={onRemove}>삭제</span>
                  <span onClick={onBalloon}>취소</span>
                </div>
              </div>
            )}
            <span>{commentDate(createdAt)}</span>
            <span>신고</span>
            <span onClick={onBalloon}>삭제</span>
          </div>
          <div className="item-block__button__like">
            <Text>좋아요</Text>
            <span>{count}</span>
            <div
              className={classNames(
                `${like ? "active-like-btn" : "inactive-like-btn"}`,
              )}
              onClick={onLike}
            >
              {like ? <FaThumbsUp /> : <FaRegThumbsUp />}
            </div>
          </div>
        </div>
      </li>
      {/* {visibleReplyList && <span>테스트</span>}
      {visibleReply && <Reply reply={reply} onChange={onChange} />} */}
    </>
  );
}

export default CommentListItem;
