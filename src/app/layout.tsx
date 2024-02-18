"use client";

import Header from "@/components/common/Header";
import { ReactNode } from "react";
import "@/styles/GlobalStyles.scss";
import { QueryClient, QueryClientProvider } from "react-query";
import Modal from "@/components/common/Modal";

const queryClient = new QueryClient();

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <html lang="ko">
        <body>
          <QueryClientProvider client={queryClient}>
            <Modal />
            <Header />
            <div>{children}</div>
          </QueryClientProvider>
        </body>
      </html>
    </>
  );
}
