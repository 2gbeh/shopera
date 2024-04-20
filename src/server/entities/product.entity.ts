import { Prisma } from "@prisma/client";

export type TProductEntity = Prisma.ProductGetPayload<{
  include: { brand: false };
}>;

export type TProductEntity_withBrand = Prisma.ProductGetPayload<{
  include: { brand: true };
}>;
