-- DropForeignKey
ALTER TABLE "Pedido" DROP CONSTRAINT "Pedido_comanda_id_fkey";

-- AddForeignKey
ALTER TABLE "Pedido" ADD CONSTRAINT "Pedido_comanda_id_fkey" FOREIGN KEY ("comanda_id") REFERENCES "Comanda"("id") ON DELETE CASCADE ON UPDATE CASCADE;
