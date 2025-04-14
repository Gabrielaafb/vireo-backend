import { Router } from "express";
import { getCommentsByPublication, createComment, deleteComment } from "../controllers/comment.controller.js";

const router = Router();

router.get("/:publicationId", getCommentsByPublication);
router.post("/", createComment);
router.delete("/:commentId", deleteComment);

export default router;
