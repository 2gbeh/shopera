import React from "react";

export default function WebLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <React.Fragment>
      <div className="flex items-center justify-center flex-col gap-2 h-screen">
        <header>WebLayout</header>
        {children}
      </div>
    </React.Fragment>
  );
}
