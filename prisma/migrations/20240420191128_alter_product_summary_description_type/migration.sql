-- CreateTable
CREATE TABLE "shopera_products" (
    "id" SERIAL NOT NULL,
    "thumbnail" VARCHAR(255),
    "name" VARCHAR(255) NOT NULL,
    "price" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "summary" TEXT,
    "description" TEXT,
    "barcode" VARCHAR(255) NOT NULL,
    "color" VARCHAR(255),
    "weight" DOUBLE PRECISION,
    "discount" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "units" INTEGER NOT NULL DEFAULT 1,
    "brand_id" INTEGER NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3),
    "deleted_at" TIMESTAMP(3),
    "uuid" UUID NOT NULL,

    CONSTRAINT "shopera_products_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "shopera_brands" (
    "id" SERIAL NOT NULL,
    "logo" VARCHAR(255),
    "name" VARCHAR(255) NOT NULL,
    "website" VARCHAR(255),
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3),
    "deleted_at" TIMESTAMP(3),
    "uuid" UUID NOT NULL,

    CONSTRAINT "shopera_brands_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "shopera_products_id_key" ON "shopera_products"("id");

-- CreateIndex
CREATE UNIQUE INDEX "shopera_products_barcode_key" ON "shopera_products"("barcode");

-- CreateIndex
CREATE INDEX "shopera_products_name_idx" ON "shopera_products"("name");

-- CreateIndex
CREATE UNIQUE INDEX "shopera_brands_id_key" ON "shopera_brands"("id");

-- CreateIndex
CREATE UNIQUE INDEX "shopera_brands_name_key" ON "shopera_brands"("name");

-- AddForeignKey
ALTER TABLE "shopera_products" ADD CONSTRAINT "shopera_products_brand_id_fkey" FOREIGN KEY ("brand_id") REFERENCES "shopera_brands"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
