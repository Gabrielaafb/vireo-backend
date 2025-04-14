import Publication from "../models/publication.model.js";

export const getPublications = async (req, res) => {
  try {
    const publicaciones = await Publication.findAll();
    res.json(publicaciones);
  } catch (error) {
    res.status(500).json({ message: "Error al obtener publicaciones" });
  }
};

export const createPublication = async (req, res) => {
  try {
    const { title, description, price, image, category_id, user_id } = req.body;

    const nuevaPublicacion = await Publication.create({
      title,
      description,
      price,
      image,
      category_id,
      user_id,
    });

    res.status(201).json(nuevaPublicacion);
  } catch (error) {
    console.error("🛑 Error al crear publicación:", error);
    res.status(500).json({ message: "Error interno al crear publicación" });
  }
};
