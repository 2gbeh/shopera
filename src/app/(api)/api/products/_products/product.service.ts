import { Prisma, type TDocument, prismaUtils } from "@/lib/prisma/prismaClient";

export class ProductService {
  static getById_Brand = (productId: number) => ({
    where: { id: Number(productId), deleted_at: null },
    include: { brand: true },
  });

  static getAll_Brand = () => ({
    where: { deleted_at: null },
    include: { brand: true },
  });

  static getProductNameOrBrandNameLike = (queryLike: string) => ({
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

  static createWithUuid = () => ({
    uuid: prismaUtils.getUuid(),
  });

  static updateProduct = (productId: number, data: TDocument) => ({
    where: {
      id: Number(productId),
    },
    data,
  });

  static trash = (productId: number) => ({
    where: {
      id: Number(productId),
    },
    data: {
      deleted_at: prismaUtils.getDatetime(),
    },
  });

  static restore = (productId: number) => ({
    where: {
      id: Number(productId),
    },
    data: {
      deleted_at: null,
    },
  });
}
