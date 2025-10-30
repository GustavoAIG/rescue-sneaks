-- CreateTable
CREATE TABLE "Cliente" (
    "id" SERIAL NOT NULL,
    "nombre" TEXT NOT NULL,
    "telefono" TEXT NOT NULL,
    "email" TEXT NOT NULL,

    CONSTRAINT "Cliente_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Calzado" (
    "id" SERIAL NOT NULL,
    "codigo" TEXT NOT NULL,
    "marca" TEXT NOT NULL,
    "modelo" TEXT NOT NULL,
    "talla" TEXT NOT NULL,
    "estado" TEXT NOT NULL DEFAULT 'Pendiente',

    CONSTRAINT "Calzado_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Pedido" (
    "id" SERIAL NOT NULL,
    "clienteId" INTEGER NOT NULL,
    "calzadoId" INTEGER NOT NULL,
    "servicio" TEXT NOT NULL,
    "estado" TEXT NOT NULL DEFAULT 'En proceso',
    "fechaEntrega" TIMESTAMP(3),

    CONSTRAINT "Pedido_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Calzado_codigo_key" ON "Calzado"("codigo");

-- AddForeignKey
ALTER TABLE "Pedido" ADD CONSTRAINT "Pedido_clienteId_fkey" FOREIGN KEY ("clienteId") REFERENCES "Cliente"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Pedido" ADD CONSTRAINT "Pedido_calzadoId_fkey" FOREIGN KEY ("calzadoId") REFERENCES "Calzado"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
