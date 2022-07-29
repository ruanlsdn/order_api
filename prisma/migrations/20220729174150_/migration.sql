/*
  Warnings:

  - Added the required column `cliente` to the `Comanda` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Comanda" ADD COLUMN     "cliente" TEXT NOT NULL;
