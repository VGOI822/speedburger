/*
  Warnings:

  - You are about to drop the `product` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "product";

-- CreateTable
CREATE TABLE "Product" (
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

    CONSTRAINT "Product_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "OrderHistory" (
    "id" UUID NOT NULL,
    "firstName" TEXT,
    "lastName" TEXT,
    "street" TEXT,
    "houseNumber" TEXT,
    "district" TEXT,
    "city" TEXT,
    "postalCode" TEXT,
    "complement" TEXT,
    "phone" TEXT,
    "orderDateTime" TIMESTAMP(3) NOT NULL,
    "totalAmount" DOUBLE PRECISION NOT NULL,
    "paymentMethod" TEXT NOT NULL,
    "orderStatus" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "OrderHistory_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_OrderHistoryToProduct" (
    "A" UUID NOT NULL,
    "B" UUID NOT NULL,

    CONSTRAINT "_OrderHistoryToProduct_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateIndex
CREATE INDEX "_OrderHistoryToProduct_B_index" ON "_OrderHistoryToProduct"("B");

-- AddForeignKey
ALTER TABLE "_OrderHistoryToProduct" ADD CONSTRAINT "_OrderHistoryToProduct_A_fkey" FOREIGN KEY ("A") REFERENCES "OrderHistory"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_OrderHistoryToProduct" ADD CONSTRAINT "_OrderHistoryToProduct_B_fkey" FOREIGN KEY ("B") REFERENCES "Product"("id") ON DELETE CASCADE ON UPDATE CASCADE;
