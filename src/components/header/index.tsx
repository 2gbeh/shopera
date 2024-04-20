import { Suspense } from "react";
import { Logo } from "@/components/logo";
import { QuickAccessBar } from "@/components/quick-access-bar";
import { SearchBar } from "@/components/search-bar";
import { Nameplate } from "@/components/nameplate";

export const Header = () => {
  return (
    <header className="pt-5 pb-16 bg-brand-dark border-b-2 border-b-gray-400">
      <div className="container flex-start-between border_">
        <div className="min-w-[260px] border_">
          <Logo />
        </div>
        {/*  */}
        <div className="flex-center flex-col flex-1 gap-8">
          <QuickAccessBar />
          {/*  */}
          <Suspense fallback={<h1>Loading...</h1>}>
            <SearchBar />
          </Suspense>
        </div>
        {/*  */}
        <div className="min-w-[260px] border_">
          <Nameplate />
        </div>
      </div>
    </header>
  );
};
