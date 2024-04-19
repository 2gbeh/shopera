"use client";

import { useRouter } from "next/navigation";

export const Fab = () => {
  const router = useRouter();
  async function handleScroll() {
    router.push("#");
  }
  //
  return (
    <section className="fab btn-brand" onClick={handleScroll}>
      <button type="button">#</button>
    </section>
  );
};
