import React from "react";
import { Logo } from "@/components/logo";
import { QuickAccessBar } from "@/components/quick-access-bar";
import { SearchBar } from "@/components/search-bar";
import { Nameplate } from "@/components/nameplate";
import { FilterBar } from "@/components/filter-bar";

export default function WebLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <React.Fragment>
      <header className="pt-5 pb-16 bg-brand-dark border-b-2 border-b-black">
        <div className="container flex-start-between">
          <Logo />
          {/*  */}
          <div className="flex-center flex-col gap-8">
            <QuickAccessBar />
            {/*  */}
            <SearchBar />
          </div>
          {/*  */}
          <Nameplate />
        </div>
      </header>
      {/*  */}
      <nav>
        <FilterBar />
      </nav>
      {/*  */}
      {children}
    </React.Fragment>
  );
}
