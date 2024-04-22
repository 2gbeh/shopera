import { NextResponse, type NextRequest } from "next/server";
import prismaClient, { prismaUtils } from "@/lib/prisma/prismaClient";
import { ProductPipe } from "@/server/pipes/product.pipe";

interface IContext {
  params: {
    barcode: string;
  };
}

// http://127.0.0.1:3000/api/products/validate-barcode/856260002793
// http://127.0.0.1:3000/api/products/validate-barcode/8-5626000279-3
export async function GET(_: NextRequest, context: IContext) {
  try {
    const { barcode } = context.params;
    const [ result, status ] = ProductPipe.validateBarcode(barcode);
    return prismaUtils.response(result, status);
  } catch (error) {
    // console.log("🚀 ~ GET ~ error:", error);
    return prismaUtils.response(error, 422);
  }
}
