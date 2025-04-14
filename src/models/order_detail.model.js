import { sequelize } from "../../config/bd/conection.db.js";
import { DataTypes } from "sequelize";
import Order from "./order.model.js";
import Publication from "./publication.model.js";

const OrderDetail = sequelize.define("order_detail", {
  price: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  quantity: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});

OrderDetail.belongsTo(Order, { foreignKey: "order_id", onDelete: "CASCADE" });
OrderDetail.belongsTo(Publication, { foreignKey: "publication_id", onDelete: "CASCADE" });

export default OrderDetail;
