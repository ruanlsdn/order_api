/*
  Warnings:

  - Added the required column `senha` to the `Funcionario` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Funcionario" ADD COLUMN     "senha" TEXT NOT NULL,
ALTER COLUMN "proprietario" DROP NOT NULL,
ALTER COLUMN "proprietario" SET DEFAULT false;
