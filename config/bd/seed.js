import { pool } from "./conection.db.js";

const seed = async () => {
  await pool.query("DELETE FROM posts");
  await pool.query("DELETE FROM users");

  await pool.query(`
    INSERT INTO users (nombre, email, password)
    VALUES 
      ('Sebastián', 'sebastian@vireo.cl', '1234'),
      ('Gaby', 'gaby@vireo.cl', '5678')
  `);

  await pool.query(`
    INSERT INTO posts (titulo, descripcion, precio, categoria, imagen, user_id)
    VALUES 
      ('Aceite de Lavanda', 'Aceite relajante', 5000, 'Aromaterapia', 'https://...', 1)
  `);

  console.log("🌱 Base de datos sembrada");
  process.exit();
};

seed();
