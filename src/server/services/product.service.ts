import { Prisma, type TDocument, prismaUtils } from "@/lib/prisma/prismaClient";

export class ProductService {
  static getAll_Brand = () => ({
    where: { deleted_at: null },
    include: { brand: true },
  });

  static getById_Brand = (productId: number) => ({
    where: { id: Number(productId), deleted_at: null },
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
          brand: {
            name: { contains: queryLike, mode: Prisma.QueryMode.insensitive },
          },
        },
      ],
      deleted_at: null,
    },
    include: { brand: true },
  });
}
