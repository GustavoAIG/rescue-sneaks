import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

// Obtener todos los clientes
export const getClientes = async (req, res) => {
    try {
        const clientes = await prisma.cliente.findMany();
        res.json(clientes);
    } catch (error) {
        res.status(500).json({ error: "Error al obtener los clientes" });
    }
};

// Crear un nuevo cliente
export const createCliente = async (req, res) => {
    try {
        const { nombre, telefono, email } = req.body;

        const nuevoCliente = await prisma.cliente.create({
            data: { nombre, telefono, email },
        });

        res.status(201).json(nuevoCliente);
    } catch (error) {
        res.status(500).json({ error: "Error al crear el cliente" });
    }
};

// Obtener un cliente por ID
export const getClienteById = async (req, res) => {
    try {
        const { id } = req.params;
        const cliente = await prisma.cliente.findUnique({
            where: { id: parseInt(id) },
        });
        if (!cliente) return res.status(404).json({ error: "Cliente no encontrado" });
        res.json(cliente);
    } catch (error) {
        res.status(500).json({ error: "Error al obtener el cliente" });
    }
};

// Actualizar un cliente
export const updateCliente = async (req, res) => {
    try {
        const { id } = req.params;
        const { nombre, telefono, email } = req.body;

        const clienteActualizado = await prisma.cliente.update({
            where: { id: parseInt(id) },
            data: { nombre, telefono, email },
        });

        res.json(clienteActualizado);
    } catch (error) {
        res.status(500).json({ error: "Error al actualizar el cliente" });
    }
};

// Eliminar un cliente
export const deleteCliente = async (req, res) => {
    try {
        const { id } = req.params;
        await prisma.cliente.delete({ where: { id: parseInt(id) } });
        res.json({ message: "Cliente eliminado correctamente" });
    } catch (error) {
        res.status(500).json({ error: "Error al eliminar el cliente" });
    }
};
