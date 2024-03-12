import "@/components/mypage/MypageFairyRecord.scss";
import Title from "../common/Title";
import Image from "next/image";

function MypageFairyRecord() {
  return (
    <div className="fairy">
      <div className="fairy__content">
        <Title large className="fairy__title">
          승리요정
        </Title>
        <div className="medal">
          <Image
            className="medal__confeti"
            src={"images/confetti.svg"}
            alt={"컨페티"}
            width={394}
            height={132}
          />
          <Image
            className="medal__medalbg"
            src={"images/fairypolygon.svg"}
            alt={"메달"}
            width={380}
            height={400}
          />
          <Image
            className="medal__number"
            src={"images/3.svg"}
            alt={"넘버"}
            width={80}
            height={92}
          />
        </div>
        <p>총 3회 달성</p>
      </div>
      <div className="fairy__content">
        <Title large className="fairy__title">
          패배요정
        </Title>
        <div className="medal">
          <Image
            className="medal__confeti"
            src={"images/confetti.svg"}
            alt={"컨페티"}
            width={394}
            height={132}
          />
          <Image
            className="medal__number"
            src={"images/3.svg"}
            alt={"넘버"}
            width={80}
            height={92}
          />
          <Image
            className="medal__medalbg"
            src={"images/fairypolygon.svg"}
            alt={"메달"}
            width={380}
            height={400}
          />
        </div>
        <p>총 3회 달성</p>
      </div>
    </div>
  );
}

export default MypageFairyRecord;
