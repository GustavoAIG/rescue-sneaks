import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

// Obtener todos los calzados
export const getCalzados = async (req, res) => {
    try {
        const calzados = await prisma.calzado.findMany();
        res.json(calzados);
    } catch (error) {
        res.status(500).json({ error: "Error al obtener calzados" });
    }
};

// Obtener calzado por ID
export const getCalzadoById = async (req, res) => {
    const { id } = req.params;
    try {
        const calzado = await prisma.calzado.findUnique({
            where: { id: parseInt(id) },
        });
        if (!calzado) return res.status(404).json({ message: "Calzado no encontrado" });
        res.json(calzado);
    } catch (error) {
        res.status(500).json({ error: "Error al obtener calzado" });
    }
};

// Crear calzado
export const createCalzado = async (req, res) => {
    const { codigo, marca, modelo, talla, estado } = req.body;
    try {
        const nuevoCalzado = await prisma.calzado.create({
            data: { codigo, marca, modelo, talla, estado },
        });
        res.json(nuevoCalzado);
    } catch (error) {
        res.status(500).json({ error: "Error al crear calzado" });
    }
};

// Actualizar calzado
export const updateCalzado = async (req, res) => {
    const { id } = req.params;
    const { codigo, marca, modelo, talla, estado } = req.body;
    try {
        const calzadoActualizado = await prisma.calzado.update({
            where: { id: parseInt(id) },
            data: { codigo, marca, modelo, talla, estado },
        });
        res.json(calzadoActualizado);
    } catch (error) {
        res.status(500).json({ error: "Error al actualizar calzado" });
    }
};

// Eliminar calzado
export const deleteCalzado = async (req, res) => {
    const { id } = req.params;
    try {
        await prisma.calzado.delete({
            where: { id: parseInt(id) },
        });
        res.json({ message: "Calzado eliminado correctamente" });
    } catch (error) {
        res.status(500).json({ error: "Error al eliminar calzado" });
    }
};
