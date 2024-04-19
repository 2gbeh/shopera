import Link from "next/link";
import APP from "@/constants/APP";
import PATH from "@/constants/PATH";

export const Logo = () => {
  return (
    <Link href={PATH.home} title="Home" className="inline-block">
      <figure className="flex-center">
        <img src="/logo.png" width={45} alt="" className="hidden" />
        <figcaption className="text-[26px] font-bold ml-2 typeface">
          {APP.typeface}
        </figcaption>
      </figure>
    </Link>
  );
};
