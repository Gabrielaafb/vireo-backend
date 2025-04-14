import { sequelize } from "../../config/bd/conection.db.js";
import { DataTypes } from "sequelize";

const Category = sequelize.define("category", {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

export default Category;
