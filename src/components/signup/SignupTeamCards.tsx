import Image from "next/image";
import "@/components/signup/SignupTeamCards.scss";

function SignupTeamCards(team: any) {
  return (
    <div className="teamcard-block">
      <Image src={team.img} alt={team.name} width={0} height={0} />
      <p className="teamname">{team.name}</p>
      <div className="teamcard-block__backgrounds">
        <div className="square"></div>
        <div className="square"></div>
        <div className="square"></div>
      </div>
    </div>
  );
}

export default SignupTeamCards;
