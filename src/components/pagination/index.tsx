"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { LoadingAlt } from "../loaders/loading-alt";
import { f, zzz } from "@/utils";
import PATH from "@/constants/PATH";
import { FormButton } from "../form/form-button";

export const Pagination = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  async function handleClick() {
    setLoading(true);
    await zzz();
    setLoading(false);
    // router.push(f(PATH.edit_product, "0fd2652c-fb03-4be4-8e80-819a856ef95a"));
  }
  //
  return (
    <section className="flex-center-center mt-20">
      <FormButton text="Load More" handleSubmit={handleClick} submitting={loading} />
    </section>
  );
};
