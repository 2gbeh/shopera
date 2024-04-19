"use client";

import clsx from "clsx";

export const SearchBarPlaceholder = ({
  handleClick,
}: {
  handleClick: () => void;
}) => {
  return (
    <ul className="flex-center flex-1 pl-10 text-md border_ gap-16">
      {["product name", "brand", "barcode"].map((e, i) => (
        <li
          key={i}
          className={clsx("text-500 whitespace-nowrap", i > 0 && "border-l pl-10")}
          onClick={handleClick}
        >
          Search by {e}
        </li>
      ))}
    </ul>
  );
};
