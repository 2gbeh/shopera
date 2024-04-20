"use client";

import { useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { f, zzz } from "@/utils";
import PATH from "@/constants/PATH";
import { FormButton } from "../form/form-button";

export const Pagination = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  async function handleClick() {
    setLoading(true);
    await zzz();
    setLoading(false);
    // router.push(f(PATH.edit_product, "0fd2652c-fb03-4be4-8e80-819a856ef95a-1"));
  }
  //
  return (
    !searchParams.get("like") && (
      <section className="flex-center-center my-10">
        <FormButton
          text="Load More"
          handleSubmit={handleClick}
          submitting={loading}
        />
      </section>
    )
  );
};
