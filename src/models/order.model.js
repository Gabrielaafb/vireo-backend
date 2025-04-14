import { sequelize } from "../../config/bd/conection.db.js";
import { DataTypes } from "sequelize";
import User from "./user.model.js";

const Order = sequelize.define("order", {
  state: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
});

Order.belongsTo(User, { foreignKey: "user_id", onDelete: "CASCADE" });

export default Order;
