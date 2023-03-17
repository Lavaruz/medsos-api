module.exports = (sequelize, DataTypes) => {
  const Post = sequelize.define(
    "Post",
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        primaryKey: true,
        unique: true,
      },
      content: DataTypes.TEXT,
      img: {
        type: DataTypes.STRING,
        defaultValue: "",
      },
    },
    {
      timestamps: false,
    }
  );
  return Post;
};
