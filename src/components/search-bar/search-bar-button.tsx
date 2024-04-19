"use client";

import { Icon } from "@/components/icon";
import { Search } from "lucide-react";

export const SearchBarButton = ({
  handleSubmit,
}: {
  handleSubmit: () => void;
}) => {
  return (
    <button
      type="button"
      onClick={handleSubmit}
      className="btn-accent-white flex-center-center w-[60px] h-[60px] rounded-full ml-5  mr-2.5"
      title="Search"
    >
      <Search strokeWidth={3} />
    </button>
  );
};
