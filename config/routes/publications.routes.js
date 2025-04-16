import { Router } from "express";
import {
  getPublications,
  createPublication,
  getPublicationById,
  deletePublication 
} from "../../src/controllers/publications.controller.js";
import { upload } from "../cloudinary/cloudinary.js";

const router = Router();


router.get("/", getPublications);


router.get("/:id", getPublicationById);

router.post("/", upload.single("image"), createPublication);

router.delete("/:id", deletePublication); 

export default router;
