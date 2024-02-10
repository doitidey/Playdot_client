import Today from "@/components/today/Today";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "플레이닷 | 오늘의 승부예측",
};

function TodayPage() {
  return <Today />;
}

export default TodayPage;
