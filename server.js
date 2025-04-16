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

// ✅ Configuración de CORS para permitir conexión con Netlify
const corsOptions = {
  origin: "*", // Puedes usar: "https://marketvireo.netlify.app"
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"],
};

app.use(cors(corsOptions));
app.use(morgan("dev"));
app.use(express.json());


app.get("/", (req, res) => {
  res.send("🌿 Backend Vireo corriendo correctamente 🚀");
});


app.use("/api/publications", publicationRoutes);
app.use("/api/users", userRoutes);


const startServer = async () => {
  try {
    await sequelize.authenticate();
    console.log("Conectado a la base de datos PostgreSQL ✔");

    await sequelize.sync({ alter: true });

    app.listen(PORT, () => {
      console.log(`Servidor corriendo en http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error("Error al conectar con la base de datos:", error);
  }
};

startServer();

