-- CreateTable
CREATE TABLE "shopera_brands" (
    "id" SERIAL NOT NULL,
    "logo" TEXT,
    "name" TEXT NOT NULL,
    "owner" TEXT NOT NULL,
    "email" TEXT,
    "phone" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "website" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3),
    "deleted_at" TIMESTAMP(3),

    CONSTRAINT "shopera_brands_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "shopera_products" (
    "id" SERIAL NOT NULL,
    "thumbnail" TEXT,
    "name" TEXT NOT NULL,
    "price" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "summary" TEXT,
    "description" TEXT,
    "barcode" TEXT NOT NULL,
    "color" TEXT,
    "weight" DOUBLE PRECISION,
    "discount" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "units" INTEGER NOT NULL DEFAULT 1,
    "brandId" INTEGER NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3),
    "deleted_at" TIMESTAMP(3),

    CONSTRAINT "shopera_products_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "shopera_brands_phone_key" ON "shopera_brands"("phone");

-- CreateIndex
CREATE INDEX "shopera_brands_name_owner_idx" ON "shopera_brands"("name", "owner");

-- CreateIndex
CREATE UNIQUE INDEX "shopera_products_barcode_key" ON "shopera_products"("barcode");

-- CreateIndex
CREATE INDEX "shopera_products_name_barcode_idx" ON "shopera_products"("name", "barcode");

-- AddForeignKey
ALTER TABLE "shopera_products" ADD CONSTRAINT "shopera_products_brandId_fkey" FOREIGN KEY ("brandId") REFERENCES "shopera_brands"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
