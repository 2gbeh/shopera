import prismaClient from "../src/lib/prisma/prismaClient";
import { BrandPipe } from "../src/server/pipes/brand.pipe";
import { ProductPipe } from "../src/server/pipes/product.pipe";
//
import fakeBrands from "../src/data/fake-brands";
import fakeProducts from "../src/data/fake-products";

async function main() {
  {
    let data = BrandPipe.transformCollection(fakeBrands);
    await prismaClient.brand.createMany({
      data,
    });
  }

  {
    let data = ProductPipe.transformCollection(fakeProducts);
    await prismaClient.product.createMany({
      data,
    });
  }
}

// npx prisma migrate dev --name init
// npx prisma db seed
main()
  .then(async () => {
    let [countOfBrand, countOfProduct] = await Promise.all([
      prismaClient.brand.count(),
      prismaClient.product.count(),
    ]);
    console.log("🚀 ~ .then ~ countOfBrand:", countOfBrand);
    console.log("🚀 ~ .then ~ countOfProduct:", countOfProduct);
    //
    await prismaClient.$disconnect();
  })
  .catch(async (e) => {
    console.log("🚀 ~ PrismaSeedError: ", e);
    //
    await prismaClient.$disconnect();
    process.exit(1);
  });
