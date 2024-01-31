import React from "react";
import Image from "next/image";
import classNames from "classnames";
import "@/components/signup/SignupTeamCards.scss";

interface TeamProps {
  img: string;
  name: string;
  color: string;
}

function SignupTeamCards(team: TeamProps) {
  return (
    <div className="teamcard-block">
      <div className="teamcard-content teamcard-content--active">
        <p className="teamname">선택하기</p>
      </div>
      <div className="teamcard-content">
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
