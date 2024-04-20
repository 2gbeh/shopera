import { Control, UseFormRegister, FieldErrors } from "react-hook-form";
import { z } from "zod";

export const productCreateDto = z.object({
  thumbnail: z.string().url().optional(),
  name: z
    .string({
      required_error: "Product Name is required",
      invalid_type_error: "Product Name can't be numeric",
    })
    .trim()
    .min(3, "Product Name must contain at least 3 char(s)"),
  price: z.coerce.number().optional(),
  summary: z.string().optional(),
  description: z.string().optional(),
  barcode: z.coerce
    .string({
      required_error: "Barcode is required",
    })
    .trim()
    .length(12, "Barcode must be 12-digit UPC"),
  color: z.string().optional(),
  weight: z.number().optional(),
  discount: z.number().optional(),
  units: z.number().optional(),
  brand_id: z
    .number({
      required_error: "Brand ID is required",
      invalid_type_error: "Brand ID must be numeric",
    })
    .positive("Brand ID can't be less than 1"),
});

export const productUpdateDto = productCreateDto.partial();

export const productFormDataDto_brandId = z.object({
  value: z.number(),
  label: z.string(),
});

export const productFormDataDto = productCreateDto
  .pick({
    name: true,
    barcode: true,
    price: true,
  })
  .extend({
    brand_id: productFormDataDto_brandId,
  });

//
export type TProduct = z.infer<typeof productCreateDto>;
export type TProductFormData = z.infer<typeof productFormDataDto>;
export type TProductFormData_brandId = z.infer<
  typeof productFormDataDto_brandId
>;
export type TProductFormControl = Control<Required<TProductFormData>, any>;
export type TProductFormRegister = UseFormRegister<TProductFormData>;
export type TProductFormFieldErrors = FieldErrors<TProductFormData>;

export const productFormData_defaultValues = {
  brand_id: {
    value: 0,
    label: "",
  },
  name: "",
  price: 0,
  barcode: "",
};
