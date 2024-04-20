import { Suspense } from "react";
import { Logo } from "@/components/logo";
import { QuickAccessBar } from "@/components/quick-access-bar";
import { SearchBar } from "@/components/search-bar";
import { Nameplate } from "@/components/nameplate";
import { SearchBarMobile } from "../search-bar/search-bar-mobile";

export const Header = () => {
  return (
    <header className="pt-5 pb-8 sm:pb-16 bg-brand-dark border-b-2 border-b-gray-400">
      <div className="px-5 sm:px-0 sm:container flex-start-between border_ flex-wrap_">
        <div className="sm:min-w-[260px] border_">
          <Logo />
        </div>
        {/*  */}
        <div className="flex-center flex-col flex-1 gap-8">
          <QuickAccessBar />
          {/*  */}
          <Suspense fallback={<h1></h1>}>
            <SearchBar />
          </Suspense>
        </div>
        {/*  */}
        <div className="sm:min-w-[260px] border_">
          <Nameplate />
        </div>
      </div>
      <Suspense fallback={<h1></h1>}>
        <div className="sm:hidden px-6">
          <SearchBarMobile />
        </div>
      </Suspense>
    </header>
  );
};
