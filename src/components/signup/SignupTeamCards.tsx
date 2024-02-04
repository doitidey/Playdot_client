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
  selected?: boolean;
}

function SignupTeamCards({ team, selected }: TeamCardsProps) {
  return (
    <div className="teamcard-block">
      {selected || (
        <div className="teamcard-content teamcard-content--active">
          <p className="teamname">선택하기</p>
        </div>
      )}
      <div
        className={classNames(
          "teamcard-content",
          selected && "teamcard-content--hover",
        )}
      >
        <Image src={team.img} alt={team.name} width={0} height={0} />
        <p className="teamname">{team.name}</p>
        <div className="teamcard-content__backgrounds">
          <div
            className={classNames(
              "square",
              "first-square",
              `square--${team.color}`,
            )}
          ></div>
          <div
            className={classNames(
              "square",
              "second-square",
              `square--${team.color}`,
            )}
          ></div>
          <div
            className={classNames(
              "square",
              "third-square",
              `square--${team.color}`,
            )}
          ></div>
        </div>
      </div>
    </div>
  );
}

export default SignupTeamCards;
