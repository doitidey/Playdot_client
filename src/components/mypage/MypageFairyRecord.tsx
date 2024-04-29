import "@/components/mypage/MypageFairyRecord.scss";
import Title from "../common/Title";
import Image from "next/image";
import { useEffect, useState } from "react";
import { getFairyHistory } from "@/lib/api/mypageAPI";

interface HistoryData {
  count: number;
  title: string;
  totalRank: number;
}

function MypageFairyRecord() {
  const [historyData, setHistoryData] = useState<HistoryData[]>();
  useEffect(() => {
    const getHistoryData = async () => {
      const res = await getFairyHistory();
      setHistoryData(res.data);
    };
    getHistoryData();
  }, []);

  const victoryData = historyData?.filter((data) => {
    data.title.includes("승리요정 1등");
  });

  const loseData = historyData?.filter((data) => {
    data.title.includes("패배요정 1등");
  });

  return (
    <div className="fairy">
      <div className="fairy__content">
        <Title large className="fairy__title">
          승리요정
        </Title>
        {victoryData && victoryData.length > 0 ? (
          <>
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
                src={`images/${victoryData[0].count}.svg`}
                alt={"넘버"}
                width={80}
                height={92}
              />
            </div>
            <p>총 3회 달성</p>
          </>
        ) : (
          <>
            <p>아직 기록이 없어!</p>
          </>
        )}
      </div>
      <div className="fairy__content">
        <Title large className="fairy__title">
          패배요정
        </Title>
        {loseData && loseData.length > 0 ? (
          <>
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
                src={`images/${loseData[0].count}.svg`}
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
          </>
        ) : (
          <p>아직 기록이 없어!</p>
        )}
      </div>
    </div>
  );
}

export default MypageFairyRecord;
