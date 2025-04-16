import express from "express";
import morgan from "morgan";
import cors from "cors";
import dotenv from "dotenv";
import { sequelize } from "./config/bd/conection.db.js";
import publicationRoutes from "./config/routes/publications.routes.js";
import userRoutes from "./config/routes/users.routes.js";
import Category from "./src/models/category.model.js"; 

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;


const corsOptions = {
  origin: "*", // o: "https://marketvireo.netlify.app"
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

   
    const categoriasBase = [
      { id: 1, name: "Suplementos" },
      { id: 2, name: "Infusiones" },
      { id: 3, name: "Aromaterapia" },
      { id: 4, name: "Cosmetica" },
      { id: 5, name: "Suplementos" },
      { id: 6, name: "Otros" },
    ];

    await Promise.all(
      categoriasBase.map(async (cat) => {
        const existente = await Category.findByPk(cat.id);
        if (!existente) {
          await Category.create(cat);
          console.log(`✔️ Categoría creada: ${cat.name}`);
        }
      })
    );

    app.listen(PORT, () => {
      console.log(`Servidor corriendo en http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error("Error al conectar con la base de datos:", error);
  }
};

startServer();
