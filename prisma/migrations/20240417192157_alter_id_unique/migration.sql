/*
  Warnings:

  - A unique constraint covering the columns `[id]` on the table `shopera_brands` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[id]` on the table `shopera_products` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "shopera_brands_id_key" ON "shopera_brands"("id");

-- CreateIndex
CREATE UNIQUE INDEX "shopera_products_id_key" ON "shopera_products"("id");
