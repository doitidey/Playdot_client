import React from "react";
import Image from "next/image";
import classNames from "classnames";

import "@/components/signup/SignupTeamCards.scss";
import { getClassName, getLogo } from "./TeamsInfo";

interface TeamProps {
  teamId: number;
  teamName: string;
}

interface TeamCardsProps {
  team: TeamProps;
}

interface SingleTeamCard extends TeamCardsProps {
  singleCard: boolean;
}

interface MultipleCards extends TeamCardsProps {
  isSelected: boolean;
  onClick: () => void;
}

type SignupTeamCardsProps = SingleTeamCard | MultipleCards;

function SignupTeamCards(props: SignupTeamCardsProps) {
  const isForSingleCard = "singleCard" in props && props.singleCard;
  const isSelectedInProps = "isSelected" in props;
  const isSelected = "isSelected" in props && props.isSelected;

  const getImgSrc = getLogo(props.team.teamName);
  const getClassTeamName = getClassName(props.team.teamName);

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

export default SignupTeamCards;
