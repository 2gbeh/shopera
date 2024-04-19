"use client";

import { BellDot } from "lucide-react";

// MUST BE CLIENT
const hasInternet = window?.navigator?.onLine;

export const Nameplate = () => {
  return (
    <section className="flex-center-end gap-5">
      <b className="text-sm tracking-wider">Hi, Emmanuel</b>
      {/*  */}
      <div className="flex-center  gap-4 border-2 border400 rounded-full py-2 pl-4 pr-2">
        <i title="Notifications" className="">
          <BellDot />
        </i>
        <a href="https://github.com/2gbeh" target="_blank">
          <img
            src={
              hasInternet
                ? "https://github.com/2gbeh.png"
                : "/images/avatar-flat.png"
            }
            width={32}
            alt="Account"
            title="My Account"
            className="rounded-full"
          />
        </a>
      </div>
    </section>
  );
};
