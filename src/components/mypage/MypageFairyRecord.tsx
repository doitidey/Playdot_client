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
  const [victoryData, setVictoryData] = useState<HistoryData[]>();
  const [loseData, setLoseData] = useState<HistoryData[]>();

  useEffect(() => {
    const getHistoryData = async () => {
      const res = await getFairyHistory();
      setHistoryData(res.data);

      const victory = res.data.filter((data: HistoryData) =>
        data.title.includes("승리"),
      );
      const lose = res.data.filter((data: HistoryData) =>
        data.title.includes("패배"),
      );
      setVictoryData(victory);
      setLoseData(lose);
    };

    getHistoryData();
  }, []);

  return (
    <div className="fairy">
      <div className="fairy__content">
        {victoryData && victoryData.length > 0 ? (
          victoryData.map((i) => (
            <>
              <Title large className="fairy__title">
                {i.title}
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
                  src={`images/${i.count}.svg`}
                  alt={"넘버"}
                  width={80}
                  height={92}
                />
              </div>
              <p>총 {i.count}회 달성</p>
            </>
          ))
        ) : (
          <>
            <p>아직 기록이 없어!</p>
          </>
        )}
      </div>
      <div className="fairy__content">
        {loseData && loseData.length > 0 ? (
          loseData.map((i) => (
            <>
              <Title large className="fairy__title">
                {i.title}
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
                  src={`images/${i.count}.svg`}
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
              <p>총 {i.count}회 달성</p>
            </>
          ))
        ) : (
          <p>아직 기록이 없어!</p>
        )}
      </div>
    </div>
  );
}

export default MypageFairyRecord;
