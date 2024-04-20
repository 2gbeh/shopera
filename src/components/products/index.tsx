"use client";

import React from "react";
import { Package } from "lucide-react";
import { Icon } from "../icon";
import { FilterBar } from "../filter-bar";
import { Pagination } from "../pagination";
import { ProductsSkeleton } from "./products-skeleton";
import { ProductCardImage } from "./product-card-image";
import { ProductCardBarcode } from "./product-card-barcode";
import useProducts from "@/hooks/useProducts";
//
import { $, f } from "@/utils";
import PATH from "@/constants/PATH";

const Products = () => {
  const { products } = useProducts();
  //
  return (
    <>
      <FilterBar />
      {/*  */}
      <section className="bg-gray-100_ p-10">
        <ul className="flex-center-center flex-wrap gap-10">
          {products?.map((item, i) => (
            <li
              key={i}
              className="shadow-md hover:shadow-xl transition min-w-[310px] max-w-[310px] max-h-[410px] min-h-[410px] bg-white rounded-xl flex flex-col"
            >
              {/*  */}
              <ProductCardImage
                src={item?.thumbnail as string}
                href={f(PATH.edit_product, `${item.uuid}-${item.id}`)}
              />
              {/*  */}
              <article className="py-2.5 px-5 flex-col-between flex-1">
                <hgroup>
                  <b className="text-sm text-accent font-normal_">
                    <Icon as={<Package />} text={item.brand.name} />
                  </b>
                  <h1 className="py-1 truncate_">{item.name}</h1>
                </hgroup>
                <section className="flex-start-between mb-2">
                  <h2
                    className="mt-2 font-bold text-[24px] text-brand-dark"
                    style={{ whiteSpace: "nowrap" }}
                  >
                    ₦ {$(item?.price)}
                  </h2>
                  {/*  */}
                  <ProductCardBarcode barcode={item.barcode} />
                </section>
              </article>
            </li>
          )) || <ProductsSkeleton />}
        </ul>
      </section>
      {/*  */}
      <Pagination />
    </>
  );
};

export default React.memo(Products)
