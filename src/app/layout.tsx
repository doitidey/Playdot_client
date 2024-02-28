import { ReactNode } from "react";
import "@/styles/GlobalStyles.scss";
import Layout from "@/components/common/Layout";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "플레이닷",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <html lang="ko">
        <body>
          <Layout>{children}</Layout>
        </body>
      </html>
    </>
  );
}
