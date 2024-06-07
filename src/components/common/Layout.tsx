"use client";

import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import Modal from "@/components/common/Modal";
import Header from "@/components/common/Header";
import { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

export const queryClient = new QueryClient();

function Layout({ children }: LayoutProps) {
  return (
    <div>
      <QueryClientProvider client={queryClient}>
        <Modal />
        <Header />
        <div>{children}</div>
        <ReactQueryDevtools initialIsOpen={false} position="bottom-right" />
      </QueryClientProvider>
    </div>
  );
}

export default Layout;
