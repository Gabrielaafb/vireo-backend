import { Router } from "express";
import { getAllUsers, getUserById } from "../../src/controllers/users.controller.js";

const router = Router();

router.get("/", getAllUsers);
router.get("/:id", getUserById);

export default router;
