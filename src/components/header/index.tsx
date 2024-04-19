import { Logo } from "@/components/logo";
import { QuickAccessBar } from "@/components/quick-access-bar";
import { SearchBar } from "@/components/search-bar";
import { Nameplate } from "@/components/nameplate";

export const Header = () => {
  return (
    <header className="pt-5 pb-16 bg-brand-dark border-b-2 border-b-black">
      <div className="container flex-start-between border">
        <div className="min-w-[260px] border">
          <Logo />
        </div>
        {/*  */}
        <div className="flex-center flex-col flex-1 gap-8">
          <QuickAccessBar />
          {/*  */}
          <SearchBar />
        </div>
        {/*  */}
        <div className="min-w-[260px] border">
          <Nameplate />
        </div>
      </div>
    </header>
  );
};
