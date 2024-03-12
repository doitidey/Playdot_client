import Image from "next/image";
import Text from "@/components/common/Text";
import "@/components/tag/TeamTag.scss";
import { getTeamColor, getTeamLogo } from "@/lib/util/TeamTagLogo";

interface TeamTagProps {
  teamName: string;
}

function TeamTag({ teamName }: TeamTagProps) {
  return (
    <div className={`team-tag-block ${getTeamColor(teamName)}`}>
      <div className="team-tag-block__img">
        <Image
          src={getTeamLogo(teamName)}
          alt={teamName}
          width={0}
          height={0}
          draggable={false}
        />
      </div>
      <Text caption>{teamName}</Text>
    </div>
  );
}

export default TeamTag;
