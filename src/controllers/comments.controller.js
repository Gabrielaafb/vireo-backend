import { Comment } from "../models/comment.model.js";

export const getCommentsByPublication = async (req, res) => {
  const { publication_id } = req.params;
  try {
    const comments = await Comment.findAll({ where: { publication_id } });
    res.json(comments);
  } catch (error) {
    res.status(500).json({ message: "Error al obtener comentarios" });
  }
};

export const createComment = async (req, res) => {
  const { publication_id, user_id, comment } = req.body;
  try {
    const newComment = await Comment.create({ publication_id, user_id, comment });
    res.status(201).json(newComment);
  } catch (error) {
    res.status(500).json({ message: "Error al crear comentario" });
  }
};
