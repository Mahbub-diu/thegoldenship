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
    <SessionProvider>
      <>
        <NextNProgress />
        {children} <ToastContainer />
      </>
    </SessionProvider>
  );
}
