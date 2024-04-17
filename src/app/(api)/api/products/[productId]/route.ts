import { type NextRequest } from "next/server";
import prismaClient, { prismaUtils } from "@/lib/prisma/prismaClient";
import { productUpdateDto } from "../_products/product.dto";
import { ProductService } from "../_products/product.service";

interface IContext {
  params: {
    productId: number;
  };
}

// http://127.0.0.1:3000/api/products/1
export async function GET(_: NextRequest, context: IContext) {
  try {
    const { productId } = context.params;
    //
    const product = await prismaClient.product.findUnique(
      ProductService.getById_Brand(productId)
    );
    //
    return prismaUtils.response(product);
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
    const { productId } = context.params;
    const body = await request.json();
    const validated = productUpdateDto.parse(body);
    //
    const product = await prismaClient.product.update(
      ProductService.updateProduct(productId, body)
    );
    //
    return prismaUtils.response(product);
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
    const { productId } = context.params;
    const url = new URL(request.url);
    const queryUndo = url.searchParams.get("undo");
    //
    const product = prismaUtils.hasQuery(queryUndo)
      ? await prismaClient.product.updateMany(ProductService.restore(productId))
      : await prismaClient.product.updateMany(ProductService.trash(productId));
    //
    return prismaUtils.response(product);
  } catch (error) {
    // console.log("🚀 ~ DELETE ~ error:", error);
    return prismaUtils.response(error, 404);
  }
}
