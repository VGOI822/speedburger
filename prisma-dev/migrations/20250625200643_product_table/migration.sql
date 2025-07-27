-- CreateTable
CREATE TABLE "product" (
    "id" UUID NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "ingredients" TEXT NOT NULL,
    "price" DOUBLE PRECISION NOT NULL,
    "promoPrice" DOUBLE PRECISION,
    "imagePath" TEXT,
    "available" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "product_pkey" PRIMARY KEY ("id")
);
