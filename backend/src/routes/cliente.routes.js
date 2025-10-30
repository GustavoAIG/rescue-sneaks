import { Router } from "express";
import {
    getClientes,
    getClienteById,
    createCliente,
    updateCliente,
    deleteCliente,
} from "../controllers/cliente.controller.js";

const router = Router();

// Obtener todos los clientes
router.get("/", getClientes);

// Obtener un cliente por ID
router.get("/:id", getClienteById);

// Crear un nuevo cliente
router.post("/", createCliente);

// Actualizar un cliente
router.put("/:id", updateCliente);

// Eliminar un cliente
router.delete("/:id", deleteCliente);

export default router;
