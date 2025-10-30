import { Router } from "express";
import {
    getCalzados,
    getCalzadoById,
    createCalzado,
    updateCalzado,
    deleteCalzado,
} from "../controllers/calzado.controller.js";

const router = Router();

// Listar todos los calzados
router.get("/", getCalzados);

// Obtener un calzado por ID
router.get("/:id", getCalzadoById);

// Crear un calzado
router.post("/", createCalzado);

// Actualizar un calzado
router.put("/:id", updateCalzado);

// Eliminar un calzado
router.delete("/:id", deleteCalzado);

export default router;
