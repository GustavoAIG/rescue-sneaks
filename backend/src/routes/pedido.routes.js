import { Router } from "express";
import {
    getPedidos,
    getPedidoById,
    createPedido,
    updatePedido,
    deletePedido,
} from "../controllers/pedido.controller.js";

const router = Router();

// Listar todos los pedidos
router.get("/", getPedidos);

// Obtener pedido por ID
router.get("/:id", getPedidoById);

// Crear pedido
router.post("/", createPedido);

// Actualizar pedido
router.put("/:id", updatePedido);

// Eliminar pedido
router.delete("/:id", deletePedido);

export default router;
