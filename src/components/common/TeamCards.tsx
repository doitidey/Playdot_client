import React from "react";
import Image from "next/image";
import classNames from "classnames";

import "@/components/common/TeamCards.scss";
import { getTeamColor, getTeamLogo } from "@/lib/util/TeamTagLogo";

interface TeamProps {
  teamId: number;
  teamName: string;
}

interface BasicTeamCardsProps {
  /** 기본적으로 필요한 팀 정보 입니다. */
  team: TeamProps;
}

interface SingleTeamCard extends BasicTeamCardsProps {
  /** 카드가 SingleTeamCard로 쓰이는지 판단합니다. */
  singleCard: boolean;
}

interface MultipleCards extends BasicTeamCardsProps {
  /** MultipleCards일시 선택된 카드에 border 효과를 줍니다. */
  isSelected: boolean;
  /** MultipleCards일시 클릭시 실행되는 함수를 콜백으로 받아옵니다. */
  onClick: () => void;
}

type TeamCardsProps = SingleTeamCard | MultipleCards;

function TeamCards(props: TeamCardsProps) {
  const isForSingleCard = "singleCard" in props && props.singleCard;
  const isSelectedInProps = "isSelected" in props;
  const isSelected = "isSelected" in props && props.isSelected;

  const getImgSrc = getTeamLogo(props.team.teamName);
  const getClassTeamName = getTeamColor(props.team.teamName);

  return (
    <div className="teamcard-block">
      {isSelectedInProps && (
        <div
          onClick={props.onClick}
          className="teamcard-content teamcard-content--active"
        >
          <p className="teamname">선택하기</p>
        </div>
      )}
      <div
        className={classNames(
          "teamcard-content",
          isForSingleCard && "teamcard-content--hover",
          isSelected && "teamcard-content--clicked",
        )}
      >
        <Image src={getImgSrc} alt={props.team.teamName} width={0} height={0} />
        <p className="teamname">{props.team.teamName}</p>
        <div className="teamcard-content__backgrounds">
          <div
            className={classNames(
              "square",
              "first-square",
              `square--${getClassTeamName}`,
            )}
          ></div>
          <div
            className={classNames(
              "square",
              "second-square",
              `square--${getClassTeamName}`,
            )}
          ></div>
          <div
            className={classNames(
              "square",
              "third-square",
              `square--${getClassTeamName}`,
            )}
          ></div>
        </div>
      </div>
    </div>
  );
}

export default TeamCards;
