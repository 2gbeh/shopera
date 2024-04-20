"use client";

import { Dispatch, SetStateAction, useState } from "react";
import { FormButton } from "../form/form-button";
import { zzz } from "@/utils";
//
import { TProductResponse } from "@/server/entities/product.entity";

export const Pagination = ({
  self: { products, perPage, setPerPage },
}: {
  self: {
    products: TProductResponse[] | null;
    perPage: number;
    setPerPage: Dispatch<SetStateAction<number>>;
  };
}) => {
  const [loading, setLoading] = useState(false);
  async function handleClick() {
    setLoading(true);
    await zzz();
    setPerPage((prev) => prev + 10);
    setLoading(false);
  }
  //
  return (
    <section className="flex-center-center my-10">
      {products && products.length > perPage ? (
        <FormButton
          text="Load More"
          handleSubmit={handleClick}
          submitting={loading}
        />
      ) : null}
    </section>
  );
};
