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

const ProductsContent = () => {
  const {
    perPage,
    setPerPage,
    //
    products,
    resetSearchResults,
    sortByProductName,
    sortByBrandName,
    sortProductDesc,
    sortBrandDesc,
  } = useProducts();
  //
  return (
    <>
      <FilterBar
        self={{
          sortByProductName,
          sortByBrandName,
          sortProductDesc,
          sortBrandDesc,
        }}
      />
      {/*  */}
      <section className="bg-gray-100_ p-5 sm:p-10">
        <ul className="flex-center-center flex-wrap gap-8 sm:gap-10">
          {products ? (
            products.length > 0 ? (
              products.map(
                (item, i) =>
                  i < perPage && (
                    <li
                      key={i}
                      className="shadow-md hover:shadow-xl transition w-[100%]  px-2 sm:px-0 sm:w-[310px] sm:min-w-[310px] sm:max-w-[310px] max-h-[410px] min-h-[410px] bg-white rounded-xl flex flex-col"
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
                  )
              )
            ) : (
              <div className="flex-center-center flex-col gap-5">
                <img src="/images/no-content-trim.png" width={240} alt="" />
                <button
                  onClick={resetSearchResults}
                  className="btn-brand rounded-md px-5 py-2.5 min-h-[40px] max-h-[40px] text-sm font-semibold flex-center shadow-md"
                >
                  Reset Result
                </button>
              </div>
            )
          ) : (
            <ProductsSkeleton />
          )}
        </ul>
      </section>
      {/*  */}
      <Pagination
        self={{
          products,
          perPage,
          setPerPage,
        }}
      />
    </>
  );
};

export default React.memo(ProductsContent);
