import "@/components/chat/modals/TokenButton.scss";
import { getProfileDetails } from "@/lib/api/mypageAPI";
import useTokenNumberStore from "@/lib/store/chat/tokenStore";
import { useEffect, useState } from "react";

//todo: token값 api값 연동
function TokenButton() {
  const [token, setToken] = useState<number>(0);
  const { setTotalStore } = useTokenNumberStore();
  useEffect(() => {
    const getToken = async () => {
      try {
        const res = await getProfileDetails();
        setToken(res.data.token);
        setTotalStore(res.data.token);
      } catch (e) {
        console.error(e);
      }
    };
    getToken();
  }, []);

  return (
    <div className="token__block">
      <p>💰 내 토큰</p>
      <p>{token}tk</p>
    </div>
  );
}

export default TokenButton;
