import express from "express";
import morgan from "morgan";
import cors from "cors";
import dotenv from "dotenv";
import { sequelize } from "./config/bd/conection.db.js";
import publicationRoutes from "./config/routes/publications.routes.js";
import userRoutes from "./config/routes/users.routes.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middlewares
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());

// Ruta de prueba para verificar que está funcionando
app.get("/api", (req, res) => {
  res.send("API funcionando correctamente ✅");
});

// Rutas principales
app.use("/api/publications", publicationRoutes);
app.use("/api/users", userRoutes);

// Iniciar servidor (Render lo detectará automáticamente)
const startServer = async () => {
  try {
    await sequelize.authenticate();
    console.log("Conectado a la base de datos PostgreSQL ✔");

    app.listen(PORT, () => {
      console.log(`Servidor corriendo en http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error("Error al conectar con la base de datos:", error);
  }
};

startServer();
