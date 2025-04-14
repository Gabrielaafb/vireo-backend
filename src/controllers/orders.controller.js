import { Order } from "../models/order.model.js";

export const getOrders = async (req, res) => {
  try {
    const orders = await Order.findAll();
    res.json(orders);
  } catch (error) {
    res.status(500).json({ message: "Error al obtener pedidos" });
  }
};