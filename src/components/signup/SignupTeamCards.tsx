import React from "react";
import Image from "next/image";
import classNames from "classnames";

import "@/components/signup/SignupTeamCards.scss";

interface TeamProps {
  img: string;
  name: string;
  color: string;
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
        <Image
          src={props.team.img}
          alt={props.team.name}
          width={0}
          height={0}
        />
        <p className="teamname">{props.team.name}</p>
        <div className="teamcard-content__backgrounds">
          <div
            className={classNames(
              "square",
              "first-square",
              `square--${props.team.color}`,
            )}
          ></div>
          <div
            className={classNames(
              "square",
              "second-square",
              `square--${props.team.color}`,
            )}
          ></div>
          <div
            className={classNames(
              "square",
              "third-square",
              `square--${props.team.color}`,
            )}
          ></div>
        </div>
      </div>
    </div>
  );
}

export default SignupTeamCards;
