import "@/components/comment/month/CommentList.scss";
import CommentItem from "@/components/comment/month/CommentItem";
import { CommentData } from "@/lib/types/comment/comment";

interface CommentListProps {
  commentData: CommentData;
}

function CommentList({ commentData }: CommentListProps) {
  return (
    <ul className="comment-list-block">
      {commentData?.content.map((item, index) => (
        <CommentItem
          key={index}
          content={item.content}
          createdAt={item.createdAt}
          nickname={item.nickname}
          isLiked={item.isLiked}
          likeCount={item.likeCount}
          profileImageUrl={item.profileImageUrl}
          replyId={item.replyId}
          teamName={item.teamName}
        />
      ))}
    </ul>
  );
}

export default CommentList;
