import { z } from "zod";

export const brandCreateDto = z.object({
  logo: z.string().url().optional(),
  name: z
    .string({
      required_error: "Brand Name is required",
      invalid_type_error: "Brand Name can't be numeric",
    })
    .trim()
    .min(3, "Brand Name must contain at least 3 char(s)"),
  website: z.string().url().optional(),
});

export const brandUpdateDto = brandCreateDto.partial();