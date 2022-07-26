-- CreateTable
CREATE TABLE "Restaurante" (
    "id" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Restaurante_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Funcionario" (
    "id" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "proprietario" BOOLEAN NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "restaurante_id" TEXT,

    CONSTRAINT "Funcionario_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Produto" (
    "id" TEXT NOT NULL,
    "categoria" TEXT NOT NULL,
    "descricao" TEXT NOT NULL,
    "preco" DOUBLE PRECISION NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Produto_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Mesa" (
    "id" TEXT NOT NULL,
    "numero" INTEGER NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Mesa_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Comanda" (
    "id" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "mesa_id" TEXT,

    CONSTRAINT "Comanda_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Comanda_Produto" (
    "id" TEXT NOT NULL,
    "produto_id" TEXT NOT NULL,
    "comanda_id" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Comanda_Produto_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_ComandaToProduto" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_ComandaToProduto_AB_unique" ON "_ComandaToProduto"("A", "B");

-- CreateIndex
CREATE INDEX "_ComandaToProduto_B_index" ON "_ComandaToProduto"("B");

-- AddForeignKey
ALTER TABLE "Funcionario" ADD CONSTRAINT "Funcionario_restaurante_id_fkey" FOREIGN KEY ("restaurante_id") REFERENCES "Restaurante"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Comanda" ADD CONSTRAINT "Comanda_mesa_id_fkey" FOREIGN KEY ("mesa_id") REFERENCES "Mesa"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Comanda_Produto" ADD CONSTRAINT "Comanda_Produto_produto_id_fkey" FOREIGN KEY ("produto_id") REFERENCES "Produto"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Comanda_Produto" ADD CONSTRAINT "Comanda_Produto_comanda_id_fkey" FOREIGN KEY ("comanda_id") REFERENCES "Comanda"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ComandaToProduto" ADD CONSTRAINT "_ComandaToProduto_A_fkey" FOREIGN KEY ("A") REFERENCES "Comanda"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ComandaToProduto" ADD CONSTRAINT "_ComandaToProduto_B_fkey" FOREIGN KEY ("B") REFERENCES "Produto"("id") ON DELETE CASCADE ON UPDATE CASCADE;
