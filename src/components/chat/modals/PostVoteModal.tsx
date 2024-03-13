import Button from "@/components/common/Button";
import TokenButton from "./TokenButton";
import "@/components/chat/modals/PostVoteModal.scss";

function PostVoteModal() {
  return (
    <section className="post-vote">
      <input className="post-vote__title" placeholder="투표 제목을 입력해줘!" />
      <div className="post-vote__block">
        <div className="post-vote__content">
          <div className="post-vote__content__title">1</div>
          <input className="post-vote__content__input" placeholder="옵션1" />
        </div>
        <div className="post-vote__content">
          <div className="post-vote__content__title">2</div>
          <input className="post-vote__content__input" placeholder="옵션2" />
        </div>
      </div>
      <TokenButton />
      <Button label="토큰 5개 사용" size="large" variant="active" />
    </section>
  );
}
export default PostVoteModal;
