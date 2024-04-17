import { type NextRequest } from "next/server";
import prismaClient, { prismaUtils } from "@/lib/prisma/prismaClient";
import { CommonService } from "@/server/services/common.service";
import { ProductService } from "@/server/services/product.service";
import { productUpdateDto } from "@/server/requests/product.dto";

interface IContext {
  params: {
    product_id: number;
  };
}

// http://127.0.0.1:3000/api/products/1
export async function GET(_: NextRequest, context: IContext) {
  try {
    const { product_id } = context.params;
    //
    const document = await prismaClient.product.findUnique(
      ProductService.getById_Brand(product_id)
    );
    //
    return prismaUtils.response(document);
  } catch (error) {
    // console.log("🚀 ~ GET ~ error:", error);
    return prismaUtils.response(error, 404);
  }
}

// http://127.0.0.1:3000/api/products/1
// {
//   "brand_id": 1,
//   "name": "Keychron K6 Wireless Mechanical Keyboard",
//   "barcode": "123456789012"
// }
export async function PATCH(request: NextRequest, context: IContext) {
  try {
    const { product_id } = context.params;
    const body = await request.json();
    const validated = productUpdateDto.parse(body);
    //
    const document = await prismaClient.product.update(
      CommonService.update(product_id, body)
    );
    //
    return prismaUtils.response(document);
  } catch (error) {
    // console.log("🚀 ~ PATCH ~ error:", error);
    return prismaUtils.response(error, 404);
  }
}

// http://127.0.0.1:3000/api/products/1
export async function PUT(request: NextRequest, context: IContext) {
  return await PATCH(request, context);
}

// http://127.0.0.1:3000/api/products/1
// http://127.0.0.1:3000/api/products/1?undo=true
export async function DELETE(request: NextRequest, context: IContext) {
  try {
    const { product_id } = context.params;
    const url = new URL(request.url);
    const queryUndo = url.searchParams.get("undo");
    //
    const document = prismaUtils.hasQuery(queryUndo)
      ? await prismaClient.product.update(CommonService.restore(product_id))
      : await prismaClient.product.update(CommonService.trash(product_id));
    //
    return prismaUtils.response(document);
  } catch (error) {
    // console.log("🚀 ~ DELETE ~ error:", error);
    return prismaUtils.response(error, 404);
  }
}
