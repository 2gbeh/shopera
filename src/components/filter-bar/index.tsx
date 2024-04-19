"use client";

import { ArrowUpAZ, ArrowUpZA, ArrowDownAZ, ArrowDownZA } from "lucide-react";
import { Icon } from "../icon";

export const FilterBar = () => {
  function handleSortProduct() {}
  function handleSortBrand() {}
  //
  return (
    <section className="flex-end px-8 pt-8">
      <ul className="flex-center gap-5 text-sm">
        <li className="border border300 pt-2 pb-1 px-3 rounded-lg text-brand-dark">
          <button onClick={handleSortProduct} className="hover:text-brand">
            <Icon as={<ArrowDownAZ />} text="Sort Products" />
          </button>
        </li>
        <li className="border border300 pt-2 pb-1 px-3 rounded-lg text-brand-dark">
          <button onClick={handleSortBrand} className="hover:text-brand">
            <Icon as={<ArrowUpZA />} text="Sort Brands" />
          </button>
        </li>
      </ul>
    </section>
  );
};
