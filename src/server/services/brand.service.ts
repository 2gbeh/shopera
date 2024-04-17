import { Prisma, type TDocument, prismaUtils } from "@/lib/prisma/prismaClient";

export class BrandService {
  static getById_Products = (brandId: number) => ({
    where: { id: Number(brandId), deleted_at: null },
    include: { products: true },
  });
}
