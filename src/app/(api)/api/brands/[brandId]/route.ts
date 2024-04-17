import { type NextRequest } from "next/server";
import prismaClient, { prismaUtils } from "@/lib/prisma/prismaClient";
import { CommonService } from "@/server/services/common.service";
import { BrandService } from "@/server/services/brand.service";
import { brandUpdateDto } from "@/server/requests/brand.dto";

interface IContext {
  params: {
    brandId: number;
  };
}

// http://127.0.0.1:3000/api/brands/1
export async function GET(_: NextRequest, context: IContext) {
  try {
    const { brandId } = context.params;
    //
    const document = await prismaClient.brand.findUnique(
      BrandService.getById_Products(brandId)
    );
    //
    return prismaUtils.response(document);
  } catch (error) {
    // console.log("🚀 ~ GET ~ error:", error);
    return prismaUtils.response(error, 404);
  }
}

// http://127.0.0.1:3000/api/brands/1
// {
//   "name": "Kinesis"
// }
export async function PATCH(request: NextRequest, context: IContext) {
  try {
    const { brandId } = context.params;
    const body = await request.json();
    const validated = brandUpdateDto.parse(body);
    //
    const document = await prismaClient.brand.update(
      CommonService.update(brandId, body)
    );
    //
    return prismaUtils.response(document);
  } catch (error) {
    // console.log("🚀 ~ PATCH ~ error:", error);
    return prismaUtils.response(error, 404);
  }
}

// http://127.0.0.1:3000/api/brands/1
export async function PUT(request: NextRequest, context: IContext) {
  return await PATCH(request, context);
}

// http://127.0.0.1:3000/api/brands/1
// http://127.0.0.1:3000/api/brands/1?undo=true
export async function DELETE(request: NextRequest, context: IContext) {
  try {
    const { brandId } = context.params;
    const url = new URL(request.url);
    const queryUndo = url.searchParams.get("undo");
    //
    const document = prismaUtils.hasQuery(queryUndo)
      ? await prismaClient.brand.update(CommonService.restore(brandId))
      : await prismaClient.brand.update(CommonService.trash(brandId));
    //
    return prismaUtils.response(document);
  } catch (error) {
    // console.log("🚀 ~ DELETE ~ error:", error);
    return prismaUtils.response(error, 404);
  }
}
