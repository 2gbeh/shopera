import { Prisma } from "@prisma/client";
import { TBrandResponse } from "./brand.entity";

export type TProductEntity = Prisma.ProductGetPayload<{
  include: { brand: false };
}>;

export type TProductEntity_withBrand = Prisma.ProductGetPayload<{
  include: { brand: true };
}>;

export type TProductResponse = {
  id: number;
  thumbnail: null | string;
  name: string;
  price: number;
  summary: null | string;
  description: null | string;
  barcode: string;
  color: null | string;
  weight: null | number;
  discount: number;
  units: number;
  brand_id: number;
  created_at: null | string | Date;
  updated_at: null | string | Date;
  deleted_at: null | string | Date;
  uuid: string;
  brand: TBrandResponse;
};
