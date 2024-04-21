"use client";

import React from "react";

import { ToastAction } from "../shadcn/ui/toast";
import { FormHeading } from "../form/form-heading";
import { FormInputImage } from "../form/form-input-image";
import { FormErrorBag } from "../form/form-error-bag";
import EditProductBrandId from "./edit-product-brand-id";
import EditProductName from "./edit-product-name";
import EditProductPrice from "./edit-product-price";
import EditProductBarcode from "./edit-product-barcode";
import EditProductButtons from "./edit-product-buttons";
import { useToast } from "@/components/shadcn/ui/use-toast";
import useEditProduct from "@/hooks/useEditProduct";

const EditProductForm = ({ productId }: { productId: number }) => {
  const { toast } = useToast();
  function showSnackbar() {
    toast({
      title: "Success!",
      description: "Product listing updated successfully.",
      action: <ToastAction altText="Undo">Undo</ToastAction>,
    });
  }
  //
  const {
    goBack,
    brandsPipe,
    product,
    //
    control,
    errors,
    isSubmitting,
    register,
    setValue,
    handleSubmit,
    reset,
    handleEditProduct,
    //
    formHydrated,
    formErrorBag,
  } = useEditProduct(productId, showSnackbar);

  //
  return (
    <form onSubmit={handleSubmit(handleEditProduct)} method="POST">
      <fieldset
        disabled={!formHydrated || isSubmitting}
        className="flex flex-col gap-4 px-6"
      >
        {formErrorBag ? (
          <FormErrorBag message={formErrorBag} />
        ) : (
          <FormHeading
            h1="Edit Product Listing"
            p="Kindly fill the form below to update the product information. Required fields are marked with asteriks(*)."
          />
        )}
        {/*  */}
        <FormInputImage
          label="Upload Thumbnail"
          name="thumbnail"
          size={productId}
        />
        {/*  */}
        <EditProductBrandId
          options={brandsPipe}
          control={control}
          errors={errors}
        />
        {/*  */}
        <EditProductName register={register} errors={errors} />
        {/*  */}
        <EditProductPrice register={register} errors={errors} />
        {/*  */}
        <EditProductBarcode register={register} errors={errors} />
        {/*  */}
        <EditProductButtons self={{ goBack, reset, isSubmitting }} />
      </fieldset>
    </form>
  );
};

export default React.memo(EditProductForm);
