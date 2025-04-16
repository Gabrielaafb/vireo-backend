import { Router } from "express";
import {
  getAllUsers,
  getUserById,
  registerUser,
  loginUser,
} from "../../src/controllers/users.controller.js";

const router = Router();

router.get("/", getAllUsers);
router.get("/:id", getUserById);


router.post("/register", registerUser);
router.post("/login", loginUser);

export default router;
