# 🧼 Rescue Sneaks - Backend

Sistema backend para **Rescue Sneaks**, un servicio de restauración y limpieza de calzado deportivo.  
Desarrollado con **Node.js**, **Express**, **Prisma ORM** y **PostgreSQL**.

---

## 🚀 Tecnologías utilizadas

- **Node.js** – entorno de ejecución
- **Express.js** – framework para el servidor
- **Prisma ORM** – manejo de base de datos
- **PostgreSQL** – base de datos relacional
- **Cors y dotenv** – configuración del entorno
- **Postman** – pruebas de API

---

## ⚙️ Configuración del entorno

### 1️⃣ Clonar el repositorio

```bash
git clone https://github.com/GustavoAIG/rescue-sneaks.git
cd rescue-sneaks
```

### 2️⃣ Instalar dependencias

```bash
npm install
```

### 3️⃣ Crear el archivo .env

### 4️⃣ Ejecutar las migraciones y generar el cliente Prisma

```bash
npx prisma migrate dev --name init
npx prisma generate
```

---

🔌 Endpoints disponibles

👤 Clientes
| Método | Endpoint            | Descripción               |
| ------ | ------------------- | ------------------------- |
| GET    | `/api/clientes`     | Lista todos los clientes  |
| GET    | `/api/clientes/:id` | Obtiene un cliente por ID |
| POST   | `/api/clientes`     | Crea un nuevo cliente     |
| PUT    | `/api/clientes/:id` | Actualiza un cliente      |
| DELETE | `/api/clientes/:id` | Elimina un cliente        |

👟 Calzados
| Método | Endpoint            | Descripción               |
| ------ | ------------------- | ------------------------- |
| GET    | `/api/calzados`     | Lista todos los calzados  |
| GET    | `/api/calzados/:id` | Obtiene un calzado por ID |
| POST   | `/api/calzados`     | Crea un nuevo calzado     |
| PUT    | `/api/calzados/:id` | Actualiza un calzado      |
| DELETE | `/api/calzados/:id` | Elimina un calzado        |

📦 Pedidos
| Método | Endpoint           | Descripción              |
| ------ | ------------------ | ------------------------ |
| GET    | `/api/pedidos`     | Lista todos los pedidos  |
| GET    | `/api/pedidos/:id` | Obtiene un pedido por ID |
| POST   | `/api/pedidos`     | Crea un nuevo pedido     |
| PUT    | `/api/pedidos/:id` | Actualiza un pedido      |
| DELETE | `/api/pedidos/:id` | Elimina un pedido        |

---

🧪 Pruebas con Postman

```bash
http://localhost:3000/api/clientes
http://localhost:3000/api/calzados
http://localhost:3000/api/pedidos
```
