import { Router } from "express";
import { getPublications, createPublication } from "../../src/controllers/publications.controller.js";
import { upload } from "../cloudinary/cloudinary"; 
const router = Router();

router.get("/", getPublications);
router.post("/", upload.single("image"), createPublication); 

export default router;
