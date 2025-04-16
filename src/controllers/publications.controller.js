import Publication from "../models/publication.model.js";


export const getPublications = async (req, res) => {
  try {
    const publicaciones = await Publication.findAll();
    res.status(200).json(publicaciones);
  } catch (error) {
    console.error("🛑 Error al obtener publicaciones:", error);
    res.status(500).json({ message: "Error al cargar publicaciones" });
  }
};

export const getPublicationById = async (req, res) => {
  try {
    const { id } = req.params;
    const publicacion = await Publication.findByPk(id);

    if (!publicacion) {
      return res.status(404).json({ message: "Publicación no encontrada" });
    }

    res.status(200).json(publicacion);
  } catch (error) {
    console.error("🛑 Error al obtener publicación:", error);
    res.status(500).json({ message: "Error al obtener publicación", error: error.message });
  }
};


export const createPublication = async (req, res) => {
  try {
    const { title, description, price, category_id, user_id } = req.body;
    const image = req.file?.path;

    if (!title || !description || !price || !category_id || !user_id || !image) {
      return res.status(400).json({ message: "Todos los campos son obligatorios." });
    }

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
export const deletePublication = async (req, res) => {
  try {
    const { id } = req.params;
    const eliminado = await Publication.destroy({ where: { id } });

    if (eliminado) {
      res.status(200).json({ message: "✅ Publicación eliminada con éxito" });
    } else {
      res.status(404).json({ message: "❌ Publicación no encontrada" });
    }
  } catch (error) {
    console.error("🛑 Error al eliminar publicación:", error);
    res.status(500).json({ message: "Error interno al eliminar publicación" });
  }
};
