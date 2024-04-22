import { Prisma } from "@prisma/client";
import { TCollection } from "@/types/common.type";

export class ProductPipe {
  static transformCollection = (data: TCollection) => {
    let arr = data.map((e) => {
      let obj: Record<string, unknown> = {};
      //
      Object.entries(e).map(([k, v]) => {
        // exclude auto-gen fields
        if (!["id", "created_at", "updated_at", "deleted_at"].includes(k)) {
          // coerce price field
          if (k === "price") {
            obj[k] = Number(v);
          } else {
            obj[k] = v;
          }
        }
      });
      //
      return obj;
    });
    //
    return arr as Prisma.ProductCreateManyInput[];
  };

  // https://gtin.info/upc/
  static validateBarcode = (barcode: string | null): [unknown, number] => {
    let E = "ValidateBarcodeError: ";
    //
    if (barcode) {
      let str = barcode.replaceAll("-", "");
      let arr = str.split("");
      // Barcode not 12 digits
      if (str.length != 12 || arr.length != 12) {
        return [E + "UPC-12 Barcode must be exactly 12 digits", 422];
      }
      // multiply odd-placed numbers by 3, else by 1
      let computed_series = arr.map((e, i) =>
        (i + 1) % 2 != 0 ? Number(e) * 3 : Number(e)
      );
      // extract last digit (12th position)
      let check_digit = Number(computed_series.pop());
      // sum of series except last digit
      let computed_sum = computed_series.reduce((T, n) => T + Number(n), 0);
      // check digit + computed sum must be a MULTIPLE of 10
      let status = (check_digit + computed_sum) % 10 != 0 ? 400 : 200
      //
      return [
        {
          // 123456789012
          barcode: str,
          // 1-2345678901-2
          barcode_hyphenated: arr
            .map((e, i) => {
              if (i < 1) return e + "-";
              else if (i == 11) return "-" + e;
              else return e;
            })
            .join(""),
          // first 6 digits
          company_prefix: str.slice(0, 6),
          // next 5 digits
          product_number: str.slice(6, 11),
          // last digit
          check_digit,
          computed_series,
          computed_sum,
        },
        status,
      ];
    }
    // Barcode not defined
    return [E + "Barcode parameter is required", 422];
  };
}
