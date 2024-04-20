import { Prisma } from "@prisma/client";

export type TBrandEntity = Prisma.BrandGetPayload<{
  include: { products: false };
}>;

export type TBrandEntity_withProducts = Prisma.BrandGetPayload<{
  include: { products: true };
}>;

export type TBrandResponse = {
  id: number;
  logo: null | string;
  name: string;
  website: null | string;
  created_at: null | string | Date;
  updated_at: null | string | Date;
  deleted_at: null | string | Date;
  uuid: string;
};
