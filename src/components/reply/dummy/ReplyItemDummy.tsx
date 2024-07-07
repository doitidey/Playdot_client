"use client";

import "@/components/reply/month/ReplyItem.scss";

import Text from "@/components/common/Text";
import classNames from "classnames";
import { FaRegThumbsUp, FaThumbsUp } from "react-icons/fa";
import TeamTag from "@/components/tag/TeamTag";
import { commentDate } from "@/lib/util/getGameTime";
import { Dispatch, SetStateAction, useCallback, useState } from "react";
import { Content } from "@/lib/types/comment/comment";
import Profile from "@/components/common/Profile";
import ReplyDummy from "./ReplyDummy";

interface ReplyItemDummy extends Content {
  setIsLiked: Dispatch<SetStateAction<boolean>>;
  setLikeCount: Dispatch<SetStateAction<number>>;
}

function ReplyItemDummy({
  content,
  createdAt,
  isLiked,
  likeCount,
  nickname,
  profileImageUrl,
  teamName,
}: ReplyItemDummy) {
  const [visibleReply, setVisibleReply] = useState(false);
  const onVisibleReply = useCallback(() => {
    setVisibleReply(!visibleReply);
  }, [visibleReply]);
  return (
    <>
      <li className="reply-item-block">
        <Profile
          imageUrl={profileImageUrl as string}
          nickname={nickname as string}
          size={50}
        />
        <div className="reply-item-block__content">
          <div className="reply-item-block__content__info">
            <Text medium>{nickname}</Text>
            <TeamTag teamName={teamName as string} />
          </div>
          {content?.split("\n").map((text, index) => (
            <Text key={index} medium>
              {text}
            </Text>
          ))}
          <div className="reply-item-block__content__reply">
            <span onClick={onVisibleReply}>답글쓰기</span>
          </div>
        </div>
        <div className="reply-item-block__etc">
          <div className="reply-item-block__etc__date">
            <span>{commentDate(createdAt)}</span>
            <span>신고</span>
          </div>
          <div className="reply-item-block__etc__like">
            <Text>좋아요</Text>
            <span>{likeCount}</span>
            <div
              className={classNames(
                `${isLiked ? "active-like-btn" : "inactive-like-btn"}`,
              )}
            >
              {isLiked ? <FaThumbsUp /> : <FaRegThumbsUp />}
            </div>
          </div>
        </div>
      </li>
      {visibleReply && <ReplyDummy />}
    </>
  );
}

export default ReplyItemDummy;
