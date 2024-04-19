"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Buffer } from "../loaders/buffer";
import { f, zzz } from "@/utils";
import PATH from "@/constants/PATH";

export const Pagination = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  async function handleClick() {
    setLoading(true);
    await zzz();
    setLoading(false);
    router.push(f(PATH.edit_product, "0fd2652c-fb03-4be4-8e80-819a856ef95a"));
  }
  //
  return (
    <section className="flex-center-center mt-20">
      <button
        type="button"
        onClick={handleClick}
        disabled={loading}
        className="btn-brand py-4 px-8 rounded-lg flex-center gap-2"
      >
        <b className="uppercase text-sm tracking-wider">Load More</b>
        {loading && <Buffer />}
      </button>
    </section>
  );
};
