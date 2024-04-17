import { type TDocument, prismaUtils } from "@/lib/prisma/prismaClient";

export class ProductService {
  static searchProductNameOrBrandName = (queryLike: string) => ({
    where: {
      OR: [
        {
          name: {
            endsWith: queryLike,
          },
        },
        { brand: { name: { endsWith: queryLike } } },
      ],
      deleted_at: null,
    },
    include: { brand: true },
  });

  static getProductsAndBrand = () => ({
    where: { deleted_at: null },
    include: { brand: true },
  });

  static createProduct = () => ({});
}
