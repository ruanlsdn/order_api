/*
  Warnings:

  - You are about to drop the `Comanda_Produto` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Comanda_Produto" DROP CONSTRAINT "Comanda_Produto_comanda_id_fkey";

-- DropForeignKey
ALTER TABLE "Comanda_Produto" DROP CONSTRAINT "Comanda_Produto_produto_id_fkey";

-- DropTable
DROP TABLE "Comanda_Produto";

-- CreateTable
CREATE TABLE "Pedido" (
    "id" TEXT NOT NULL,
    "quantidade" INTEGER NOT NULL,
    "produto_id" TEXT NOT NULL,
    "comanda_id" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Pedido_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Pedido" ADD CONSTRAINT "Pedido_produto_id_fkey" FOREIGN KEY ("produto_id") REFERENCES "Produto"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Pedido" ADD CONSTRAINT "Pedido_comanda_id_fkey" FOREIGN KEY ("comanda_id") REFERENCES "Comanda"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
