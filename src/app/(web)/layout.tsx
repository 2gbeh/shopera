import React from "react";
import { Header } from "@/components/header";

export default function WebLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <React.Fragment>
      <Header />
      {children}
    </React.Fragment>
  );
}
