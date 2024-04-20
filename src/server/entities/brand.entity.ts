import { Prisma } from "@prisma/client";

export type TBrandEntity = Prisma.BrandGetPayload<{
  include: { products: false };
}>;

export type TBrandEntity_withProducts = Prisma.BrandGetPayload<{
  include: { products: true };
}>;
