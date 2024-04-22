"use client";

import { CheckCheck, BanIcon } from "lucide-react";
import {
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/shadcn/ui/dialog";
import { Input } from "@/components/shadcn/ui/input";
import { LoadingAlt } from "../loaders/loading-alt";
import useValidateBarcode from "@/hooks/useValidateBarcode";
import clsx from "clsx";

const tw = {
  btn: "rounded-md px-5  min-h-[37px] max-h-[37px] text-sm font-semibold flex-center shadow-md text-white",
};

export const ValidateBarcodeForm = () => {
  const {
    barcode,
    setBarcode,
    validated,
    setValidated,
    validating,
    setValidating,
    handleChange,
    handleValidate,
  } = useValidateBarcode();
  //
  return (
    <DialogContent className="sm:max-w-[425px]">
      <DialogHeader>
        <DialogTitle>Validate Barcode</DialogTitle>
        <DialogDescription>
          Enter a valid product barcode in UPC-12 format.
        </DialogDescription>
      </DialogHeader>
      <DialogFooter className="">
        <form className="w-full">
          <fieldset disabled={validating} className="flex gap-2">
            <Input
              type="text"
              placeholder="Ex. 1-2345678901-2"
              onChange={handleChange}
              value={barcode}
              className="border border-gray-300 disabled:bg-brand-tint"
            />
            {validated < 0 ? (
              <button
                onClick={handleValidate}
                disabled={barcode.length < 12}
                className={clsx(tw.btn, "btn-brand")}
              >
                {validating ? <LoadingAlt /> : "Validate"}
              </button>
            ) : (
              <button
                className={clsx(
                  tw.btn,
                  validated === 1
                    ? "bg-green-500 disabled:bg-green-500"
                    : "bg-red-500 disabled:bg-red-500"
                )}
              >
                {validated === 1 ? <CheckCheck /> : <BanIcon />}
              </button>
            )}
          </fieldset>
        </form>
      </DialogFooter>
    </DialogContent>
  );
};
