"use client";

import Link from "next/link";
import PATH from "@/constants/PATH";
import { f } from "@/utils";

// MUST BE CLIENT COMPONENT
const hasInternet = window?.navigator?.onLine;

export const ProductCardImage = ({
  image,
  editable = false,
}: {
  image: string | undefined;
  editable?: boolean;
}) => {
  return (
    <figure className="bg-gray-100 relative min-h-[230px] max-h-[230px] border overflow-hidden">
      <img
        src={hasInternet && image ? image : "/images/image-wide.png"}
        width="100%"
        className="min-h-[230px] max-h-[230px] object-cover"
        alt=""
      />
      {/*  */}
      {editable && (
        <figcaption className="absolute top-2 right-4">
          <Link
            href={f(PATH.edit_product, "0fd2652c-fb03-4be4-8e80-819a856ef95a")}
          >
            #
          </Link>
        </figcaption>
      )}
    </figure>
  );
};
