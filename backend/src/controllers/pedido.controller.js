import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

// Obtener todos los pedidos
export const getPedidos = async (req, res) => {
    try {
        const pedidos = await prisma.pedido.findMany({
            include: {
                cliente: true,
                calzado: true,
            },
        });
        res.json(pedidos);
    } catch (error) {
        res.status(500).json({ error: "Error al obtener pedidos" });
    }
};

// Obtener pedido por ID
export const getPedidoById = async (req, res) => {
    const { id } = req.params;
    try {
        const pedido = await prisma.pedido.findUnique({
            where: { id: parseInt(id) },
            include: {
                cliente: true,
                calzado: true,
            },
        });
        if (!pedido) return res.status(404).json({ message: "Pedido no encontrado" });
        res.json(pedido);
    } catch (error) {
        res.status(500).json({ error: "Error al obtener pedido" });
    }
};

// Crear pedido
export const createPedido = async (req, res) => {
    const { clienteId, calzadoId, servicio, estado, fechaEntrega } = req.body;
    try {
        const nuevoPedido = await prisma.pedido.create({
            data: {
                clienteId: parseInt(clienteId),
                calzadoId: parseInt(calzadoId),
                servicio,
                estado,
                fechaEntrega: fechaEntrega ? new Date(fechaEntrega) : null,
            },
            include: {
                cliente: true,
                calzado: true,
            },
        });
        res.json(nuevoPedido);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Error al crear pedido" });
    }
};

// Actualizar pedido
export const updatePedido = async (req, res) => {
    const { id } = req.params;
    const { clienteId, calzadoId, servicio, estado, fechaEntrega } = req.body;
    try {
        const pedidoActualizado = await prisma.pedido.update({
            where: { id: parseInt(id) },
            data: {
                clienteId: parseInt(clienteId),
                calzadoId: parseInt(calzadoId),
                servicio,
                estado,
                fechaEntrega: fechaEntrega ? new Date(fechaEntrega) : null,
            },
            include: {
                cliente: true,
                calzado: true,
            },
        });
        res.json(pedidoActualizado);
    } catch (error) {
        res.status(500).json({ error: "Error al actualizar pedido" });
    }
};

// Eliminar pedido
export const deletePedido = async (req, res) => {
    const { id } = req.params;
    try {
        await prisma.pedido.delete({
            where: { id: parseInt(id) },
        });
        res.json({ message: "Pedido eliminado correctamente" });
    } catch (error) {
        res.status(500).json({ error: "Error al eliminar pedido" });
    }
};
