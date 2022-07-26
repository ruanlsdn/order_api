-- AlterTable
ALTER TABLE "Produto" ADD COLUMN     "restaurante_id" TEXT;

-- AddForeignKey
ALTER TABLE "Produto" ADD CONSTRAINT "Produto_restaurante_id_fkey" FOREIGN KEY ("restaurante_id") REFERENCES "Restaurante"("id") ON DELETE SET NULL ON UPDATE CASCADE;
