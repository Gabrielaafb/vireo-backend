import { sequelize } from "../../config/bd/conection.db.js";
import { DataTypes } from "sequelize";
import User from "./user.model.js";
import Category from "./category.model.js";

const Publication = sequelize.define("publication", {
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  price: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  image: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  sold: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
});

// Relaciones
Publication.belongsTo(User, { foreignKey: "user_id", onDelete: "CASCADE" });
Publication.belongsTo(Category, { foreignKey: "category_id", onDelete: "CASCADE" });

export default Publication;
