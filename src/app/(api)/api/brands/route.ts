import { type NextRequest } from "next/server";
import prismaClient, { prismaUtils } from "@/lib/prisma/prismaClient";
import { brandCreateDto } from "./_brands/brand.dto";

// http://127.0.0.1:3000/api/brands
export async function GET() {
  try {
    const brands = await prismaClient.brand.findMany({
      where: { deleted_at: null },
    });
    //
    return prismaUtils.response(brands);
  } catch (error) {
    // console.log("🚀 ~ GET ~ error:", error);
    return prismaUtils.response(error, 404);
  }
}

// http://127.0.0.1:3000/api/brands
// {
//   "name": "Keychron"
// }
// {
//   "name": "Logitech"
// }
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const validated = brandCreateDto.parse(body);
    //
    const brand = await prismaClient.brand.create({
      data: { ...body, uuid: prismaUtils.getUuid() },
    });
    //
    return prismaUtils.response(brand, 201);
  } catch (error) {
    // console.log("🚀 ~ POST ~ error:", error);
    return prismaUtils.response(error, 422);
  }
}
