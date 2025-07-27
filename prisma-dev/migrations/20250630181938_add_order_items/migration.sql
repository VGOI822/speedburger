/*
  Warnings:

  - You are about to drop the `_OrderHistoryToProduct` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "_OrderHistoryToProduct" DROP CONSTRAINT "_OrderHistoryToProduct_A_fkey";

-- DropForeignKey
ALTER TABLE "_OrderHistoryToProduct" DROP CONSTRAINT "_OrderHistoryToProduct_B_fkey";

-- DropTable
DROP TABLE "_OrderHistoryToProduct";

-- CreateTable
CREATE TABLE "OrderItem" (
    "id" UUID NOT NULL,
    "quantity" INTEGER NOT NULL,
    "productId" UUID NOT NULL,
    "orderId" UUID NOT NULL,

    CONSTRAINT "OrderItem_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "OrderItem" ADD CONSTRAINT "OrderItem_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "OrderItem" ADD CONSTRAINT "OrderItem_orderId_fkey" FOREIGN KEY ("orderId") REFERENCES "OrderHistory"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
