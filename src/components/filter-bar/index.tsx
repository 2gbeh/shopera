"use client";

import { ArrowUpAZ, ArrowUpZA, ArrowDownAZ, ArrowDownZA } from "lucide-react";
import { Icon } from "../icon";

export const FilterBar = ({
  self: { sortByProductName, sortByBrandName, sortProductDesc, sortBrandDesc },
}: {
  self: {
    sortByProductName: () => void;
    sortByBrandName: () => void;
    sortProductDesc: boolean;
    sortBrandDesc: boolean;
  };
}) => {
  //
  return (
    <section className="flex-end px-8 pt-8">
      <ul className="flex-center gap-5 text-sm">
        <li className="border border-300 pt-2 pb-1 px-3 rounded-lg text-brand-dark">
          <button onClick={sortByProductName} className="hover:text-brand">
            <Icon
              as={sortProductDesc ? <ArrowDownAZ /> : <ArrowUpAZ />}
              text="Sort Products"
            />
          </button>
        </li>
        <li className="border border-300 pt-2 pb-1 px-3 rounded-lg text-brand-dark">
          <button onClick={sortByBrandName} className="hover:text-brand">
            <Icon
              as={sortBrandDesc ? <ArrowUpZA /> : <ArrowDownZA />}
              text="Sort Brands"
            />
          </button>
        </li>
      </ul>
    </section>
  );
};
