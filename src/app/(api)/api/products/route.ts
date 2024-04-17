import { type NextRequest } from "next/server";
import prismaClient, { prismaUtils } from "@/lib/prisma/prismaClient";
import { CommonService } from "@/server/services/common.service";
import { ProductService } from "@/server/services/product.service";
import { productCreateDto } from "@/server/requests/product.dto";

// http://127.0.0.1:3000/api/products
// http://127.0.0.1:3000/api/products?like=keyboard
export async function GET(request: NextRequest) {
  try {
    const url = new URL(request.url);
    const queryLike = url.searchParams.get("like");
    //
    const collection = prismaUtils.hasQuery(queryLike)
      ? await prismaClient.product.findMany(
          ProductService.searchProductNameOrBrandName(queryLike!)
        )
      : await prismaClient.product.findMany(ProductService.getAll_Brand());
    //
    return prismaUtils.response(collection);
  } catch (error) {
    // console.log("🚀 ~ GET ~ error:", error);
    return prismaUtils.response(error, 404);
  }
}

// http://127.0.0.1:3000/api/products
// {
//   "brand_id": 1,
//   "name": "Keychron K6 Wireless Mechanical Keyboard",
//   "barcode": "123456789012"
// }
// {
//   "brand_id": 2,
//   "name": "Logitech K380 Multi-Device Bluetooth Keyboard",
//   "barcode": "223456789012"
// }
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const validated = productCreateDto.parse(body);
    //
    const document = await prismaClient.product.create({
      data: { ...body, ...CommonService.create_withUuid() },
    });
    //
    return prismaUtils.response(document, 201);
  } catch (error) {
    // console.log("🚀 ~ POST ~ error:", error);
    return prismaUtils.response(error, 422);
  }
}
