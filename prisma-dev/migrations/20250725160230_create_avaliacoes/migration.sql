-- CreateTable
CREATE TABLE "Avaliacoes" (
    "id" UUID NOT NULL,
    "nome" TEXT NOT NULL,
    "sobrenome" TEXT NOT NULL,
    "avaliado" INTEGER NOT NULL,
    "mensagem" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Avaliacoes_pkey" PRIMARY KEY ("id")
);
