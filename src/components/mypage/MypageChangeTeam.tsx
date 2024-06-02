"use client";
import { useRouter } from "next/navigation";

import "@/components/mypage/MypageChangeTeam.scss";
import { putTeam } from "@/lib/api/signupAPI";
import Button from "../common/Button";
import TeamCardsList from "../common/TeamCardsList";
import Text from "../common/Text";
import Title from "../common/Title";
import useclickedCardStore from "@/lib/store/signup/clickedCardStore";

function MypageChangeTeam() {
  const { clickedCardStore } = useclickedCardStore();
  const router = useRouter();

  const onSubmit = () => {
    putTeam(clickedCardStore);
    router.push("/mypage");
  };

  return (
    <article className="changeteam">
      <div className="changeteam__button">
        <Button
          label="확인"
          size="x-medium"
          variant={clickedCardStore ? "active" : "disactive"}
          onClick={onSubmit}
        />
      </div>

      <Title large className="changeteam__title">
        구단 변경하기
      </Title>
      <Text large>지금 변경하면 6개월 동안 변경이 안되는 점 잊지 말라구!</Text>
      <TeamCardsList />
    </article>
  );
}
export default MypageChangeTeam;
