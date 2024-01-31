import { ChangeEvent } from "react";
import "./Reply.scss";

interface ReplyProps {
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  reply: string;
}

function Reply({ onChange, reply }: ReplyProps) {
  return (
    <div className="reply-block">
      <div className="input-content">
        <div className="input-content__space" />
        <input
          className="input-content__input"
          type="text"
          onChange={onChange}
          value={reply}
          placeholder="답글을 입력하세요."
        />
      </div>
    </div>
  );
}

export default Reply;
