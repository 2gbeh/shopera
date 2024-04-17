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
  price: z.number().optional(),
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
