"use client";

import "@/components/comment/month/CommentItem.scss";
import Text from "@/components/common/Text";
import { FaRegThumbsUp, FaThumbsUp } from "react-icons/fa";
import { useCallback, useState } from "react";
import classNames from "classnames";

import TeamTag from "@/components/tag/TeamTag";
import { commentDate } from "@/lib/util/getGameTime";
import { useMutation, useQuery, useQueryClient } from "react-query";
import {
  cancelCommentLike,
  deleteMonthComment,
  getMonthReply,
  postCommentLike,
} from "@/lib/api/monthAPI";
import Profile from "@/components/common/Profile";
import Reply from "@/components/reply/month/Reply";
import { Content } from "@/lib/types/comment/comment";

function CommentItem({
  content,
  createdAt,
  isLiked,
  likeCount,
  nickname,
  profileImageUrl,
  replyId,
  teamName,
}: Content) {
  const [visibleBalloon, setVisibleBalloon] = useState(false);
  const [visibleReply, setVisibleReply] = useState(false);

  const queryClient = useQueryClient();

  const { data: replyData } = useQuery<Content[]>(["monthReply", replyId], () =>
    getMonthReply(replyId as number),
  );

  const { mutate: deleteComment } = useMutation(
    () => deleteMonthComment(replyId as number),
    {
      onSuccess: () => {
        console.warn(`댓글 삭제 완료: ${replyId}`);
        queryClient.invalidateQueries({ queryKey: ["monthComment"] });
      },
    },
  );

  const { mutate: postLike } = useMutation(
    () => postCommentLike(replyId as number),
    {
      onSuccess: () => {
        console.warn(`댓글 좋아요 완료: ${replyId}`);
        queryClient.invalidateQueries({ queryKey: ["monthComment"] });
      },
    },
  );

  const { mutate: cancelLike } = useMutation(
    () => cancelCommentLike(replyId as number),
    {
      onSuccess: () => {
        console.warn(`댓글 좋아요 취소 완료: ${replyId}`);
        queryClient.invalidateQueries({ queryKey: ["monthComment"] });
      },
    },
  );

  const onVisibleBalloon = useCallback(() => {
    setVisibleBalloon(!visibleBalloon);
  }, [visibleBalloon]);

  const onVisibleReply = useCallback(() => {
    setVisibleReply(!visibleReply);
  }, [visibleReply]);

  const onDeleteComment = useCallback(() => {
    deleteComment();
    setVisibleBalloon(false);
  }, [deleteComment]);

  const onLikeComment = useCallback(() => {
    if (isLiked === false) {
      postLike();
    } else if (isLiked === true) {
      cancelLike();
    }
  }, [postLike, isLiked, cancelLike]);

  return (
    <>
      <li className="item-block">
        <div className="item-block__comment">
          <Profile
            imageUrl={profileImageUrl as string}
            nickname={nickname as string}
            size={50}
          />
          <div className="content">
            <div className="content__profile">
              <Text medium>{nickname}</Text>
              <TeamTag teamName={teamName as string} />
            </div>
            {content?.split("\n").map((text, index) => (
              <Text key={index} medium>
                {text}
              </Text>
            ))}
            <div className="content__reply">
              <span onClick={onVisibleReply}>답글 {replyData?.length}</span>
              <span onClick={onVisibleReply}>답글 쓰기</span>
            </div>
          </div>
        </div>
        <div className="item-block__button">
          <div className="item-block__button__date">
            {visibleBalloon && (
              <div className="balloon">
                <Text small>삭제하시겠습니까?</Text>
                <div className="balloon__button">
                  <span onClick={onDeleteComment}>삭제</span>
                  <span onClick={onVisibleBalloon}>취소</span>
                </div>
              </div>
            )}
            <span>{commentDate(createdAt)}</span>
            <span>신고</span>
            <span onClick={onVisibleBalloon}>삭제</span>
          </div>
          <div className="item-block__button__like">
            <Text>좋아요</Text>
            <span>{likeCount}</span>
            <div
              className={classNames(
                `${isLiked ? "active-like-btn" : "inactive-like-btn"}`,
              )}
              onClick={onLikeComment}
            >
              {isLiked ? <FaThumbsUp /> : <FaRegThumbsUp />}
            </div>
          </div>
        </div>
      </li>
      {visibleReply && (
        <Reply
          replyData={replyData as Content[]}
          replyId={replyId as number}
          setVisibleReply={setVisibleReply}
        />
      )}
    </>
  );
}

export default CommentItem;
