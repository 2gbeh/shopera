"use client";

import React from "react";
import {
  TProductFormFieldErrors,
  TProductFormRegister,
} from "@/server/requests/product.dto";

const CreateProductName = ({
  register,
  errors,
}: {
  register: TProductFormRegister;
  errors?: TProductFormFieldErrors;
}) => {
  const key = "name";
  return (
    <section>
      <label
        htmlFor={key}
        className="block text-sm font-bold leading-6 text-brand-dark"
      >
        Product Name
        <span className="text-red-500 ml-1">*</span>
      </label>
      {/*  */}
      <div className="mt-2 flex flex-col flex-1 gap-1">
        <input
          {...register(key)}
          type="text"
          id={key}
          placeholder="Ex. Tecno Phantom V Fold"
          className="w-full rounded-md border-0 py-2.5 px-5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        />
        {/*  */}
        {errors?.[key] && (
          <p className="text-sm text-red-500 block px-1 pt-1">
            {errors[key].message}
          </p>
        )}
      </div>
    </section>
  );
};

export default React.memo(CreateProductName);
