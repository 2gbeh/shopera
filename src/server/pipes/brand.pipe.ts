import { Prisma } from "@prisma/client";
import { TCollection } from "@/types/common.type";

export class BrandPipe {
  static transformCollection = (data: TCollection) => {
    let arr = data.map((e) => {
      let obj: Record<string, unknown> = {};
      //
      Object.entries(e).map(([k, v]) => {
        // exclude auto-gen fields
        if (!["id", "created_at", "updated_at", "deleted_at"].includes(k)) {
          obj[k] = v;
        }
      });
      //
      return obj;
    });
    //
    return arr as Prisma.BrandCreateManyInput[];
  };
}
