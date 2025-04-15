export const createPublication = async (req, res) => {
  try {
    const { title, description, price, category_id, user_id } = req.body;
    const image = req.file?.path; // ✅ Aquí llega la URL desde Cloudinary

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
