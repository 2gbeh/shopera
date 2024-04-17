import { Prisma, type TDocument, prismaUtils } from "@/lib/prisma/prismaClient";

export class CommonService {
  static getAll = () => ({
    where: { deleted_at: null },
  });

  static getById = (id: number) => ({
    where: { id: Number(id), deleted_at: null },
  });

  static search = (field: string, value: string) => ({
    where: {
      [field]: {
        contains: value,
        mode: Prisma.QueryMode.insensitive,
      },
      deleted_at: null,
    },
  });

  static create_withUuid = () => ({
    uuid: prismaUtils.getUuid(),
  });

  static update = (id: number, data: TDocument) => ({
    where: {
      id: Number(id),
    },
    data,
  });

  static delete = (id: number) => ({
    where: {
      id: Number(id),
    },
  });

  static trash = (id: number) => ({
    where: {
      id: Number(id),
    },
    data: {
      deleted_at: prismaUtils.getDatetime(),
    },
  });

  static restore = (id: number) => ({
    where: {
      id: Number(id),
    },
    data: {
      deleted_at: null,
    },
  });
}
