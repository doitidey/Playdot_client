"use client";

import "@/components/previous/TeamInfo.scss";
import Image from "next/image";
import Title from "../common/Title";
import Text from "../common/Text";

function TeamInfo() {
  return (
    <ul className="team-info-block">
      <li className="team-info-block__item">
        <div className="awayTeam">
          <Image
            src="/images/tigers.svg"
            alt=""
            width={60}
            height={60}
            draggable={false}
          />
          <div className="away">
            <Text large>기아 타이거즈</Text>
            <Title medium>10%</Title>
          </div>
        </div>
        <div className="homeTeam">
          <Image
            src="/images/lions.svg"
            alt=""
            width={60}
            height={60}
            draggable={false}
          />
          <div className="home">
            <Text large>삼성 라이온즈</Text>
            <Title medium>90%</Title>
          </div>
        </div>
      </li>
      <li className="team-info-block__item">
        <div className="awayTeam">
          <Image
            src="/images/twins.svg"
            alt=""
            width={60}
            height={60}
            draggable={false}
          />
          <div className="away">
            <Text large>LG 트윈스</Text>
            <Title medium>10%</Title>
          </div>
        </div>
        <div className="homeTeam">
          <Image
            src="/images/bears.svg"
            alt=""
            width={60}
            height={60}
            draggable={false}
          />
          <div className="home">
            <Text large>두산 베어스</Text>
            <Title medium>90%</Title>
          </div>
        </div>
      </li>
      <li className="team-info-block__item">
        <div className="awayTeam">
          <Image
            src="/images/landers.svg"
            alt=""
            width={60}
            height={60}
            draggable={false}
          />
          <div className="away">
            <Text large>SSG 랜더스</Text>
            <Title medium>10%</Title>
          </div>
        </div>
        <div className="homeTeam">
          <Image
            src="/images/wiz.svg"
            alt=""
            width={60}
            height={60}
            draggable={false}
          />
          <div className="home">
            <Text large>KT 위즈</Text>
            <Title medium>90%</Title>
          </div>
        </div>
      </li>
      <li className="team-info-block__item">
        <div className="awayTeam">
          <Image
            src="/images/eagles.svg"
            alt=""
            width={60}
            height={60}
            draggable={false}
          />
          <div className="away">
            <Text large>한화 이글스</Text>
            <Title medium>10%</Title>
          </div>
        </div>
        <div className="homeTeam">
          <Image
            src="/images/giants.svg"
            alt=""
            width={60}
            height={60}
            draggable={false}
          />
          <div className="home">
            <Text large>롯데 자이언츠</Text>
            <Title medium>90%</Title>
          </div>
        </div>
      </li>
      <li className="team-info-block__item">
        <div className="awayTeam">
          <Image
            src="/images/heroes.svg"
            alt=""
            width={60}
            height={60}
            draggable={false}
          />
          <div className="away">
            <Text large>키움 히어로즈</Text>
            <Title medium>10%</Title>
          </div>
        </div>
        <div className="homeTeam">
          <Image
            src="/images/dinos.svg"
            alt=""
            width={60}
            height={60}
            draggable={false}
          />
          <div className="home">
            <Text large>NC 다이노스</Text>
            <Title medium>90%</Title>
          </div>
        </div>
      </li>
    </ul>
  );
}

export default TeamInfo;
