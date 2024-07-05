"use client";

import "@/components/reply/today/ReplyItem.scss";

import Text from "@/components/common/Text";
import classNames from "classnames";
import { FaRegThumbsUp, FaThumbsUp } from "react-icons/fa";
import { TodayReplyData } from "@/lib/types/comment/reply";
import Image from "next/image";
import TeamTag from "@/components/tag/TeamTag";
import { commentDate } from "@/lib/util/getGameTime";

interface ReplyItemProps extends TodayReplyData {}

function ReplyItem({
  content,
  createdAt,
  isLiked,
  likeCount,
  nickname,
  profileImageUrl,
  // replyId,
  teamName,
}: ReplyItemProps) {
  return (
    <li className="reply-item-block">
      <Image
        className="profile-image"
        alt="profile"
        src={`${process.env.NEXT_PUBLIC_IMAGE_URL}${profileImageUrl}`}
        width={50}
        height={50}
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
          <span>답글쓰기</span>
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
  );
}

export default ReplyItem;
