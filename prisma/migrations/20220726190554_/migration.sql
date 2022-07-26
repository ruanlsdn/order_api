/*
  Warnings:

  - You are about to drop the column `restauranteId` on the `Mesa` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Mesa" DROP CONSTRAINT "Mesa_restauranteId_fkey";

-- AlterTable
ALTER TABLE "Mesa" DROP COLUMN "restauranteId",
ADD COLUMN     "restaurante_id" TEXT;

-- AddForeignKey
ALTER TABLE "Mesa" ADD CONSTRAINT "Mesa_restaurante_id_fkey" FOREIGN KEY ("restaurante_id") REFERENCES "Restaurante"("id") ON DELETE SET NULL ON UPDATE CASCADE;
