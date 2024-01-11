import { ChangeEvent } from "react";
import "./Reply.scss";

interface ReplyProps {
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  reply: string;
}

function Reply({ onChange, reply }: ReplyProps) {
  return (
    <div className="reply-block">
      <input
        className="reply-block__input"
        type="text"
        onChange={onChange}
        value={reply}
        placeholder="답글을 입력하세요."
      />
    </div>
  );
}

export default Reply;
