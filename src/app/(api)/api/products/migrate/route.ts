import prismaClient, { Prisma, prismaUtils } from "@/lib/prisma/prismaClient";
import { ProductPipe } from "@/server/pipes/product.pipe";
import fakeProducts from "@/data/fake-products";

// http://127.0.0.1:3000/api/migrate
export async function GET() {
  try {
    let data = ProductPipe.transformCollection(fakeProducts);
    const collection = await prismaClient.product.createMany({
      data,
      skipDuplicates: true, // Skip 'Bobo'
    });
    //
    return prismaUtils.response(collection);
  } catch (error) {
    // console.log("🚀 ~ GET ~ error:", error);
    return prismaUtils.response(error, 404);
  }
}
