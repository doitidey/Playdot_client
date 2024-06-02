import "@/components/chat/modals/PresentModal.scss";
import TokenButton from "./TokenButton";

type PropType = {
  onChangeMessage: (e) => void;
  onChangeTokenNumber: (e) => void;
};

function PresentModal({ onChangeMessage, onChangeTokenNumber }: PropType) {
  return (
    <section className="presentmodal">
      <div className="presentmodal__block">
        <div className="presentmodal__content">
          <p className="presentmodal__title">한줄 메세지</p>
          <div className="presentmodal__inputbox">
            <input
              type="text"
              placeholder="어떤 메세지를 함께 보낼까?"
              className="presentmodal__input"
              onChange={onChangeMessage}
              maxLength={30}
            />
          </div>
        </div>
        <div className="presentmodal__content">
          <p className="presentmodal__title">토큰 선물</p>
          <div className="presentmodal__inputbox">
            <input
              type="number"
              placeholder="몇 토큰을 선물할래?"
              className="presentmodal__input"
              onChange={onChangeTokenNumber}
            />
            <div className="presentmodal__desc">tk</div>
          </div>
        </div>
      </div>
      <TokenButton />
    </section>
  );
}

export default PresentModal;
