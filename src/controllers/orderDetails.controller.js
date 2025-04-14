import { OrderDetail } from "../models/order_detail.model.js";

export const getOrderDetails = async (req, res) => {
  try {
    const details = await OrderDetail.findAll();
    res.json(details);
  } catch (error) {
    res.status(500).json({ message: "Error al obtener detalles del pedido" });
  }
};