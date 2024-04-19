"use client";

import clsx from "clsx";
import { Globe } from "lucide-react";
import { ImageFallback } from "../image-fallback";
import useHasInternet from "@/hooks/useHasInternet";

export const Nameplate = () => {
const hasInternet = useHasInternet();
  return (
    <section className="flex-center-end gap-5">
      <b className="text-sm tracking-wider whitespace-nowrap">Hi, Emmanuel</b>
      {/*  */}
      <div className="flex-center  gap-4 border-2 border-400 rounded-full py-2 pl-4 pr-3">
        <i>
          <Globe />
        </i>
        <a href="https://github.com/2gbeh" target="_blank">
          <div className="relative">
            <ImageFallback
              as={[
                "https://github.com/2gbeh.png",
                "/images/avatar-flat.png",
              ]}
              alt="Account"
              title="My Account"
              className="min-w-10 min-h-10 max-w-10 max-h-10 rounded-full"
            />
            <span
              className={clsx(
                "top-0 left-7 absolute  w-3.5 h-3.5 border-2 border-white dark:border-gray-800 rounded-full",
                hasInternet ? "bg-green-400" : "bg-red-400"
              )}
            ></span>
          </div>
        </a>
      </div>
    </section>
  );
};
