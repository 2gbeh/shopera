import { Prisma, type TDocument, prismaUtils } from "@/lib/prisma/prismaClient";

export class BrandService {
  static getAll_nameAsc = () => ({
    where: { deleted_at: null },
    orderBy: {
      name: Prisma.SortOrder.asc,
    },
  });

  static getById_Products = (brand_id: number) => ({
    where: { id: Number(brand_id), deleted_at: null },
    include: { products: true },
  });
}
