"use client";

import Link from "next/link";
import { Pencil } from "lucide-react";

// MUST BE CLIENT 
const hasInternet = window?.navigator?.onLine;

export const ProductCardImage = ({
  src,
  href,
}: {
  src?: string;
  href?: string;
}) => {
  return (
    <figure className="bg-gray-100 relative min-h-[230px] max-h-[230px] border overflow-hidden">
      <img
        src={hasInternet && src ? src : "/images/image-wide.png"}
        width="100%"
        className="min-h-[230px] max-h-[230px] object-cover"
        alt=""
      />
      {/*  */}
      {href && (
        <figcaption className="absolute top-3 right-4">
          <Link
            href={href}
            title="Edit"
            className="bg-black bg-opacity-60 hover:text-accent p-2.5 text-white flex-center-center rounded-full"
          >
            <Pencil size="16px" />
          </Link>
        </figcaption>
      )}
    </figure>
  );
};
