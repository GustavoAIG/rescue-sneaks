import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import clienteRoutes from "./routes/cliente.routes.js";
import calzadosRoutes from "./routes/calzado.routes.js";
import pedidosRoutes from "./routes/pedido.routes.js";

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

// Rutas principales
app.use("/api/clientes", clienteRoutes);
app.use("/api/calzados", calzadosRoutes);
app.use("/api/pedidos", pedidosRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Servidor corriendo en puerto ${PORT}`));
