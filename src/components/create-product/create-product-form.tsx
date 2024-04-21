"use client";

import React from "react";

import { ToastAction } from "../shadcn/ui/toast";
import { FormHeading } from "../form/form-heading";
import { FormInputImage } from "../form/form-input-image";
import { FormErrorBag } from "../form/form-error-bag";
import CreateProductBrandId from "./create-product-brand-id";
import CreateProductName from "./create-product-name";
import CreateProductPrice from "./create-product-price";
import CreateProductBarcode from "./create-product-barcode";
import CreateProductButtons from "./create-product-buttons";
import { useToast } from "@/components/shadcn/ui/use-toast";
import useCreateProduct from "@/hooks/useCreateProduct";

const CreateProductForm = () => {
  const { toast } = useToast();
  function showSnackbar() {
    toast({
      title: "Success!",
      description: "Product listing created successfully.",
      action: <ToastAction altText="Undo">Undo</ToastAction>,
    });
  }
  //
  const {
    goBack,
    brandsPipe,
    //
    control,
    errors,
    isSubmitting,
    register,
    setValue,
    handleSubmit,
    reset,
    handleCreateProduct,
    //
    formHydrated,
    formErrorBag,
  } = useCreateProduct(showSnackbar);

  //
  return (
    <form onSubmit={handleSubmit(handleCreateProduct)} method="POST">
      <fieldset
        disabled={!formHydrated || isSubmitting}
        className="flex flex-col gap-4 px-6"
      >
        {formErrorBag ? (
          <FormErrorBag message={formErrorBag} />
        ) : (
          <FormHeading
            h1="Add Product Listing"
            p="Kindly fill the form below to create a new product listing. Required fields are marked with asteriks(*)."
          />
        )}
        {/*  */}
        <FormInputImage label="Upload Thumbnail" name="thumbnail" />
        {/*  */}
        <CreateProductBrandId
          options={brandsPipe}
          control={control}
          errors={errors}
        />
        {/*  */}
        <CreateProductName register={register} errors={errors} />
        {/*  */}
        <CreateProductPrice register={register} errors={errors} />
        {/*  */}
        <CreateProductBarcode register={register} errors={errors} />
        {/*  */}
        <CreateProductButtons self={{ goBack, reset, isSubmitting }} />
      </fieldset>
    </form>
  );
};

export default React.memo(CreateProductForm);
