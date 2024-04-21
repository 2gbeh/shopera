"use client";

import React from "react";
import { ChevronLeft } from "lucide-react";
import { Icon } from "../icon";
import { Buffer } from "../loaders/buffer";
import clsx from "clsx";

const tw = {
  btn: "rounded-md px-5 py-2.5 min-h-[40px] max-h-[40px] text-sm font-semibold flex-center shadow-md",
};

const CreateProductButtons = ({
  self: { goBack, reset, isSubmitting },
}: {
  self: {
    goBack: () => void;
    reset: () => void;
    isSubmitting: boolean;
  };
}) => {
  const key = "brand_id";
  return (
    <section className="mt-6 flex-center-between border-t pt-5 px-2">
      <div>
        <button
          type="button"
          onClick={goBack}
          className={clsx(
            tw.btn,
            "text-brand-dark hover:text-brand pr-0 pl-0 _bg-red-50 shadow-none font-medium"
          )}
        >
          <Icon as={<ChevronLeft />} text="Cancel" />
        </button>
      </div>
      <div className="flex-center-end gap-5">
        <button
          type="button"
          onClick={() => reset()}
          className={clsx(tw.btn, "btn-reset")}
        >
          Reset
        </button>
        <button className={clsx(tw.btn, "btn-brand gap-2")}>
          {isSubmitting && <Buffer />}
          Save
        </button>
      </div>
    </section>
  );
};

export default React.memo(CreateProductButtons);
