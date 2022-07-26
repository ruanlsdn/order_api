/*
  Warnings:

  - A unique constraint covering the columns `[nome]` on the table `Restaurante` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Restaurante_nome_key" ON "Restaurante"("nome");
