import TokenButton from "./TokenButton";
import "@/components/chat/modals/PostVoteModal.scss";

function PostVoteModal() {
  return (
    <section className="post-vote">
      <input className="post-vote__title" placeholder="투표 내용을 입력해봐" />
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
    </section>
  );
}
export default PostVoteModal;
