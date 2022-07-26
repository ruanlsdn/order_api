-- AlterTable
ALTER TABLE "Mesa" ADD COLUMN     "restauranteId" TEXT;

-- AddForeignKey
ALTER TABLE "Mesa" ADD CONSTRAINT "Mesa_restauranteId_fkey" FOREIGN KEY ("restauranteId") REFERENCES "Restaurante"("id") ON DELETE SET NULL ON UPDATE CASCADE;
