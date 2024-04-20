import { Prisma, type TDocument, prismaUtils } from "@/lib/prisma/prismaClient";

export class ProductService {
  static getAll_Brand = () => ({
    where: { deleted_at: null },
    orderBy: {
      name: Prisma.SortOrder.asc,
    },

    include: { brand: true },
  });

  static getById_Brand = (product_id: number) => ({
    where: { id: Number(product_id), deleted_at: null },
    include: { brand: true },
  });

  static searchProductNameOrBrandName = (queryLike: string) => ({
    where: {
      OR: [
        {
          name: {
            contains: queryLike,
            mode: Prisma.QueryMode.insensitive,
          },
        },
        {
          barcode: {
            contains: queryLike,
            mode: Prisma.QueryMode.insensitive,
          },
        },
        {
          brand: {
            name: { contains: queryLike, mode: Prisma.QueryMode.insensitive },
          },
        },
      ],
      deleted_at: null,
    },
    orderBy: {
      name: Prisma.SortOrder.asc,
    },
    include: { brand: true },
  });
}
