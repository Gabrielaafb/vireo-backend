import jwt from "jsonwebtoken";
import { User } from "../models/user.model.js";

export const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ where: { email } });
    if (!user || user.password !== password) {
      return res.status(401).json({ message: "Credenciales inválidas" });
    }
    const token = jwt.sign({ id: user.user_id }, "secreto", { expiresIn: "1d" });
    res.json({ token, user });
  } catch (error) {
    res.status(500).json({ message: "Error al iniciar sesión" });
  }
};