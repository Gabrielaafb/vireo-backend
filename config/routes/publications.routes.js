import { Router } from "express";
import {
  getPublications,
  createPublication
} from "../../src/controllers/publications.controller.js";

const router = Router();

router.get("/", getPublications);
router.post("/", createPublication);

export default router;
