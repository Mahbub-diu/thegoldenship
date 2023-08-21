"use client";
import NextNProgress from "nextjs-progressbar";

import { SessionProvider } from "next-auth/react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export default function AuthProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SessionProvider 
      // Re-fetch session every 5 minutes
      refetchInterval={5 * 60}
      // Re-fetches session when window is focused
      refetchOnWindowFocus={true}>
      <>
        <NextNProgress />
        {children} <ToastContainer />
      </>
    </SessionProvider>
  );
}
