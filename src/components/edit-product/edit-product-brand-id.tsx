"use client";

import React from "react";
import Select from "react-select";
import { Controller } from "react-hook-form";
import {
  TProductFormControl,
  TProductFormData_brandId,
  TProductFormFieldErrors,
} from "@/server/requests/product.dto";

const EditProductBrandId = ({
  options,
  control,
  errors,
}: {
  options?: TProductFormData_brandId[];
  control: TProductFormControl;
  errors?: TProductFormFieldErrors;
}) => {
  const key = "brand_id";
  return (
    <section>
      <label
        htmlFor={key}
        className="block text-sm font-bold leading-6 text-brand-dark"
      >
        Select Brand
        <span className="text-red-500 ml-1">*</span>
      </label>
      {/*  */}
      <div className="mt-2 flex flex-col flex-1 gap-1">
        <Controller
          name={key}
          control={control}
          render={({ field }) => (
            <Select
              {...field}
              id={key}
              options={options}
              placeholder="Choose one"
              className="w-full rounded-md border-0 _py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              styles={{
                control: (baseStyles, state) => ({
                  ...baseStyles,
                  // backgroundColor: "transparent",
                  paddingTop: 4,
                  paddingBottom: 4,
                  border: "1px solid #ddd",
                }),
              }}
            />
          )}
          // defaultValue={selectedOption}
        />
        {/*  */}
        {errors?.[key] && (
          <p className="text-sm text-red-500 block pt-1 px-1">
            {/* A Brand must be selected */}
            {errors[key].message}
          </p>
        )}
      </div>
    </section>
  );
};

export default React.memo(EditProductBrandId);
