"use client";

import Image from "next/image";
import "@/components/error/NotFoundError.scss";
import Title from "../common/Title";
import Button from "../common/Button";
import { useRouter } from "next/navigation";

function NotFoundError() {
  const router = useRouter();
  const onHome = () => {
    router.push("/");
  };
  return (
    <div className="block">
      <Image src="/images/404.svg" alt="" width={300} height={200} />
      <Title large>이런! 페이지를 찾을 수 없어!</Title>
      <Title small>
        요청한 페이지의 주소가 잘못되었거나, 사라진 페이지인 것 같아..
      </Title>
      <Button
        onClick={onHome}
        variant="active"
        size="medium"
        label="홈으로 돌아가기"
      />
    </div>
  );
}

export default NotFoundError;
