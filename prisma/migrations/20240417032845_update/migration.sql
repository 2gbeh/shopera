/*
  Warnings:

  - You are about to drop the column `address` on the `shopera_brands` table. All the data in the column will be lost.
  - You are about to drop the column `email` on the `shopera_brands` table. All the data in the column will be lost.
  - You are about to drop the column `owner` on the `shopera_brands` table. All the data in the column will be lost.
  - You are about to drop the column `phone` on the `shopera_brands` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[name]` on the table `shopera_brands` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX "shopera_brands_name_owner_idx";

-- DropIndex
DROP INDEX "shopera_brands_phone_key";

-- DropIndex
DROP INDEX "shopera_products_name_barcode_idx";

-- AlterTable
ALTER TABLE "shopera_brands" DROP COLUMN "address",
DROP COLUMN "email",
DROP COLUMN "owner",
DROP COLUMN "phone";

-- CreateIndex
CREATE UNIQUE INDEX "shopera_brands_name_key" ON "shopera_brands"("name");

-- CreateIndex
CREATE INDEX "shopera_products_name_idx" ON "shopera_products"("name");
