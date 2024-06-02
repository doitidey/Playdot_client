import { useState } from "react";

import Button from "@/components/common/Button";
import TokenButton from "@/components/chat/modals/TokenButton";
import "@/components/chat/modals/PostVoteModal.scss";
import { useSocket } from "@/lib/hooks/useSocket";
import { useModal } from "@/lib/hooks/useModal";

function PostVoteModal() {
  const { createVote } = useSocket();
  const { closeModal } = useModal();
  const [voteDetail, setVoteDetail] = useState({
    question: "",
    option1: "",
    option2: "",
  });

  const onChangeTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setVoteDetail({
      ...voteDetail,
      question: e.target.value,
    });
  };
  const onChangeOption1 = (e: React.ChangeEvent<HTMLInputElement>) => {
    setVoteDetail({
      ...voteDetail,
      option1: e.target.value,
    });
  };
  const onChangeOption2 = (e: React.ChangeEvent<HTMLInputElement>) => {
    setVoteDetail({
      ...voteDetail,
      option2: e.target.value,
    });
  };

  const isCanSubmit =
    voteDetail.question && voteDetail.option1 && voteDetail.option2;

  const onSubmitCreateVote = (e: React.FormEvent) => {
    e.preventDefault();
    createVote(voteDetail);
    closeModal();
  };

  return (
    <form className="post-vote" onSubmit={onSubmitCreateVote}>
      <input
        className="post-vote__title"
        placeholder="투표 제목을 입력해줘!"
        onChange={onChangeTitle}
      />
      <div className="post-vote__block">
        <div className="post-vote__content">
          <div className="post-vote__content__title">1</div>
          <input
            className="post-vote__content__input"
            placeholder="옵션1"
            onChange={onChangeOption1}
          />
        </div>
        <div className="post-vote__content">
          <div className="post-vote__content__title">2</div>
          <input
            className="post-vote__content__input"
            placeholder="옵션2"
            onChange={onChangeOption2}
          />
        </div>
      </div>
      <TokenButton />
      <Button
        label="토큰 5개 사용"
        size="large"
        variant={`${isCanSubmit ? "active" : "disactive"}`}
        type="submit"
      />
    </form>
  );
}
export default PostVoteModal;
