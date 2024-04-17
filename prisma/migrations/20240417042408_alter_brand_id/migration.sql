/*
  Warnings:

  - You are about to drop the column `brandId` on the `shopera_products` table. All the data in the column will be lost.
  - Added the required column `brand_id` to the `shopera_products` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "shopera_products" DROP CONSTRAINT "shopera_products_brandId_fkey";

-- AlterTable
ALTER TABLE "shopera_products" DROP COLUMN "brandId",
ADD COLUMN     "brand_id" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "shopera_products" ADD CONSTRAINT "shopera_products_brand_id_fkey" FOREIGN KEY ("brand_id") REFERENCES "shopera_brands"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
