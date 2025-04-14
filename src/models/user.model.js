import { DataTypes } from "sequelize";
import { sequelize } from "../../config/bd/conection.db.js";

const User = sequelize.define("user", {
  id: {
    type: DataTypes.BIGINT,
    primaryKey: true,
    autoIncrement: true,
  },
  email: {
    type: DataTypes.STRING,
    unique: true,
  },
  password: DataTypes.STRING,
  name: DataTypes.STRING,
  image: DataTypes.STRING,
}, {
  tableName: "users",
  timestamps: true,
  createdAt: "created_at",
  updatedAt: "updated_at",
});

export default User;


