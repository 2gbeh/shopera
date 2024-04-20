import React from "react";

import { Header } from "@/components/header";
import { Fab } from "@/components/fab";

export default function WebLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <React.Fragment>
      <Header /> 
      {children}
      <Fab />
    </React.Fragment>
  );
}
