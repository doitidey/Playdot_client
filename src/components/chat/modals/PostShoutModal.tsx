import Button from "@/components/common/Button";
import TokenButton from "./TokenButton";
import "@/components/chat/modals/PostShoutModal.scss";

function PostShoutModal() {
  return (
    <section className="post-shout">
      <input
        className="post-shout__input"
        placeholder="외치기 내용을 입력해봐"
      />
      <TokenButton />
      <Button label="토큰 5개 사용" size="large" variant="active" />
    </section>
  );
}
export default PostShoutModal;
