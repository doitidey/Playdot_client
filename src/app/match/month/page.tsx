import Month from "@/components/month/Month";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "플레이닷 | 월간 승리요정",
};

function MonthPage() {
  return <Month />;
}

export default MonthPage;
