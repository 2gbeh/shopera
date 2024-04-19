"use client";

import { useRouter } from "next/navigation";
import { ChevronUp } from "lucide-react";

export const Fab = () => {
  const router = useRouter();
  async function handleScroll() {
    router.push("#");
  }
  //
  return (
    <section className="fab btn-brand" onClick={handleScroll}>
      <button type="button">
        <ChevronUp strokeWidth={3} />
      </button>
    </section>
  );
};
