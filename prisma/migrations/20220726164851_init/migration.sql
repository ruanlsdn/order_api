/*
  Warnings:

  - Added the required column `quantidade` to the `Comanda_Produto` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Comanda_Produto" ADD COLUMN     "quantidade" INTEGER NOT NULL;
