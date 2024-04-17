import { z } from "zod";

const brandSchema = {
  logo: z.string().url().optional(),
  name: z
    .string({
      required_error: "Brand Name is required",
      invalid_type_error: "Brand Name can't be numeric",
    })
    .trim()
    .min(3, "Brand Name must contain at least 3 char(s)"),
  website: z.string().url().optional(),
};

export const brandCreateDto = z.object(brandSchema);

export const brandUpdateDto = brandCreateDto.partial();

export const brandReadDto = z.object({
  name: brandSchema.name.optional(),
});
