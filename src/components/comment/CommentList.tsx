import { CommentData } from "./Comment";
import "@/components/comment/CommentList.scss";
import CommentListItem from "@/components/comment/CommentListItem";

interface CommentListProps {
  comment: CommentData[];
}

function CommentList({ comment }: CommentListProps) {
  return (
    <ul className="comment-list-block">
      {comment.map((item) => (
        <CommentListItem
          key={item.id}
          username={item.username}
          team={item.team}
          comment={item.comment}
        />
      ))}
    </ul>
  );
}

export default CommentList;
