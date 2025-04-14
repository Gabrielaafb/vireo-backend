import { sequelize } from "../../config/bd/conection.db.js";
import { DataTypes } from "sequelize";
import User from "./user.model.js";
import Publication from "./publication.model.js";

const Comment = sequelize.define("comment", {
  comment: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

Comment.belongsTo(User, { foreignKey: "user_id", onDelete: "CASCADE" });
Comment.belongsTo(Publication, { foreignKey: "publication_id", onDelete: "CASCADE" });

export default Comment;


