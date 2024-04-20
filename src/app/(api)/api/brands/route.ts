import { type NextRequest } from "next/server";
import prismaClient, { prismaUtils } from "@/lib/prisma/prismaClient";
import { CommonService } from "@/server/services/common.service";
import { BrandService } from "@/server/services/brand.service";
import { brandCreateDto } from "@/server/requests/brand.dto";


// http://127.0.0.1:3000/api/brands
export async function GET(_: NextRequest) {
  try {
    const collection = await prismaClient.brand.findMany(
      BrandService.getAll_nameAsc()
    );
    //
    return prismaUtils.response(collection);
  } catch (error) {
    // console.log("🚀 ~ GET ~ error:", error);
    return prismaUtils.response(error, 404);
  }
}

// http://127.0.0.1:3000/api/brands
// {
//   "name": "Oraimo"
// }
// {
//   "name": "Microsoft"
// }
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const validated = brandCreateDto.parse(body);
    //
    const document = await prismaClient.brand.create({
      data: { ...body, ...CommonService.create_withUuid() },
    });
    //
    return prismaUtils.response(document, 201);
  } catch (error) {
    // console.log("🚀 ~ POST ~ error:", error);
    return prismaUtils.response(error, 422);
  }
}
